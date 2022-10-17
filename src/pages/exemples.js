import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiCalls from '../apiCalls'

function Exemples() {
  const [decisions, setDecisions] = useState([])

  useEffect(  () => {
    const getDecisions = async ()=>{
      const decisionsFromServer = await apiCalls.GetAllDecisions();
      setDecisions(decisionsFromServer)
    }
    getDecisions();
  }, [])

  return (
    <div>

      {decisions.length == 0 &&
        <h2>There are no exemples</h2>
      }

      {decisions.map((d)=>{
        return(
          <div key={d.decisionId}>
            {d.idea}
            </div>
        )
      })}
    
      </div>
)}

export default Exemples