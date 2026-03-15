import express from 'express';
import { AddMedicine, GetMedicineById, GetMedicines, UpdateMedicine, DeleteMedicine } from '../controllers/controller.medicine.js';

const router = express.Router();

router.post('/', AddMedicine);
router.get('/', GetMedicines);
router.get('/:id', GetMedicineById);
router.put('/:id', UpdateMedicine);
router.delete('/:id', DeleteMedicine);

export default router;
