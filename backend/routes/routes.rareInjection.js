import express from 'express';
import { createRareInjection, getRareInjectionById, getRareInjections, updateRareInjection, deleteRareInjection } from '../controllers/controller.rareInjection.js';

const router = express.Router();

router.post('/', createRareInjection);
router.get('/', getRareInjections);
router.get('/:id', getRareInjectionById);
router.put('/:id', updateRareInjection);
router.delete('/:id', deleteRareInjection);

export default router;
