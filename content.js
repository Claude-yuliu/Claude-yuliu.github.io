// Edit this file to update the site. Keep news in newest-first order.
// Paths are relative to index.html, so this also works on GitHub project Pages.
window.siteContent = {
  profile: {
    name: "Yu (Claude) Liu",
    tagline: "Computer graphics · Physics · Motion",
    photo: "assets/photo.jpeg",
    email: "yul2@umbc.edu",
    location: "Baltimore, Maryland",
    affiliation: "University of Maryland, Baltimore County",
    // Each string becomes a paragraph. Add as many paragraphs as you need.
    bio: [
      "I am a Ph.D. student in Computer Science at the University of Maryland, Baltimore County, advised by Dr. Adam Bargteil.",
      "My research focuses on computer graphics, physics simulation, and character animation. I am interested in developing highly agile character motion and exploring the capabilities of articulated models in physical simulation."
    ],
    links: [
      { label: "CV", url: "assets/Yu_Liu_CV.pdf" },
      { label: "GitHub", url: "https://github.com/Claude-yuliu" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=2zFCd6QAAAAJ&hl=en" }
    ]
  },
  // Dates use YYYY or YYYY-MM. Link text is optional; remove link to use text only.
  news: [
    {
      date: "2026",
      text: "Two coauthored papers appear in the proceedings of CHI 2026!",
      link: { label: "See publications", url: "#publications-heading" }
    },
    {
      date: "2025-08",
      text: "I started my Ph.D. in Computer Science at UMBC."
    },
    {
      date: "2025-05",
      text: "I graduated from the University of Pittsburgh with a B.S. in Computer Science."
    }
  ],
  // To add a paper, copy an object below. Additional links can be Paper, Code,
  // Project, Video, etc. Cover images are displayed in full without cropping.
  publications: [
    {
      title: "When to Explain: Modeling User Need for Explanations in Real-World Autonomous Driving",
      authors: ["Shihong Ling", "Yaohan Ding", "Yu Liu", "Yue Wan", "Xiaowei Jia", "Na Du"],
      venue: "CHI 2026",
      image: "assets/covers/when2explain.png",
      imageAlt: "Annotated driving scene highlighting a vehicle action and an upcoming red traffic light.",
      imageWidth: 489,
      imageHeight: 316,
      links: [{ label: "Paper", url: "https://doi.org/10.1145/3772318.3791778" }]
    },
    {
      title: "How Humans Naturally Refer to Targets: Understanding Multimodal Instruction Patterns in Human–Robot Interaction",
      authors: ["Lesong Jia", "Makayla Chang", "Yu Liu", "Na Du"],
      venue: "CHI 2026",
      image: "assets/covers/howHumanRefer2target.png",
      imageAlt: "A person points toward a target while interacting with a robot in a room.",
      imageWidth: 461,
      imageHeight: 306,
      links: [{ label: "Paper", url: "https://doi.org/10.1145/3772318.3790946" }]
    }
  ]
};
