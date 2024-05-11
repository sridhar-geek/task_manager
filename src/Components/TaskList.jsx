import { useSelector } from "react-redux"
import RenderList from "./RenderList"

const TaskList = () => {
const {tasks} = useSelector((store)=> store.task)

    return (
      <div>
        {tasks.length == 0 ? (
          <h1>No tasks present. Add one </h1>
        ) : (
          <>
            {tasks.map((task) => (
              <div key={task.taskId}>
                <RenderList task={task} />
              </div>
            ))}
          </>
        )}
      </div>
    );
}

export default TaskList