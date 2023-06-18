'use client'
import { Auth0Provider } from "@auth0/auth0-react"

const redirectParam = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : undefined

function AuthWrapper({ children }: {
  children: React.ReactNode
}) {

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : redirectParam
      }}
      useRefreshTokens={true}
      useRefreshTokensFallback={false}
    >
      {children}
    </Auth0Provider>

  )
}

export default AuthWrapper