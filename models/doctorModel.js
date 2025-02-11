 import mongoose from "mongoose";

// Define the Doctor schema with specified fields
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
 
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false // Assuming the image is optional
  },
  speciality: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
    min: [0, 'Experience cannot be negative']
  },
  about: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  slots_booked: {
    type: Object, 
    default:{},
   
  }
}, {minimize:false});

// Create the Doctor model
const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema);

export default doctorModel  
