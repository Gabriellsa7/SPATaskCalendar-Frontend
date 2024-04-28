import * as S from "./styles";
import * as I from "./mocks";
import { useEffect, useState } from "react";

export default function CalendarSection() {
  const [selectedItem, setSelectedItem] = useState("day");
  const [taskCounts, setTaskCounts] = useState({ day: 0, week: 0, month: 0 });

  useEffect(() => {
    // Função para buscar a quantidade de tarefas para cada período de tempo
    const fetchTaskCounts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/tasks/count");
        if (response.ok) {
          const data = await response.json();
          setTaskCounts(data);
        } else {
          console.error("Failed to fetch task counts");
        }
      } catch (error) {
        console.error("Error fetching task counts:", error);
      }
    };

    fetchTaskCounts();
  }, []);

  return (
    <S.Container>
      <S.IconSection>
        <I.IoMdCheckmarkCircleOutline color="green" size={40} />
        <S.Title>Task Calendar</S.Title>
      </S.IconSection>
      <S.CalendarSection
        className={selectedItem === "day" ? "selected" : ""}
        onClick={() => setSelectedItem("day")}
      >
        <S.IconSection>
          <I.MdOutlineCalendarToday size={25} />
          <S.IconText>Day</S.IconText>
        </S.IconSection>
        {taskCounts.day}
      </S.CalendarSection>
      <S.CalendarSection
        className={selectedItem === "week" ? "selected" : ""}
        onClick={() => setSelectedItem("week")}
      >
        <S.IconSection>
          <I.LuSunrise size={25} />
          <S.IconText>Week</S.IconText>
        </S.IconSection>
        {taskCounts.week}
      </S.CalendarSection>
      <S.CalendarSection
        className={selectedItem === "month" ? "selected" : ""}
        onClick={() => setSelectedItem("month")}
      >
        <S.IconSection>
          <I.TbArrowsCross size={25} />
          <S.IconText>Month</S.IconText>
        </S.IconSection>
        {taskCounts.month}
      </S.CalendarSection>
    </S.Container>
  );
}
