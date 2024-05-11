import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";

const RenderList = ({task}) => {
  RenderList.propTypes = {
    task: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      dueDate: PropTypes.string,
      priority: PropTypes.string,
    }).isRequired,
  };
  return (
    <div>
      <div className= "mx-5 task-list my-7 lg:mx-40 rounded-lg p-3 bg-list">
        <div className="flex items-center justify-between">
        <h1 className="text-2xl font-poppins">{task.title}</h1>
        <p className="font-poppins text-md">
          Due Date : <span className="font-ubuntu">{task.dueDate}</span>
        </p>

        </div>
        <h4 className="font-Ysabeau text-md">{task.description}</h4>
        {/* Checkbox, Priority, Edit, Delete */}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <label htmlFor="completed">Completed :</label>
            <input
              type="checkbox"
              name="complete"
              id="completed"
              className="size-7 ml-3 cursor-pointer"
            />
          </div>
          <p className={`font-Roboto rounded-full p-2 ${task.priority === "Important" ? "bg-important" : `${task.priority === "Moderate" ? "bg-moderate" : "bg-low"}`}`}>{task.priority}</p>
          {/* action buttons */}
          <div className="flex gap-4 pr-5">
            <button className="task-btn hover:text-blue-500 ">
              <FaEdit />{" "}
            </button>
            <button className="task-btn hover:text-red-600 ">
              <MdDeleteForever />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default RenderList