import React, { useEffect, useState } from 'react'
import './App.css'
import { firebase } from './services'
import EnterUserCode from './components/EnterUserCode'
import UserView from './components/UserView'

const database = firebase.database()


function App() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ hasUser, setHasUser ] = useState(false)
  const [ userData, setUserData ] = useState({})
  const [ showVoted, setShowVoted ] = useState(false)

  useEffect(() => {
    const localStorageUserId = localStorage.getItem('mmp-user-id')
    
    if (localStorageUserId) {
      loadUser(localStorageUserId)
    }

    setIsLoading(false)
  }, [])

  function loadUser(userCode, setErrorCallback, e) {
    if (e) {
      e.preventDefault()
    }

    if (userCode) {
      database.ref(`users/${userCode}`).on('value', (snapshot) => {
        const userValue = snapshot.val()

        if (snapshot.val()) {
          setUserData(userValue)
          setHasUser(true)
          localStorage.setItem('mmp-user-id', userCode)
        } else {
          setErrorCallback('Please check your code and try again')
        }
      })
    } else {
      setErrorCallback('Please enter a code before submitting')
    }

  }

  function logout() {
    setHasUser(false)
    localStorage.removeItem('mmp-user-id')
  }

  return (
    <>
      {
        hasUser &&
        <header>

          {
            userData.player === 'Pemo' &&

            <button onClick={() => setShowVoted(true)} className="see-voted">See who has voted</button>
          }

          <button className="logout" onClick={logout}>Log out</button>
          
        </header>
      }
      <main>
        {isLoading ? 

          <p>Loading...</p>
          
          :

          hasUser ?

          <UserView userData={userData} setIsLoading={setIsLoading} setShowVoted={setShowVoted} showVoted={showVoted}/>

          :

          <EnterUserCode loadUser={loadUser} />

        }
      </main>
    </>
  )
}

export default App;
