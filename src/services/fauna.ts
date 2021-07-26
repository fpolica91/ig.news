import { Client } from 'faunadb'

export const fauna = new Client({
  secret: process.env.FAUNA_CLIENT,
  domain: "db.us.fauna.com"
})