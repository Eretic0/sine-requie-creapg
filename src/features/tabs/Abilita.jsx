import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import AbilitaDb from "../../db/Abilita";
import CaratteristicheDb from "../../db/Caratteristiche";

const Abilita = () => {
  const [abilita, setAbilita] = useState([]);
  const [caratteristica, setCaratteristica] = useState([]);

  useEffect(() => {
    setCaratteristica(CaratteristicheDb);
    setAbilita(AbilitaDb.filter((ab) => ab.prestampata === true));
  }, []);

  const getCaratteristica = (ab) =>
    caratteristica.find((car) => car.id === ab.caratteristica).nome;

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
                <TableCell align="center">{ab.descrizione}</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">{getCaratteristica(ab)}</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Abilita;
