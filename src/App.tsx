import React, { useCallback, useRef, useState } from 'react'
import './app.css'
import { User } from './User' // component display user (see detail on /example directory)
import {
  LoginSocialTwitter,
  IResolveParams,
  TypeCrossFunction
} from 'reactjs-social-login'

// CUSTOMIZE ANY UI BUTTON
import {
  TwitterLoginButton
} from 'react-social-login-buttons'


const REDIRECT_URI = 'https://react-social-login-sigma.vercel.app'

const App = () => {
  const [provider, setProvider] = useState('')
  const [profile, setProfile] = useState<any>()
  const amazonRef = useRef<TypeCrossFunction>(null!)
  const instagramRef = useRef<TypeCrossFunction>(null!)
  const googleRef = useRef<TypeCrossFunction>(null!)
  const facebookRef = useRef<TypeCrossFunction>(null!)
  const microsoftRef = useRef<TypeCrossFunction>(null!)
  const linkedinRef = useRef<TypeCrossFunction>(null!)
  const githubRef = useRef<TypeCrossFunction>(null!)
  const pinterestRef = useRef<TypeCrossFunction>(null!)
  const twitterRef = useRef<TypeCrossFunction>(null!)

  const onLoginStart = useCallback(() => {
    alert('login start')
  }, [])



  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    alert('logout success')
  }, [])

  const onLogout = useCallback(() => {
    switch (provider) {
      case 'amazon':
        amazonRef.current?.onLogout()
        break
      case 'facebook':
        facebookRef.current?.onLogout()
        break
      case 'google':
        googleRef.current?.onLogout()
        break
      case 'instagram':
        instagramRef.current?.onLogout()
        break
      case 'microsoft':
        microsoftRef.current?.onLogout()
        break
      case 'github':
        githubRef.current?.onLogout()
        break
      case 'pinterest':
        pinterestRef.current?.onLogout()
        break
      case 'twitter':
        twitterRef.current?.onLogout()
        break
      case 'linkedin':
        linkedinRef.current?.onLogout()
        break
      default:
        break
    }
  }, [provider])

  return (
    <>
      {provider && profile && (
        <User provider={provider} profile={profile} onLogout={onLogout} />
      )}
      <div className={`App ${provider && profile ? 'hide' : ''}`}>
        <h1 className='title'>ReactJS Social Login</h1>
        

        <LoginSocialTwitter
          ref={twitterRef}
          client_id={process.env.REACT_APP_TWITTER_V2_APP_KEY || ''}
          client_secret={process.env.REACT_APP_TWITTER_V2_APP_SECRET || ''}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }: IResolveParams) => {
            setProvider(provider)
            setProfile(data)
          }}
          onReject={(err: any) => {
            console.log(err)
          }}
        >
          <TwitterLoginButton />
        </LoginSocialTwitter>
      </div>
    </>
  )
}

export default App