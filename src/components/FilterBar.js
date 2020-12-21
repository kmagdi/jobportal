import React, { useState, useEffect } from 'react'; 
import {useFetch } from './useFetch';
import csvToJSON from "./csvToJson"
import {MyTable} from "./MyTable"


export const FilterBar = () => {
  const [searchedWord,setsearchedWord]=useState('')

  const urlJobs="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/allasok.csv"

  const {data,loading}=useFetch(urlJobs)
  const jobsJSON=csvToJSON(String(data), ';')
  const filtered=jobsJSON.filter(obj=>obj.jobName!=null)  //a plussz ures sor kitorlese

  const handleSearch=(e)=>{
    console.log(e.target.id)
    if(e.target.id=="jobName") {
        document.getElementById("jobType").value="1";
       
    }
    if(e.target.id=="jobType") {
        document.getElementById("jobName").value="1";
        document.getElementById("word").value=""
    }
    if(e.target.id=="word") {
        document.getElementById("jobName").value="1";
        document.getElementById("jobType").value="1"
    }
    e.target.value==1? setsearchedWord(''): setsearchedWord(e.target.value)
}

  const uniqueJobType = [...new Set(filtered.map(item => item.jobType))]
  const sortedJobType=uniqueJobType.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0));   
  const uniqueJobName = [...new Set(filtered.map(item => item.jobName))]
  const sortedJobName=uniqueJobName.sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0));   

  const filteredData =filtered.filter(obj => JSON.stringify(obj).toLocaleLowerCase().includes(searchedWord.toLocaleLowerCase())) 
       
 //console.log("filterbar:"+Object.keys(filteredData))
    
    return(
      <div className="container-fluid p-5 " style={{ backgroundColor: '#FAEBEFFF',color: '#333D79FF' }}>
        <div className="row p-5 border justify-content-center">
                  <form className="form-inline" >
                      <label >Kulcsszavas keresés:</label>
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="word"
                              value={searchedWord} onChange={handleSearch}/>
                 
                      <select className="form-control mr-sm-2 m-3" onChange={handleSearch} id="jobName" >
                          <option value="1">állás nevek</option>{sortedJobName.map(obj=><option className="text-dark">{obj}</option>)}</select>     
                    
                      <select className="form-control mr-sm-2 m-3"  onChange={handleSearch} id="jobType">
                          <option  value="1">állás típusok</option>{sortedJobType.map(obj=><option className="text-dark">{obj}</option>)}</select>     
                       <label>A meghirdetett állások száma:{filtered.length}</label>  
                  </form>

                <MyTable filteredData={filteredData} />
     
     </div>    
</div>
    )

}
