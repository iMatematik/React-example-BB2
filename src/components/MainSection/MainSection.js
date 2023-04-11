import React from "react";
import './MainSection.css';

export default function MainSection (){
return (
  <div className="infoText">
  <h3>INFO</h3>
  <p>
    Hej! Det här är en sida som jag gjort som ett exmepl av react. Här hittar man datainläsning från en Json-fil
    och användning av D3, ett grafisktbibliotek för datavisualisering.
  </p>
    <p>Pet Types ger en graf av alla djuren personenerna i data.json har, 
    för att se vilket djur någon har skriv ett namn eller sök på ett djur
    för att se vilka som har sådana djur.
    </p>
  </div>
);
}
