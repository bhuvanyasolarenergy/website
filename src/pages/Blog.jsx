import { useEffect } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/assets/data/blogs";
import LandingCta from "@/components/landing/LandingCta";
import PageHero from "@/components/landing/PageHero";

const Blog = () => {
  useEffect(() => {
    document.title =
      "Blog | Bhuvanya Energy — Solar PV, BESS & Industry Insights";
  }, []);

  const [feature, ...rest] = blogPosts;

  return (
    <div className="page-blog">
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Field notes on <em>solar &amp; storage</em>.
          </>
        }
        lede="Practical perspective from the BEPL team — site insights, lessons learned, BESS market notes, and policy analysis grounded in execution."
        pillars={[
          {
            num: "→",
            body: (
              <>
                <strong>{blogPosts.length} articles</strong>
                Engineering &amp; market notes from BEPL.
              </>
            ),
          },
        ]}
      />

      {feature ? (
        <section className="ld-section">
          <div className="ld-section__inner">
            <div className="blog-feature">
              <Link to={`/blogs/${feature.id}`} className="blog-feature__media">
                <img src={feature.image} alt={feature.title} />
              </Link>
              <div className="blog-feature__body">
                <div className="blog-feature__meta">
                  <span>{feature.category}</span>
                  <span className="dot" />
                  <span>{feature.date}</span>
                </div>
                <h2>
                  <Link to={`/blogs/${feature.id}`}>{feature.title}</Link>
                </h2>
                <p>{feature.excerpt}</p>
                <Link to={`/blogs/${feature.id}`} className="ld-btn ld-btn--ghost">
                  Read article <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="ld-section ld-section--tinted">
        <div className="ld-section__inner">
          <div className="ld-section__header">
            <p className="eyebrow">All articles</p>
            <h2 className="title">More from the BEPL team</h2>
          </div>
          <div className="blog-list">
            {rest.map((post) => (
              <article key={post.id} className="blog-list__card">
                <Link to={`/blogs/${post.id}`} className="blog-list__media">
                  <img src={post.image} alt={post.title} />
                </Link>
                <div className="blog-list__body">
                  <div className="blog-list__meta">
                    <span>{post.category}</span>
                    <span className="dot" />
                    <span>{post.date}</span>
                  </div>
                  <h3>
                    <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blogs/${post.id}`} className="blog-list__more">
                    Read article <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LandingCta variant="compact" />
    </div>
  );
};

export default Blog;
