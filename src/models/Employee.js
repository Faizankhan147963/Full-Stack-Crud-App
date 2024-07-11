import mongoose, { Schema } from "mongoose";

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { timestamps: true })

export const Employee =
    mongoose.models.Employee || mongoose.model('Employee', EmployeeSchema)

{/* const Employee=mongoose.model("Employee",EmployeeSchema);
 module.exports=Employee; */}