import { serverClient, q } from "../config/db";

export const getAllAmbientazioni = serverClient
  .query(q.Paginate(q.Match(q.Ref("indexes/all_ambientazioni"))))
  .then((response) => {
    const expenseRef = response.data;
    const getAllDataQuery = expenseRef.map((ref) => {
      return q.Get(ref);
    });
    return serverClient.query(getAllDataQuery).then((data) => data);
  })
  .catch((error) => console.error("Error: ", error.message));

export const getAllTarocchi = serverClient
  .query(q.Paginate(q.Match(q.Ref("indexes/all_tarocchi"))))
  .then((response) => {
    const expenseRef = response.data;
    const getAllDataQuery = expenseRef.map((ref) => {
      return q.Get(ref);
    });
    return serverClient.query(getAllDataQuery).then((data) => data);
  })
  .catch((error) => console.error("Error: ", error.message));

export const getAllAbilita = serverClient
  .query(q.Paginate(q.Match(q.Ref("indexes/all_abilita"))))
  .then((response) => {
    const expenseRef = response.data;
    const getAllDataQuery = expenseRef.map((ref) => {
      return q.Get(ref);
    });
    return serverClient.query(getAllDataQuery).then((data) => data);
  })
  .catch((error) => console.error("Error: ", error.message));

export const getAllCaratteristiche = serverClient
  .query(q.Paginate(q.Match(q.Ref("indexes/all_caratteristiche"))))
  .then((response) => {
    const expenseRef = response.data;
    const getAllDataQuery = expenseRef.map((ref) => {
      return q.Get(ref);
    });
    return serverClient.query(getAllDataQuery).then((data) => data);
  })
  .catch((error) => console.error("Error: ", error.message));

export const getAllPregi = serverClient
  .query(q.Paginate(q.Match(q.Ref("indexes/all_pregi"))))
  .then((response) => {
    const expenseRef = response.data;
    const getAllDataQuery = expenseRef.map((ref) => {
      return q.Get(ref);
    });
    return serverClient.query(getAllDataQuery).then((data) => data);
  })
  .catch((error) => console.error("Error: ", error.message));

export const getAllDifetti = serverClient
  .query(q.Paginate(q.Match(q.Ref("indexes/all_difetti"))))
  .then((response) => {
    const expenseRef = response.data;
    const getAllDataQuery = expenseRef.map((ref) => {
      return q.Get(ref);
    });
    return serverClient.query(getAllDataQuery).then((data) => data);
  })
  .catch((error) => console.error("Error: ", error.message));
