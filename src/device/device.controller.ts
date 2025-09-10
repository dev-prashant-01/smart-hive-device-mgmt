import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { DeviceService } from "./device.service";
import { Device } from "./device.model";

@Controller('devices')
export class DeviceController {
    constructor(private readonly deviceService: DeviceService) {}

    @Post()
    create(@Body() deviceData: Partial<Device>) : Device {
        return this.deviceService.create(deviceData)
    }
    
    @Get()
    findAll(): Device[] {
        return this.deviceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Device {
        return this.deviceService.findOne(Number(id))
    }
    update() {
        //TODO
    }
    remove() {
        //TODO
    }
}