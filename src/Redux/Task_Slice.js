import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  completedTasks: [],
  tasks: [],
  id: 1,
  editId: 1,
  isEdit: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // adding task to redux global store
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    // deleting task and checks if it is in completed tasks or tasks array
    deleteTask: (state, action) => {
      const taskIdToDelete = action.payload;
      
      const taskIndex = state.tasks.findIndex(
        (task) => task.taskId === taskIdToDelete
      );
      if (taskIndex !== -1) {
        state.tasks.splice(taskIndex, 1); // Remove the task from tasks
      } else {
        state.completedTasks = state.completedTasks.filter(
          (task) => task.taskId !== taskIdToDelete
        )
      }
    },
    // It changes state of isEdit and editId to modify the task in taskForm
    editTask: (state, action) => {
      state.isEdit = true;
      state.editId = action.payload;
    },
    // Setting tasks as completed and removes the task from main tasks array
    tasksCompleted: (state, action) => {
      const completedTask = state.tasks.find(
        (task) => task.taskId === action.payload
      );
      if (completedTask) {
        state.completedTasks.push(completedTask);
        state.tasks = state.tasks.filter(
          (task) => task.taskId !== action.payload
        );
      }
    },
    // Revert completed tasks to main tasks and removes the task from completed tasks array
    revertCompletedTasks: (state, action) => {
      const task = state.completedTasks.find(
        (task) => task.taskId === action.payload
      );
      if (task) {
        state.tasks.push(task);
        state.completedTasks = state.completedTasks.filter(
          (task) => task.taskId !== action.payload
        );
      }
    },
    // auto incrementing id for each task
    incrementId: (state, action) => {
      state.id = action.payload;
    },
    // complete editing the task
    completeEdit: (state, action) => {
      state.isEdit = false;
      const task = state.tasks.find((task) => task.taskId === state.editId);
      if (task) {
        task.title = action.payload.title;
        task.description = action.payload.description;
        task.dueDate = action.payload.dueDate;
        task.priority = action.payload.priority;
      }
    },
  },
});

export const {
  addTask,
  deleteTask,
  editTask,
  completeEdit,
  incrementId,
  tasksCompleted,
  revertCompletedTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
