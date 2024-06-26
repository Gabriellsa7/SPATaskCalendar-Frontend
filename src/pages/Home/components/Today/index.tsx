import * as S from "./styles";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import ToDoList from "./components/ToDoList";
import Completed from "./components/Completed";
import useAddTask from "../../../../hooks/useAddTask";
import { ChangeEvent, useEffect, useState } from "react";
import useViewTitle from "../../../../hooks/useViewTitle";

export interface Task {
  _id: string;
  title: string;
  description: string;
  date: Date;
  created_at: Date;
  completed: boolean;
}

export default function Today() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const { viewTitle } = useViewTitle();

  useEffect(() => {
    // Request to fetch tasks when loading the component
    fetch("http://localhost:3000/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) =>
        console.error("Error when searching for tasks:", error)
      );
  }, [tasks]);

  // Gets today's date
  const today = new Date();

  // Formats the date using the desired format with the month in full
  const formattedDate = format(today, "dd MMMM yyyy", { locale: pt });

  const handleTaskAdd = () => {
    console.log("task added!");
  };

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    handleSearch(query);
  };

  const handleSearch = (query: string) => {
    if (query !== "") {
      const filtered = tasks.filter((task) => {
        const taskTitle = task.title.toLowerCase();
        let index = 0;
        for (let i = 0; i < taskTitle.length; i++) {
          if (taskTitle[i] === query[index]) {
            index++;
          }
          if (index === query.length) {
            return true;
          }
        }
        return false;
      });
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks([]);
    }
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
          <S.Title>{viewTitle}</S.Title>
        </S.SectionIconTitle>
        <S.SectionSearch>
          <S.Search
            onChange={handleSearchInput}
            placeholder="Enter the task name"
          />
          <S.SectionSearchIcon>
            <S.Button onClick={() => handleSearch(search)}>
              <IoSearchOutline size={20} />
            </S.Button>
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
      <ToDoList filteredTasks={filteredTasks} />
      <Completed />
    </S.Container>
  );
}
