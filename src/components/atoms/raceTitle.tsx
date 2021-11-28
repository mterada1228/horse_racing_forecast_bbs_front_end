import { FC } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

type Props = {
  race: {
    race_id: number;
    race_course: string;
    round: string;
    race_name: string;
    course_type: string;
    length: number;
    population: number;
  };
};

const MyGrid = styled(Grid)(() => ({
  marginBottom: "3%",
}));

const MyPaper = styled(Paper)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  display: "flex",
  height: "100%",
  justifyContent: "center",
}));

const RaceTitle: FC<Props> = (props) => {
  const { race } = props;

  return (
    <MyGrid container spacing={5}>
      <Grid item xs={1}>
        <MyPaper>{race.round}</MyPaper>
      </Grid>
      <Grid item xs={11}>
        <Typography variant="h2">{race.race_name}</Typography>
        <Typography variant="h3">{`${race.course_type} ${race.length} m`}</Typography>
      </Grid>
    </MyGrid>
  );
};

export default RaceTitle;
