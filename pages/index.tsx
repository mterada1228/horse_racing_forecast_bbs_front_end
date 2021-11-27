import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { RootState } from "../src/redux/ConfigureStore";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import styles from "../styles/Home.module.css";
import DataButtons from "../src/components/molecules/dateButtons";
import FeaturedRaces from "../src/components/molecules/featuredRaces";
import MyBreadcrumbs from "../src/components/molecules/myBreadcrumbs";
import RaceCards from "../src/components/molecules/raceCards";
import featuredRacesData from "../datas/featured_races";

const breadcrumbs = [{ text: "トップ", url: "/" }];

const Home: NextPage = () => {
  const racesData = useSelector(
    (state: RootState) => state.racesData.racesData
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>競馬予想掲示板 - トップ -</title>
        <meta name="description" content="競馬予想掲示板 - トップ -" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyBreadcrumbs breadcrumbs={breadcrumbs} />

      <Box sx={{ borderBottom: 1, marginBottom: "2%" }}>
        <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
          本日の注目レース！
        </Typography>
      </Box>

      <FeaturedRaces races={featuredRacesData.featured_races} />

      <Box sx={{ borderBottom: 1, marginBottom: "2%" }}>
        <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
          今週のレース一覧
        </Typography>
      </Box>

      <DataButtons />

      <RaceCards racesData={racesData} />
    </div>
  );
};

export default Home;
