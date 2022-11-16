/**
 * Utilities Function
 */

const renderHTML = (el, html) => {
    const element = el;
    element.innerHTML = html;
};

export {
    // eslint-disable-next-line import/prefer-default-export
    renderHTML,
};
