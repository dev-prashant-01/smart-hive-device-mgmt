// src/app.module.ts
import { Module } from '@nestjs/common';
import { DeviceModule } from './device/device.module';
import { AppController } from './app.controller';

@Module({
  imports: [DeviceModule],
  controllers: [AppController],   // 👈 must be here
})
export class AppModule {}