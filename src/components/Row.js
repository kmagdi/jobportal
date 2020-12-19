import React, { Component } from 'react';
import {Link} from "react-router-dom"
import {  Tr, Td } from 'react-super-responsive-table';

export const Row=({job})=>{
 
        return(
            <React.Fragment>
            <Tr className="text-center">
                <Td className="text-left" key={job.id}><Link to={`/detail/${job.id},${job.jobName}`}>{job.jobName} </Link></Td>
                <Td >{job.jobLocation}</Td>
                <Td >{job.jobType}</Td>
                <Td >{job.posted}</Td>
            </Tr>              
        </React.Fragment>         
        )
    }