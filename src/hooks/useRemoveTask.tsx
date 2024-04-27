import { useState } from "react";

const useRemoveTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const removeTask = async (taskId: string) => {
    const apiUrl = `http://localhost:3000/api/tasks/${taskId}`;
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(apiUrl, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to remove task");
      }
    } catch (error) {
      setError("Error");
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, success, removeTask };
};

export default useRemoveTask;
