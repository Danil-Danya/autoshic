import mongoose, { Schema, model, models } from "mongoose";

const commentsSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    compiled: {
        type: Boolean,
        default: false,
    }
})

mongoose.models = {}

export const comments = mongoose.models.Comments || mongoose.model('Comments', commentsSchema);