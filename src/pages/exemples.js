import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiCalls from '../apiCalls'

function Exemples() {
  const [decisions, setDecisions] = useState([])

  useEffect(  () => {
    axios.get('https://localhost:7139/api/Decisions')
    .then(res => {
      setDecisions(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
    /*var response =  apiCalls.GetAllDecisions()
    setDecisions(response);*/
    /*
    fetch("https://localhost:7139/api/Decisions")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          });*/

  }, [])


  return (
    decisions.map(d=>{
      return(
        <div key={d.decisionId}>{d.idea}</div>
      )
    })
  )
}

export default Exemples