import axios from 'axios'

const f = '⇒ interceptors.js:'

const authFetch = axios.create({
  baseURL: 'https://course-api.com',
})

authFetch.interceptors.request.use(
  (request) => {
    // old version
    // request.headers.common['Accept'] = 'application/json'
    request.headers['Accept'] = 'application/json'
    console.log(f, 'request sent')
    return request
  },
  (error) => {
    console.log(f, 'Requeset error →', error)
    return Promise.reject(error)
  }
)
authFetch.interceptors.response.use(
  (response) => {
    console.log(f, 'got response')
    return response
  },
  (error) => {
    console.log(f, 'Response error →', error.response)
    if (error.response.status === 404) {
      console.log(f, 'Not found.... Do something')
    }
    return Promise.reject(error)
  }
)

export default authFetch
