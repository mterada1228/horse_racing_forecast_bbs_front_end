import { FC } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import DateButton from "../atoms/dateButton";

const MyGrid = styled(Grid)(() => ({
  marginBottom: "2%",
}));

const DataButtons: FC = () => {
  return (
    <MyGrid container spacing={2}>
      <Grid item xs={4}>
        <DateButton date="2021/11/16(火)" />
      </Grid>
      <Grid item xs={4}>
        <DateButton date="2021/11/17(水)" />
      </Grid>
      <Grid item xs={4}>
        <DateButton date="2021/11/18(木)" />
      </Grid>
    </MyGrid>
  );
};

export default DataButtons;
