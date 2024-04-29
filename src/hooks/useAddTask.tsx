import { useState } from "react";

interface AddTaskProps {
  onTaskAdded: () => void;
  initialTitle?: string;
  initialDescription?: string;
}

const useAddTask = ({
  onTaskAdded,
  initialTitle,
  initialDescription,
}: AddTaskProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const apiUrl = "http://localhost:3000/api/tasks";

  const handleTitleKeyPress = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  };

  const addTask = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (response.ok) {
        setTitle("");
        setDescription("");
        onTaskAdded();
      } else {
        console.error("Error adding task:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const addDescription = async (taskId: string) => {
    try {
      const response = await fetch(`${apiUrl}/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
      });
      if (response.ok) {
        setDescription("");
        onTaskAdded();
      } else {
        console.error("Error adding description:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding description:", error);
    }
  };

  const addTitle = async (taskId: string) => {
    try {
      const response = await fetch(`${apiUrl}/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      if (response.ok) {
        setTitle("");
        onTaskAdded();
      } else {
        console.error("Error adding description:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding description:", error);
    }
  };

  const editDescription = async (taskId: string, newDescription: string) => {
    try {
      const response = await fetch(`${apiUrl}/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: newDescription }),
      });
      if (response.ok) {
        setDescription(newDescription);
        onTaskAdded();
      } else {
        console.error("Error editing description:", response.statusText);
      }
    } catch (error) {
      console.error("Error editing description:", error);
    }
  };

  const editTitle = async (taskId: string, newTitle: string) => {
    try {
      const response = await fetch(`${apiUrl}/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle }),
      });
      if (response.ok) {
        setTitle((prevTitle) => prevTitle + newTitle);
        onTaskAdded();
      } else {
        console.error("Error editing description:", response.statusText);
      }
    } catch (error) {
      console.error("Error editing description:", error);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle((prevTitle) => prevTitle + e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  return {
    title,
    description,
    handleTitleKeyPress,
    handleTitleChange,
    handleDescriptionChange,
    addDescription,
    editDescription,
    editTitle,
    addTitle,
  };
};

export default useAddTask;
