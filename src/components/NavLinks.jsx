import React from 'react'
import { NavLink } from 'react-router-dom'

const link = [{
    id: 1,
    url : '/',
    text : 'Home',
},
{
    id: 2,
    url : '/about',
    text : 'About',
},
{
    id: 3,
    url : '/products',
    text : 'Products',
},
{
    id: 4,
    url : '/cart',
    text : 'cart',
},
{
    id: 5,
    url : '/checkout',
    text : 'checkout',
},
{
    id: 6,
    url : '/orders',
    text : 'orders',
}
]

export default function NavLinks() {
    

    return (
        <>
            {link.map((item)=>(
                <li key={item.id}>
                <NavLink  to={item.url}  className='capitalize'>
                    {item.text}
                </NavLink>
                </li>
            ))}
        </>
    )
}
