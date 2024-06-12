import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true
    },
    avatar:{
        type: String
    },
    gender:{
        type: String,
        required: true,
        enum: ["male", "female"]
    },
},{
    timestamps: true // this will automatically create a timestamp when a new user is created
});

const User = mongoose.model('User', userSchema); 
export default User;