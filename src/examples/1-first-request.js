import { useEffect } from 'react'
import axios from 'axios'
// limit, if 429 wait for 15 min and try again

const f = '⇒ 1-first-request.js:'

const url = 'https://course-api.com/react-store-products'

const FirstRequest = () => {
  console.clear()
  // compare native fetch and axios
  const nativeFetchData = async () => {
    try {
      const nativeResponse = await fetch(url)
      console.log(f, 'nativeResponse →', nativeResponse)
      const nativeData = await nativeResponse.json()
      console.log(f, 'nativeData →', nativeData)
    } catch (nativeErrror) {
      console.log(f, 'nativeErrror →', nativeErrror)
    }
  }
  const fetchData = async () => {
    try {
      const axiosResponse = await axios.get(url)
      console.log(f, 'axiosResponse →', axiosResponse)
      const axiosData = axiosResponse.data
      console.log(f, 'axiosData →', axiosData)
    } catch (axiosError) {
      console.log(f, 'axiosError →', axiosError)
    }
  }

  useEffect(() => {
    fetchData()
    nativeFetchData()
    console.log('first axios request')
  }, [])

  return <h2 className='text-center'>first request</h2>
}
export default FirstRequest
