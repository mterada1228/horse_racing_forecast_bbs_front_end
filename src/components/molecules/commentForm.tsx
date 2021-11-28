import { FC } from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import useSendComment from "../../hooks/useSendCommnet";

const MyFormControl = styled(FormControl)(() => ({
  width: "50%",
  marginBottom: "2%",
}));

const CommentForm: FC = () => {
  const { setName, setDescription, send } = useSendComment();

  return (
    <>
      <div>
        <MyFormControl variant="standard">
          <InputLabel htmlFor="component-simple">名前</InputLabel>
          <Input
            id="component-simple"
            onChange={(e) => setName(e.target.value)}
          />
        </MyFormControl>
      </div>

      <div>
        <MyFormControl>
          <TextField
            label="コメント"
            multiline
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
          />
        </MyFormControl>
      </div>

      <Button variant="contained" onClick={send}>
        コメントの投稿
      </Button>
    </>
  );
};

export default CommentForm;
