import axios from "axios";


// const axios = require('axios');


const DataRequest = async() => {
    const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"

    const Response = await axios.get(URL)
    return Response.data
}

export default DataRequest;
