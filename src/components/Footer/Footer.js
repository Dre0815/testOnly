import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="https://www.yukiroro.com" >
                  Company
                </a>
              </li>
              <li>
                <a href="#facebook" onClick={(e) => e.preventDefault()}>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#Twitter" onClick={(e) => e.preventDefault()}>
                  Twitter
                </a>
              </li>
              
            </ul>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <a href="http://www.facebook.com/dre.paynor/">Dre</a>, do what you really love
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
