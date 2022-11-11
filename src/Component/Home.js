import "./Home.css";

function Home() {
  return (
    <div className="wrapper">
      <div className="container-fluid ">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="500">
              <img
                src="images/craousel.jpeg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="images/craousel.jpeg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/craousel.jpeg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <section>
        <div className="container-fluid">
          <div id="carousel_items">
            <div className="row ">
              <div className="col-sm-2 " id="c_i_1">
                <h2>Best of electronics</h2>

                <button type="button" className="btn btn-primary">
                  View All
                </button>
                <div className="electronics">
                  <img
                    src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
                    alt="Electronics"
                  />
                </div>
              </div>

              <div className="col-sm-8" id="c_i_2">
                <div className="container section text-center">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active ">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/250/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  Top Mirrorless Cameras
                                </h5>
                                <p className="card-text">Shop Now</p>
                                <span> Canon, Sony,Fujifilm</span>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-4">
                            <div className="" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Printers</h5>
                                <p className="card-text">From ₹3999</p>
                                <span>HP</span>
                                {/* <a href="#" className="btn btn-primary">
                              Buy
                            </a> */}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Projector</h5>
                                <p className="card-text">From ₹9999</p>
                                <span>Philips, Nova, Havells & more</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/200/ks0onm80/monitor/w/6/6/ha270-um-hw0si-a01-acer-original-imag5zjnk4yad4uz.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Monitors</h5>
                                <p className="card-text">From ₹6599</p>
                                <span>acer</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/200/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  Best of Hair Dryers
                                </h5>
                                <p className="card-text">From ₹399</p>
                                <span>Philips,Nova,Havells & more</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Monitors</h5>
                                <p className="card-text">From ₹7949</p>
                                <span>Lenovo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">ASUS Monitors</h5>
                                <p className="card-text">From ₹14999</p>
                                <span>Top Rated</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/200/l1pc3gw0/power-bank/e/u/y/-original-imagd7dzan7sakt2.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  Premium PowerBanks{" "}
                                </h5>
                                <p className="card-text">Shop Now</p>
                                <span>Lenovo</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/kxxl9jk0/monitor/r/l/e/rog-strix-xg32vc-wqhd-31-5-90lm03s0-b04110-asus-original-imaga9ubzrvh4spj.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Monitor</h5>
                                <p className="card-text">From ₹14999</p>
                                <span>Top Rated</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev p-0 text-dark prev-change"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon text-dark"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden text-dark">
                        Previous
                      </span>
                    </button>
                    <button
                      className="carousel-control-next prev-change text-dark"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon text-dark"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden text-dark">Next</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2" id="c_i_3">
                <img
                  src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"
                  alt=""
                  id="g_image_r"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div id="carousel_items">
            <div className="row">
              <div className="col-sm-2 mt-4" id="c_i_1">
                <h3>Top Deal</h3>

                <button type="button" className="btn btn-primary mt-4">
                  View All
                </button>
              </div>

              <div className="col-sm-10" id="c_i_2">
                <div className="container section text-center">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active ">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/k6mibgw0/vase/b/k/h/double-face-vase-combo-8-10-wauood-original-imafpfhzhhxdeexf.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                 Wall decor Item
                                </h5>
                                <p className="card-text">Shop Now</p>
                                <span> Big DisCounts</span>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Wallpapers</h5>
                                <p className="card-text">From 3999</p>
                                <span>Big Discount</span>
                                {/* <a href="#" className="btn btn-primary">
                              Buy
                            </a> */}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/kura1e80/pooja-thali-set/d/h/2/yes-kk-pooja-thli-sml-gold-kridaykraft-original-imag7t6v2qjjtbpw.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  Wallpapers
                                </h5>
                                <p className="card-text">From ₹399</p>
                                <span>Big Discounts</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/kkmwr680/painting/y/x/r/42-sanfpnl31211-saf-original-imafzxvjzwepgfzc.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Wall Decor</h5>
                                <p className="card-text">From 6599</p>
                                <span>Big Discount</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/jxxkvww0/bath-linen-set/h/y/h/p4-bathsports-gretea-heelium-original-imafg3zc8kfqzpza.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  Wallpaper
                                </h5>
                                <p className="card-text">From 399</p>
                                <span>Big DisCount</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/xif0q/welding-machine/c/7/3/15-m220-76-arc-igbt-220a-with-hot-start-anti-stick-functions-arc-original-imaggaxpxcs4ffwg.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Monitors</h5>
                                <p className="card-text">From ₹7949</p>
                                <span>BIg Discounts</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">ASUS Monitors</h5>
                                <p className="card-text">From 14999</p>
                                <span>Big Discount</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/200/l1pc3gw0/power-bank/e/u/y/-original-imagd7dzan7sakt2.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  Premium PowerBanks{" "}
                                </h5>
                                <p className="card-text">Shop Now</p>
                                <span>Big Discount</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/kxxl9jk0/monitor/r/l/e/rog-strix-xg32vc-wqhd-31-5-90lm03s0-b04110-asus-original-imaga9ubzrvh4spj.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Monitor</h5>
                                <p className="card-text">From 14999</p>
                                <span>Big Discount</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev p-0 text-dark prev-change"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon text-dark"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden text-dark">
                        Previous
                      </span>
                    </button>
                    <button
                      className="carousel-control-next prev-change text-dark"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon text-dark"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden text-dark">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
