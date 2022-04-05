import mongoose from "mongoose";

const PostEventSchema = mongoose.Schema({
  creator: String,
  title: String,
  description: String,
  start: {
    date: {type: Date},
    hour: { type: Number, min: 1, max: 12 },
    minute: { type: Number, min: 0, max: 59 }, 
    meridian: String
  },
  end: {
    date: {type: Date},
    hour: { type: Number, min: 1, max: 12 },
    minute: { type: Number, min: 0, max: 59 }, 
    meridian: String
  }
})

const PostEvent = mongoose.model("PostEvent", PostEventSchema);

export default PostEvent;