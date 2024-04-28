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
}

export default function TaskDescription() {
  const { taskId } = useParams();
  const [task, setTask] = useState<TaskProps | null>(null);
  const [isAddingDescription, setIsAddingDescription] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const {
    description,
    handleDescriptionChange,
    addDescription,
    editDescription,
  } = useAddTask({
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

  const handleEditDescriptionClick = () => {
    setIsEditingDescription(true);
    setIsAddingDescription(true);
  };

  const handleSaveDescriptionClick = () => {
    if (isEditingDescription) {
      editDescription(taskId || "", description);
    } else {
      addDescription(taskId || "");
    }
    setIsAddingDescription(false);
    setIsEditingDescription(false);
  };

  return (
    <S.Container>
      <S.Title>Task Name: {task?.title}</S.Title>
      <S.DescriptionSection>
        {isAddingDescription ? (
          <S.Form>
            <S.TextArea
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Add a description to the task"
            />
            <S.Button onClick={handleSaveDescriptionClick}>
              <p>{isEditingDescription ? "Save" : "Add"}</p>
            </S.Button>
          </S.Form>
        ) : (
          <>
            <S.Button onClick={handleAddDescriptionClick}>
              <p>Add Description</p>
            </S.Button>
            <S.Button onClick={handleEditDescriptionClick}>
              <p>Edit Description</p>
            </S.Button>
          </>
        )}
        <S.Description>Task Description: {task?.description}</S.Description>
      </S.DescriptionSection>
    </S.Container>
  );
}
