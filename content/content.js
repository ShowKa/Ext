browser.storage.local.get({
   color: 'default'
 }, function(items) {
    document.body.style.border = "5px solid " + items.color;
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  alert(msg.hello);
});
