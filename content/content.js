browser.storage.local.get({
   color: 'default'
 }, function(items) {
    document.body.style.border = "5px solid " + items.color;
});
