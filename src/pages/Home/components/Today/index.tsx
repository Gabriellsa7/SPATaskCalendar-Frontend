import * as S from "./styles";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import ToDoList from "./components/ToDoList";
import Completed from "./components/Completed";
import useAddTask from "../../../../hooks/useAddTask";

export default function Today() {
  // Gets today's date
  const today = new Date();

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
      <S.SectionIconTitle>
        <TfiMenuAlt />
        <S.Title>Today</S.Title>
      </S.SectionIconTitle>
      <S.Form>
        <S.MainInput
          value={title}
          onChange={handleTitleChange}
          onKeyPress={handleTitleKeyPress}
          placeholder="+ Add a task to the list"
        />
        <S.Calendar>
          <MdOutlineCalendarToday />
          <p>{formattedDate}</p>
        </S.Calendar>
      </S.Form>
      <ToDoList />
      <Completed />
    </S.Container>
  );
}
