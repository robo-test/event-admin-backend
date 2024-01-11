import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EventModule,
    MongooseModule.forRoot('mongodb+srv://test-user:oCzLu3FlfWL5YVft@cluster0.8qi4b3n.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
