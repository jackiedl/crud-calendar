import mongoose from "mongoose";

const PostTaskSchema = mongoose.Schema({
  creator: String,
  title: String,
  description: String,
  date: {
    day: { type: Number },
    month: { type: Number },
    year: { type: Number }, 
  },
})

const PostTask = mongoose.model("PostTask", PostTaskSchema);

export default PostTask;