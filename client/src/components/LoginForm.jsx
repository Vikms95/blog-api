/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { userCreateOptions } from '../services/requestParams'

function Login (props) {
  const { setUser } = props

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('/api/session',
      userCreateOptions('POST', { username, password })
    )
    const data = await response.json()

    localStorage.setItem('token', JSON.stringify(data.token))
    setUser(data.user)

    return navigate('/dashboard')
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt> Login </FaSignInAlt>
        </h1>
        <p>Please login</p>
      </section>

      <section className='form'>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" id='username' name='username' value={username} placeholder='Enter username' onChange={handleChange} />
          <input type="password" id='password' name='password' value={password} placeholder='Enter password' onChange={handleChange} />
          <button type='submit '> Login </button>
        </form>
      </section>
    </>
  )
}

export default Login