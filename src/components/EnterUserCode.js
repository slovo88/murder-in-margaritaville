import React, { useState } from 'react'


export default function EnterUserCode({ loadUser }) {
  const [ userCode, setUserCode ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')

  function inputChange(e) {
    setUserCode(e.target.value.trim())
    
    if (errorMessage) {
      setErrorMessage('')
    }
  }

  function submit(e) {
    if (e) {
      e.preventDefault()
    }

    loadUser(userCode, setErrorMessage)
  }

  return (
    <>
      {
        errorMessage && 
        <p className="error-message">{errorMessage}</p>
      }
      <form onSubmit={submit}>
        <label htmlFor="user-code">Enter code:</label>
        <input id="user-code" name="user-code" type="text" onChange={inputChange}/>
      </form>
      <button onClick={submit}>Submit</button>
    </>
  )
}