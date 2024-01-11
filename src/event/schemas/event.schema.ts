import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    location: string;

    @Prop({ required: true, default: true })
    enabled: boolean;

    @Prop({ required: true })
    startDate: Date;

    @Prop({ required: true })
    endDate: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);