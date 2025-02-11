import express from 'express';
import { registerUser, loginUser, bookAppointment, listAppointment, cancelAppointment} from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';

const userRouter = express();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/book-appointment',authUser, bookAppointment)
userRouter.get('/appointments',authUser, listAppointment)
userRouter.post('/cancel-appointment',authUser,cancelAppointment)


export default userRouter;