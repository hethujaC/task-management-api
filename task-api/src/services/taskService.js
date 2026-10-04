const getAllTask = async () => {
    return [];
};

const getTaskById = async (id) => {
    return {
        id: id,
        title: "Sample Task",
        completed: false,
    };
};

const createTask = async (taskData) => {
    if (!taskData.title || !taskData.title.trim()) {
        throw new Error("Task title is required");
    }

    return {
        ...taskData,
        title: taskData.title.trim(),
    };
};

module.exports = {
    getAllTask,
    getTaskById,
    createTask
};