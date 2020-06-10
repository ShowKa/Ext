browser.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  alert(msg.hello);
});

browser.storage.local.get("color").then(function (item) {
  document.body.style.border = "5px solid " + item.color;
});
