import { Body, Controller, Get, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConsultarClienteDto } from './dtos/consultarClient-dto';

@Controller()
export class AppController {
      private logger = new Logger(AppController.name)
      private clienteAdminBackend: ClientProxy

      constructor() {
      this.clienteAdminBackend = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:123456@localhost:5672/arquivoprojetormq'],
      queue: 'admin-backend'

      },
    })
  }
  
  @Post('consulta')
  @UsePipes(ValidationPipe)
  async consultarCliente(@Body() consultarClienteDto: ConsultarClienteDto){
  return await this.clienteAdminBackend.emit('consulta', consultarClienteDto)
  }
}