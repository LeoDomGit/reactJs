import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Vourcher from '../components/Vourcher';

const Myhome = () => {
    const [products,setProducts]= useState([]);
    const [categories,setCategories]= useState([]);
    const [idCate,setIdCate]= useState(null);
    const [filterProducts,setFilterProducts]= useState([]);
    useEffect(()=>{
        fetch('https://project1.codingfs.com/api/categories').then(res=>res.json())
        .then((res)=>{
            setCategories(res);
        })
        fetch('https://project1.codingfs.com/api/products?limit=99').then(res=>res.json())
        .then((res)=>{
            setProducts(res);
        })
    },[])
    useEffect(()=>{
        if(idCate){
            var result = products.filter((product) => product.idCate === idCate);
            setFilterProducts(result);
        }
    },[idCate])
    return (
        <>
            <div className="header-info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="header-item">
                                <img src="img/icons/delivery.png" alt="Free shipping icon" />
                                <p>Free shipping on orders over $30 in USA</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-left text-lg-center">
                            <div className="header-item">
                                <img src="img/icons/voucher.png" alt="Student Discount icon" />
                                <p>20% Student Discount</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-left text-xl-right">
                            <div className="header-item">
                                <img src="img/icons/sales.png" alt="Sales icon" />
                                <p>30% off on dresses. Use code: 30OFF</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Hero/>
            <Vourcher/>

            <section className="latest-products spad">
                <div className="container">
                    <div className="product-filter">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-title">
                                    <h2>Latest Products</h2>
                                </div>
                                <ul className="product-controls">
                                    <li data-filter="*"onClick={(e)=>setIdCate(null)}>All</li>
                                    {categories.length>0 && categories.map((categrory,index)=>(
                                    <li className='mb-2' onClick={(e)=>setIdCate(categrory.id)} data-filter=".dresses">{categrory.name}</li>
                                    ))}
                                    {/* * <li data-filter=".bags">Bags</li>
                                    <li data-filter=".shoes">Shoes</li>
                                    <li data-filter=".accesories">Accesories</li> */} 
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="product-list">
                        {filterProducts.length==0 &&products.length>0 && products.map((product,index)=>(
                        <div className='col-md-4 mb-3'>
                            <div class="card bg-none border-1">
                                <div class="card-header bg-light border-0">
                                    <div className='row'>
                                        <div style={{margin:'0px auto',minHeight:'280px'}} className='col-md-8'>
                                        <img  className='img-fluid text-center' src={"https://project1.codingfs.com/storage/products/"+product.image} alt="Product 1" />
                                        </div>
                                        </div>
                                </div>
                                <div class="card-body">
                                    <h5>{product.name}</h5>
                                    <h5>{product.price}</h5>

                                </div>
                            </div>
                            
                        </div>
                        ))}
                        {filterProducts.length>0 && filterProducts.map((product,index)=>(
                        <div className='col-md-4 mb-3'>
                            <div class="card bg-none border-1">
                                <div class="card-header bg-light border-0">
                                    <div className='row'>
                                        <div style={{margin:'0px auto',minHeight:'280px'}} className='col-md-8'>
                                        <img  className='img-fluid text-center' src={"https://project1.codingfs.com/storage/products/"+product.image} alt="Product 1" />
                                        </div>
                                        </div>
                                </div>
                                <div class="card-body">
                                    <h5>{product.name}</h5>
                                    <h5>{product.price}</h5>
                                </div>
                            </div>
                            
                        </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className="lookbok-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-1">
                            <div className="lookbok-left">
                                <div className="section-title">
                                    <h2>2019 <br />#lookbook</h2>
                                </div>
                                <p>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus. Aliquam erat volutpat. Morbi id dictum quam, ut commodo lorem. In at nisi nec arcu porttitor aliquet vitae at dui. Sed sollicitudin nulla non leo viverra scelerisque. Phasellus facilisis lobortis metus, sit amet viverra lectus finibus ac. Aenean non felis dapibus, placerat libero auctor, ornare ante. Morbi quis ex eleifend, sodales nulla vitae, scelerisque ante. Nunc id vulputate dui. Suspendisse consectetur rutrum metus nec scelerisque.</p>
                                <a href="javascript:void(0)" className="primary-btn look-btn">See More</a>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="lookbok-pic">
                                <img src="img/lookbok.jpg" alt="Lookbook" />
                                <div className="pic-text">fashion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Myhome;
