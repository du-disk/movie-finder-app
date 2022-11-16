/**
 * Core Component
 * @extends {HTMLElement}
 */
import { renderHTML } from '../utils/index.js';

class CoreComponent extends HTMLElement {
    constructor(useShadowDOM = false) {
        super();
        this.useShadowDOM = useShadowDOM ?? false;

        // Create a shadow root if useShadowDOM is true
        if (this.useShadowDOM) {
            this.shadowDOM = this.attachShadow({ mode: 'open' });
        }
    }

    connectedCallback() {
        this.render();
    }

    render(html) {
        // Render the html to the shadow root if useShadowDOM is true
        if (this.useShadowDOM) {
            renderHTML(this.shadowDOM, html);
        } else {
            renderHTML(this, html);
        }
    }
}

export default CoreComponent;
