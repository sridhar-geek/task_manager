import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const RenderList = () => {
  return (
    <div>
      <div className="mx-5 task-list my-7 lg:mx-40 bg-list rounded-lg p-3">
        <h1 className="text-2xl font-poppins">This is sample Title</h1>
        <h4 className="font-Ysabeau text-md">
          This is sample description. usually description is very long so i am
          writing is big text.This is sample description. usually description is
          very long so i am writing is big text.This is sample description.
          usually description is very long so i am writing is big text.This is
          sample description. usually description is very long so i am writing
          is big text.
        </h4>
        <p className="font-poppins text-lg">
          Due Date : <span className="font-ubuntu">12-12-2022</span>
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
          <p className="outline rounded-xl p-2">Important</p>
          {/* action buttons */}
          <div className="flex gap-4 pr-5">
            <button className="task-btn hover:text-blue-500 "><FaEdit /> </button>
            <button className="task-btn hover:text-red-600 "><MdDeleteForever /> </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenderList