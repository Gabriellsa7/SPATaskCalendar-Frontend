import { useState } from "react";

interface AddTaskProps {
  onTaskAdded: () => void;
}

const useAddTask = ({ onTaskAdded }: AddTaskProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const apiUrl = "http://localhost:3000/api/tasks";

  const handleTitleKeyPress = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      AddTask();
    }
  };

  const AddTask = async () => {
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

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
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
  };
};

export default useAddTask;
