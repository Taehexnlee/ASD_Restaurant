import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ViewProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:8080/product/${id}`);
    setProduct(result.data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Product Detail</h2>
          <div className="card">
            <div className='card-header'>
              Product ID: {id}
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <b>Name:</b> {product.name}
                </li>
                <li className='list-group-item'>
                  <b>Description:</b> {product.description}
                </li>
                <li className='list-group-item'>
                  <b>Price:</b> {product.price}
                </li>
              </ul>
            </div>
          </div>
          <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
