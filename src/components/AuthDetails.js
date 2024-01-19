import React, {useEffect, useState} from 'react'
import {onAuthstateChanged} from 'firebase/auth'
import { auth } from '../firebaseConfig'

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null)

    useEffect(()=>{
        const listen = onAuthstateChanged(auth, (user)=>{
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
    },[])
  return (
    <div>{authUser && <p>you are signed in</p>}</div>
  )
}

export default AuthDetails