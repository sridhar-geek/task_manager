import { useSelector } from "react-redux"
import RenderList from "./RenderList"

const TaskList = () => {
const {tasks} = useSelector((store)=> store.task)

    return (
      <div>
        {tasks.length == 0 ? (
          <h1 className="text-center m-20 text-2xl font-Geologica ">Add Tasks to Orgainze your work</h1>
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