import * as S from "./styles";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import ToDoList, { Task } from "./components/ToDoList";
import Completed from "./components/Completed";
import useAddTask from "../../../../hooks/useAddTask";
import { useState } from "react";

export default function Today() {
  // Gets today's date
  const today = new Date();

  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  // Formats the date using the desired format with the month in full
  const formattedDate = format(today, "dd MMMM yyyy", { locale: pt });

  const handleTaskAdd = () => {
    console.log("task added!");
  };

  const {
    title,
    // description,
    // handleDescriptionChange,
    handleTitleChange,
    handleTitleKeyPress,
  } = useAddTask({ onTaskAdded: handleTaskAdd });

  return (
    //Start Connecting the Front and Back
    <S.Container>
      <S.SectionTop>
        <S.SectionIconTitle>
          <TfiMenuAlt />
          <S.Title>Day</S.Title>
        </S.SectionIconTitle>
        <S.SectionSearch>
          <S.Search placeholder="Enter the task name" />
          <S.SectionSearchIcon>
            <IoSearchOutline size={20} />
          </S.SectionSearchIcon>
        </S.SectionSearch>
      </S.SectionTop>
      <S.Form>
        <S.MainInput
          value={title}
          onChange={handleTitleChange}
          onKeyPress={handleTitleKeyPress}
          placeholder="+ Add a task to the list. Press enter to save"
        />
        <S.Calendar>
          <MdOutlineCalendarToday />
          <p>{formattedDate}</p>
        </S.Calendar>
      </S.Form>
      <ToDoList setCompletedTasks={setCompletedTasks} />
      <Completed completedTasks={completedTasks} />
    </S.Container>
  );
}
