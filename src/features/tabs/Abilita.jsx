import Card from "../../components/Card";
import React, { useState, useEffect } from "react";
import { getAllAbilita, getAllCaratteristiche } from "../../api";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const Abilita = () => {
  const [abilita, setAbilita] = useState([]);
  const [caratteristica, setCaratteristica] = useState([]);

  useEffect(() => {
    getAllCaratteristiche.then((res) => {
      setCaratteristica(res);
    });

    getAllAbilita.then((res) => {
      setAbilita(res.filter((ab) => ab.data.prestampata === true));
    });
  }, []);

  const getCaratteristica = (ab) =>
    caratteristica.find(
      (car) => car.ref.value.id === ab.data.caratteristica.value.id
    ).data.nome;

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
                key={ab.ref.value.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                ></TableCell>
                <TableCell align="center">{ab.data.descrizione}</TableCell>
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
