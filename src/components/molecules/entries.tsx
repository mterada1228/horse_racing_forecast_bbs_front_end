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

const Entries: FC<Props> = (props) => {
  const { horses } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>枠番</TableCell>
            <TableCell>馬番</TableCell>
            <TableCell>馬名</TableCell>
            <TableCell>性齢</TableCell>
            <TableCell>斤量</TableCell>
            <TableCell>騎手</TableCell>
            <TableCell>厩舎</TableCell>
            <TableCell>馬体重</TableCell>
            <TableCell>オッズ</TableCell>
            <TableCell>人気</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {horses.map((horse, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {horse.gate_number}
              </TableCell>
              <TableCell>{horse.number}</TableCell>
              <TableCell>{horse.name}</TableCell>
              <TableCell>{`${horse.sex}${horse.age}`}</TableCell>
              <TableCell>{horse.weight}</TableCell>
              <TableCell>{horse.jockey}</TableCell>
              <TableCell>{horse.stable}</TableCell>
              <TableCell>{`${horse.horse_weight} (${horse.horse_weight_gain_or_loss})`}</TableCell>
              <TableCell>{horse.odds}</TableCell>
              <TableCell>{horse.popularity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Entries;
