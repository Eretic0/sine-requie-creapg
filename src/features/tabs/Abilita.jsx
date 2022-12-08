import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import AbilitaDb from "../../db/Abilita";
import CaratteristicheDb from "../../db/Caratteristiche";
import { setAbilita } from "../../redux/slices/abilitaSlice";

const Abilita = () => {
  const { abilita } = useSelector((state) => state.abilita);
  const dispatch = useDispatch();
  const arrayCounterFallimento = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {}, []);

  const getCaratteristica = (ab) => {
    const car = CaratteristicheDb.find(
      (car) => car.id === ab.caratteristicaRef
    );
    return car.nome + " " + car.valore;
  };

  const visualizzaSpecifico = (ab) => {
    if (ab.specifico) {
      if (ab.specifico.length > 0) {
        return (
          <>
            {ab.nome}
            <br />
            <Select
              labelId={`label-select-specifico-${ab.id}`}
              id={`select-specifico-${ab.id}`}
              label="specifico"
            >
              {ab.specifico.map((s) => (
                <MenuItem key={s.id} value={s.id}>
                  {s.nome}
                </MenuItem>
              ))}
            </Select>
          </>
        );
      } else {
        return (
          <>
            {ab.nome}
            <br />
            <TextField
              id={`outlined-textfield-${ab.id}`}
              label="specifico"
              variant="outlined"
            />
          </>
        );
      }
    }

    return ab.nome;
  };

  return (
    <Card headerText="Abilità">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">V/S</TableCell>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Grado</TableCell>
              <TableCell align="center">Caratteristica</TableCell>
              <TableCell align="center">Counter Fallimenti</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {abilita.map((ab) => (
              <TableRow
                key={ab.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                ></TableCell>
                <TableCell align="center">{visualizzaSpecifico(ab)}</TableCell>
                <TableCell align="center">{ab.grado}</TableCell>
                <TableCell align="center">{getCaratteristica(ab)}</TableCell>
                <TableCell align="center">
                  {arrayCounterFallimento.map((c) => (
                    <Checkbox
                      key={c}
                      disabled
                      checked={c <= ab.counterFallimento}
                    />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Abilita;
