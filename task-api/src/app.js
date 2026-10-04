const express = require("express");
const taskController = require("./controllers/taskController");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "Task API is running",
    });
});

app.get("/api/tasks", taskController.getAllTask);
app.get("/api/tasks/:id", taskController.getTaskById);
app.post("/api/tasks", taskController.createTask);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});