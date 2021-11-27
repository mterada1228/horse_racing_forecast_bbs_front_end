import { FC } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import RaceCard from "../atoms/raceCard";

type Props = {
  racesData: {
    races: {
      race_id: number;
      race_course: string;
      round: string;
      race_name: string;
      course_type: string;
      length: number;
      population: number;
    }[];
  };
};

const MyPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  marginBottom: "3%",
  textAlign: "center",
}));

const RaceCards: FC<Props> = (props) => {
  const { racesData } = props;

  return (
    <Grid container spacing={2}>
      {Array.from(new Set(racesData.races.map((race) => race.race_course))).map(
        (raceCourse, i) => {
          return (
            <Grid item xs={4} key={i}>
              <MyPaper>
                <Typography variant="h2">{raceCourse}</Typography>
              </MyPaper>
              {racesData.races
                .filter((race) => race.race_course === raceCourse)
                .map((filterdRace, i) => {
                  return <RaceCard key={i} race={filterdRace} />;
                })}
            </Grid>
          );
        }
      )}
    </Grid>
  );
};

export default RaceCards;
