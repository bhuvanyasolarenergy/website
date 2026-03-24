import { blogPosts } from "@/assets/data/blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
  const featured = blogPosts.slice(0, 3);
  return (
    <section className="srex-blog-one srex-blog-two srex-section">
      <img src="/images/frame.png" alt="" className="srex-blog-two__frame " />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="srex-blog-one__title">
              <div className="srex-section__head ">
                <h5 data-aos="fade-up" className="srex-section__head__badge ">
                  Our Blogs
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="300" className="srex-section__head__title ">
                  Let&apos;s Checkout our <br /> Latest Blog
                </h2>
              </div>
              <Link data-aos="fade-up" data-aos-delay="600" to="/blogs" className="srex-btn srex-btn--primary ">
                More Blogs <i className="fa-solid fa-plus"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {featured.map((post, i) => (
            <div key={post.id} data-aos="fade-up" data-aos-delay={i * 300} className="col-12 col-lg-4 col-md-6">
              <div className="srex-blog-one__post srex-blog-two__post ">
                <Link to={`/blogs/${post.id}`} className="srex-blog-one__post__img">
                  <img src={post.image} alt={post.title} />
                </Link>
                <div className="srex-blog-two__post__badge">
                  <h6>{post.category}</h6>
                </div>
                <div className="d-flex gap-5 mt-3">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-calendar-alt"></i>
                    <h6>{post.date}</h6>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-user-alt"></i>
                    <h6>{post.author}</h6>
                  </div>
                </div>
                <h3>
                  <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                </h3>
                <div className="srex-info-box__more">
                  <Link to={`/blogs/${post.id}`}>
                    Read More
                    <i className="fa-solid fa-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
