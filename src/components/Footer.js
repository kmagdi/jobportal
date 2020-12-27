import { useFetch } from './useFetch';
import csvToJSON from "./csvToJson"
import "./Footer.css"

export const Footer=()=>{
  const url="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/elerhetosegek.csv"    
  const {data,loading}=useFetch(url)
  const contactJSON=csvToJSON(String(data), ';')
  const contactData=contactJSON[0]
    return(
        <div className="card-group ">
              <div className="card ">
                  <div  className="card-footer  foot"><small ><b>Székhely:</b>{contactData.location}</small>
                  </div>
              </div>
              <div className="card " >
                  <div className="card-footer  lpc ">
                      <small ><b>Levelezési cím:</b>{contactData.adress}</small>
                  </div>
              </div>
              <div className="card" >
                  <div className="card-footer  lpc">
                      <small ><b>Telefon:</b>{contactData.tel}</small>
                  </div>
              </div>
              <div className="card" >
                  <div className="card-footer  lpc">
                      <small ><b>E-mail:</b>{contactData.email}</small>
                  </div>
              </div>
              <div className="card" >
                  <div className="card-footer  lpc">
                      <small ><b>OM azonosító:</b>{contactData.omid}</small>
                  </div>
              </div>             
          </div>
          
    )
}