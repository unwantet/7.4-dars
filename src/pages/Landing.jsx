import { customFetch } from '../utils'
import { FeaturedProducts, Hero } from '../components'

const url = '/products?featured=true'

export const loader = async ()=>{
    const response = await customFetch(url)
    const products = response.data.data
    
    return {products}
}

export default function Landing() {
    

    return (
        <div className='align-content pt-10'>
            <Hero/>
            <FeaturedProducts/>
        </div>
    )
}
