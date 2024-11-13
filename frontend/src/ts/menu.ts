/**
 * @module menu-controls
 * Module for handling kiosk menu interactions and image navigation
 */

import htmx from "htmx.org";

let nextImageMenuButton: HTMLElement;
let prevImageMenuButton: HTMLElement;

function disableImageNavigationButtons() {
  htmx.addClass(nextImageMenuButton as Element, "disabled");
  htmx.addClass(prevImageMenuButton as Element, "disabled");
}

function enableImageNavigationButtons() {
  htmx.removeClass(nextImageMenuButton as Element, "disabled");
  htmx.removeClass(prevImageMenuButton as Element, "disabled");
}

/**
 * Initializes the menu controls and sets up event handlers
 * @param nextImageButton - The next image navigation button element
 * @param prevImageButton - The previous image navigation button element
 */
function initMenu(nextImageButton: HTMLElement, prevImageButton: HTMLElement) {
  if (!nextImageButton || !prevImageButton) {
    throw new Error('Both navigation buttons must be provided');
  }
  nextImageMenuButton = nextImageButton;
  prevImageMenuButton = prevImageButton;
}

export {
  initMenu,
  disableImageNavigationButtons,
  enableImageNavigationButtons,
};
