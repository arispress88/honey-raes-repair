import { useEffect, useState } from "react"
import "./Customers.css"
import { Customer } from "./Customer"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
             fetch(`http://localhost:8088/users?isStaff=false`)
            .then(r => r.json())
            .then((customerArray) => {
                setCustomers(customerArray)
            })
        },
        []
    )

    return <article className="customers">
        {
            customers.map(customer => <Customer key={`customer--${customer.id}`}
                
                fullName={customer.fullName} 
                address={customer.address}
                phoneNumber={customer.phoneNumber} /> )
              
            
        }
    </article>
}