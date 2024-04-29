// import { useEffect, useState } from "react";
import * as S from "./styles";
import { FaRegCircleXmark } from "react-icons/fa6";
import { ImRadioChecked } from "react-icons/im";
// import { useParams } from "react-router-dom";

interface Task {
  _id: string;
  title: string;
  description: string;
  date: Date;
  created_at: Date;
}

interface CompletedProps {
  completedTasks: Task[];
}

export default function Completed({ completedTasks }: CompletedProps) {
  // const { taskId } = useParams<{ taskId: string }>();
  // const [completedTask, setCompletedTask] = useState<Task[]>([]);

  // useEffect(() => {
  //   // Fetch the completed task details using taskId
  //   fetch(`http://localhost:3000/api/tasks/${taskId}`)
  //     .then((response) => response.json())
  //     .then((data) => setCompletedTask(data))
  //     .catch((error) =>
  //       console.error("Erro ao buscar a tarefa concluída:", error)
  //     );
  // }, [taskId]);

  // const formatDate = (date: Date) => {
  //   return new Date(date).toLocaleDateString("pt-BR");
  // };

  // if (!completedTask) {
  //   return <div>Carregando...</div>;
  // }
  return (
    <S.Container>
      <S.Title>Completed</S.Title>
      <S.CompletedWrapper>
        <S.SectionCompleted>
          {Array.isArray(completedTasks) ? (
            completedTasks.map((task) => (
              <S.Task key={task._id}>
                <S.SectionIconText>
                  <ImRadioChecked />
                  <span>{task.title}</span>
                </S.SectionIconText>
                <S.SectionIconDelete>
                  {new Date(task.created_at).toLocaleDateString("pt-BR")}
                  <FaRegCircleXmark />
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
