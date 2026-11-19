// Exporterad funktion som räknar ut ett studentpris med 10% rabatt
export function studentPris(pris: number): number {
  return Math.round(pris * 90) / 100;
}
