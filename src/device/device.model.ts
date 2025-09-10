//At first create model 

export class Device {
    id: number;
    name: string;
    type: 'sensor'|'actuator'|'gateway';
    model?: string;
    location?: string;
    status: 'online'|'offline';
    apikey: string;
    createAt: Date;
    updatedAt: Date;
}