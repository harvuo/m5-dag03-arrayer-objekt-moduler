// Dag 3, del 1: Arrayer och objekt i Console.
import { meny } from "./data";

// Steg 10, Moduler på riktigt
import { studentPris } from "./rabatt";
import { formateraPris } from "./pris";
console.log(formateraPris(studentPris(100)));
console.log(formateraPris(studentPris(77.3)));
//Testa fel:
// 1) ta bort type="module" i index.html
// Felmeddelande: Uncaught SyntaxError: Cannot use import statement outside a module (at main.ts?t=1795084552265:2:1)
// Betyder att utan type="module" så går det inte att importera funktionen studentPris från main.ts
// 2) skriv fel filnamn i import
// Felmeddelande: '"./rabatt"' has no exported member named 'studentPrix'. Did you mean 'studentPris'?ts(2724)
// Betyder att det inte finns någon exporterad funktion med det namnet
// 3) öppna index.html genom att dubbelklicka (utan servern)
// Access to script at 'file:///src/main.ts' from origin 'null' has been blocked by CORS policy:
// //Cross origin requests are only supported for protocol schemes: chrome, chrome-experimental-site-token-provider,
// chrome-extension, chrome-untrusted, data, http, https, isolated-app.
// och Failed to load resource: net::ERR_FAILED
// Betyder att webbläsaren blockerar webbläsaren blockerar inläsningen av file:///src/main.ts

// UPPGIFT 1: arrayer
// a) skapa const drycker: string[] = ["Bryggkaffe", "Latte", "Te"];
// b) lägg till "Chai" sist med push. Skriv ut listan och längden.
// c) ta bort sista med pop och skriv ut vad som togs bort.
// d) skriv ut platsen för "Latte" (indexOf) och om "Cola" finns (includes).
// e) skriv ut hela listan som en text: drycker.join(", ")
const drycker: string[] = ["Bryggkaffe", "Latte", "Te"];
drycker.push("Chai");
console.log(drycker, drycker.length);
console.log(drycker.pop());
console.log(drycker.indexOf("Latte"));
console.log(drycker.includes("Cola"));
console.log(drycker.join());

// UPPGIFT 2: objekt
// a) skapa const kopp = { namn: "Latte", pris: 45, vegetarisk: true};
// b) skriv ut kopp.namn och kopp["pris"]
// c) ändra priset till 48, och lägg till egenskapen storlek: "stor"
//    TypeScript klagar på storlek. Beskriv objektet med en interface där storlek är valfri (storlek?: string).
// d) skriv ut Object.keys(kopp)
interface Dryck {
  namn: string;
  pris: number;
  vegetarisk: boolean;
  storlek?: string;
}
const kopp: Dryck = { namn: "Latte", pris: 45, vegetarisk: true };
console.log(kopp.namn);
console.log(kopp["pris"]);
kopp.pris = 48;
kopp.storlek = "stor";
console.log(kopp);
console.log(Object.keys(kopp));
console.log(Object.values(kopp));

// UPPGIFT 3: arrayer av objekt
// a) skriv ut hur många rätter menyn har och namnet på den första
// b) loopa med for...of och skriv ut "namn – pris kr" för varje rätt
// c) skriv ut namnet på den sista rätten utan att veta antalet (tips: length - 1)
console.log("Antal rätter: ", meny.length);
console.log("Namn på första rätten: ", meny[0].namn);
for (const { namn, pris } of meny) {
  console.log(`${namn} - ${pris} kr`);
}
console.log("Namn på sista rätten: ", meny[meny.length - 1].namn);
