import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DisturbiMentaliDb from "../../db/DisturbiMentali";
import { carEquilibrioMentaleByStore } from "../../utils/caratteristicheMethods";
import { addDisturbiMentali } from "../../redux/slices/disturbiMentaliSlice";

const DisturbiMentaliComponent = () => {
  const { disturbiMentali } = useSelector((state) => state.disturbiMentali);
  const { caratteristiche } = useSelector((state) => state.caratteristiche);
  const dispatch = useDispatch();

  const carEquilibrioMentale = carEquilibrioMentaleByStore(caratteristiche);

  const getNumbersOfDisturbi = () => {
    let array = [];
    const valoreEquilibrioMentale = carEquilibrioMentale.valore;
    if (valoreEquilibrioMentale === 3) {
      array = [{ equilibrioMental: 3 }];
    } else if (valoreEquilibrioMentale === 2) {
      array = [{ equilibrioMental: 3 }, { equilibrioMental: 2 }];
    } else if (valoreEquilibrioMentale <= 1) {
      array = [
        { equilibrioMental: 3 },
        { equilibrioMental: 2 },
        { equilibrioMental: 1 },
      ];
    }
    return array;
  };

  const getDisturboByEquilibrioMental = (equilibrioMental) => {
    const obj = disturbiMentali.find(
      (t) => t.equilibrioMental === equilibrioMental
    );
    if (obj) {
      return obj.disturbo;
    }
    return "";
  };

  const handleChangeDisturbo = (valEquiMent, event) => {
    const dist = {
      equilibrioMental: valEquiMent,
      disturbo: event.target.value,
    };
    dispatch(addDisturbiMentali(dist));
  };

  return (
    <Card headerText="Disturbi Mentali">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Valore Equilibrio Mentale</TableCell>
              <TableCell>Disturbo Mentale</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getNumbersOfDisturbi().map((t) => (
              <TableRow key={t.equilibrioMental}>
                <TableCell component="th" scope="row">
                  {t.equilibrioMental}
                </TableCell>
                <TableCell>
                  <Select
                    labelId={`${t.equilibrioMental}-select-label`}
                    id={`${t.equilibrioMental}-select`}
                    value={getDisturboByEquilibrioMental(t.equilibrioMental)}
                    label="Disturbo Mentale"
                    onChange={(event) =>
                      handleChangeDisturbo(t.equilibrioMental, event)
                    }
                  >
                    {DisturbiMentaliDb.map((d) => (
                      <MenuItem key={d.id} value={d}>
                        {d.nome}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default DisturbiMentaliComponent;
