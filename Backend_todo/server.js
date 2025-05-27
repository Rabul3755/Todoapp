const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); 

let tasks = [];

let taskId = 1;
app.get('/tasks', (req, res) => {
    console.log(tasks)
    res.status(200).json(tasks);
});

app.get('/tasks/:id', (req, res) => {

    const taskExist = tasks.find(task => task.id == (req.params.id));
    if (!taskExist) {
        res.status(404).json({ error: 'Task not found' })
    }
    else {
        res.status(200).json(taskExist);
    }
});


app.post('/tasks', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    const newTask = {
        id: taskId++,
        title,
        description
    };

    tasks.push(newTask);
    res.status(201).json({ newTask, message: "task added Successfull" });
});


app.put('/tasks/:id', (req, res) => {
    const { title, description } = req.body;

    const taskExist = tasks.find(task => task.id == (req.params.id));
    if (!taskExist) {
       return res.status(404).json({ error: 'Task not found' })
    }

    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    taskExist.title = title;
    taskExist.description = description;

    res.status(200).json({ taskExist, Message: "Task updated successfull" });
});


app.delete('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    const deleted = tasks.splice(index, 1);
    res.status(200).json({ message: 'Task deleted', task: deleted[0] });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
