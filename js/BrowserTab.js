/**
 * Browser Tab.
 * 
 * A Browser Tab is a UI element which shows the icon and title of a
 * web page and is used to select a Tab Panel.
 */

/**
 * Browser Tab Constructor.
 *
 * @param Integer tabId ID to give to new tab.
 * @param Integer windowId ID of window to add tab to.
 */
var BrowserTab = function(tabId, windowId) {
  if (tabId === undefined || windowId === undefined) {
    return;
  }
  this.id = tabId;
  this.windowId = windowId;
  this.container = document.getElementById('tabs' + windowId);
  this.newTabButton = document.getElementById('new-tab-button' + windowId);
  this.render();
  return this;
};

/** 
 * Browser Tab View.
 */
BrowserTab.prototype.view = function() {
  return '<div id="tab-' + this.windowId + '-' + this.id +
    '" class="browser-tab" data-tab-id="'+ this.id + '">' +
      '<span class="tab-title"></span>' +
      '<button type="button" id="close-tab-button' + this.windowId + 
        '-' + this.id + '" class="close-tab-button">' +
    '</div>';
};

/**
 * Render the tab.
 */
BrowserTab.prototype.render = function() {
  this.newTabButton.insertAdjacentHTML('beforebegin', this.view());
  this.element = document.getElementById('tab-' + this.windowId + '-' + this.id);
};

/**
 * Delete the Browser Tab from the DOM.
 */
BrowserTab.prototype.destroy = function() {
  this.container.removeChild(this.element);   
}
