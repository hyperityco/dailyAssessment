import React, { useState, useContext, useEffect, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [todaysStats, setTodaysStats] = useState({})

  return (
    <UserContext.Provider
      value={{
        setTodaysStats,
        setUser,
        todaysStats,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
