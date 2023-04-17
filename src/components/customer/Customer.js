import { Link } from "react-router-dom"

export const Customer = ({ id, fullName, address, phoneNumber }) => {
    return <section className="customer"> 
    <div>
        <Link to={`/customers/${id}`}>{fullName}</Link>
    </div>
    <div>Phone number: {phoneNumber}</div>
    <div>Address: {address}</div>
    
</section>
}