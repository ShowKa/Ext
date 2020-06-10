function callJapritz(tab) {
  // send
  browser.tabs.sendMessage(tab.id, {
    hello: "call japritz"
  }, null);
}

// tool button
browser.browserAction.onClicked.addListener(function (tab) {
  callJapritz(tab);
});
