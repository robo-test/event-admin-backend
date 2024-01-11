import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './schemas/event.schema';
import { CreateEventDto } from './dto/create-event.dto';

import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event.name) private readonly eventModel: Model<Event>) { }


  async create(createEventDto: CreateEventDto) {
    const createdEvent = new this.eventModel(createEventDto)
    return createdEvent.save()
  }

  async findAll():Promise<Event[]> {
    return this.eventModel.find().exec();
  }

  async findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  async remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
