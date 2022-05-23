# HTMLMarkdownElement

Simple native HTML webcomponent for displaying markdown.

## Installation
Simply include the script

```html
<script type="module" src="./markdown-element.js"></script>
```

then use the tag `mark-down` in your HTML or JS.

```html
<mark-down flavor="github">
# Example
- item 1
- item 2
- item 3
</mark-down>
```

#### `flavor` attribute options:
- "original" | "vanilla" | "github"(Default)