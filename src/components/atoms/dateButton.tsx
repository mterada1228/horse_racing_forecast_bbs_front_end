import { FC } from "react";
import { useDispatch } from "react-redux";
import { setRacesData } from "../../redux/ducks/racesData";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import racesOftheWeekDay1 from "../../../datas/races_of_the_week_day1";
import racesOftheWeekDay2 from "../../../datas/races_of_the_week_day2";
import racesOftheWeekDay3 from "../../../datas/races_of_the_week_day3";

type Props = {
  date: string;
};

const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  width: "100%",
}));

const DateButton: FC<Props> = (props) => {
  const { date } = props;

  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    const date = e.target.value;
    switch (date) {
      case "2021/11/16(火)":
        dispatch(setRacesData(racesOftheWeekDay1));
        break;
      case "2021/11/17(水)":
        dispatch(setRacesData(racesOftheWeekDay2));
        break;
      case "2021/11/18(木)":
        dispatch(setRacesData(racesOftheWeekDay3));
        break;
    }
  };

  return (
    <MyButton onClick={handleClick} value={date}>
      {date}
    </MyButton>
  );
};

export default DateButton;
