import axios from 'axios'
import { useState, useEffect } from 'react'
// limit, if 429 wait for 15 min and try again

const f = '⇒ 1-first-request.js:'

const url = 'https://course-api.com/react-store-products'

const FirstRequest = () => {
  const [axData, setAxData] = useState(null)
  const [naData, setNaData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  // console.clear()
  // native
  const nativeFetchData = async () => {
    try {
      const nativeResponse = await fetch(url)
      console.log(f, 'nativeResponse →', nativeResponse)
      if (!nativeResponse.ok) {
        setIsError(true)
      }
      const nativeData = await nativeResponse.json()
      console.log(f, 'nativeData →', nativeData)
      setNaData(nativeData)
    } catch (nativeError) {
      console.log(f, 'nativeError →', nativeError)
      console.log(nativeError.message)
      setIsError(true)
    }
  }
  // axios
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const axiosResponse = await axios.get(url)
      console.log(f, 'axiosResponse →', axiosResponse)
      const axiosData = axiosResponse.data
      console.log(f, 'axiosData →', axiosData)
      setAxData(axiosData)
    } catch (axiosError) {
      console.log(f, 'axiosError →', axiosError)
      console.log(f, 'axiosError.message →', axiosError.message)
      console.log(f, 'axiosError.code →', axiosError.code)
      console.log(f, 'axiosError.name →', axiosError.name)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData()
    nativeFetchData()
    console.log('first axios request')
  }, [])

  if (isLoading) {
    return <h2 className='text-center'>loading...</h2>
  }
  if (isError) {
    return <h2 className='text-center'>error...</h2>
  }

  return (
    <>
      <div>
        <h2>Axios Data</h2>
        {/* <ul>
          {axData.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })}
        </ul> */}
        <h2>Native Data</h2>
        <ul>
          {naData.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })}
        </ul>
      </div>
    </>
  )
}
export default FirstRequest
