# DOM

I min kod har jag olika element med DOM-manipulation via "getElementById" och "addEventListener" som lyssnar på knapptryck och uppdaterar sidan.

Här har jag skapat en knapp för att lägga in nya artiklar och en fält
för att fylla in bed deras benämning i HTML strukturen. En lista (ul, li) där alla artiklar samlas och en Klar och Ta bort knapparna. Klar lägger artiklarna i en lista och Ta bort knappen tar bort en och en.

Javascript funktioner:
document.getElementById för att hämta funktionen till knapparna och inmättningen

Event Listeners:
addEventListener lagt jag för att lägga in nya artiklar vid "click".
När användaren klickar på "Klar" knappen läggs nya ifylda artiklar i listan.
och "Ta bort" knappens funktion tar bort den senaste lastChild (artikeln) från listan.
