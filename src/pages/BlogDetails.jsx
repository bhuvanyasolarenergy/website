import { blogPosts } from "@/assets/data/blogs";
import SectionTop from "@/components/shared/SectionTop";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id) || blogPosts[0];

  useEffect(() => {
    document.title = `${post.title} | Bhuvanya Energy Blog`;
    return () => {
      document.title = "Bhuvanya Energy Pvt. Ltd. | Solar & Energy Solutions";
    };
  }, [post.title]);

  return (
    <>
      <SectionTop title={post.title} />
      <section className="blog-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12 col-xs-12">
              <article className="post-slide-blog post-single">
                <div className="blog-img">
                  <img src={post.image} className="img-fluid" alt={post.title} />
                  <span>{post.date}</span>
                </div>
                <span className="post-meta">
                  <i className="fa-regular fa-user"></i> {post.author} · <i className="fa-regular fa-calendar-days"></i> {post.date}
                </span>
                <h2>{post.title}</h2>
                <div className="post-body">
                  {post.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div className="blog_search">
                <h4 className="blog_sidebar_title">. Search</h4>
                <input type="text" className="form-control" placeholder="Type &amp; Press Enter" />
              </div>
              <div className="categories">
                <h4 className="blog_sidebar_title">. Categories</h4>
                <ul>
                  {[...new Set(blogPosts.map((p) => p.category))].map((cat) => (
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
                {blogPosts.slice(0, 3).map((p) => (
                  <div key={p.id} className="single_latest_blog">
                    <img src={p.imageSmall} alt={p.title} />
                    <span>
                      <i className="fa-regular fa-calendar-days"></i> {p.date}
                    </span>
                    <Link to={`/blogs/${p.id}`}>{p.title}</Link>
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

export default BlogDetails;
