import { useSelector } from "react-redux";
import { useState } from "react";

// Imports from another files
import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTask";
const TaskList = () => {
  const [sort, setSort] = useState("latest");
  const { tasks, completedTasks } = useSelector((store) => store.task);

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const sortTasks = (arr) => {
    const duplicateArr = [...arr];
// console.log(duplicateArr)

    if (sort === "oldest") {
      return duplicateArr;
    }else if (sort === "latest") {
      return duplicateArr.reverse();
    } else if (sort === "oldDate") {
      return duplicateArr.sort((a, b) => {
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
    } else if (sort === "newDate") {
      return duplicateArr.sort((a, b) => {
        return new Date(b.dueDate) - new Date(a.dueDate);
      });
    }
  };

  // console.log(sortTasks(tasks))

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
                onChange={handleSort}
                className=" ml-3 p-1 rounded-xl focus:ring focus:border-primary outline-none bg-grauy-200"
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="oldDate">Earlier Due Date</option>
                <option value="newDate">Last Due Date</option>
              </select>
            </div>
          </div>
          <div className="x-margin flex justify-between mt-4 mb-2 font-semibold">
            <h3 className="font-Geologica">Pending Tasks = {tasks.length}</h3>
            <h3 className="font-Geologica">
              Completed Tasks = {completedTasks.length}{" "}
            </h3>
          </div>
          {sortTasks(tasks).map((task) => (
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
          {sortTasks(completedTasks).map((completedTask) => (
            <div key={completedTask.taskId}>
              <CompletedTasks task={completedTask} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
