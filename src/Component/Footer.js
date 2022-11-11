import "./Footer.css";
function Footer() {
  return (
    <section>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-3">
                  <ul>
                    <div className="heading-top">ABOUT</div>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Flipkart Stories</li>
                    <li>Press</li>
                    <li>Flipkart Wholesale</li>
                    <li>Corporate Information</li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <ul>
                    <div className="heading-top"> HELP</div>
                    <li>Payment</li>
                    <li>Shipping</li>
                    <li>Cancellation</li>
                    <li>Return</li>
                    <li>FAQ</li>
                    <li>Report</li>
                    <li>Infringement</li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <ul>
                    <div className="heading-top">POLICY</div>
                    <li>Return</li>
                    <li>Terms of use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                    <li>EPR Complaince</li>
                    <li>Corporate Information</li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <ul>
                    <div className="heading-top">SOCIAL</div>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>YouTube</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 split">
              <div className="row">
                <div className="col-md-5">
                  <p className="heading-top">Mail Us:</p>
                  <p className="contact">
                    Flipkart Internet Private Limited,
                    <br /> Buildings Alyssa, Begonia &<br /> Clove Embassy Tech
                    Village, <br />
                    Outer Ring Road, Devarabeesanahalli Village, Bengaluru,
                    560103, Karnataka, India
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="heading-top">Registered Office Address:</p>
                  <p className="contact">
                    Flipkart Internet Private Limited,
                    <br /> Buildings Alyssa, Begonia &<br /> Clove Embassy Tech
                    Village, <br /> Outer Ring Road, Devarabeesanahalli Village,
                    <br />
                    Bengaluru, 560103, Karnataka, India CIN :
                    U51109KA2012PTC066107 Telephone:
                   &nbsp; <a href="tel:044-45614700">044-45614700</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
