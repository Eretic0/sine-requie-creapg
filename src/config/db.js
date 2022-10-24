import faunadb, { query as q } from "faunadb";

var serverClient = new faunadb.Client({
  secret: process.env.REACT_APP_DB_SERVER_KEY,
  domain: "db.eu.fauna.com",
});

export { serverClient, q };
