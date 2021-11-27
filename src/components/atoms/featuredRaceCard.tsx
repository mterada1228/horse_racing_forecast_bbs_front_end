import { FC } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
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
  height: "150px",
}));

const MyCardHeader = styled(CardHeader)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

const MyCardContent = styled(CardContent)(() => ({
  justifyContent: "center",
}));

const FeaturedRaceCard: FC<Props> = (props: Props) => {
  const { race } = props;

  return (
    <Link href={`/race/${race.race_id}`} passHref>
      <MyCard>
        <MyCardHeader
          title={`${race.race_course} ${race.round}`}
          titleTypographyProps={{ variant: "h2" }}
        />
        <MyCardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h2">{race.race_name}</Typography>
              <Typography variant="h3">{`${race.course_type} ${race.length}m`}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h2">{`${race.population}人`}</Typography>
              <Typography variant="h3">が予想中!</Typography>
            </Grid>
          </Grid>
        </MyCardContent>
      </MyCard>
    </Link>
  );
};

export default FeaturedRaceCard;
