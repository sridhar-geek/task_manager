import { useSelector } from "react-redux"
import PendingTasks from "./PendingTasks"
import CompletedTasks from "./CompletedTask";
const TaskList = () => {
const { tasks, completedTasks } = useSelector((store) => store.task);

console.log({tasks})
console.log({completedTasks})

    return (
      <div>
        {tasks.length == 0 && completedTasks.length == 0 ? (
          <h1 className="text-center m-20 text-2xl font-Geologica ">
            Add Tasks to Orgainze your work
          </h1>
        ) : (
          <>
            <div className="x-margin flex justify-between mt-4 mb-2 font-semibold">
              <h3 className="font-Geologica">Pending Tasks = {tasks.length}</h3>
              <h3 className="font-Geologica">Completed Tasks = {completedTasks.length} </h3>
            </div>
            {tasks.map((task) => (
              <div key={task.taskId}>
                <PendingTasks task={task} />
              </div>
            ))}
          </>
        )}
        {completedTasks.length > 0 && (
          <div>
          <h1 className="text-center  text-2xl font-Geologica ">
            Completed Tasks
          </h1>
              {completedTasks.map((completedTask) => (
                <div key={completedTask.taskId}>
                <CompletedTasks task={completedTask} />
              </div>
            ))}
            </div>
        )}
      </div>
    );
}

export default TaskList