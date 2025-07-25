import mongoose from "mongoose";

const skillItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String
    }
});

const skillsSchema = new mongoose.Schema({
    catagory: {
        type: String,
        required: true
    },
    items: [skillItemSchema]
})

export default mongoose.model("skills", skillsSchema);