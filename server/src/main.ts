import {NestFactory} from '@nestjs/core';
import {AppModule} from "./app.module";
import {ValidationPipe} from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors()
    app.useGlobalPipes(
        new ValidationPipe({transform: true, enableDebugMessages: true}),
    );
    await app.listen(8080);
    console.log('Server is listening on port 8080');

}

bootstrap();