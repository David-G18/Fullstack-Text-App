export {}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PASS: string
      DB_USER: string
      DATABASE: string
      PORT: number
    }
  }
}
