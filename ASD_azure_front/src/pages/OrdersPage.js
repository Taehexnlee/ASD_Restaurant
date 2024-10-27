import React, { useEffect, useState } from "react";
import axios from "axios";

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);

    const [filters, setFilters] = useState({ //Filter variables
        email: "",
        fromDate: "",
        toDate: ""
    });

    const loadOrders = async () => {
        const result = await axios.get("http://localhost:8080/orders");
        setOrders(result.data);
        setFilteredOrders(result.data); // Initialize filtered orders
    };

    useEffect(() => {
        loadOrders();
    }, []);

    useEffect(() => { //Run handleFilterChange() when change detected in filter variables
        const filterEmail = (orders) => { //Filter by Email
            if (filters.email !== "") {
                return orders.filter(order => order.user.email.startsWith(filters.email)); //filter by email
            }
            else {
                return orders;
            }
        }

        const filterFromDate = (orders) => { //Filter by From Date
            if (filters.fromDate !== "") {
                return orders.filter(order => (Date.parse(order.date) - Date.parse(filters.fromDate)) >= 0);
            }
            else {
                return orders;
            }
        }

        const filterToDate = (orders) => { //Filter by To Date
            if (filters.toDate !== "") {
                return orders.filter(order => (Date.parse(order.date) - Date.parse(filters.toDate)) <= 0);
            }
            else {
                return orders;
            }
        }

        const handleFilterChange = (e) => { //Run all filters against orders
            let filtered = orders;
            filtered = filterEmail(filtered);
            filtered = filterFromDate(filtered);
            filtered = filterToDate(filtered);
            setFilteredOrders(filtered);
        }

        handleFilterChange();
    }, [filters, orders]);

    const filterChange = (e) => { //Update filter variables on input field change
        setFilters({ ...filters, [e.target.name]: e.target.value });
    }

    return (
        <div className="container">
            <input onChange={filterChange} type="text" id="email" name="email" placeholder="Filter by email..." />
            <label className="px-3" for="fromDate">From:</label>
            <input onChange={filterChange} type="datetime-local" name="fromDate" />
            <label className="px-3" for="toDate">To:</label>
            <input onChange={filterChange} type="datetime-local" name="toDate" />
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">S.N</th>
                            <th scope="col">User ID</th>
                            <th scope="col">User Email</th>
                            <th scope="col">Date</th>
                            <th scope="col">Payment Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map((order, index) => (
                            <tr key={order.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{order.user.id}</td>
                                <td>{order.user.email}</td>
                                <td>{order.date}</td>
                                <td>{order.paymentType}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}