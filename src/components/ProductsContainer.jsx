import ProductsGrid from "./ProductsGrid"
import ProductsList from "./ProductsList"
import { useState } from "react"
import {BsFillGridFill, BsList} from "react-icons/bs"
import { useLoaderData } from "react-router-dom"

export default function ProductsContainer() {
const {meta} = useLoaderData()  
const totalProducts = meta.pagination.total

const [layout,setLayout] = useState('grid')

const setActivestyles = (pattern) =>{
    return `text-xl btn btn-circle btn-sm ${
        pattern === layout ? 'btn-primary text-primary-content':'btn-ghost text-base-content'
    }`
}

    return (
        <>
        <div className="flex justify-between items-center mt-8 border-b border-base-100 pb5">

                <h4 className="font-medium text-md ">
                    {totalProducts} product{totalProducts > 1 && 's'}
                </h4>

            <div className="flex gap-x-2">
                <button className={setActivestyles('grid')} onClick={()=>setLayout('grid')}>
                    <BsFillGridFill className="w-5 h-5"/>
                </button>
                <button className={setActivestyles('list')} onClick={()=>setLayout('list')}>
                    <BsList className="w-5 h-5"/>
                </button>
            </div>
        </div>

            <div>
            {totalProducts === 0 ? <h1>No Products</h1>: layout === 'grid' ? <ProductsGrid/> : <ProductsList/>}
            </div>
        </>
    )
}
