import { IsEnum, IsOptional, IsString } from "class-validator";

export class CreateDeviceDTO {
    @IsString()
    name: string;

    @IsEnum(['sensor','actuator','gateway'])
    type: string;

    @IsOptional()
    @IsString()
    model: string;

    @IsOptional()
    @IsString()
    location: string;
}