import TaroccoDominanteComponent from "../Tarocchi/TaroccoDominanteComponent";
import TaroccoPassatoComponent from "../Tarocchi/TaroccoPassatoComponent";
import { useSelector } from "react-redux";

function TarocchiTabContainer() {
  const { eta } = useSelector((state) => state.eta);
  return (
    <>
      <TaroccoDominanteComponent />
      {eta >= 19 && <TaroccoPassatoComponent />}
    </>
  );
}

export default TarocchiTabContainer;
