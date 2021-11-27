import { FC } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import FeaturedRaceCard from "../atoms/featuredRaceCard";

type Props = {
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

const MyGrid = styled(Grid)(() => ({
  marginBottom: "3%",
}));

const FeaturedRaces: FC<Props> = (props) => {
  const { races } = props;

  return (
    <MyGrid container spacing={2}>
      {races.map((race, i) => (
        <Grid item xs={4} key={i}>
          <FeaturedRaceCard race={race} />
        </Grid>
      ))}
    </MyGrid>
  );
};

export default FeaturedRaces;
