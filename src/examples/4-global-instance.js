import { useEffect } from 'react'

import axios from 'axios'
import '../axios/global'

const f = '⇒ 4-global-instance.js:'

const productsUrl = 'https://course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api'

const GlobalInstance = () => {
  console.clear()

  const fetchData = async () => {
    try {
      const resp1 = await axios.get(productsUrl)
      console.log(f, 'resp1 →', resp1)
      console.log(f, 'resp1.data →', resp1.data)

      const resp2 = await axios.get(randomUserUrl)
      console.log(f, 'resp2 →', resp2)
      console.log(f, 'resp2.data →', resp2.data)
    } catch (error) {
      console.log(f, 'error →', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>global instance</h2>
}
export default GlobalInstance
