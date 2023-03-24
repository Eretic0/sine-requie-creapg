import { useSelector } from "react-redux";
import {
  carAffinitaOccultaByStore,
  carEquilibrioMentaleByStore,
} from "../../utils/caratteristicheMethods";
import CaratteristicheComponent from "../Caratteristiche/CaratteristicheComponent";
import DisturbiMentaliComponent from "../DisturbiMentali/DisturbiMentaliComponent";
import DoniComponent from "../Doni/DoniComponent";

function CaratteristicheTabContainer() {
  const { caratteristiche } = useSelector((state) => state.caratteristiche);

  const carAffinita = carAffinitaOccultaByStore(caratteristiche);

  const carEquiMenta = carEquilibrioMentaleByStore(caratteristiche);

  return (
    <>
      <CaratteristicheComponent />
      {carEquiMenta.valore <= 3 && <DisturbiMentaliComponent />}
      {carAffinita.valore >= 8 && <DoniComponent />}
    </>
  );
}

export default CaratteristicheTabContainer;
