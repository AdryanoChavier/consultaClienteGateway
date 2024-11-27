"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./filters/http-exception.filter");
const moment_timezone_1 = require("moment-timezone");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new http_exception_filter_1.AllExceptionsFilter());
    Date.prototype.toJSON = function () {
        return (0, moment_timezone_1.default)(this).tz('America/São_Paulo').format('YYYY-MM-DD HH:mm:ss.SSS');
    };
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map