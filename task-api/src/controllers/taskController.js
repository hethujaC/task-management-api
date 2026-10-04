const taskService = require("../services/taskService");

const getAllTask = async (req, res, next) => {
    try {
        const tasks = await taskService.getAllTask();

        res.status(200).json({
            message: "Task retrieved successfully",
            data: tasks,
        });
    } catch (error) {
        next(error);
    }
};

const getTaskById = async (req, res, next) => {
    try {
        const task = await taskService.getTaskById(req.params.id);

        res.status(200).json({
            message: "Task retrieved successfully",
            data: task,
        });
    } catch (error) {
        next(error);
    }
};

const createTask = async (req, res, next) => {
    try {
        const task = await taskService.createTask(req.body);

        res.status(201).json({
            message: "Task created successfully",
            data: task,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllTask,
    getTaskById,
    createTask,
};