chrome.runtime.onInstalled.addListener(function(details) {
  if(details.reason === 'install') {
    // open first run page on install
    chrome.tabs.create({url: '/first-run.html'});
  }
});
