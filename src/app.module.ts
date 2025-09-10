// src/app.module.ts
import { Module } from '@nestjs/common';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [DeviceModule],
  controllers: [],
})
export class AppModule {}