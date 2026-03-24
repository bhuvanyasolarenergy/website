import { blogPosts } from "@/assets/data/blogs";
import SectionTop from "@/components/shared/SectionTop";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Bhuvanya Energy Pvt. Ltd. — Solar Insights & Updates";
  }, []);
  const categories = [...new Set(blogPosts.map((p) => p.category))];
  return (
    <>
      <SectionTop title="Blog" />

      <section className="blog-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12 col-xs-12">
              {blogPosts.map((post) => (
                <article key={post.id} className="post-slide-blog">
                  <div className="blog-img">
                    <img src={post.image} className="img-fluid" alt={post.title} />
                    <span>{post.date.split(" ").slice(1).join(" ")}</span>
                  </div>
                  <span className="post-meta">
                    <i className="fa-regular fa-user"></i> {post.author} · {post.date}
                  </span>
                  <h2>
                    <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <Link to={`/blogs/${post.id}`} className="srex-btn srex-btn--outline">
                    Read More<i className="fa-solid fa-plus"></i>
                  </Link>
                </article>
              ))}
            </div>
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div className="blog_search">
                <h4 className="blog_sidebar_title">. Search</h4>
                <input type="text" className="form-control" placeholder="Type &amp; Press Enter" />
              </div>
              <div className="categories">
                <h4 className="blog_sidebar_title">. Categories</h4>
                <ul>
                  {categories.map((cat) => (
                    <li key={cat}>
                      <Link to="/blogs">
                        <i className="fa-solid fa-arrow-down"></i> {cat}{" "}
                        <span>({blogPosts.filter((p) => p.category === cat).length})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="latest_blog ">
                <h4 className="blog_sidebar_title">. Latest Blog</h4>
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="single_latest_blog">
                    <img src={post.imageSmall} alt={post.title} />
                    <span>
                      <i className="fa-regular fa-calendar-days"></i> {post.date}
                    </span>
                    <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                  </div>
                ))}
              </div>
              <div className="categories">
                <h4 className="blog_sidebar_title">. Archive</h4>
                <ul>
                  <li>
                    <Link to="/blogs">
                      <i className="fa-solid fa-arrow-down"></i> March 2025
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogs">
                      <i className="fa-solid fa-arrow-down"></i> February 2025
                    </Link>
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
