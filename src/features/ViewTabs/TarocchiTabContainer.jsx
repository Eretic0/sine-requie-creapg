import TaroccoDominanteComponent from "../Tarocchi/TaroccoDominanteComponent";
import TaroccoPassatoComponent from "../Tarocchi/TaroccoPassatoComponent";
import { useSelector } from "react-redux";
import { ambSoviet } from "../../utils/ambientazioniMethods";

function TarocchiTabContainer() {
  const { eta } = useSelector((state) => state.eta);
  const { ambientazione } = useSelector((state) => state.generalita);

  const handleAmbSoviet = () =>
    ambSoviet.id === ambientazione ? eta >= 8 : eta >= 19;

  return (
    <>
      <TaroccoDominanteComponent />
      {handleAmbSoviet() && <TaroccoPassatoComponent />}
    </>
  );
}

export default TarocchiTabContainer;
