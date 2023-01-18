import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import CaratteristicheDb from "../../db/Caratteristiche";

const Abilita = () => {
  const { abilita } = useSelector((state) => state.abilita);
  const dispatch = useDispatch();
  const arrayCounterFallimento = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {}, []);

  const getCaratteristica = (ab) => {
    if (ab.caratteristicaRef != null) {
      const car = CaratteristicheDb.find(
        (car) => car.id === ab.caratteristicaRef
      );
      return car.nome + " " + car.valore;
    }
  };

  const visualizzaSpecifico = (ab) => {
    if (ab.specifico) {
      if (ab.specifico.length > 0) {
        return (
          <>
            {ab.nome}
            <br />
            <InputLabel id={`label-select-specifico-${ab.id}`}>
              specifico
            </InputLabel>
            <Select
              labelId={`label-select-specifico-${ab.id}`}
              id={`select-specifico-${ab.id}`}
              defaultValue=""
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
      <Table>
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
            <TableRow key={ab.id}>
              <TableCell align="center" component="th" scope="row"></TableCell>
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
    </Card>
  );
};

export default Abilita;
