import express from 'express';
import { createHospital,deleteHospital,getAllHospitals,getHospitalDetail,updateHospital } from '../controllers/hospital.controller';

const router = express.Router();

router.route('/').get(getAllHospitals);
router.route('/:id').get(getHospitalDetail);
router.route('/').post(createHospital);
router.route('/:id').patch(updateHospital);
router.route('/').delete(deleteHospital);

export default router;
