import { Injectable, NotFoundException } from "@nestjs/common";
import { Device } from "./device.model";
import { v4 as uuidv4 } from 'uuid';
import { CreateDeviceDTO } from "./dto/create-device.dto";

@Injectable()
export class DeviceService {
    private devices: Device[] = [];
    private idCounter = 1;

    create(createDeviceDTO: CreateDeviceDTO): Device {
        const newDevice: Device = {
            id: this.idCounter++,
            name: createDeviceDTO.name,
            type: createDeviceDTO.type,
            model: createDeviceDTO.model,
            location: createDeviceDTO.location,
            status: 'offline',
            apikey: uuidv4(),
            createAt: new Date(),
            updatedAt: new Date(),
        };
        this.devices.push(newDevice);
        return newDevice;
    }
    findAll(): Device[] {
        return this.devices;
    }
    findOne(id: number): Device {
        const device = this.devices.find((d) => d.id === id);
        if(!device) {
            throw new NotFoundException(`Device with ID ${id} not found`)
        }
        return device;
    }
    update() {
        //TODO
    }
    remove() {
        //TODO
    }
}