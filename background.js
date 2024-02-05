// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
  // Query the active tab in the current window
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // Extract information about the first tab (usually the only one)
    var currentTab = tabs[0];

    // Extract the URL of the current tab
    var url = currentTab.url;

    // Display the URL in the console
    alert("Current URL of the website: " + url);
  });
});
