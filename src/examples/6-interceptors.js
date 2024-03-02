import { useEffect } from 'react'
import authFetch from '../axios/interceptors'

const f = '⇒ 6-interceptors.js (6-interceptors):'

// const url = 'https://course-api.com/react-store-products'

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch('/react-store-productsXXX')
      console.log(f, 'resp →', resp)
      console.log(f, 'resp.data →', resp.data)
    } catch (error) {
      console.log(f, 'error →', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>interceptors</h2>
}
export default Interceptors
