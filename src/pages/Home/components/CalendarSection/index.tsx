import * as S from "./styles";
import * as I from "./mocks";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useViewTitle from "../../../../hooks/useViewTitle";

interface CalendarSectionProps {
  setViewTitle?: React.Dispatch<React.SetStateAction<string>>;
}

export default function CalendarSection({
  setViewTitle,
}: CalendarSectionProps) {
  const [selectedItem, setSelectedItem] = useState("day");
  const [taskCounts, setTaskCounts] = useState({ day: 0, week: 0, month: 0 });
  const { handleViewChange } = useViewTitle();

  const fetchTaskCounts = useCallback(
    async (view: string) => {
      try {
        const response = await axios.get(`/tasks/${view}`);
        const { day, week, month } = response.data.taskCounts;
        setTaskCounts({ day, week, month });
        handleViewChange(view);
      } catch (error) {
        console.error("Error when searching for tasks:", error);
      }
    },
    [handleViewChange]
  );

  useEffect(() => {
    fetchTaskCounts(selectedItem);
  }, [selectedItem, fetchTaskCounts]);

  const handleSelectedItemChange = (item: string) => {
    setSelectedItem(item);
    setViewTitle && setViewTitle(item);
  };

  return (
    <S.Container>
      <S.IconSection>
        <I.IoMdCheckmarkCircleOutline color="green" size={40} />
        <S.Title>Task Calendar</S.Title>
      </S.IconSection>
      <S.CalendarSection
        className={selectedItem === "day" ? "selected" : ""}
        onClick={() => handleSelectedItemChange("day")}
      >
        <S.IconSection>
          <I.MdOutlineCalendarToday size={25} />
          <S.IconText>Day</S.IconText>
        </S.IconSection>
        {taskCounts.day}
      </S.CalendarSection>
      <S.CalendarSection
        className={selectedItem === "week" ? "selected" : ""}
        onClick={() => handleSelectedItemChange("week")}
      >
        <S.IconSection>
          <I.LuSunrise size={25} />
          <S.IconText>Week</S.IconText>
        </S.IconSection>
        {taskCounts.week}
      </S.CalendarSection>
      <S.CalendarSection
        className={selectedItem === "month" ? "selected" : ""}
        onClick={() => handleSelectedItemChange("month")}
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
