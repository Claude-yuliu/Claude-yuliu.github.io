/* Rendering stays separate from the editable content in content.js. */
(() => {
  "use strict";
  const content = window.siteContent;
  if (!content) return;
  const byId = (id) => document.getElementById(id);
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  const link = ({ label, url }, className) => {
    const anchor = element("a", className, label);
    anchor.href = url;
    if (/^https?:\/\//.test(url)) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
    return anchor;
  };

  const profile = content.profile;
  byId("profile-name").textContent = profile.name;
  byId("profile-tagline").textContent = profile.tagline;
  byId("profile-photo").src = profile.photo;
  byId("profile-photo").alt = `Portrait of ${profile.name}`;
  byId("profile-location").textContent = profile.location;
  byId("footer-affiliation").textContent = profile.affiliation;
  byId("email-link").href = `mailto:${profile.email}`;
  byId("email-link").textContent = profile.email;
  profile.bio.forEach((paragraph) => byId("biography").append(element("p", "", paragraph)));
  profile.links.forEach((item) => byId("profile-links").append(link(item, "ink-link")));

  content.news.forEach((item) => {
    const row = element("li", "news-item");
    const date = element("time", "news-date", item.date.replace("-", "/"));
    date.dateTime = item.date;
    const text = element("p", "", item.text);
    if (item.link) {
      text.append(document.createTextNode(" "), link(item.link, "text-link"));
    }
    row.append(date, text);
    byId("news-list").append(row);
  });

  content.publications.forEach((paper) => {
    const article = element("article", "publication");
    const art = element("div", "publication-art");
    if (paper.image) {
      const image = element("img");
      image.src = paper.image;
      image.alt = paper.imageAlt || "";
      image.width = paper.imageWidth || 560;
      image.height = paper.imageHeight || 320;
      image.loading = "lazy";
      art.append(image);
    }
    const details = element("div", "publication-details");
    details.append(element("p", "venue", paper.venue), element("h3", "", paper.title));
    const authors = element("p", "authors");
    paper.authors.forEach((author, authorIndex) => {
      if (authorIndex) authors.append(document.createTextNode(", "));
      authors.append(author === "Yu Liu" ? element("strong", "", author) : document.createTextNode(author));
    });
    const links = element("nav", "paper-links");
    links.setAttribute("aria-label", `Links for ${paper.title}`);
    paper.links.forEach((item) => {
      const anchor = link(item, "ink-link");
      const arrow = element("span", "link-arrow", "↗");
      arrow.setAttribute("aria-hidden", "true");
      anchor.append(arrow);
      links.append(anchor);
    });
    details.append(authors, links);
    article.append(art, details);
    byId("publications").append(article);
  });

  const news = byId("news-window");
  const controls = byId("news-controls");
  const updateNewsControls = () => {
    const canScroll = news.scrollHeight > news.clientHeight + 2;
    controls.hidden = !canScroll;
    news.tabIndex = canScroll ? 0 : -1;
    byId("news-up").disabled = news.scrollTop <= 1;
    byId("news-down").disabled = news.scrollTop + news.clientHeight >= news.scrollHeight - 2;
  };
  ["up", "down"].forEach((direction) => {
    byId(`news-${direction}`).addEventListener("click", () => {
      news.scrollBy({
        top: (direction === "up" ? -1 : 1) * news.clientHeight * 0.8,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
      });
    });
  });
  news.addEventListener("scroll", updateNewsControls, { passive: true });
  window.addEventListener("resize", updateNewsControls);
  if ("ResizeObserver" in window) new ResizeObserver(updateNewsControls).observe(news);
  updateNewsControls();
  document.body.id = "top";
})();
