import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiCalls from '../apiCalls'
import BasicTable from '../components/Table/Table'

function Exemples() {
    const [decisions, setDecisions] = useState([])

    useEffect(() => {
        const getDecisions = async () => {
            const decisionsFromServer = await apiCalls.GetAllDecisions()
            setDecisions(decisionsFromServer)
            console.log(decisionsFromServer)
        }
        getDecisions()
    }, [])

    return (
        <div>
            {decisions.length == 0 && <h2>There are no exemples</h2>}

            {decisions.map((d) => {
                return (
                    <div
                        key={d.decisionId}
                        className="the-table"
                    >
                        <h2>{d.idea}</h2>
                        <BasicTable
                            pros={d.prosList}
                            cons={d.consList}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Exemples
