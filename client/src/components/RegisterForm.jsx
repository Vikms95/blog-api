import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { userCreateOptions } from '../services/requestParams'

function Register () {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    password2: ''
  })

  const navigate = useNavigate()

  const { username, password, password2 } = formData

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/api/user',
      userCreateOptions('POST', { username, password, password2 })

    )
    return navigate('/login')
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser> Register </FaUser>
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" id='username' name='username' value={username} placeholder='Enter username' onChange={handleChange} />
          <input type="password" id='password' name='password' value={password} placeholder='Enter password' onChange={handleChange} />
          <input type="password" id='password2' name='password2' value={password2} placeholder='Repeat password' onChange={handleChange} />
          <button type='submit '> Register </button>
        </form>
      </section>
    </>
  )
}

export default Register
