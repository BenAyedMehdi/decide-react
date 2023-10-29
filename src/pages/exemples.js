import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiCalls from '../apiCalls'
import BasicTable from '../components/Table'

function Exemples() {
  const [decisions, setDecisions] = useState([])

  useEffect(  () => {
    const getDecisions = async ()=>{
      const decisionsFromServer = await apiCalls.GetAllDecisions();
      const publicDecisions = decisionsFromServer.filter(d=>d.isPublic)
      setDecisions(publicDecisions)
      console.log(publicDecisions)
    }
    getDecisions();
  }, [])

  return (
    <div>

      {decisions.length == 0 &&
        <h2>Loading...</h2>
      }

      {decisions.map((d)=> {
        return(
          <div key={d.decisionId} className='the-table'>
           <h2>{d.idea}</h2> 
           <BasicTable pros={d.prosList} cons={d.consList} />
          </div>
        )
      })}
    
      </div>
)}

export default Exemples