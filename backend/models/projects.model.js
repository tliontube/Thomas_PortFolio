import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    techStack: [String],
    imageUrl: {
        type: String
    },
    liveLink: {
        type: String
    },
    repoLink: {
        type: String
    },
    timestamps: true

})

export default mongoose.model("Project",projectSchema)