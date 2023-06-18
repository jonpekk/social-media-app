'use client'
import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"

function UserWrapper({ children }: {
  children: React.ReactNode
}) {

  const [accessToken, setAccessToken] = useState<string>('')

  useEffect(() => {

    const getAccessToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/api/v2/`,
            scope: "read:current_user",
          },
        })

        if (accessToken) {
          setAccessToken(accessToken)
        } else {
          throw (new Error("Something went wrong"))
        }
      } catch (err) {
        //This nested try/catch is necessary for local development
        //because you cannnot disable consent
        try {
          const accessToken = await getAccessTokenWithPopup({
            authorizationParams: {
              audience: `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/api/v2/`,
              scope: "read:current_user",
            },
          })
          if (accessToken) {
            setAccessToken(accessToken)
          } else {
            throw (new Error("Something went wrong"))
          }
        } catch (err) {
          return console.warn(err)
        }
      }
    }
    getAccessToken()
  }, [accessToken])

  const {
    isAuthenticated,
    user,
    getAccessTokenSilently,
    getAccessTokenWithPopup
  } = useAuth0()


  return (
    <>
      <p>{accessToken}</p>
      {children}
    </>
  )
}

export default UserWrapper