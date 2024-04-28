import { useLocation, useParams } from "react-router-dom";
import * as S from "./styles";
import { useEffect, useState } from "react";

interface TaskProps {
  _id: string;
  title: string;
  description: string;
  date: Date;
  created_at: Date;
  // Adicione outras propriedades conforme necessário
}

export default function TaskDescription() {
  const { taskId } = useParams();
  const [task, setTask] = useState<TaskProps | null>(null);
  const query = new URLSearchParams(useLocation().search);
  const title = query.get("title");

  useEffect(() => {
    fetch(`http://localhost:3000/api/tasks/${taskId}`)
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((error) =>
        console.error("Erro ao buscar os detalhes da tarefa:", error)
      );
  }, [taskId]);

  // if (!task) {
  //   return <div>Carregando...</div>;
  // }

  return (
    <S.Container>
      <p>Título da Tarefa: {title}</p>
    </S.Container>
  );
}
