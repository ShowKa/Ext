browser.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  alert(msg.hello);
  var tokens = tokenizer.tokenize("すもももももももものうち");
  tokens.forEach(t => {
    alert(t);
  });
});

browser.storage.local.get("color").then(function (item) {
  document.body.style.border = "5px solid " + item.color;
});

var dictUrl = browser.runtime.getURL("node_modules/kuromoji/dict/");
var tokenizer;
kuromoji.builder({ dicPath: dictUrl }).build(function(err, _tokenizer) {
  console.log(err);
  tokenizer = _tokenizer;
});
