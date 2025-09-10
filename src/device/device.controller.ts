import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { DeviceService } from "./device.service";
import { Device } from "./device.model";
import { CreateDeviceDTO } from "./dto/create-device.dto";
import { DeviceResponseDTO } from "./dto/device-response.dto";
import { plainToInstance } from "class-transformer";

@Controller('devices')
export class DeviceController {
    constructor(private readonly deviceService: DeviceService) {}

    @Post()
    create(@Body() createDeviceDTO: CreateDeviceDTO) : DeviceResponseDTO {
        const device: Device = this.deviceService.create(createDeviceDTO)
        return plainToInstance(DeviceResponseDTO, device, {
            excludeExtraneousValues: true
        })
    }
    
    @Get()
    findAll(): DeviceResponseDTO[] {
        const devices: Device[] = this.deviceService.findAll();
        return plainToInstance(DeviceResponseDTO, devices, {
            excludeExtraneousValues: true
        })
    }

    @Get(':id')
    findOne(@Param('id') id: string): DeviceResponseDTO {
        const device: Device = this.deviceService.findOne(Number(id))
        return plainToInstance(DeviceResponseDTO, device, {
            excludeExtraneousValues: true
        })
    }
    update() {
        //TODO
    }
    remove() {
        //TODO
    }
}