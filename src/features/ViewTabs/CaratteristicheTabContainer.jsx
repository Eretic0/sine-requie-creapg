import { useSelector } from "react-redux";
import { carAffinitaOccultaByStore } from "../../utils/caratteristicheMethods";
import CaratteristicheComponent from "../Caratteristiche/CaratteristicheComponent";
import DoniComponent from "../Doni/DoniComponent";

function CaratteristicheTabContainer() {
  const { caratteristiche } = useSelector((state) => state.caratteristiche);

  const carAffinita = carAffinitaOccultaByStore(caratteristiche);

  return (
    <>
      <CaratteristicheComponent />
      {carAffinita.valore >= 8 && <DoniComponent />}
    </>
  );
}

export default CaratteristicheTabContainer;
