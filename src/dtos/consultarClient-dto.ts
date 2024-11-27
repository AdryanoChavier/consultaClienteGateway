import { IsNotEmpty, IsNumber } from 'class-validator'
export class ConsultarClienteDto{
    
@IsNotEmpty()
@IsNumber()
 id: number;
}
