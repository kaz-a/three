# three
Visualizing stock data with three.js + react
* search function is available only on smaller screen sizes (tablet, phone)
* currently working on fixing the search/append canvas bug - to temporarily remove this function, go to `src/components/Search.js`  

### [App Link](https://three-d-stock.herokuapp.com/)

### API
Historical data is commented out in code. Only the `/lookup` api is available for now.

| current data | historical data |
| ------------ | --------------- |
| `/lookup`    | `/historical`   |

### Development
1. `npm install`
2. `npm run start`
3. go to `localhost:3333`