import { Expose } from "class-transformer";

export class DeviceResponseDTO {

    @Expose()
    id: number

    @Expose()
    name: string

    @Expose()
    type: 'sensor' | 'actuator' | 'gateway'

    @Expose()
    model?: string

    @Expose()
    location?: string;

    @Expose()
    status: 'online' | 'offline';

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;
}