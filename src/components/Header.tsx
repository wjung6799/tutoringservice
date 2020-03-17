import * as React from "react";

export interface HeaderProps {

}

export class Header extends React.Component<HeaderProps, {}> {
  render() {
    return (
        <header className="site-navbar py-3" role="banner">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-11 col-xl-2">
                <h1 className="mb-0"><a href="index.html" className="text-white h2 mb-0">Work<span className="text-primary">shop</span> </a></h1>
              </div>
              <div className="col-12 col-md-10 d-none d-xl-block">
                <nav className="site-navigation position-relative text-right" role="navigation">
                  <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="speakers.html">Speakers</a></li>
                    <li><a href="news.html">News</a></li>
                    <li><a href="contact.html">Contacts</a></li>
                    <li className="cta"><a href="buy-tickets.html">Buy Tickets</a></li>
                  </ul>
                </nav>
              </div>
              <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>
            </div>
          </div>
        </header>
    );
  }
}