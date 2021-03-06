import * as mongoose from 'mongoose'

const  Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    dateCreated: {
        type:Date,
        default:Date.now        
    }
})