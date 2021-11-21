import { FC } from "react";
import { Card, Typography } from "@mui/material";

type Props = {
  comment: {
    id: number;
    name: string;
    poseted_date: string;
    reply_to_comment_id?: number;
    description: string;
  };
};

const CommentCard: FC<Props> = (props) => {
  const { comment } = props;

  return (
    <Card id={`comment_${comment.id}`}>
      <Typography variant="h3">
        {`${comment.id} 名前: ${comment.name} ${comment.poseted_date}`}
      </Typography>
      {comment.reply_to_comment_id ? (
        <a href={`#comment_${comment.reply_to_comment_id}`}>
          {`>>${comment.reply_to_comment_id}`}
        </a>
      ) : (
        ""
      )}
      <Typography variant="h3">{comment.description}</Typography>
    </Card>
  );
};

export default CommentCard;
