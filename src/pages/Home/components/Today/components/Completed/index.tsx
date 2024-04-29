import { useEffect, useState } from "react";
import * as S from "./styles";
import { FaRegCircleXmark } from "react-icons/fa6";
import { ImRadioChecked } from "react-icons/im";
import { Link } from "react-router-dom";

interface Task {
  _id: string;
  title: string;
  description: string;
  date: Date;
  created_at: Date;
}

export default function Completed() {
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Loads completed tasks from the browser's local storage when loading the component
    const completedTasksFromLocalStorage = JSON.parse(
      localStorage.getItem("completedTasks") || "[]"
    );
    setCompletedTasks(completedTasksFromLocalStorage);
  }, []);

  const handleRemoveTask = (taskId: string) => {
    // Removes the task from the screen
    setCompletedTasks((prevCompletedTasks) =>
      prevCompletedTasks.filter((task) => task._id !== taskId)
    );

    // Updates local storage by removing the task
    const updatedCompletedTasks = completedTasks.filter(
      (task) => task._id !== taskId
    );
    localStorage.setItem(
      "completedTasks",
      JSON.stringify(updatedCompletedTasks)
    );
  };

  return (
    <S.Container>
      <S.Title>Completed</S.Title>
      <S.CompletedWrapper>
        <S.SectionCompleted>
          {Array.isArray(completedTasks) && completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <S.Task key={task._id}>
                <S.SectionIconText>
                  <ImRadioChecked />
                  <Link to={`/task/${task._id}`}>
                    <S.TaskName>{task.title}</S.TaskName>
                  </Link>
                </S.SectionIconText>
                <S.SectionIconDelete>
                  {new Date(task.created_at).toLocaleDateString("pt-BR")}
                  <S.ButtonRemove onClick={() => handleRemoveTask(task._id)}>
                    <FaRegCircleXmark size={18} />
                  </S.ButtonRemove>
                </S.SectionIconDelete>
              </S.Task>
            ))
          ) : (
            <p>No completed tasks available.</p>
          )}
        </S.SectionCompleted>
      </S.CompletedWrapper>
    </S.Container>
  );
}
