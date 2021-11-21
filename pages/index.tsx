import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import MyBreadcrumbs from "../src/components/molecules/myBreadcrumbs";
import FeaturedRaceCard from "../src/components/atoms/featuredRaceCard";
import RaceCard from "../src/components/atoms/raceCard";
import styles from "../styles/Home.module.css";
import featuredRacesData from "../datas/featured_races";
import racesOftheWeekDay1 from "../datas/races_of_the_week_day1";
import racesOftheWeekDay2 from "../datas/races_of_the_week_day2";
import racesOftheWeekDay3 from "../datas/races_of_the_week_day3";

type Race = {
  race_id: number;
  race_course: string;
  round: string;
  race_name: string;
  course_type: string;
  length: number;
  population: number;
};

const breadcrumbs = [{ text: "トップ", url: "/" }];

const Home: NextPage = () => {
  const [racesData, setRacesData] = useState(racesOftheWeekDay1);

  const handleClick = (e: any) => {
    const date = e.target.value;
    switch (date) {
      case "2021/11/16(火)":
        setRacesData(racesOftheWeekDay1);
        break;
      case "2021/11/17(水)":
        setRacesData(racesOftheWeekDay2);
        break;
      case "2021/11/18(木)":
        setRacesData(racesOftheWeekDay3);
        break;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>競馬予想掲示板 - トップ -</title>
        <meta name="description" content="競馬予想掲示板 - トップ -" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyBreadcrumbs breadcrumbs={breadcrumbs} />

      <Box sx={{ borderBottom: 1 }}>
        <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
          本日の注目レース！
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {featuredRacesData.featured_races.map(
          (featuredRace: Race, i: number) => (
            <Grid item xs={4} key={i}>
              <FeaturedRaceCard race={featuredRace} />
            </Grid>
          )
        )}
      </Grid>

      <Box sx={{ borderBottom: 1 }}>
        <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
          今週のレース一覧
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button onClick={handleClick} value="2021/11/16(火)">
            2021/11/16(火)
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleClick} value="2021/11/17(水)">
            2021/11/17(水)
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleClick} value="2021/11/18(木)">
            2021/11/18(木)
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {Array.from(
          new Set(racesData.races.map((race) => race.race_course))
        ).map((raceCourse, i) => {
          return (
            <Grid item xs={4} key={i}>
              <Paper>{raceCourse}</Paper>
              {racesData.races
                .filter((race) => race.race_course === raceCourse)
                .map((filterdRace: Race, i: number) => {
                  return <RaceCard key={i} race={filterdRace} />;
                })}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
