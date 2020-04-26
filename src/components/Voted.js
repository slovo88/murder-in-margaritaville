import React from 'react'


export default function Voted({ setShowVoted, userList }) {
  return (
    <div className="voted-container" style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#282c34'}}>
      <button onClick={() => setShowVoted(false)}>X</button>
      <ul>
        {userList.map((user) => {
          return <li className={user.hasSubmittedSurvey ? 'submitted' : ''}>{user.player}{user.hasSubmittedSurvey ? `: ${user.votedFor}` : ''}</li>
        })}
      </ul>
    </div>
  )
}