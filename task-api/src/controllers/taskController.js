const getAllTask = async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Get all task controller",
            data: [],
        });
    } catch (error) {
        next(error);
    }
};

const getTaskById = async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Get task by ID controller",
            id: requestAnimationFrame.params.id,
        });
    } catch (error) {
        next(error);
    }
};

const createTask = async (req, res, next) => {
    try {
        res.status(201).json({
            message: "Create task controller",
            receivedData: req.body,
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