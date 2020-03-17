import * as React from "react";
import { Header } from "./Header";


export interface MainPageProps {
  compiler: string;
  framework: string;
}

export class MainPage extends React.Component<MainPageProps, {}> {
  render() {
    return (
      <div className="site-wrap">

        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <Header />

        <div className="site-section site-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-10">
                <span className="d-block mb-3 caption" data-aos="fade-up" data-aos-delay="100">Conference 2019</span>
                <h1 className="d-block mb-4" data-aos="fade-up" data-aos-delay="200">Web Design Conference 2019</h1>
                <span className="d-block mb-5 caption" data-aos="fade-up" data-aos-delay="300">September 6th-7th, Minnesota, United States</span>
                <a href="#" className="btn-custom" data-aos="fade-up" data-aos-delay="400"><span>Buy Tickets</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}