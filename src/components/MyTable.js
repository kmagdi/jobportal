import {React,useState} from 'react'
import {Row} from "./Row"
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';



export const MyTable=(props)=>{
   console.log('props mytable:'+props.onClickLink)
   props.onClickLink(false)
   return(
       <div>
          
            <Table className="table table-hover table-striped ">
                <Thead  style={{ backgroundColor: '#333D79FF',color:'#FAEBEFFF'}}>
                    <Tr className="text-center">
                        <Th className="text-left" >Állás megnevezése</Th>
                        <Th >Munkavégzés helye</Th>
                        <Th >Állás típusa</Th>
                        <Th >Közzétevő</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {props.filteredData.map((obj)=><Row key={obj.id} job={obj} onClickLink={props.onClickLink} />)  }       
                </Tbody>
            </Table>
    
       </div>              
    )
}