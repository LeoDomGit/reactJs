import React from 'react'

function Hero() {
  return (
    <>
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
    </>
  )
}

export default Hero