import React, { useState, useEffect } from "react";
import csvToJSON from "./csvToJson";
import { FormInput } from "./FormInput";
import "./Detail.css"

export const Detail = ({ match }) => {
  const [item, setItem] = useState({});
  const [msg, setMsg] = useState("");

  useEffect(() => {
    //console.log("neve:" + match.params.jobName);
    const url =
      "https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/reszletek.csv";
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        const jobJSON = csvToJSON(text, ";");
        const job = [];
        jobJSON.forEach((element) => {
          element.id === match.params.id ? job.push(element) : console.log(element.id);
        });
        job.length > 0 ? setItem(job[0]) : setMsg("...nincsenek feltőltve az adatok...");
      });
  }, [match.params.id]);

  return (
    <div className="container-fluid p-5 row justify-content-center" style={{ backgroundColor: "#FAEBEFFF", color: "#333D79FF" }} >
       
       <div><h4 className="h4 m-5">{match.params.jobName} </h4>
        <p>{msg ? msg : ""}</p>
         <div className="Rtable Rtable--2cols">     
              <div className="Rtable-cell"><b>Intézmény neve</b></div>
              <div className="Rtable-cell">{item.name}</div>
              <div className="Rtable-cell"> <b>Intézmény címe</b></div>
              <div className="Rtable-cell">{item.adress}</div>
              <div className="Rtable-cell"> <b>E-mail cím</b></div>
              <div className="Rtable-cell">{item.email}</div>
              <div className="Rtable-cell"> <b>Jogviszony időtartama</b></div>
               <div className="Rtable-cell">...</div>
              <div className="Rtable-cell"> <b>Foglalkoztatás jellege</b></div>
              <div className="Rtable-cell">...</div>
              <div className="Rtable-cell"><b>Munkavégzés helye</b></div>
              <div className="Rtable-cell">{item.location}</div>
              <div className="Rtable-cell"><b>Feladat típusa</b></div>
              <div className="Rtable-cell">{item.type}</div>
              <div className="Rtable-cell"><b>Elvárt képzes</b></div>
              <div className="Rtable-cell">{item.qualification}</div>
              <div className="Rtable-cell"><b>Előnyök</b></div>
              <div className="Rtable-cell">{item.advantages}</div>
              <div className="Rtable-cell"><b>Betölthetőség időpontja</b></div>
              <div className="Rtable-cell">{item.starTdate}</div>
              <div className="Rtable-cell"><b>Jelentkezési határidő</b></div>
              <div className="Rtable-cell">{item.starTdate}</div>
        </div> 
       </div>
          <div className="formInput">
            <FormInput />
          </div>
       
    </div>
  );
};
