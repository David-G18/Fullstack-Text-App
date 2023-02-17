const textsArray: string[] = []

export function returnTextsArray (): string[] {
  return textsArray
}

export function enterText (texto: string): void {
  textsArray.push(texto)
}
