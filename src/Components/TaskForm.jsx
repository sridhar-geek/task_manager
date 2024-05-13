import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Imports from another files
import { addTask, incrementId,completeEdit } from "../Redux/Task_Slice";

const TaskForm = () => {

  // retreiwing data from redux store
const { id, tasks, isEdit, editId } = useSelector(
  (store) => store.task
);

  const dispatch = useDispatch()
  const [selectedPriority, setSelectedPriority] = useState("");
  const [newTask, setNewTask] = useState({
    taskId: id,
    title: "",
    description: "",
    dueDate: "",
    priority: "",
  });

  useEffect(()=> {
    if(isEdit) {
      const taskToUpdate = tasks.find(task => task.taskId === editId)
      setNewTask({
        taskId: taskToUpdate.taskId,
        title: taskToUpdate.title,
        description: taskToUpdate.description,
        dueDate: taskToUpdate.dueDate,
        priority: taskToUpdate.priority
      })
    }
    
  },[isEdit, editId])
  // Ensuring Correct due date is entered 
  const handleDueDateChange = (e) => {
    const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
    const oneYearFromToday = new Date(today).setFullYear(
      new Date().getFullYear() + 1
    );
    const selectedDate = new Date(e.target.value);
    // Validate the selected date: minimum today, maximum 1 year ahead
    if (selectedDate >= new Date(today) && selectedDate <= oneYearFromToday)
      setNewTask({ ...newTask, dueDate: e.target.value });
    else
    alert(
  "Invalid due date: Please select a date between today and one year from now."
);
};


// Adding task to redux global store
const addNewTask = (e) => {
  // if(newTask.description.length < 29) return alert("Description must be at least 30 characters long.");
  e.preventDefault();
  dispatch(addTask(newTask));
  dispatch(incrementId(id + 1));

  setNewTask({
    taskId: id+1,
    title: "",
      description: "",
      dueDate: "",
      priority: "",
    });

  };
  const updateTask = (e) => {
    e.preventDefault()
    dispatch(completeEdit(newTask))
    setNewTask({
      taskId:id+1,
      title:"",
      description:"",
      dueDate:"",
      priority:"",
    })
  }

  // setting priority to task object or state
  const handleClick = (importance) => {
    setSelectedPriority(importance);
    setNewTask({ ...newTask, priority: importance});
  };

  return (
    <div className="x-margin mt-14 ">
      <form onSubmit={isEdit ? updateTask: addNewTask}>
        {/* Starting a grid layout */}
        <div className="grid grid-cols-4  gap-3">
          {/* First grid column */}
          <div className="col-span-3">
            <input
              type="text"
              value={newTask.title}
              minLength={4}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              required
              placeholder="Tittle"
              className="input-field font-bold text-xl"
            />
          </div>
          <div className="col-span-1">
            <input
              type="date"
              value={newTask.dueDate}
              onChange={handleDueDateChange}
              required
              placeholder="Date"
              className="input-field font-semibold"
              min={new Date().toISOString().slice(0, 10)} //Setting Minimum date: today
            />{" "}
          </div>
          {/* Second grid column */}
          <div className="col-span-4">
            <textarea
              value={newTask.description}
              minLength={30}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              required
              placeholder="Description"
              rows={3}
              className="input-field font-semibold text-lg"
            ></textarea>
          </div>
          {/* Third grid column */}
          <div className="flex justify-between px-4 col-span-4">
            <button
              type="button"
              className={`priority  ${
                selectedPriority === "Important"
                  ? "bg-important hover:bg-red-600"
                  : ""
              }`}
              onClick={() => handleClick("Important")}
            >
              {/* <input type="radio" name="priority" id="High" /> */}
              Important
            </button>
            <button
              type="button"
              className={`priority  ${
                selectedPriority === "Moderate"
                  ? "bg-moderate hover:bg-yellow-600"
                  : ""
              }`}
              onClick={() => handleClick("Moderate")}
            >
              {/* <input type="radio" name="priority" id="Medium" /> */}
              Moderate
            </button>
            <button
              type="button"
              className={`priority  ${
                selectedPriority === "Give a try"
                  ? "bg-low hover:bg-green-600"
                  : ""
              }`}
              onClick={() => handleClick("Give a try")}
            >
              {/* <input type="radio" name="priority" id="Low" /> */}
              Give a try
            </button>
          </div>
          {/* Fourth grid column */}
          <div className="col-start-2 col-end-4">
            {isEdit ? (
              <button
                type="submit"
                className="bg-primary w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
              >
                Update Task
              </button>
            ) : (
              <button
                type="submit"
                className="bg-primary w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
              >
                Add Task
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
