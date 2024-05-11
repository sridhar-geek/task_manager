import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:1,
    tasks: [],
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        incrementId:(state, action) => {
            state.id = action.payload
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        editTask: (state, action) => {
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return action.payload
                }
                return task
            })
        }
    }
})

export const { incrementId, addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer