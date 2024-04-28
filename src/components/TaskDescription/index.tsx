import { useParams } from "react-router-dom";
import * as S from "./styles";
import { useEffect, useState } from "react";
import useAddTask from "../../hooks/useAddTask";

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
  const [isAddingDescription, setIsAddingDescription] = useState(false);
  const { description, handleDescriptionChange, addDescription } = useAddTask({
    onTaskAdded: () => {},
  });

  useEffect(() => {
    fetch(`http://localhost:3000/api/tasks/${taskId}`)
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((error) =>
        console.error("Erro ao buscar os detalhes da tarefa:", error)
      );
  }, [taskId]);

  const handleAddDescriptionClick = () => {
    setIsAddingDescription(true);
  };

  const handleSaveDescriptionClick = () => {
    addDescription(taskId || "");
    setIsAddingDescription(false);
  };

  return (
    <S.Container>
      <S.Title>{task?.title}</S.Title>
      {isAddingDescription ? (
        <S.Form>
          <S.TextArea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Add a description to the task"
          />
          <S.Button onClick={handleSaveDescriptionClick}>Save</S.Button>
        </S.Form>
      ) : (
        <S.Button onClick={handleAddDescriptionClick}>Add Description</S.Button>
      )}
      <S.Description>{task?.description}</S.Description>
    </S.Container>
  );
}
