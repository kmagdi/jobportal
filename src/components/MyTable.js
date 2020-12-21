import {Row} from "./Row"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';



export const MyTable=({filteredData})=>{
   return(
       <div>
          
            <Table className="table table-hover ">
                <Thead  style={{ backgroundColor: '#333D79FF',color:'#FAEBEFFF'}}>
                    <Tr className="text-center">
                        <Th className="text-left" >Állás megnevezése</Th>
                        <Th >Munkavégzés helye</Th>
                        <Th >Állás típusa</Th>
                        <Th >Közzétevő</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredData.map((obj)=><Row key={obj.id} job={obj}/>)  }       
                </Tbody>
            </Table>
    
       </div>              
    )
}