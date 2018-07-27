import axios from 'axios';

export const lookupData = axios.get('/lookup')
.then(data => data)

// export const historicalData = axios.get('/historical')
// .then(data => data)


