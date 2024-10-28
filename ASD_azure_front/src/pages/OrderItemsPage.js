import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function OrderItemsPage() {
    const [orderItems, setOrderItems] = useState([]);
    const [filteredOrderItems, setFilteredOrderItems] = useState([]);

    const { id, name } = useParams();

    const [filters, setFilters] = useState({ //Filter variables
        product: "",
    });

    const loadOrderItems = async () => {
        const result = await axios.get("http://localhost:8080/orderitems");
        const filterById = result.data.filter(orderItem => orderItem.order.id - id === 0);
        setOrderItems(filterById);
        setFilteredOrderItems(filterById); // Initialize filtered orders
    };

    useEffect(() => {
        loadOrderItems();
    }, []);

    useEffect(() => { //Run handleFilterChange() when change detected in filter variables
        const filterProduct = (orderItems) => { //Filter by Product
            if (filters.product !== "") {
                return orderItems.filter(orderItem => orderItem.product.name.toLowerCase().startsWith(filters.product.toLowerCase()));
            }
            else {
                return orderItems;
            }
        }

        const handleFilterChange = (e) => { //Run all filters against orders
            let filtered = orderItems;
            filtered = filterProduct(filtered);
            setFilteredOrderItems(filtered);
        }

        handleFilterChange();
    }, [filters, orderItems]);

    const filterChange = (e) => { //Update filter variables on input field change
        setFilters({ ...filters, [e.target.name]: e.target.value });
    }

    return (
        <div className="container">
            <h1>Viewing Order Items Attached to Order {id} of {name}</h1>
            <input onChange={filterChange} type="text" id="product" name="product" placeholder="Filter by product..." />
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">S.N</th>
                            <th scope="col">Product ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Customisation</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrderItems.map((orderItem, index) => (
                            <tr key={orderItem.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{orderItem.product.id}</td>
                                <td>{orderItem.product.name}</td>
                                <td>{orderItem.customisation}</td>
                                <td>{orderItem.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Link className="btn btn-primary my-2" to={"/orderspage"}>
                Back to Orders Page
            </Link>
        </div>
    );
}