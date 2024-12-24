
const Task = require('../models/task')

exports.createTask = async (req, res) => {
    const { name, description, dueDate } = req.body;

    try {
        // const hashedPassword = await bcrypt.hash(password, 10);
        // const user = await User.create({ username, password: hashedPassword });
        
        const userId = req.user.userId;
        console.log(name, description, dueDate, userId);
        if (!userId) res.status(401).json({message: 'no User Id'});
        const task = await Task.create({name, description, dueDate, userId});
        res.status(201).json({ message: 'Task created successfully', task });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create Task' });
    }
};


exports.getAllTask = async(req, res) => {

    const userId = req.user.userId;
    if (!userId) res.status(401).json({message: 'no User Id'});

    try {
        const tasks = await Task.find({userId});
        res.status(200).json({ tasks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get Tasks' });
    }
    
}

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { name, description, dueDate } = req.body;

    try {
        const task = await Task.findByIdAndUpdate(id, { name, description, dueDate }, { new: true });
        res.status(200).json({ message: 'Task updated successfully', task });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update Task' });
    }
};

exports.deleteTask = async (req, res) => {
    const {id} = req.params;
    console.log(id);



    try {
        const task = await Task.findByIdAndDelete(id);
        res.status(200).json({ message: 'Task deleted successfully', task });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete Task' });
    }
};
