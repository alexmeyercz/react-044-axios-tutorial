import axios from 'axios'

// Expect data in SON format when it talks to other servers using Axios.
axios.defaults.headers.common['Accept'] = 'application/json'

// In the neweset version it would be:
// axios.defaults.headers['Accept'] = 'application/json'
