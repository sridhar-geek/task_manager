import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

// Imports from anthor files
import { deleteTask,revertCompletedTasks } from "../Redux/Task_Slice";

const CompletedTasks = ({ task }) => {
  const dispatch = useDispatch();

  //checking prop types
  CompletedTasks.propTypes = {
    task: PropTypes.shape({
      taskId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      dueDate: PropTypes.string,
      priority: PropTypes.string,
    }).isRequired,
  };


  return (
    <div>
      {/* Task main component */}
      <div className="x-margin task-list mb-7 rounded-lg p-3 shadow-lg shadow-green-600 bg-completed">
        <div className="flex items-center justify-between">
          <h1 className="text-lg sm:text-2xl font-poppins line-through">
            {task.title}
          </h1>
          <p className="font-poppins text-sm sm:text-xl">
            Due Date : <span className="font-ubuntu">{task.dueDate}</span>
          </p>
        </div>
        <h4 className="font-Ysabeau text-lg sm:text-xl">{task.description}</h4>
        {/* Checkbox, Priority, Edit, Delete */}
        <div className="flex justify-between">
          <div className="flex items-center text-sm sm:text-lg sm:gap-2">
            <label htmlFor="completed">Completed :</label>
            <input
              type="checkbox"
              defaultChecked
              onChange={() => {
                dispatch(revertCompletedTasks(task.taskId));
              }}
              name="complete"
              id="completed"
              className="size-4 sm:size-7 ml-1 cursor-pointer"
            />
          </div>
          <p className="font-Roboto text-sm sm:text-lg rounded-full p-1 sm:p-2 outline">
            {task.priority}
          </p>
          {/* action buttons */}
          <div className="flex gap-4 pr-5">
            <button
              className="text-lg sm:text-2xl transition duration-500  text-slate-400"
              disabled={true}
            >
              <FaEdit />{" "}
            </button>
            <button
              className="text-lg sm:text-2xl transition duration-500 hover:scale-125 hover:text-red-600"
              onClick={() => dispatch(deleteTask(task.taskId))}
            >
              <MdDeleteForever />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTasks;
