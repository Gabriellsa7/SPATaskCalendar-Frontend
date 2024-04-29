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
  const [editingTitle, setEditingTitle] = useState("");
  const [editingDescription, setEditingDescription] = useState("");
  const [isAddingDescription, setIsAddingDescription] = useState(false);
  const [isAddingTitle, setIsAddingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const {
    // description,
    handleDescriptionChange,
    addDescription,
    editDescription,
    editTitle,
    // title,
    addTitle,
    // handleTitleChange,
  } = useAddTask({
    onTaskAdded: () => {},
    initialTitle: task?.title || "",
    initialDescription: task?.description || "",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/api/tasks/${taskId}`)
      .then((response) => response.json())
      .then((data) => {
        setTask(data);
        setEditingTitle(data.title);
        setEditingDescription(data.description);
      })
      .catch((error) =>
        console.error("Erro ao buscar os detalhes da tarefa:", error)
      );
  }, [taskId]);

  useEffect(() => {
    if (task) {
      handleDescriptionChange({
        target: { value: task.description },
      } as React.ChangeEvent<HTMLTextAreaElement>);
    }
  }, [task, handleDescriptionChange]);

  const handleAddDescriptionClick = () => {
    setIsAddingDescription(true);
  };

  const handleEditDescriptionClick = () => {
    setIsEditingDescription(true);
    setIsAddingDescription(true);
  };

  const handleEditTitleClick = () => {
    setIsEditingTitle(true);
    setIsAddingTitle(true);
  };

  const handleSaveDescriptionClick = () => {
    if (isEditingDescription) {
      editDescription(taskId || "", editingDescription);
    } else {
      addDescription(taskId || "");
    }
    setIsAddingDescription(false);
    setIsEditingDescription(false);
  };

  const handleSaveTitleClick = () => {
    if (isEditingTitle) {
      editTitle(taskId || "", editingTitle);
    } else {
      addTitle(taskId || "");
    }
    setIsAddingTitle(false);
    setIsEditingTitle(false);
  };

  return (
    <S.Container>
      <S.SectionIconTitle>
        <S.Title>Task Name: {task?.title}</S.Title>
        {isAddingTitle ? (
          <S.Form>
            <S.Input
              placeholder="Edit Title Task"
              value={editingTitle}
              onChange={(e) => setEditingTitle(e.target.value)}
            />
            <S.Button onClick={handleSaveTitleClick}>Save Title</S.Button>
          </S.Form>
        ) : (
          <S.Button onClick={handleEditTitleClick}>Edit Title</S.Button>
        )}
      </S.SectionIconTitle>
      <S.DescriptionSection>
        {isAddingDescription ? (
          <S.Form>
            <S.TextArea
              value={editingDescription}
              onChange={(e) => setEditingDescription(e.target.value)}
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
              <p>Edit Task</p>
            </S.Button>
          </>
        )}
        <S.Description>Task Description: {task?.description}</S.Description>
      </S.DescriptionSection>
    </S.Container>
  );
}
