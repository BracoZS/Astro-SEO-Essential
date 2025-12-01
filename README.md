# 🚀 Astro Essential SEO

A lightweight, **type-safe**, and **zero-config** SEO component designed for Astro projects that entralizes your SEO configuration.

## ✨ Features

- **🔒 Type-Safe**: Built with TypeScript. Enjoy full autocomplete and validation for all your SEO props.
- **🔗 Absolute URLs**: Automatically converts relative image paths (e.g., `/og.png`) to absolute URLs, ensuring your social cards work perfectly on Twitter and Facebook.
- **📱 Social Ready**: Pre-configured Open Graph and Twitter Card support out of the box.
- **⚡ Zero Config**: Intelligently uses your `astro.config.mjs` site URL as the base.
- **🧩 Self-Contained**: No external type files needed. Everything is encapsulated in a single component.

## 🛠️ Usage

Simply import the `src/components/SEO.astro` component inside the `<head>` tag:

```astro
---
import SEO from "../components/SEO.astro";

interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<head>
  <!-- ... other head elements ... -->
  
  <SEO
    title={title}
    description={description}
    image={{ 
      src: "/images/og-default.png", 
      alt: "A descriptive alt text for accessibility" 
    }}
    twitter={{ 
      handle: "@myhandle",
      card: "summary_large_image"
    }}
  />
</head>
```

## 📦 Key Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | **Required**. The title of the page. |
| `description` | `string` | **Required**. A short description for search engines and social cards. |
| `image` | `{ src, alt }` | Optional. The image for social sharing. Supports relative paths! |
| `canonicalURL` | `URL` \| `string` | Optional. Defaults to the current page URL. |
| `og` | `object` | Optional. Override specific Open Graph properties. |
| `twitter` | `object` | Optional. Override specific Twitter properties. |

## 💡 Pro Tip

Define your `site` in `astro.config.mjs` to make the absolute URL resolution work automatically:

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://www.your-domain.com',
});
```

## Screenshots (preview)

Previews generated from static HTML using `og:` and `twitter:` tags rendered by this component.

- **X (Twitter)**  
  ![X card screenshot](https://github.com/user-attachments/assets/758c2115-2011-4ad7-9103-8f1c5d74b50d)

- **Discord**
  ![Discord card screenshot](https://github.com/user-attachments/assets/44547903-07e5-4e3d-9497-b6fbc9f39061)

> You can use tools like meta tag previewers to verify your tags before deploying.


## Contributing

PRs and suggestions are welcome 🙌

1. Fork the repo
2. Create a feature branch:
3. Commit and push:
4. Open a Pull Request


## License

MIT ©[BracoZS](https://github.com/BracoZS)