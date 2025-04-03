import { useState } from "react";
import "./TaskList.css";

function TaskList({ tasks, deleteTask, updateTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [updatedTask, setUpdatedTask] = useState("");

  const handleEdit = (task) => {
    setEditingTaskId(task._id);
    setUpdatedTask(task.task);
  };

  const handleUpdate = () => {
    updateTask(editingTaskId, updatedTask);
    setEditingTaskId(null);
    setUpdatedTask("");
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id} className="task-item">
          {editingTaskId === task._id ? (
            <>
              <input
                type="text"
                value={updatedTask}
                onChange={(e) => setUpdatedTask(e.target.value)}
                className="task-input"
              />
              <button onClick={handleUpdate} className="update-button">
                Update
              </button>
              <button
                onClick={() => setEditingTaskId(null)}
                className="cancel-button"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <span>{task.task}</span>
              <div className="task-actions">
                <button
                  onClick={() => handleEdit(task)}
                  className="edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
