import { blogPosts } from "@/assets/data/blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
  const featured = blogPosts.slice(0, 3);
  return (
    <section className="srex-blog-one srex-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="srex-blog-one__title">
              <div className="srex-section__head ">
                <h5 data-aos="fade-up" className="srex-section__head__badge">
                  <img src="/images/badge-icon.svg" alt="" />
                  Blog &amp; News
                </h5>
                <h2 data-aos="fade-up" data-aos-delay="200" className="srex-section__head__title">Shine Brighter with Solar</h2>
              </div>
              <Link data-aos="fade-up" data-aos-delay="400" to="/blogs" className="srex-btn srex-btn--primary ">
                More Blogs <i className="fa-solid fa-plus"></i>
              </Link>
            </div>
          </div>
          {featured.map((post, i) => (
            <div key={post.id} data-aos="fade-in" data-aos-delay={i * 200} className="col-12 col-lg-4 col-md-6">
              <div className="srex-blog-one__post ">
                <Link to={`/blogs/${post.id}`} className="srex-blog-one__post__img">
                  <img src={post.image} alt={post.title} />
                </Link>
                <div className="d-flex gap-5 mt-2">
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
                <Link to={`/blogs/${post.id}`} className="srex-btn srex-btn--outline">
                  Read More<i className="fa-solid fa-plus"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
