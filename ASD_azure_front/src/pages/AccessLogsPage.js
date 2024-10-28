import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AccessLogsPage() {
    const [accessLogs, setAccessLogs] = useState([]);
    const [filteredAccessLogs, setFilteredAccessLogs] = useState([]);

    const [filters, setFilters] = useState({ //Filter variables
        email: "",
        fromDate: "",
        toDate: ""
    });

    const loadAccessLogs = async () => {
        const result = await axios.get("http://localhost:8080/accesslogs");
        setAccessLogs(result.data);
        setFilteredAccessLogs(result.data); // Initialize filtered access logs
    };

    useEffect(() => {
        loadAccessLogs();
    }, []);

    useEffect(() => { //Run handleFilterChange() when change detected in filter variables
        const filterEmail = (accessLogs) => { //Filter by Email
            if (filters.email !== "") {
                return accessLogs.filter(accessLog => accessLog.user.email.startsWith(filters.email));
            }
            else {
                return accessLogs;
            }
        }

        const filterFromDate = (accessLogs) => { //Filter by From Date
            if (filters.fromDate !== "") {
                return accessLogs.filter(accessLog => (Date.parse(accessLog.date) - Date.parse(filters.fromDate)) >= 0);
            }
            else {
                return accessLogs;
            }
        }

        const filterToDate = (accessLogs) => { //Filter by To Date
            if (filters.toDate !== "") {
                return accessLogs.filter(accessLog => (Date.parse(accessLog.date) - Date.parse(filters.toDate)) <= 0);
            }
            else {
                return accessLogs;
            }
        }

        const handleFilterChange = (e) => { //Run all filters against access logs 
            let filtered = accessLogs;
            filtered = filterEmail(filtered);
            filtered = filterFromDate(filtered);
            filtered = filterToDate(filtered);
            setFilteredAccessLogs(filtered);
        }

        handleFilterChange();
    }, [filters, accessLogs]);

    const filterChange = (e) => { //Update filter variables on input field change
        setFilters({ ...filters, [e.target.name]: e.target.value });
    }

    return (
        <div className="container">
            <h1>Viewing Access Logs</h1>
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
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAccessLogs.map((accessLog, index) => (
                            <tr key={accessLog.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{accessLog.user.id}</td>
                                <td>{accessLog.user.email}</td>
                                <td>{accessLog.date}</td>
                                <td>{accessLog.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}