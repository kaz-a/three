import axios from 'axios';

export const lookupData = axios.get('/lookup')
.then(data => {
  console.log('data from frontend!', data)
  return data.data
})
