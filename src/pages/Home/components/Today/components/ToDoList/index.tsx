import { useEffect, useState } from "react";
import * as S from "./styles";
import { FaRegCircleXmark } from "react-icons/fa6";
import { ImRadioUnchecked } from "react-icons/im";
import useRemoveTask from "../../../../../../hooks/useRemoveTask";
import { Link } from "react-router-dom";

export interface Task {
  _id: string;
  title: string;
  description: string;
  date: Date;
  created_at: Date;
  completed: boolean;
}

interface ToDoListProps {
  setCompletedTasks?: React.Dispatch<React.SetStateAction<Task[]>>;
  filteredTasks?: Task[];
}

export default function ToDoList({
  setCompletedTasks,
  filteredTasks = [],
}: ToDoListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { removeTask, success } = useRemoveTask();

  useEffect(() => {
    // Request to fetch tasks when loading the component
    fetch("http://localhost:3000/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) =>
        console.error("Error when searching for tasks:", error)
      );
  }, []);

  const handleRemoveTask = (taskId: string) => {
    removeTask(taskId)
      .then(() => {
        // If the removal is successful, this code will update the local state of the tasks
        setTasks(tasks.filter((task) => task._id !== taskId));
        console.log("Task removed successfully:", taskId);
        console.log("Updated tasks:", tasks);
        console.log(success);
      })
      .catch((error) => console.error("Erro ao remover a tarefa:", error));
  };

  const handleTaskCompletion = (taskId: string) => {
    const completedTaskIndex = tasks.findIndex((task) => task._id === taskId);
    if (completedTaskIndex !== -1) {
      const completedTask = tasks[completedTaskIndex];
      if (setCompletedTasks) {
        setCompletedTasks((prevCompletedTasks) => [
          ...prevCompletedTasks,
          completedTask,
        ]);
      }

      // Stores the completed task in the browser's local storage
      const completedTasksFromLocalStorage = JSON.parse(
        localStorage.getItem("completedTasks") || "[]"
      );
      localStorage.setItem(
        "completedTasks",
        JSON.stringify([...completedTasksFromLocalStorage, completedTask])
      );

      // Updates the status of tasks to remove the completed task
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    }
  };

  const formatDate = (date: Date) => {
    // const options = { day: "2-digit", month: "short" as "2-digit" };
    return new Date(date).toLocaleDateString("pt-BR");
  };

  // const tasksToDisplay =
  //   filteredTasks.length > 0
  //     ? tasks.filter(() =>
  //         filteredTasks.some((filter) =>
  //           filter.title.toLowerCase().startsWith(filter.title.toLowerCase())
  //         )
  //       )
  //     : tasks;

  const tasksToDisplay = filteredTasks.length > 0 ? filteredTasks : tasks;

  return (
    <S.Container>
      <S.Title>To do List</S.Title>
      <S.ToDoListWrapper>
        <S.SectionToDoList>
          {tasksToDisplay?.map((task) => (
            <S.Task key={task._id}>
              <S.SectionIconText>
                <S.UncheckedButton
                  onClick={() => handleTaskCompletion(task._id)}
                >
                  <ImRadioUnchecked size={18} />
                </S.UncheckedButton>
                <Link to={`/task/${task._id}`}>
                  <S.TaskName>{task.title}</S.TaskName>
                </Link>
              </S.SectionIconText>
              <S.SectionIconDelete>
                {formatDate(task.created_at)}
                <S.ButtonRemove onClick={() => handleRemoveTask(task._id)}>
                  <FaRegCircleXmark size={18} />
                </S.ButtonRemove>
              </S.SectionIconDelete>
            </S.Task>
          ))}
        </S.SectionToDoList>
      </S.ToDoListWrapper>
    </S.Container>
  );
}
