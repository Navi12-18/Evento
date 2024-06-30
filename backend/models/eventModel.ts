import mongoose, { Document, Schema } from 'mongoose';

export interface IEvent extends Document {
    title: string;
    description: string;
    date: Date;
    createdBy: mongoose.Schema.Types.ObjectId;
}

const eventSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
});

const Event = mongoose.model<IEvent>('Event', eventSchema);
export default Event;