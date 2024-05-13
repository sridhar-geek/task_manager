import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:1,
    editId: 1,
    isEdit: false,
    tasks: [],
    completedTasks: [],
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.taskId !== action.payload)
        },
        editTask: (state, action) => {
                state.isEdit = true
                state.editId = action.payload
        },
        tasksCompleted: (state, action) => {
            state.completedTasks.push(state.tasks.find(task => task.taskId === action.payload))
            state.tasks = state.tasks.filter((task) => task.taskId !== action.payload)
        },
        incrementId:(state, action) => {
            state.id = action.payload
        },
        completeEdit:(state, action) => {
            state.isEdit = false
            const task = state.tasks.find(task => task.taskId === state.editId) 
            if(task) {
                task.title = action.payload.title
                task.description = action.payload.description
                task.dueDate = action.payload.dueDate
                task.priority = action.payload.priority
            }

        }
    }
})

export const {
  addTask,
  deleteTask,
  editTask,
  completeEdit,
  incrementId,
  tasksCompleted,
} = taskSlice.actions;
export default taskSlice.reducer