import SectionTop from "@/components/shared/SectionTop";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <SectionTop title="Blog Classic" />

      <section className="blog-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12 col-xs-12">
              <div className="post-slide-blog">
                <div className="blog-img">
                  <img src="/images/blog/1.png" className="img-fluid" alt="image" />
                  <a href="#">07 April</a>
                </div>
                <span>
                  <i className="fa-regular fa-user"></i> By admin
                </span>
                <span>
                  <i className="fa-regular fa-comment"></i> Comment (05)
                </span>
                <h2>
                  <Link to="/blog-details">Unlocking The Potential Of Solar Energy For your Home</Link>
                </h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less normal distribution of letters, as opposed to using here making it look like readable English. Many desktop publishing packages.</p>
                <Link to="/blog-details" className="srex-btn srex-btn--outline">
                  Read More<i className="fa-solid fa-plus"></i>
                </Link>
              </div>
              <div className="post-slide-blog">
                <div className="blog-img">
                  <img src="/images/blog/2.png" className="img-fluid" alt="image" />
                  <a href="#">07 April</a>
                </div>
                <span>
                  <i className="fa-regular fa-user"></i> By admin
                </span>
                <span>
                  <i className="fa-regular fa-comment"></i> Comment (05)
                </span>
                <h2>
                  <Link to="/blog-details">Exploring the Benefit of solar Energy</Link>
                </h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less normal distribution of letters, as opposed to using here making it look like readable English. Many desktop publishing packages.</p>
                <Link to="/blog-details" className="srex-btn srex-btn--outline">
                  Read More<i className="fa-solid fa-plus"></i>
                </Link>
              </div>
              <div className="post-slide-blog">
                <div className="blog-img">
                  <img src="/images/blog/3.png" className="img-fluid" alt="image" />
                  <a href="#">07 April</a>
                </div>
                <span>
                  <i className="fa-regular fa-user"></i> By admin
                </span>
                <span>
                  <i className="fa-regular fa-comment"></i> Comment (05)
                </span>
                <h2>
                  <Link to="/blog-details">Harnessing the power of the sun: A guide to solar Energy</Link>
                </h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less normal distribution of letters, as opposed to using here making it look like readable English. Many desktop publishing packages.</p>
                <Link to="/blog-details" className="srex-btn srex-btn--outline">
                  Read More<i className="fa-solid fa-plus"></i>
                </Link>
              </div>
              {/* <!--- START PAGINATION --> */}
              <div id="pagination">
                <nav>
                  <ul className="pagination blog_pagination">
                    <li>
                      <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div className="blog_search">
                <h4 className="blog_sidebar_title">. Search</h4>
                <input type="text" className="form-control" placeholder="Type & Press Enter" />
              </div>
              <div className="categories">
                <h4 className="blog_sidebar_title">. Categories</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-arrow-down"></i> Power of the sun <span>(02)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-arrow-down"></i> A Bright Future <span>(05)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-arrow-down"></i> Sun&apos;s Potential <span>(10)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-arrow-down"></i> Video promotion <span>(03)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-arrow-down"></i> Reabervede <span>(10)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-arrow-down"></i> Harnessing the power <span>(03)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="latest_blog ">
                <h4 className="blog_sidebar_title">. Latest Blog</h4>
                <div className="single_latest_blog">
                  <img src="/images/blog/blog-small-1.png" alt="" />
                  <span>
                    <i className="fa-regular fa-calendar-days"></i> Jan 10, 2024
                  </span>
                  <a href="#">Unlocking The Potential Of Solar Energy For your Home.</a>
                </div>
                <div className="single_latest_blog">
                  <img src="/images/blog/blog-small-2.png" alt="" />
                  <span>
                    <i className="fa-regular fa-calendar-days"></i> Jan 10, 2024
                  </span>
                  <a href="#">Exploring the Benefit of solar Energy.</a>
                </div>
                <div className="single_latest_blog">
                  <img src="/images/blog/blog-small-3.png" alt="" />
                  <span>
                    <i className="fa-regular fa-calendar-days"></i> Jan 10, 2024
                  </span>
                  <a href="#">Harnessing the power of the sun: A guide to solar Energy.</a>
                </div>
              </div>
              <div className="categories">
                <h4 className="blog_sidebar_title">. Archive</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-arrow-down"></i> January 2022
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-arrow-down"></i> July 2021
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-arrow-down"></i> February 2022
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-arrow-down"></i> January 2022
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-arrow-down"></i> September 2023
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
