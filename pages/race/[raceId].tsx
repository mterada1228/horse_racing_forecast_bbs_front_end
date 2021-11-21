import { FC, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import styles from "../../styles/Race.module.css";
import CommentCard from "../../src/components/atoms/commentCard";
import Entries from "../../src/components/molecules/entries";
import MyBreadcrumbs from "../../src/components/molecules/myBreadcrumbs";
import CommentData from "../../datas/comments";
import RaceData from "../../datas/race";
import CommentForm from "../../src/components/molecules/commentForm";

const Race: FC = () => {
  const router = useRouter();
  const [comments, setComments] = useState(CommentData.comments.slice(0, 10));
  const { race } = RaceData;
  const { horses } = race;

  const breadcrumbs = [
    { text: "トップ", url: "/" },
    { text: race.race_name, url: router.asPath },
  ];

  const handleClick = (e: any) => {
    const showCommentsMode = e.target.value;
    switch (showCommentsMode) {
      case "0":
        setComments(CommentData.comments);
        break;
      case "1":
        setComments(CommentData.comments.slice(0, 10));
        break;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>競馬予想掲示板 - {race.race_name} -</title>
        <meta
          name="description"
          content={`競馬予想掲示板 - ${race.race_name}-`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyBreadcrumbs breadcrumbs={breadcrumbs} />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper>{race.round}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2">{race.race_name}</Typography>
          <Typography variant="h3">{`${race.course_type} ${race.length} m`}</Typography>
        </Grid>
      </Grid>

      <Entries horses={horses} />

      <Paper>
        {comments.map((comment, i) => (
          <CommentCard key={i} comment={comment} />
        ))}
      </Paper>

      <Box sx={{ borderTop: 1, borderBottom: 1 }}>
        <Button value="0" onClick={handleClick}>
          全部読む
        </Button>
        <Button value="1" onClick={handleClick}>
          最新10件
        </Button>
      </Box>

      <CommentForm />
    </div>
  );
};

export default Race;
