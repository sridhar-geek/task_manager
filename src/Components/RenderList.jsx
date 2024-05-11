import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import { useSelector } from "react-redux";

const RenderList = ({task}) => {

  return (
    <div>
      <div className="mx-5 task-list my-7 lg:mx-40 rounded-lg p-3">
        <h1 className="text-2xl font-poppins">{task.title}</h1>
        <h4 className="font-Ysabeau text-md">{task.description}</h4>
        <p className="font-poppins text-lg">
          Due Date : <span className="font-ubuntu">{task.dueDate}</span>
        </p>
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
          <p className="outline rounded-xl p-2">{task.priority}</p>
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