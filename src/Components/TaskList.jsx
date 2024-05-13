import { useSelector } from "react-redux"
import RenderList from "./RenderList"

const TaskList = () => {
const { tasks, completedTasks } = useSelector((store) => store.task);

console.log({tasks})
console.log({completedTasks})

    return (
      <div>
        {tasks.length == 0 ? (
          <h1 className="text-center m-20 text-2xl font-Geologica ">
            Add Tasks to Orgainze your work
          </h1>
        ) : (
          <>
            <div className="x-margin flex justify-between font-semibold">
              <h3>Pending Tasks = {tasks.length}</h3>
              <h3>Completed Tasks = 56</h3>
            </div>
            {tasks.map((task) => (
              <div key={task.taskId}>
                <RenderList task={task} />
              </div>
            ))}
          </>
        )}
        {/* {completedTasks.length > 0 && (
          <h1 className="text-center m-20 text-2xl font-Geologica ">
            Completed Tasks
          </h1>
        )} */}
      </div>
    );
}

export default TaskList