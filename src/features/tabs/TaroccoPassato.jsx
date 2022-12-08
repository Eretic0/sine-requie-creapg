import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import TaroccoPaper from "../../components/TaroccoPaper";
import { generateRandomNumer } from "../../utils/random";
import TarocchiDb from "../../db/Tarocchi";
import { useSelector, useDispatch } from "react-redux";
import { setTaroccoPassato } from "../../redux/slices/taroccoSlice";
import { setAbilita } from "../../redux/slices/abilitaSlice";
import AbilitaDb from "../../db/Abilita";

function TaroccoPassato() {
  const { taroccoPassato } = useSelector((state) => state.tarocco);
  const dispatch = useDispatch();
  const [tarocchi, setTarocchi] = useState([]);

  const handleRandomTaroccoPassato = () => {
    const number = generateRandomNumer(21, 0);
    let tarocco = [];
    if (tarocchi.length > 0) {
      tarocco = tarocchi.filter((tar) => tar.numero === number);
      if (tarocco.length > 0) {
        dispatch(setTaroccoPassato(tarocco[0]));
        let listAbilita = AbilitaDb.filter((ab) => ab.prestampata === true);
        const listAbilitaByTarocco = tarocco[0].abilitaRef;
        listAbilitaByTarocco.forEach((element) => {
          let abi = AbilitaDb.find((ab) => ab.id === element.id);
          if (abi.prestampata) {
            listAbilita = listAbilita.map((el) =>
              el.id === element.id
                ? {
                    ...el,
                    grado: +0,
                    counterFallimento: el.counterFallimento + 5,
                  }
                : el
            );
          } else {
            abi.grado = +0;
            listAbilita.push(abi);
          }
        });
        dispatch(setAbilita(listAbilita));
      }
    }
  };

  useEffect(() => {
    setTarocchi(TarocchiDb);
  }, []);

  return (
    <Card headerText="Tarocco Passato">
      <Stack spacing={2} direction="row">
        <Button
          size="small"
          variant="contained"
          onClick={handleRandomTaroccoPassato}
        >
          Estrai
        </Button>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs>
          <TaroccoPaper tarocco={taroccoPassato} passato={true} />
        </Grid>
      </Grid>
    </Card>
  );
}

export default TaroccoPassato;
