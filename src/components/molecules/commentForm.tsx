import { FC } from "react";
import { Button, TextareaAutosize, TextField } from "@mui/material";
import useSendComment from "../../hooks/useSendCommnet";

const CommentForm: FC = () => {
  const { setName, setDescription, send } = useSendComment();

  return (
    <>
      <div>
        <span>名前: </span>
        <TextField required onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <p>コメント: </p>
        <TextareaAutosize
          required
          style={{ width: 200 }}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button onClick={send}>コメントの投稿</Button>
    </>
  );
};

export default CommentForm;
