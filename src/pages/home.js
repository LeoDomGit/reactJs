import React from 'react';

const Myhome = () => {
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

            <section className="hero-slider">
                <div className="hero-items owl-carousel">
                    <div className="single-slider-item set-bg" style={{ backgroundImage: "url('img/slider-1.jpg')" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1>2019</h1>
                                    <h2>Lookbook.</h2>
                                    <a href="javascript:void(0)" className="primary-btn">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slider-item set-bg" style={{ backgroundImage: "url('img/slider-2.jpg')" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1>2019</h1>
                                    <h2>Lookbook.</h2>
                                    <a href="javascript:void(0)" className="primary-btn">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-slider-item set-bg" style={{ backgroundImage: "url('img/slider-3.jpg')" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1>2019</h1>
                                    <h2>Lookbook.</h2>
                                    <a href="javascript:void(0)" className="primary-btn">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-section spad">
                <div className="features-ads">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-features-ads first">
                                    <img src="img/icons/f-delivery.png" alt="Free Shipping icon" />
                                    <h4>Free shipping</h4>
                                    <p>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-features-ads second">
                                    <img src="img/icons/coin.png" alt="Money Back icon" />
                                    <h4>100% Money back</h4>
                                    <p>Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-features-ads">
                                    <img src="img/icons/chat.png" alt="Online Support icon" />
                                    <h4>Online support 24/7</h4>
                                    <p>Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vestibulum malesuada aliquet libero viverra cursus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="features-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="single-box-item first-box">
                                            <img src="img/f-box-1.jpg" alt="Jewelry box" />
                                            <div className="box-text">
                                                <span className="trend-year">2019 Party</span>
                                                <h2>Jewelry</h2>
                                                <span className="trend-alert">Trend Allert</span>
                                                <a href="javascript:void(0)" className="primary-btn">See More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-box-item second-box">
                                            <img src="img/f-box-2.jpg" alt="Footwear box" />
                                            <div className="box-text">
                                                <span className="trend-year">2019 Trend</span>
                                                <h2>Footwear</h2>
                                                <span className="trend-alert">Bold & Black</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="single-box-item large-box">
                                    <img src="img/f-box-3.jpg" alt="Collection box" />
                                    <div className="box-text">
                                        <span className="trend-year">2019 Party</span>
                                        <h2>Collection</h2>
                                        <div className="trend-alert">Trend Allert</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="latest-products spad">
                <div className="container">
                    <div className="product-filter">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="section-title">
                                    <h2>Latest Products</h2>
                                </div>
                                <ul className="product-controls">
                                    <li data-filter="*">All</li>
                                    <li data-filter=".dresses">Dresses</li>
                                    <li data-filter=".bags">Bags</li>
                                    <li data-filter=".shoes">Shoes</li>
                                    <li data-filter=".accesories">Accesories</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="product-list">
                        <div className="col-lg-3 col-sm-6 mix all dresses bags">
                            <div className="single-product-item">
                                <figure>
                                    <a href="javascript:void(0)"><img src="img/products/img-1.jpg" alt="Product 1" /></a>
                                    <div className="p-status">new</div>
                                </figure>
                                <div className="product-text">
                                    <h6>Green Dress with details</h6>
                                    <p>$22.90</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mix all dresses bags">
                            <div className="single-product-item">
                                <figure>
                                    <a href="javascript:void(0)"><img src="img/products/img-2.jpg" alt="Product 2" /></a>
                                    <div className="p-status sale">sale</div>
                                </figure>
                                <div className="product-text">
                                    <h6>Yellow Maxi Dress</h6>
                                    <p>$25.90</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mix all shoes accesories">
                            <div className="single-product-item">
                                <figure>
                                    <a href="javascript:void(0)"><img src="img/products/img-3.jpg" alt="Product 3" /></a>
                                    <div className="p-status">new</div>
                                </figure>
                                <div className="product-text">
                                    <h6>One piece bodysuit</h6>
                                    <p>$19.90</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mix all shoes accesories">
                            <div className="single-product-item">
                                <figure>
                                    <a href="javascript:void(0)"><img src="img/products/img-4.jpg" alt="Product 4" /></a>
                                    <div className="p-status popular">popular</div>
                                </figure>
                                <div className="product-text">
                                    <h6>Blue Dress with details</h6>
                                    <p>$35.50</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mix all dresses shoes">
                            <div className="single-product-item">
                                <figure>
                                    <a href="javascript:void(0)"><img src="img/products/img-5.jpg" alt="Product 5" /></a>
                                    <div className="p-status">new</div>
                                </figure>
                                <div className="product-text">
                                    <h6>Green Dress with details</h6>
                                    <p>$22.90</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mix all accesories bags">
                            <div className="single-product-item">
                                <figure>
                                    <a href="javascript:void(0)"><img src="img/products/img-6.jpg" alt="Product 6" /></a>
                                    <div className="p-status sale">sale</div>
                                </figure>
                                <div className="product-text">
                                    <h6>Yellow Maxi Dress</h6>
                                    <p>$25.90</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mix all dresses bags">
                            <div className="single-product-item">
                                <figure>
                                    <a href="javascript:void(0)"><img src="img/products/img-7.jpg" alt="Product 7" /></a>
                                </figure>
                                <div className="product-text">
                                    <h6>One piece bodysuit</h6>
                                    <p>$19.90</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mix all accesories bags">
                            <div className="single-product-item">
                                <figure>
                                    <a href="javascript:void(0)"><img src="img/products/img-8.jpg" alt="Product 8" /></a>
                                    <div className="p-status popular">popular</div>
                                </figure>
                                <div className="product-text">
                                    <h6>Blue Dress with details</h6>
                                    <p>$35.50</p>
                                </div>
                            </div>
                        </div>
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
