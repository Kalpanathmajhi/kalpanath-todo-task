import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Task/taskSlice.js";
import { v4 as uuidv4 } from "uuid";

function InputTask() {
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    title: "",
    deadline: "",
    completed: false,
    important: false,
  });

  const dispatch = useDispatch();

  const handleSaveTask = () => {
    dispatch(addTask(newTask));
    setNewTask({
      id: "",
      title: "",
      description: "",
      deadline: "",
      completed: false,
      important: false,
    });
    setShowModal(false);
  };

  return (
    <div>
      <button
        className="py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors bg-gradient-to-tr from-teal-500 to-teal-400 text-white shadow-md hover:opacity-90"
        onClick={() => setShowModal(true)}
      >
        + Add Task
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60 z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-white">Add Task</h2>
            <input
              type="text"
              placeholder="Title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              className="border border-gray-600 bg-gray-800 text-white rounded-md px-2 py-1 mb-2 w-full focus:ring-teal-400"
            />
            <textarea
              cols="10"
              rows="4"
              value={newTask.description}
              placeholder="Description"
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className="border border-gray-600 bg-gray-800 text-white rounded-md px-2 py-1 mb-2 w-full focus:ring-teal-400"
            ></textarea>
            <input
              type="date"
              placeholder="Deadline"
              value={newTask.deadline}
              onChange={(e) =>
                setNewTask({ ...newTask, deadline: e.target.value })
              }
              className="border border-gray-600 bg-gray-800 text-white rounded-md px-2 py-1 mb-2 w-full focus:ring-teal-400"
            />
            <div className="mb-2 flex items-center">
              <input
                type="checkbox"
                checked={newTask.completed}
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    completed: e.target.checked,
                  })
                }
                className="mr-2 accent-teal-400"
              />
              <span className="text-white">Completed</span>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                checked={newTask.important}
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
                    important: e.target.checked,
                  })
                }
                className="mr-2 accent-teal-400"
              />
              <span className="text-white">Important</span>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-teal-500 text-white px-4 py-2 rounded-md mr-2 shadow-md hover:bg-teal-600"
                onClick={handleSaveTask}
              >
                Save Task
              </button>
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputTask;
