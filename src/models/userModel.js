import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true,"Please enter a username"],
        unique: true,
    },
    email:{
        type: String,
        required: [true,"Please enter an email"],
        unique: true,
    },
    password:{
        type: String,
        required: [true,"Please enter a password"],
        minlength: [6,"Minimum password length is 6 characters"],
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    forgotPasswordToken:String,
    forgotPasswordExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,
});

const User= mongoose.models.users || mongoose.model('users',userSchema);

export default User;