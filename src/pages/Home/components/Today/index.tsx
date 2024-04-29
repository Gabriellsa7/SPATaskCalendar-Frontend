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

  useEffect(() => {
    // Request to fetch tasks when loading the component
    fetch("http://localhost:3000/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Erro ao buscar tarefas:", error));
  }, [tasks]);

  // Gets today's date
  const today = new Date();

  // const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  // Formats the date using the desired format with the month in full
  const formattedDate = format(today, "dd MMMM yyyy", { locale: pt });

  const handleTaskAdd = () => {
    console.log("task added!");
  };

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearch(query); // Atualiza o estado 'search' com a entrada de pesquisa do usuário
    handleSearch(query); // Chama a função handleSearch com a entrada de pesquisa do usuário
  };

  const handleSearch = (query: string) => {
    // Modificamos para aceitar um parâmetro 'query'
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
      setFilteredTasks([]); // Limpar as tarefas filtradas se a pesquisa estiver vazia
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
          <S.Title>Day</S.Title>
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
