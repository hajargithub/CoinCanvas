import axios from "axios"

// we've priced the default params====> in this case we could call the function like this get100FirstTickers()
export const get100FirstTickers = (start = 0, limit = 100) => {
    return axios.get(`https://api.coinlore.net/api/tickers/?start=${start}&limit=${limit}`);

}
export const getTickerById = (id) => {
    return axios.get(` https://api.coinlore.net/api/ticker/?id=${id}`);

}