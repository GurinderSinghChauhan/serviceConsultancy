import { useMemo, useState } from "react";
import { insightsData } from "../assets/mockData/mockData";
import PageIntro from "../components/PageIntro";

const categories = ["All", "Blogs", "Case Studies"];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const insights = useMemo(
    () => activeCategory === "All" ? insightsData : insightsData.filter((item) => item.title === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title="Ideas for building what comes next."
        description="Practical perspectives on product, engineering, AI, cloud, and the decisions that shape successful digital businesses."
        meta="Field notes & case studies"
      />
      <section className="section container">
        <div className="filter-row" aria-label="Filter insights">
          {categories.map((category) => (
            <button
              type="button"
              className={activeCategory === category ? "filter-button active" : "filter-button"}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="insight-grid">
          {insights.map((insight, index) => (
            <article className="card insight-card" key={`${insight.title}-${insight.description}`}>
              <span className="insight-type">{insight.title} · {String(index + 1).padStart(2, "0")}</span>
              <h3>{insight.description}</h3>
              <p>{insight.content}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Insights;
