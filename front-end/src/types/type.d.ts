export interface Text {
  id: string
  description: string
  date: Date
}

// Define a type for the slice state
export interface TextState {
  texts: Text[]
}
