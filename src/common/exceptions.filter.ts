import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const r = exception.getResponse();
      this.logger.error(`HTTP Exception: ${JSON.stringify(r)}`);
      response.status(status).json({
        ...((typeof r === 'object') ? r : { message: r }),
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else {
      this.logger.error(`Unhandled Exception: ${exception as any}`);
      response.status(500).json({
        statusCode: 500,
        message: 'Internal server error',
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
}
