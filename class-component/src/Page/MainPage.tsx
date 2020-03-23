import * as React from "react";


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

        <div className="site-section">
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
            <div className="row align-items-center speaker">
          <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2" data-aos="fade" data-aos-delay="100">
            <img src="images/person_2.jpg" alt="Image" className="img-fluid" />
          </div>
          <div className="col-lg-6 ml-auto order-lg-1">
            <h2 className="text-white mb-4 name" data-aos="fade-left" data-aos-delay="200">Alex Anchor</h2>
            <div className="bio pr-lg-5">
              <span className="text-uppercase text-primary d-block mb-3" data-aos="fade-left" data-aos-delay="300">Web Designer</span>
              <p className="mb-4" data-aos="fade-left" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
              <p data-aos="fade-left" data-aos-delay="500">
                Follow Alex &mdash;
                <a href="#" className="p-2"><span className="icon-facebook"></span></a>
                <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                <a href="#" className="p-2"><span className="icon-github"></span></a>
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center speaker">
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
            <img src="images/person_3.jpg" alt="Image" className="img-fluid" />
          </div>
          <div className="col-lg-6 ml-auto">
            <h2 className="text-white mb-4 name" data-aos="fade-right" data-aos-delay="200">Aaron Thomas</h2>
            <div className="bio pl-lg-5">
              <span className="text-uppercase text-primary d-block mb-3" data-aos="fade-right" data-aos-delay="300">Web Designer</span>
              <p className="mb-4" data-aos="fade-right" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
              <p data-aos="fade-right" data-aos-delay="500">
                Follow Aaron &mdash;
                <a href="#" className="p-2"><span className="icon-facebook"></span></a>
                <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                <a href="#" className="p-2"><span className="icon-github"></span></a>
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center speaker">
          <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2" data-aos="fade" data-aos-delay="100">
            <img src="images/person_4.jpg" alt="Image" className="img-fluid" />
          </div>
          <div className="col-lg-6 ml-auto order-lg-1">
            <h2 className="text-white mb-4 name" data-aos="fade-left" data-aos-delay="200">Chris Mathews</h2>
            <div className="bio pr-lg-5">
              <span className="text-uppercase text-primary d-block mb-3" data-aos="fade-left" data-aos-delay="300">Web Designer</span>
              <p className="mb-4" data-aos="fade-left" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
              <p data-aos="fade-left" data-aos-delay="500">
                Follow Chris &mdash;
                <a href="#" className="p-2"><span className="icon-facebook"></span></a>
                <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                <a href="#" className="p-2"><span className="icon-github"></span></a>
              </p>
            </div>
          </div>
        </div>



          </div>
        </div>


        <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4" data-aos="fade-up">
            <div className="site-section-heading">
              <h2>Programs</h2>
            </div>
          </div>
          <div className="col-lg-6 mt-5 pl-lg-5" data-aos="fade-up" data-aos-delay="100">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus.</p>
          </div>
        </div>

        <div className="row align-items-stretch program">
          <div className="col-12 border-top border-bottom py-5" data-aos="fade" data-aos-delay="200">
            <div className="row align-items-stretch">
              <div className="col-md-3 text-white mb-3 mb-md-0"><span className="h4">8:00</span> <span>AM</span></div>
              <div className="col-md-9">
                <h2 className="text-white">Design your open source strategy</h2>
                <span>Chris Mathews</span>
              </div>
            </div>
          </div>

          <div className="col-12 border-bottom py-5" data-aos="fade" data-aos-delay="300">
            <div className="row align-items-stretch">
              <div className="col-md-3 text-white mb-3 mb-md-0"><span className="h4">9:30</span> <span>AM</span></div>
              <div className="col-md-9">
                <h2 className="text-white">Design your open source strategy</h2>
                <span>Chris Mathews</span>
              </div>
            </div>
          </div>

          <div className="col-12 border-bottom py-5" data-aos="fade" data-aos-delay="400">
            <div className="row align-items-stretch">
              <div className="col-md-3 text-white mb-3 mb-md-0"><span className="h4">10:30</span> <span>AM</span></div>
              <div className="col-md-9">
                <h2 className="text-white">Design your open source strategy</h2>
                <span>Chris Mathews</span>
              </div>
            </div>
          </div>

          <div className="col-12 border-bottom py-5" data-aos="fade" data-aos-delay="500">
            <div className="row align-items-stretch">
              <div className="col-md-3 text-white mb-3 mb-md-0"><span className="h4">10:45</span> <span>NOON</span></div>
              <div className="col-md-9">
                <h2 className="text-white">Break With Snacks</h2>
              </div>
            </div>
          </div>

          <div className="col-12 border-bottom py-5" data-aos="fade" data-aos-delay="600">
            <div className="row align-items-stretch">
              <div className="col-md-3 text-white mb-3 mb-md-0"><span className="h4">11:30</span> <span>AM</span></div>
              <div className="col-md-9">
                <h2 className="text-white">Design your open source strategy</h2>
                <span>Chris Mathews</span>
              </div>
            </div>
          </div>

          <div className="col-12 border-bottom py-5" data-aos="fade" data-aos-delay="700">
            <div className="row align-items-stretch">
              <div className="col-md-3 text-white mb-3 mb-md-0"><span className="h4">12:00</span> <span>NOON</span></div>
              <div className="col-md-9">
                <h2 className="text-white">Break For Lunch</h2>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>


    <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4 ">
            <div className="site-section-heading" data-aos="fade-up">
              <h2>Sponsors</h2>
            </div>
          </div>
          <div className="col-lg-6 mt-5 pl-lg-5" data-aos="fade-up" data-aos-delay="100">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus.</p>
          </div>
        </div>
      
        <div className="row mb-5">
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <img src="images/logo_1.png" alt="Image" className="img-fluid"/>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300">
            <img src="images/logo_2.png" alt="Image" className="img-fluid"/>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="400">
            <img src="images/logo_3.png" alt="Image" className="img-fluid"/>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="500">
            <img src="images/logo_4.png" alt="Image" className="img-fluid"/>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="600">
            <img src="images/logo_5.png" alt="Image" className="img-fluid"/>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="700">
            <img src="images/logo_6.png" alt="Image" className="img-fluid"/>
          </div>

        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="500">
          <div className="col-12 text-center pt-5">
            <a href="#" className="btn-custom" data-aos="fade-up" data-aos-delay="800"><span>Be a Sponsor</span></a>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4">
            <div className="site-section-heading" data-aos="fade-up">
              <h2>News</h2>
            </div>
          </div>
          <div className="col-lg-6 mt-5 pl-lg-5" data-aos="fade-up" data-aos-delay="100">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus.</p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0 blog-entry"  data-aos="fade-up" data-aos-delay="200">
            <a href="#" className="d-block mb-4">
              <img src="images/person_1.jpg" alt="Image" className="img-fluid"/> 
            </a>
            <h2 className="mb-4"><a href="#">Design your open source strategy</a></h2>
            <div className="mb-4 post-meta d-flex align-items-center">
              <div className="mr-2"><img src="images/person_1.jpg" alt="Image" className="img-fluid"/></div>
              <div><span>By <a href="#">Emely Peters</a></span> &mdash; <span>Sep. 10, 2019</span></div> 
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus.</p>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0 blog-entry" data-aos="fade-up" data-aos-delay="300">
            <a href="#" className="d-block mb-4">
              <img src="images/person_1.jpg" alt="Image" className="img-fluid"/> 
            </a>
            <h2 className="mb-4"><a href="#">Design your open source strategy</a></h2>
            <div className="mb-4 post-meta d-flex align-items-center">
              <div className="mr-2"><img src="images/person_1.jpg" alt="Image" className="img-fluid"/></div>
              <div><span>By <a href="#">Emely Peters</a></span> &mdash; <span>Sep. 10, 2019</span></div> 
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus.</p>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0 blog-entry" data-aos="fade-up" data-aos-delay="400">
            <a href="#" className="d-block mb-4">
              <img src="images/person_1.jpg" alt="Image" className="img-fluid"/> 
            </a>
            <h2 className="mb-4"><a href="#">Design your open source strategy</a></h2>
            <div className="mb-4 post-meta d-flex align-items-center">
              <div className="mr-2"><img src="images/person_1.jpg" alt="Image" className="img-fluid"/></div>
              <div><span>By <a href="#">Emely Peters</a></span> &mdash; <span>Sep. 10, 2019</span></div> 
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus.</p>
          </div>

        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="500">
          <div className="col-12 text-center">
            <a href="#" className="btn-custom" data-aos="fade-up" data-aos-delay="400"><span>More Blog Posts</span></a>
          </div>
        </div>
      </div>
    </div>
</div>
    );
  }
}