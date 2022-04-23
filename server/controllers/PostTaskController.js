import PostTask from "../models/PostTaskModel.js";

export const getTasks = async (req, res) => {
  try{
    const events = await PostEvent.find();

    res.status(200).json(events);

  }catch (error){
    res.status(404).json({ message: error.message })
  }
}

export const createTasks = async (req, res) => {
  const event = req.body;

  const newEvent = new PostTask(event);

  try{
    await newEvent.save()
    
    res.status(201).json(newEvent);

  }catch (error){
    res.status(409).json({ message: error.message })
  }
}