import { Router } from 'express';
import { createEvent, getEvents } from '../controllers/eventController';
import authMiddleware from '../middleware/authMiddleware';

const router: Router = Router();

router.post('/', authMiddleware, createEvent);
router.get('/', authMiddleware, getEvents);

export default router;