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
            <div className=" flex justify-evenly my-5 p-4 bg-gray-200">
              <h1 className="  text-lg sm:text-2xl font-Geologica ">Filters</h1>
              <div>
                <label
                  className=" text-lg sm:text-xl font-Geologica"
                  htmlFor="sortby"
                >
                  Sort By
                </label>
                <select
                  name="sortby"
                  id="sortby"
                  className=" ml-3 p-1 rounded-xl focus:ring focus:border-primary outline-none bg-grauy-200"
                >
                  <option value="none">None</option>
                  <option value="">Latest First</option>
                  <option value="">Oldest First</option>
                  <option value="">Earlier Due Date</option>
                  <option value="">Last Due Date</option>
                </select>
              </div>
            </div>
            <div className="x-margin flex justify-between mt-4 mb-2 font-semibold">
              <h3 className="font-Geologica">Pending Tasks = {tasks.length}</h3>
              <h3 className="font-Geologica">
                Completed Tasks = {completedTasks.length}{" "}
              </h3>
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