import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "@/assets/data/blogs";
import LandingCta from "@/components/landing/LandingCta";

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id) || blogPosts[0];
  const more = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  useEffect(() => {
    document.title = `${post.title} | Bhuvanya Energy`;
    return () => {
      document.title =
        "Bhuvanya Energy Pvt. Ltd. | Solar PV, BESS & Turnkey Consultancy | Jaipur";
    };
  }, [post.title]);

  return (
    <div className="page-blog-detail">
      {/* Article hero */}
      <section className="ld-hero ld-hero--article">
        <div className="ld-hero__inner">
          <p className="ld-hero__eyebrow">{post.category}</p>
          <h1 className="ld-hero__title ld-hero__title--narrow">
            {post.title}
          </h1>
          <p className="ld-hero__lede">{post.excerpt}</p>
          <div className="article-meta">
            <span>By {post.author}</span>
            <span className="dot" />
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="ld-section">
        <div className="ld-section__inner">
          <article className="article-body">
            <div className="article-body__media">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="article-body__prose">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="article-body__share">
              <span>Share:</span>
              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href="#" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp" />
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fa-brands fa-twitter" />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* More articles */}
      {more.length > 0 && (
        <section className="ld-section ld-section--tinted">
          <div className="ld-section__inner">
            <div className="ld-section__header ld-section__header--row">
              <div>
                <p className="eyebrow">More from BEPL</p>
                <h2 className="title">Continue reading</h2>
              </div>
              <Link to="/blogs" className="ld-btn ld-btn--ghost">
                All articles <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className="blog-list">
              {more.map((p) => (
                <article key={p.id} className="blog-list__card">
                  <Link to={`/blogs/${p.id}`} className="blog-list__media">
                    <img src={p.image} alt={p.title} />
                  </Link>
                  <div className="blog-list__body">
                    <div className="blog-list__meta">
                      <span>{p.category}</span>
                      <span className="dot" />
                      <span>{p.date}</span>
                    </div>
                    <h3>
                      <Link to={`/blogs/${p.id}`}>{p.title}</Link>
                    </h3>
                    <p>{p.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <LandingCta variant="compact" />
    </div>
  );
};

export default BlogDetails;
