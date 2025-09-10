import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDeviceDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEnum(['sensor','actuator','gateway'])
    type: 'sensor' | 'actuator' | 'gateway';

    @IsOptional()
    @IsString()
    model: string;

    @IsOptional()
    @IsString()
    location: string;
}