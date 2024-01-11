import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './schemas/event.schema';
import { CreateEventDto } from './dto/create-event.dto';

import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event.name) private readonly eventModel: Model<Event>) { }


  async create(createEventDto: CreateEventDto): Promise<Event> {
    const createdEvent = new this.eventModel(createEventDto)
    return createdEvent.save()
  }

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }

  async findOne(id: number): Promise<Event | null> {
    return this.eventModel.findById(id).exec();
  }

  async update(id: number, updateEventDto: UpdateEventDto): Promise<Event | null> {
    return this.eventModel.findByIdAndUpdate(id, updateEventDto, { new: true }).exec();
  }

  async remove(id: number): Promise<Event | null> {
    return this.eventModel.findByIdAndDelete(id).exec();
  }
}
