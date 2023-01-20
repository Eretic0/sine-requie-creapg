import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AbilitaTable from "../../components/AbilitaTable";
import Card from "../../components/Card";

const Abilita = () => {
  const { abilita } = useSelector((state) => state.abilita);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <Card headerText="Abilità">
      <AbilitaTable abilita={abilita} />
    </Card>
  );
};

export default Abilita;
