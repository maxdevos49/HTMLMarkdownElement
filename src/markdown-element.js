
import showdown from "https://esm.run/showdown"

class HTMLMarkdownElement extends HTMLElement {
    constructor() {
        super();

        this.converter = new showdown.Converter()
        this.shadow = this.attachShadow({ mode: "closed" });
        this.mutationObserver = new MutationObserver(() => this.renderMarkup());

        this.renderMarkup();
    }

    renderMarkup() {
        const converter = this.converter;
        const markup = this.innerHTML || "";
        const flavor = this.getAttribute("flavor") || "github";

        converter.setFlavor(flavor);
        const html = converter.makeHtml(markup)
        this.shadow.innerHTML = html;
    }

    connectedCallback() {
        this.mutationObserver.observe(this, { characterData: true, attributes: true, childList: false, subtree: true })
    }

    disconnectedCallback() {
        this.mutationObserver.disconnect();
    }
}

customElements.define('mark-down', HTMLMarkdownElement);
export { HTMLMarkdownElement }
