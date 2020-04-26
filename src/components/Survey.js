import React, { useState } from 'react'
import { firebase } from '../services'

const database = firebase.database()


export default function Survey({ userData, userList }) {
  const [ accusedUserCode, setAccusedUserCode ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')

  function submitAccusation() {
    if (!accusedUserCode) {
      setErrorMessage('Please accuse someone before submitting')
      return
    }

    const accusedName = userList.find((user) => user.userCode === accusedUserCode).charName
    const confirmChoice = window.confirm(`Are you sure you want to accuse ${accusedName}?`)

    if (confirmChoice) {
      const ref = database.ref(`accusations/${accusedUserCode}`);
      ref.transaction((currentVotes) => {
        return (currentVotes || 0) + 1;
      });
      
      database.ref(`users/${userData.userCode}/hasSubmittedSurvey`).set(true)
      database.ref(`users/${userData.userCode}/votedFor`).set(accusedName)
    }
  }

  return (
    <>
      <h1>So, {userData.charName}, whodunnit?</h1>
      <p className="error-message">{errorMessage}</p>
      <form className="radio-form" onChange={(e) => setAccusedUserCode(e.target.value)}>
        { userList.map((user) => {
            if (userData.userCode === user.userCode) {
              return;
            }
            return (
              <>
                  <input type="radio" id={user.userCode} name="accuse" value={user.userCode} />
                  <label htmlFor={user.userCode}>{user.charName}</label>
                  <br/>
              </>
            )
          })
        }
      </form>

      <button onClick={submitAccusation}>Submit</button>
    </>
  )
}