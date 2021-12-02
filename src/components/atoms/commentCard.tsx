import { FC } from "react";
import { Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import styles from "./CommentCard.module.css";

type Props = {
  comment: {
    id: number;
    name: string;
    poseted_date: string;
    reply_to_comment_id?: number;
    description: string;
  };
};

const MyCard = styled(Card)(({ theme }) => ({
  paddingTop: "1%",
  paddingRight: "1%",
  paddingBottom: "1%",
  paddingLeft: "1%",
  marginBottom: "2%",
  backgroundColor: theme.palette.background.default,
}));

const TitleGrid = styled(Grid)(() => ({
  paddingBottom: "1%",
}));

const ReplyGrid = styled(Grid)(() => ({
  paddingBottom: "1%",
}));

const CommentCard: FC<Props> = (props) => {
  const { comment } = props;

  return (
    <MyCard id={`comment_${comment.id}`}>
      <TitleGrid container spacing={1}>
        <Grid item xs={1}>
          <Typography variant="h3">{comment.id}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h3">名前: {comment.name}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h3">{comment.poseted_date}</Typography>
        </Grid>
      </TitleGrid>
      <ReplyGrid>
        {comment.reply_to_comment_id ? (
          <a
            href={`#comment_${comment.reply_to_comment_id}`}
            className={styles.a}
          >
            {`>>${comment.reply_to_comment_id}`}
          </a>
        ) : (
          ""
        )}
      </ReplyGrid>
      <Typography variant="h3">{comment.description}</Typography>
    </MyCard>
  );
};

export default CommentCard;
