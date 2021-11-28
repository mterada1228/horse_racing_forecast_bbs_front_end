import { FC, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box, Button, Paper } from "@mui/material";
import { styled } from "@mui/system";
import styles from "../../styles/Race.module.css";
import CommentCard from "../../src/components/atoms/commentCard";
import CommentForm from "../../src/components/molecules/commentForm";
import Entries from "../../src/components/molecules/entries";
import MyBreadcrumbs from "../../src/components/molecules/myBreadcrumbs";
import RaceTitle from "../../src/components/atoms/raceTitle";
import CommentData from "../../datas/comments";
import RaceData from "../../datas/race";

const MyPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  paddingTop: "3%",
  paddingRight: "4%",
  paddingLeft: "4%",
  paddingBottom: "3%",
}));

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

      <RaceTitle race={race} />

      <Entries horses={horses} />

      <MyPaper>
        {comments.map((comment, i) => (
          <CommentCard key={i} comment={comment} />
        ))}

        <Box
          sx={{
            borderTop: 1,
            borderBottom: 1,
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          <Button value="0" onClick={handleClick}>
            全部読む
          </Button>
          <Button value="1" onClick={handleClick}>
            最新10件
          </Button>
        </Box>

        <CommentForm />
      </MyPaper>
    </div>
  );
};

export default Race;
