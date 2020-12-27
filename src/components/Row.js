import React, { useState } from 'react';
import {Link} from "react-router-dom"
import {  Tr, Td } from 'react-super-responsive-table';

export const Row=(props)=>{
        return(
            <React.Fragment>
            <Tr className="text-center">
                <Td className="text-left" onClick={()=>props.onClickLink(true)} key={props.job.id}><Link style={{ color: '#333D79FF',textDecoration:"underline #333D79FF" }} to={`/detail/${props.job.id},${props.job.jobName}`}>{props.job.jobName} </Link></Td>
                <Td >{props.job.jobLocation}</Td>
                <Td >{props.job.jobType}</Td>
                <Td >{props.job.posted}</Td>
            </Tr>              
        </React.Fragment>          
        )
    }