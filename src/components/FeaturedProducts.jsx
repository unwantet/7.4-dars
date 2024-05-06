import { useLoaderData } from "react-router-dom"
import {ProductsGrid, SectionTitle} from "../components"  


export default function FeaturedProducts() {

    return (
        <div className="pt-24">
            <SectionTitle text='Featured products'/>
            <ProductsGrid/>
        </div>
    )
}
