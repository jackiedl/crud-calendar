import PostTask from "../models/PostTaskModel.js";

export const getTasks = async (req, res) => {
  try{
    const tasks = await PostTask.find();

    res.status(200).json(tasks);

  }catch (error){
    res.status(404).json({ message: error.message })
  }
}

export const createTasks = async (req, res) => {
  const task = req.body;

  const newTask = new PostTask(task);

  try{
    await newTask.save()
    
    res.status(201).json(newTask);

  }catch (error){
    res.status(409).json({ message: error.message })
  }
}

export const updateTask = async (req, res) => {
  
}

export const deleteTask = async (req, res) => {

}