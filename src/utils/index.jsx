import axios from "axios";

const productionUrl = 'https://strapi-store-server.onrender.com/api'


export const customFetch = axios.create({
    baseURL: productionUrl
})

export const FormatPrice = (price) => {
    const dollarAmount = new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style: 'currency',
    }).format((price / 100 ).toFixed())
    return dollarAmount
}


export const generateAmountOptions = (numebr) => {  
    return Array.from({ length: numebr }, (_, index) => {  
        let amount = index + 1;  
        return <option key={index} value={amount} >
            {amount}
        </option>
    });  
};