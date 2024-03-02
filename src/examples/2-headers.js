import { useState } from 'react'
import axios from 'axios'

const f = '⇒ 2-headers.js:'

const url = 'https://icanhazdadjoke.com/'
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke')

  const axiosfetchDadJoke = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Accept: 'application/json',
        },
      })
      console.log(f, '(axios) data.joke →', data.joke)
    } catch (error) {
      console.log(f, '(axios) error.response →', error.response)
    }
  }

  const nativefetchDadJoke = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Accept: 'application/json',
        },
      })
      const data = await response.json()
      console.log(f, '(native) data.joke →', data.joke)
    } catch (error) {
      console.log(f, '(native) error →', error)
    }
  }

  const runBoth = async () => {
    axiosfetchDadJoke()
    nativefetchDadJoke()
  }

  return (
    <section className='section text-center'>
      <button
        className='btn'
        onClick={runBoth}
      >
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  )
}
export default Headers
