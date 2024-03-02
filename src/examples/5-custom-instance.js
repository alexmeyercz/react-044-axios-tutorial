import { useEffect } from 'react'
import authFetch from '../axios/custom'
import axios from 'axios'

const f = '⇒ 5-custom-instance.js:'

const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch('/react-store-products')
      console.log(f, 'resp1 →', resp1)
      console.log(f, 'resp1.data →', resp1.data)
      const resp2 = await axios(randomUserUrl)
      console.log(f, 'resp2 →', resp2)
      console.log(f, 'resp2.data.results[0] →', resp2.data.results[0])
    } catch (error) {
      console.log(f, 'error →', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>custom instance</h2>
}
export default CustomInstance
