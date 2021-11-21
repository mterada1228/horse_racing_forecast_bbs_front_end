import { FC } from "react";
import Link from "next/link";
import { Card, Grid, Typography } from "@mui/material";

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

const RaceCard: FC<Props> = (props) => {
  const { race } = props;

  return (
    <Link href={`/race/${race.race_id}`} passHref>
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {race.round}
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h2">{race.race_name}</Typography>
            <Typography variant="h3">
              {`${race.course_type} ${race.length} m`}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h2">{`${race.population}人`}</Typography>
            <Typography variant="h3">が予想中!</Typography>
          </Grid>
        </Grid>
      </Card>
    </Link>
  );
};

export default RaceCard;
