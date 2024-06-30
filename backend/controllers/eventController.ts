import { Request, Response } from 'express';
import Event, { IEvent } from '../models/eventModel';

const createEvent = async (req: Request, res: Response) => {
    const { title, description, date } = req.body;
    try {
        const event = new Event({
            title,
            description,
            date,
            createdBy: req.user.id,
        });

        await event.save();
        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getEvents = async (req: Request, res: Response) => {
    try {
        const events = await Event.find({ createdBy: req.user.id });
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export { createEvent, getEvents };