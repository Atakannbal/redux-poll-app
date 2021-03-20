import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {handleInitialData} from '../actions/shared'

export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authedUser === null);

  React.useEffect(() => {
    dispatch(handleInitialData())
  },[dispatch, handleInitialData])

  const store = useSelector((store) => store)
  console.log('Store', store)
  
  return (
    <div>
      Redux Polls
    </div>
  )
}