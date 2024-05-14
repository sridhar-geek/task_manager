import { useSelector } from "react-redux";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

// Imports from another files
import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTask";
const TaskList = () => {
  const [sort, setSort] = useState("latest");
const [isFilterOpen, setIsFilterOpen] = useState(false)

  // retriewing data from redux store
  const { tasks, completedTasks } = useSelector((store) => store.task);

  // selecting sort option based on user actions
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  // sorting tasks function
  const sortTasks = (arr) => {
    const duplicateArr = [...arr];  // we can't directly mutate the array so we create a copy
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

  return (
    <div>
      {/* if there is no task */}
      {tasks.length == 0 && completedTasks.length == 0 ? (
        <h1 className="text-center m-20 text-2xl font-Geologica ">
          Add Tasks to Orgainze your work
        </h1>
      ) : (
        // if there is task present in redux store
        <>
          {/*  Filter and Sort section */}
          <div className=" flex justify-evenly my-5 mx-5 sm:mx-10 rounded-2xl shadow-lg shadow-primary  p-4 bg-gray-200">
            <button
              className="  text-lg sm:text-2xl font-Geologica"
              onClick={() => setIsFilterOpen(true)}
            >
              Filters
            </button>
            {/*  Open Filter drawer section on left side of screen */}
            {isFilterOpen && (
              <>
                <div className="top-0 left-0 h-full fixed p-4 shadow-xl w-[40%] md:w-[20%] shadow-gray-400 bg-white transition duration-1000 delay-200 ease-linear">
                  <button
                    className="text-2xl sm:text-4xl pl-[70%]"
                    onClick={() => setIsFilterOpen(false)}
                  >
                    <MdOutlineClose />
                  </button>
                  {/* Priority Filter */}
                  <div className="mb-10">
                    <h1 className="filter_heading">Priority Type</h1>
                    {/* priority filter items */}
                    <div className="filter_items">
                      <input type="checkbox" name="important" id="important" />
                      <label htmlFor="important">Important Only</label>
                    </div>
                    <div className="filter_items">
                      <input type="checkbox" name="normal" id="normal" />
                      <label htmlFor="normal">Moderate Only</label>
                    </div>
                    <div className="filter_items">
                      <input type="checkbox" name="low" id="low" />
                      <label htmlFor="low">Give a Try Only</label>
                    </div>
                  </div>
                  {/* Tasks Filter */}
                  <div className="mb-10">
                    <h1 className="filter_heading">Tasks</h1>
                    {/* Tasks filter items */}
                    <div className="filter_items">
                      <input type="checkbox" name="pending" id="pending" />
                      <label htmlFor="pending">Pending Tasks</label>
                    </div>
                    <div className="filter_items">
                      <input type="checkbox" name="completed" id="completed" />
                      <label htmlFor="completed">Completed Tasks</label>
                    </div>
                  </div>
                  {/* Due Date Filter */}
                  <div className="mb-10">
                    <h1 className="filter_heading">Due Date</h1>
                    {/* Due Date filter items */}
                    <div className="filter_items">
                      <input type="checkbox" name="15days" id="15days" />
                      <label htmlFor="15days">Within 15 days</label>
                    </div>
                    <div className="filter_items">
                      <input type="checkbox" name="month" id="month" />
                      <label htmlFor="month">In this month</label>
                    </div>
                    <div className="filter_items">
                      <input type="checkbox" name="3months" id="3months" />
                      <label htmlFor="3months">Within 3 months</label>
                    </div>
                    <div className="filter_items">
                      <input type="checkbox" name="9months" id="9months" />
                      <label htmlFor="9months">Within 9 months</label>
                    </div>
                  </div>
                </div>
              </>
              // Close Filter drawer
            )}
            {/* Sort section */}
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
            {/* Close Sort section */}
          </div>
          {/* Show pending and completed task numbers */}
          <div className="x-margin flex justify-between mt-4 mb-2 font-semibold">
            <h3 className="font-Geologica">Pending Tasks = {tasks.length}</h3>
            <h3 className="font-Geologica">
              Completed Tasks = {completedTasks.length}{" "}
            </h3>
          </div>
          {/* Show pending tasks */}
          {sortTasks(tasks).map((task) => (
            <div key={task.taskId}>
              <PendingTasks task={task} />
            </div>
          ))}
        </>
      )}
      {/* Check if there is any completed tasks */}
      {completedTasks.length > 0 && (
        <div>
          <h1 className="text-center  text-2xl font-Geologica ">
            Completed Tasks
          </h1>
          {/* Show completed tasks */}
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
