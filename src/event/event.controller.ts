import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) { }

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    try {
      return await this.eventService.create(createEventDto);
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.eventService.findAll();
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const event = await this.eventService.findOne(id);
      if (!event) {
        throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
      }
      return event;
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateEventDto: UpdateEventDto) {
    try {
      const updatedEvent = await this.eventService.update(id, updateEventDto);
      if (!updatedEvent) {
        throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
      }
      return updatedEvent;
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return this.eventService.update(id, updateEventDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      const removedEvent = await this.eventService.remove(id);

      if (!removedEvent) {
        throw new HttpException('Event not found', HttpStatus.NOT_FOUND);
      }
      return removedEvent;
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
