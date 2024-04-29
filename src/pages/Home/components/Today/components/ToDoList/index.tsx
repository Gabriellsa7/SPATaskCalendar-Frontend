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
      .catch((error) => console.error("Erro ao buscar tarefas:", error));
  }, [tasks]);

  const handleRemoveTask = (taskId: string) => {
    removeTask(taskId)
      .then(() => {
        // If the removal is successful, this code will update the local state of the tasks
        setTasks(tasks.filter((task) => task._id !== taskId));
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

      // Armazenar a tarefa concluída no armazenamento local do navegador
      const completedTasksFromLocalStorage = JSON.parse(
        localStorage.getItem("completedTasks") || "[]"
      );
      localStorage.setItem(
        "completedTasks",
        JSON.stringify([...completedTasksFromLocalStorage, completedTask])
      );

      // Atualizar o estado das tarefas para remover a tarefa concluída
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    }
  };

  const formatDate = (date: Date) => {
    // const options = { day: "2-digit", month: "short" as "2-digit" };
    return new Date(date).toLocaleDateString("pt-BR");
  };

  const tasksToDisplay =
    filteredTasks.length > 0
      ? tasks.filter((task) =>
          filteredTasks.some((filter) =>
            task.title.toLowerCase().startsWith(filter.title.toLowerCase())
          )
        )
      : tasks;

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
