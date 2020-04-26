import React, { useEffect, useState } from 'react'
import Survey from './Survey'
import Accused from './Accused'
import Voted from './Voted.js'
import { firebase } from '../services'

const database = firebase.database()


export default function UserView({ userData, setIsLoading, showVoted, setShowVoted }) {
  const [ userList, setUserList ] = useState([])

  useEffect(() => {
    setIsLoading(true)

    database.ref('users').once('value', (snapshot) => {
      setUserList(Object.values(snapshot.val()))

      setIsLoading(false)
    })

    database.ref('users').on('child_changed', (snapshot) => {
      const newValue = snapshot.val();
      let userInUserList = userList.find(user => user.uid === newValue.uid);
      userInUserList = newValue
    })
  }, [])

  return (
    <>
      {showVoted && 
        <Voted setShowVoted={setShowVoted} userList={userList} />
      }
      {
        userData.hasSubmittedSurvey ?

          <Accused userList={userList} />

          :

          <Survey userData={userData} userList={userList} />

      }
    </>
  )
}