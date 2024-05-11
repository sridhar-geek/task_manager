import PropTypes from 'prop-types'
//Imports from another files
import TaskForm from "./Components/TaskForm"
import TaskList from "./Components/TaskList"
function App() {

  return (
<div>
  {/* Welcome Text */}
  <div className="text-center my-5">
    <h1 className="text-5xl font-signika mb-3">Task Manager</h1>
  <p >Increase your productivity with efficient and organised tasks</p>
  </div>
  <TaskForm/>
<TaskList />
</div>
  )
}

export default App
