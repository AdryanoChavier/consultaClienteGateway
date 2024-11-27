import { ConsultarClienteDto } from './dtos/consultarClient-dto';
export declare class AppController {
    private logger;
    private clienteAdminBackend;
    constructor();
    consultarCliente(consultarClienteDto: ConsultarClienteDto): Promise<import("rxjs").Observable<any>>;
}
