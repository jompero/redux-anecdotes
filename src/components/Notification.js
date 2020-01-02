import React from 'react'
import { resetMessage } from '../reducers/notificationReducer'

const Notification = ({ store }) => {
  const { notification } = store.getState()
  if (notification.message === '') return ''
  setTimeout(() => { 
    store.dispatch(resetMessage()) 
  }, 5000)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification.message}
    </div>
  )
}

export default Notification