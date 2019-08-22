import React from "react";
import "../../../assets/css/header.css";
import { Link } from "react-router-dom";
import "../../../assets/css/footer.css";

export default () => (
  <div className="below-footer ">
    <div
      className="footer footer-main" /* style="background-color: #1b1c1f;color: #6b6f76;" */
    >
      <div className="container">
        <div className="w3_newsletter_footer_grids">
          <div className="clearfix" />
        </div>
        <div className="w3_agile_footer_grids">
          <div className="row">
            <div className="col-md-3 col-xs-6 w3_agile_footer_grid footer_align">
              <h3>Keep in touch</h3>
              <ul
                /* style="list-style: none;margin-left: -37px;" */
                className="agile_footer_grid_list footer-list"
              >
                <li>
                  <img
                    src="https://yuppstatic.akamaized.net/yupptv/yupptv_new/Web/Content/images/twitter.svg"
                    alt=""
                  />
                  &nbsp; Twitter
                </li>
                <li>
                  <img
                    src="https://yuppstatic.akamaized.net/yupptv/yupptv_new/Web/Content/images/facebook.svg"
                    alt=""
                  />
                  &nbsp;Facebook
                </li>
                <li>
                  <img
                    src="https://yuppstatic.akamaized.net/yupptv/yupptv_new/Web/Content/images/google.svg"
                    alt=""
                  />
                  &nbsp;
                  <a href="mailto:wisereads1@gmail.com">wisereads1@gmail.com</a>
                </li>
                <li>
                  <span className="fa fa-phone" aria-hidden="true" />
                  &nbsp;+914029801891
                </li>
                <li>
                  <span className="fa fa-linkedin" aria-hidden="true" />
                  &nbsp;LinkedIn
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-xs-6 w3_agile_footer_grid footer_align">
              <h3>Navigation</h3>
              <ul
                /* style="margin-left: -22px;" */
                className="agileits_w3layouts_footer_grid_list grid-ul"
              >
                <li>
                  <span aria-hidden="true" />
                  <Link to="/#">Home</Link>
                </li>
                <li>
                  <span aria-hidden="true" />
                  <Link to="/#">About Us</Link>
                </li>

                <li>
                  <span aria-hidden="true" />
                  <Link to="/#">Terms & Conditions</Link>
                </li>
                <li>
                  <span aria-hidden="true" />
                  <Link to="/#">Privacy Policy</Link>
                </li>
                <li>
                  <span aria-hidden="true" />
                  <Link to="/app-faq">FAQ`s</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-xs-6 w3ls_address_mail_footer_grids w3_agile_footer_grid footer_align">
              <h3>Contact Us</h3>
              <div className="w3ls_footer_grid_left">
                <div className="w3l-icon">
                  <span className="fa fa-map-marker" aria-hidden="true" />
                </div>
                <br />
                <p className="align">
                  Q2, A2, 7th Floor
                  <br />
                  <span>Cyber Towers Hi-tech City, Hyderabad 500081</span>
                </p>
                <div className="clearfix" />
              </div>
              <div className="w3ls_footer_grid_left">
                <div className="w3l-icon">
                  <span className="fa fa-phone" aria-hidden="true" />
                </div>
                <br />
                <p className="align">+914029801891</p>
                <div className="clearfix" />
              </div>
              <div className="w3ls_footer_grid_left">
                <div className="w3l-icon">
                  <span className="fa fa-envelope-o" aria-hidden="true" />
                </div>
                <p className="align">
                  <a href="mailto:wisereads1@gmail.com">wisereads1@gmail.com</a>
                </p>
                <div className="clearfix" />
              </div>
            </div>
            <div className="col-md-3 col-xs-6 w3ls_address_mail_footer_grids w3_agile_footer_grid footer_align">
              <h3>Other Links</h3>
              <div>
                <Link to="/#">Request Book</Link>
              </div>
              <div>
                <Link to="/#">Rent yout Book</Link>
              </div>
              <div>
                <Link to="/#">Feedback</Link>
              </div>
              <div>
                <Link to="/#">Refer a friend</Link>
              </div>
              <div>
                <a href="https://play.google.com/store/apps/details?id=com.omni.wisereads&hl=en">
                  Mobile App
                </a>
              </div>
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="agileinfo_copyright">
          <h6
            className="agile-info"
            /* style="color: #6b6f76; padding-bottom: 8px; text-align: center" */
          >
            © 2019. All Rights Reserved | Design by Omniwyse
          </h6>
        </div>
      </div>
    </div>
  </div>
);
