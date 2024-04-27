import { useEffect, useState } from "react";
import * as S from "./styles";
import { FaRegCircleXmark } from "react-icons/fa6";
import { ImRadioUnchecked } from "react-icons/im";
import useRemoveTask from "../../../../../../hooks/useRemoveTask";

interface Task {
  _id: string;
  title: string;
  description: string;
  date: Date;
  created_at: Date;
  // Adicione outras propriedades conforme necessário
}

export default function ToDoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { removeTask, success } = useRemoveTask();

  useEffect(() => {
    // Request to fetch tasks when loading the component
    fetch("http://localhost:3000/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Erro ao buscar tarefas:", error));
  }, []);

  const handleRemoveTask = (taskId: string) => {
    removeTask(taskId)
      .then(() => {
        // If the removal is successful, this code will update the local state of the tasks
        setTasks(tasks.filter((task) => task._id !== taskId));
        console.log(success);
      })
      .catch((error) => console.error("Erro ao remover a tarefa:", error));
  };

  const formatDate = (date: Date) => {
    // const options = { day: "2-digit", month: "short" as "2-digit" };
    return new Date(date).toLocaleDateString("pt-BR");
  };

  return (
    <S.Container>
      <S.Title>To do List</S.Title>
      <S.ToDoListWrapper>
        <S.SectionToDoList>
          {tasks.map((task) => (
            <S.Task key={task._id}>
              <S.SectionIconText>
                <ImRadioUnchecked /> {task.title}
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
