import { Outlet } from "react-router-dom";
import React from "react";

const Myblog = () => {
    return (
        <div>
            <div className="header-info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="header-item">
                                <img src="img/icons/delivery.png" alt="delivery" />
                                <p>Free shipping on orders over $30 in USA</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-left text-lg-center">
                            <div className="header-item">
                                <img src="img/icons/voucher.png" alt="voucher" />
                                <p>20% Student Discount</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-left text-xl-right">
                            <div className="header-item">
                                <img src="img/icons/sales.png" alt="sales" />
                                <p>30% off on dresses. Use code: 30OFF</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header Info End */}
            {/* Header End */}

            {/* Page Add Section Begin */}
            <section className="page-add">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="page-breadcrumb">
                                <h2>Checkout<span>.</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <img src="img/add.jpg" alt="ad" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Page Add Section End */}

            {/* Cart Total Page Begin */}
            <section className="cart-total-page spad">
                <div className="container">
                    <form action="#" className="checkout-form">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>Your Information</h3>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <p className="in-name">Name*</p>
                                    </div>
                                    <div className="col-lg-5">
                                        <input type="text" placeholder="First Name" />
                                    </div>
                                    <div className="col-lg-5">
                                        <input type="text" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2">
                                        <p className="in-name">Street Address*</p>
                                    </div>
                                    <div className="col-lg-10">
                                        <input type="text" />
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2">
                                        <p className="in-name">Country*</p>
                                    </div>
                                    <div className="col-lg-10">
                                        <select className="cart-select country-usa">
                                            <option>USA</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2">
                                        <p className="in-name">City*</p>
                                    </div>
                                    <div className="col-lg-10">
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2">
                                        <p className="in-name">Country</p>
                                    </div>
                                    <div className="col-lg-10">
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2">
                                        <p className="in-name">Post Code/ZIP*</p>
                                    </div>
                                    <div className="col-lg-10">
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-2">
                                        <p className="in-name">Phone*</p>
                                    </div>
                                    <div className="col-lg-10">
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-right">
                                        <div className="diff-addr">
                                            <input type="radio" id="one" />
                                            <label htmlFor="one">Ship to different address</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="order-table">
                                    <div className="cart-item">
                                        <span>Product</span>
                                        <p className="product-name">Blue Dotted Shirt</p>
                                    </div>
                                    <div className="cart-item">
                                        <span>Price</span>
                                        <p>$29</p>
                                    </div>
                                    <div className="cart-item">
                                        <span>Quantity</span>
                                        <p>1</p>
                                    </div>
                                    <div className="cart-item">
                                        <span>Shipping</span>
                                        <p>$10</p>
                                    </div>

                                    <div className="cart-total">
                                        <span>Total</span>
                                        <p>$39</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="payment-method">
                                    <h3>Payment</h3>
                                    <ul>
                                        <li>Paypal <img src="img/paypal.jpg" alt="paypal" /></li>
                                        <li>Credit / Debit card <img src="img/mastercard.jpg" alt="mastercard" /></li>
                                        <li>
                                            <label htmlFor="two">Pay when you get the package</label>
                                            <input type="radio" id="two" />
                                        </li>
                                    </ul>
                                    <button type="submit">Place your order</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Myblog;
