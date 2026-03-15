import express from 'express';
import { createEmergencyRequest, deleteEmergencyRequest, getEmergencyRequestById, getEmergencyRequests, updateEmergencyRequest } from '../controllers/controller.emergencyRequest.js';

const router = express.Router();

router.post('/', createEmergencyRequest);
router.get('/', getEmergencyRequests);
router.get('/:id', getEmergencyRequestById);
router.put('/:id', updateEmergencyRequest);
router.delete('/:id', deleteEmergencyRequest);

export default router;
