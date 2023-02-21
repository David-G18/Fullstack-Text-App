import 'dotenv/config'

export const config = {
  port: process.env.PORT ?? 3001,
  dbUser: process.env.DB_USER ?? '',
  dbPass: process.env.DB_PASS ?? '',
  database: process.env.DATABASE ?? ''
}
