import TaroccoDominanteComponent from "../Tarocchi/TaroccoDominanteComponent";
import TaroccoPassatoComponent from "../Tarocchi/TaroccoPassatoComponent";
import { useSelector } from "react-redux";
import { getAmbSoviet } from "../../utils/etaMethods";

function TarocchiTabContainer() {
  const { eta } = useSelector((state) => state.eta);
  const { ambientazione } = useSelector((state) => state.generalita);

  const handleAmbSoviet = () => {
    const ambSoviet = getAmbSoviet;
    return ambSoviet.id === ambientazione ? eta >= 7 : eta >= 19;
  };

  return (
    <>
      <TaroccoDominanteComponent />
      {handleAmbSoviet() && <TaroccoPassatoComponent />}
    </>
  );
}

export default TarocchiTabContainer;
