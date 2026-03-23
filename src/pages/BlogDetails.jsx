import SectionTop from "@/components/shared/SectionTop";

const BlogDetails = () => {
  return (
    <>
      <SectionTop title="Blog Details" />
      <section className="blog-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12 col-xs-12">
              <div className="post-slide-blog post-single">
                <div className="blog-img">
                  <img src="/images/blog/1.png" className="img-fluid" alt="image" />
                  <a href="#">07 April</a>
                </div>
                <span>
                  <i className="fa-regular fa-user"></i> By admin
                </span>
                <span>
                  <i className="fa-regular fa-calendar-days"></i> October 19, 2024
                </span>
                <span>
                  <i className="fa-regular fa-comment"></i> Comment (05)
                </span>
                <h2>Harnessing the power of the sun: A guide to solar Energy</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less normal distribution of letters, as opposed to using here making it look like readable English. Many desktop publishing packages.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less normal distribution of letters, as opposed to using here making it look like readable English. Many desktop publishing packages.</p>
                <div className="single_quote">
                  <i className="fa-solid fa-quote-right"></i>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  <span>- Mark Wood</span>
                </div>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less normal distribution of letters, as opposed to using here making it look like readable English. Many desktop publishing packages.</p>
                <div className="sb_img">
                  <img src="/images/blog/3.png" className="img-fluid" alt="" />
                  <h4>Country the popular</h4>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using is that it has a more-or-less normal distribution of letters, as opposed to using here making it look like readable English. Many desktop publishing packages.</p>
                </div>
              </div>
              <div className="comments_part">
                <h3 className="blog_head_title">2 Comments</h3>
                <div className="single_comment">
                  <img src="/images/blog/comment-1.png" alt="" />
                  <h4>Stanio Lainto</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies quam nisi, vel gravida enim accumsan id. Praesent justo quam, auctor et lorem in, pulvinar ornare orci.</p>
                  <a href="#">Reply</a>
                </div>
                <div className="single_comment single_comment_mbnone">
                  <img src="/images/blog/comment-2.png" alt="" />
                  <h4>Court Henry</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies quam nisi, vel gravida enim accumsan id. Praesent justo quam, auctor et lorem in, pulvinar ornare orci.</p>
                  <a href="#">Reply</a>
                </div>
              </div>
              <div className="comment_form srex-contact__left coment_bg_none">
                <h3 className="blog_head_title">Add a Comment</h3>
                <div className="contact comment-box">
                  <form action="#">
                    <div className="row justify-content-center">
                      <div className="col-md-6 col-12">
                        <input name="full-name" placeholder="Your Name" type="text" required />
                      </div>
                      <div className="col-md-6 col-12">
                        <input name="email" placeholder="Email Address" type="text" required />
                      </div>
                    </div>
                    <div>
                      <textarea placeholder="Your Comment" id="message" rows="5" name="message" required></textarea>
                    </div>
                    <div>
                      <button type="button" className="srex-btn srex-btn--secondary">
                        Submit Comment
                      </button>
                    </div>
                  </form>
                </div>
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

export default BlogDetails;
