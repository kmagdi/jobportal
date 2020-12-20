import React, { useState,useEffect } from 'react';
import csvToJSON from "./csvToJson" 
import {Link} from "react-router-dom"
import {FormInput} from "./FormInput"
import { Table,Thead,Th, Tr, Td } from 'react-super-responsive-table';
import {useFetch} from "./useFetch"

export const Detail=({match})=>{
    const [item,setItem]=useState({})
    const [msg,setMsg]=useState('')

    useEffect(()=>{
      console.log("neve:"+match.params.jobName)
        const url="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/reszletek.csv"
        fetch(url)
        .then(response=>response.text())
        .then(text=>{
            console.log('twxt='+text)
          const jobJSON=csvToJSON(text, ';')
          
          const job=[]
          jobJSON.forEach(element => {
            element.id==match.params.id?job.push(element):console.log(element.id)
          });
          
            console.log("job="+job[0])
            job.length>0 ? setItem(job[0]): setMsg("nincsenek adatok")
        });
    },[])


   /* const url="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/reszletek.csv"
    const {data,loading}=useFetch(url)
    console.log("data="+data)
    const dataJSON=csvToJSON(String(data), ';')
    console.log("dataJson="+Object.keys(dataJSON[0]))
    const job=dataJSON.filter(obj=>obj.jobName!=null && obj.id==match.params.id)  
    console.log(job)

    */
  

   
    return(
        <div className="container-fluid p-5 " style={{ backgroundColor: '#FAEBEFFF',color: '#333D79FF' }}>
        <h3 className='m-5'>{match.params.jobName} </h3>
      
      <div className="row   justify-content-center">
       <div className="col-sm-7 table-responsive-sm ">
        
       
        <Table className="table table-hover table-bordered m-5 ">
          {{msg}?<caption>{msg}</caption> : ''}
          <Tr className="text-left">         
                  <Tr>
                    <Th >Intézmény neve</Th>
                    <Td>{item.name}</Td>
                  </Tr>
                  <Tr>
                    <Th>Intézmény címe</Th>
                    <Td>{item.adress}</Td>
                  </Tr>
                  <Tr>
                    <Th>E-mail cím</Th>
                     <Td>{item.email}</Td>
                  </Tr>
                  <Tr>
                    <Th>Jogviszony időtartama</Th>
                    <Td>...</Td>
                  </Tr>
                  <Tr>
                    <Th>Foglalkoztatás jellege</Th>
                    <Td>...</Td>
                  </Tr>
                  <Tr>
                    <Th>Munkavégzés helye</Th>
                    <Td>{item.location}</Td>
                  </Tr>
                  <Tr>
                    <Th>Feladat típusa</Th>
                    <Td>{item.type}</Td>
                  </Tr>
                  <Tr>
                    <Th>Elvárt képzes</Th>
                    <Td>{item.qualification}</Td>
                  </Tr>
                  <Tr>
                    <Th>Előnyök</Th>
                    <Td>{item.advantages}</Td>
                  </Tr>
                  <Tr>
                    <Th>BetölThetőség időpontja</Th>
                    <Td>{item.starTdate}</Td>
                  </Tr>
                  <Tr>
                     <Th>Jelentkezési határidő</Th>
                     <Td>...</Td>
                  </Tr> 
              </Tr>   
       </Table>
      </div> 
      <div className="col-sm-3"><FormInput /></div>
  </div> 
</div>
                     
 )
}                                 

