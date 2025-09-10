// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()   // 👈 root path
export class AppController {
  @Get()
  getHealth(): string {
    return 'SmartHive Device Management Service is running 🚀';
  }
}