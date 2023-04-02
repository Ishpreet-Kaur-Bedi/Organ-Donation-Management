import express from 'express';
// import all the controllers
// fromthte frontnd we will be amking http request to the appropriate controller then controllers further connect to the models and models then further connet it to database 
// controller is the logic for each route


import { createUser, getAllUsers
, getUserInfoByID
 } from '../controllers/user.controller';

 const router = express.Router();

 router.route('/').get(getAllUsers);
 router.route('/').post(createUser);
 router.route('/:id').get(getUserInfoByID)

 export default router;