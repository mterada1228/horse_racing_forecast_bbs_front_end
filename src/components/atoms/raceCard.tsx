import { FC } from "react";
import Link from "next/link";
import { Card, Grid, Typography } from "@mui/material";
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

const MyCard = styled(Card)(() => ({
  display: "flex",
  height: "100px",
  marginBottom: "1%",
}));

const GridItemRound = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  display: "flex",
  justifyContent: "center",
}));

const GridItem = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const RaceCard: FC<Props> = (props) => {
  const { race } = props;

  return (
    <Link href={`/race/${race.race_id}`} passHref>
      <MyCard>
        <Grid container spacing={2}>
          <GridItemRound item xs={2}>
            <Typography variant="h2">{race.round}</Typography>
          </GridItemRound>
          <GridItem item xs={5}>
            <Typography variant="h3">{race.race_name}</Typography>
            <Typography variant="h4">
              {`${race.course_type} ${race.length} m`}
            </Typography>
          </GridItem>
          <GridItem item xs={5}>
            <Typography variant="h3">{`${race.population}人`}</Typography>
            <Typography variant="h4">が予想中!</Typography>
          </GridItem>
        </Grid>
      </MyCard>
    </Link>
  );
};

export default RaceCard;
