import React, { useEffect, useState} from 'react'
import { firebase } from '../services'

const database = firebase.database()


export default function Accused({ userList }) {
  const [ accusedResults, setAccusedResults] = useState([])

  useEffect(() => {
    database.ref('accusations').on('value', (snapshot) => {
      const mappedResults = userList.map((user) => {
        const { charName, userCode } = user
        const votes = snapshot.val()[userCode]

        return {
          charName,
          votes
        }
      })

      setAccusedResults(mappedResults)


    })
  }, [userList])

  return (
    <>
      <h1>Thanks for submitting!</h1>
      <p className="results-p">Here are the results so far. Keep them to yourself until everyone has voted!</p>
      <div style={{width: '100%'}}>
        <div style={{display: 'inline-block', width: '50%', textAlign: 'right'}}>
          {accusedResults.map(({ charName, votes }) => {
            if (votes < 1) {
              return
            }
            return (
              <>
                <span style={{minHeight: '25px'}}>{charName}: </span>
                <br/>
              </>
            )
          })}
        </div>
        <div style={{display: 'inline-block', width: '40%', paddingLeft: '10px'}}>
          {accusedResults.map(({ charName, votes }) => {
            if (votes < 1) {
              return
            }
            return (
              <>
                <div className="accused-bar" style={{width: `${votes/11*100}%`}}></div>
                <br/>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}