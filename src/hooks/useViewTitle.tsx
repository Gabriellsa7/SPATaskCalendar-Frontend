import { useState } from "react";

const useViewTitle = () => {
  const [viewTitle, setViewTitle] = useState<string>("Day");

  const handleViewChange = (view: string) => {
    switch (view.toLowerCase()) {
      case "day":
        setViewTitle("Day");
        break;
      case "week":
        setViewTitle("Week");
        break;
      case "month":
        setViewTitle("Month");
        break;
      default:
        setViewTitle("Day");
    }
  };

  return { viewTitle, handleViewChange };
};

export default useViewTitle;
