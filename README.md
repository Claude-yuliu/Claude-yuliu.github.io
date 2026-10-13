# Yu (Claude) Liu

A responsive, buildless personal website for GitHub Pages. The design follows
`generated_layout.png`, refined into a cleaner academic layout with a warm
background, subtle sage and terracotta accents, bold serif headings, a compact
portrait, news, and publication covers.

## Update the website

- **Bio, profile links, news, and papers:** edit `content.js`. Each bio entry is
  a paragraph; the layout grows automatically as text is added.
- **Photo:** replace `assets/photo.jpeg`, or update `profile.photo` in `content.js`.
- **CV:** replace `assets/Yu_Liu_CV.pdf`, or update the CV link in `content.js`.
  This is the supplied filename (the brief referred to `assets/cv.pdf`).
- **News:** add an object to the start of `news`, using `YYYY` or `YYYY-MM` for
  its date. The news panel scrolls as entries accumulate, with keyboard and
  button controls. It does not move automatically.
- **Publications:** copy a publication object, then change its title, authors,
  venue, image, and links. Covers are in `assets/covers/` and are displayed
  without cropping. Use `imageAlt` for a description and `imageWidth` and
  `imageHeight` for the image's original dimensions. Omit `image` if unneeded.
- **Appearance:** edit `styles.css`. Shared colors are at the top of the file.

Example news entry:

```js
{
  date: "2026-10",
  text: "Your announcement goes here.",
  link: { label: "Read more", url: "https://example.com" }
}
```

Example publication:

```js
{
  title: "Paper title",
  authors: ["Yu Liu", "Coauthor Name"],
  venue: "Conference · 2027",
  image: "assets/covers/your-thumbnail.jpg",
  imageAlt: "A brief description of the publication cover",
  imageWidth: 600,
  imageHeight: 400,
  links: [
    { label: "Paper", url: "https://doi.org/your-doi" },
    { label: "Code", url: "https://github.com/your-repository" }
  ]
}
```

Keep commas between entries and quote all text. Content is rendered as plain
text; HTML in content fields is not interpreted.

## Preview locally

No package installation or build is required. Open `index.html` directly, or run:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. Stop the server with Ctrl+C.

## Publish on GitHub Pages

Push these files to your GitHub repository. Under **Settings → Pages**, choose
**Deploy from a branch**, select the branch containing these files, and choose
**/ (root)**. Relative asset paths support both user and project Pages.

The source bio follows the supplied layout and CV. Publication details come
from `assets/Yu_Liu_CV.pdf`; paper links are their DOI landing pages:

- [When to Explain](https://doi.org/10.1145/3772318.3791778)
- [How Humans Naturally Refer to Targets](https://doi.org/10.1145/3772318.3790946)
