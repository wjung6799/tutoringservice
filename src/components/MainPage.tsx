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

        <div className="site-section site-hero">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="site-section-heading">
                  <h2>Speakers</h2>
                </div>
              </div>
              <div className="col-lg-5 mt-5 pl-lg-5" data-aos="fade-up" data-aos-delay="200">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
              </div>
            </div>

            <div className="row align-items-center speaker">
              <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                <img src="images/person_1.jpg" alt="Image" className="img-fluid" />
              </div>
              <div className="col-lg-6 ml-auto">
                <h2 className="text-white mb-4 name" data-aos="fade-right" data-aos-delay="200">Emely Peters</h2>
                <div className="bio pl-lg-5">
                  <span className="text-uppercase text-primary d-block mb-3" data-aos="fade-right" data-aos-delay="300">Web Designer</span>
                  <p className="mb-4" data-aos="fade-right" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
                  <p data-aos="fade-right" data-aos-delay="500">
                    Follow Emely &mdash;
                <a href="#" className="p-2"><span className="icon-facebook"></span></a>
                    <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                    <a href="#" className="p-2"><span className="icon-github"></span></a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}