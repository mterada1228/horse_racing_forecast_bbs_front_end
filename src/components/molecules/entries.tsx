import { FC } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";
import getGateNumberRowStyle from "../../utils/getGateNumberRowStyle";

type Props = {
  horses: {
    gate_number: number;
    number: number;
    name: string;
    sex: string;
    age: number;
    weight: number;
    jockey: string;
    stable: string;
    horse_weight: number;
    horse_weight_gain_or_loss: number;
    odds: number;
    popularity: number;
  }[];
};

const MyTableCell = styled(TableCell)(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.common.black,
  textAlign: "center",
}));

const MyTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const Entries: FC<Props> = (props) => {
  const { horses } = props;

  return (
    <TableContainer component={Paper} sx={{ marginBottom: "3%" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <MyTableHead>
          <TableRow>
            <MyTableCell>枠番</MyTableCell>
            <MyTableCell>馬番</MyTableCell>
            <MyTableCell>馬名</MyTableCell>
            <MyTableCell>性齢</MyTableCell>
            <MyTableCell>斤量</MyTableCell>
            <MyTableCell>騎手</MyTableCell>
            <MyTableCell>厩舎</MyTableCell>
            <MyTableCell>馬体重</MyTableCell>
            <MyTableCell>オッズ</MyTableCell>
            <MyTableCell>人気</MyTableCell>
          </TableRow>
        </MyTableHead>
        <TableBody>
          {horses.map((horse, i) => (
            <TableRow key={i}>
              <MyTableCell
                component="th"
                scope="row"
                style={getGateNumberRowStyle(horse.gate_number)}
              >
                {horse.gate_number}
              </MyTableCell>
              <MyTableCell>{horse.number}</MyTableCell>
              <MyTableCell>{horse.name}</MyTableCell>
              <MyTableCell>{`${horse.sex}${horse.age}`}</MyTableCell>
              <MyTableCell>{horse.weight}</MyTableCell>
              <MyTableCell>{horse.jockey}</MyTableCell>
              <MyTableCell>{horse.stable}</MyTableCell>
              <MyTableCell>{`${horse.horse_weight} (${horse.horse_weight_gain_or_loss})`}</MyTableCell>
              <MyTableCell>{horse.odds}</MyTableCell>
              <MyTableCell>{horse.popularity}</MyTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Entries;
