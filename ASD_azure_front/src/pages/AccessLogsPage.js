import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useUser } from '../context/UserContext';

export default function AccessLogPage() {
    const [accessLogs, setAccessLogs] = useState([]);
    const { user } = useUser(); // Get the current logged-in user

    useEffect(() => {
        loadAccessLogs();
    }, []);

    const loadAccessLogs = async () => {
        const result = await axios.get("http://localhost:8080/accesslogs");
        setAccessLogs(result.data);
    };

    return (
        <div className="container">
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
                        {accessLogs.map((accessLog, index) => (
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