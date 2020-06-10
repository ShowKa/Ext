function save_options() {
  const color = document.getElementById('color').value;
  browser.storage.local.set({ color: color }).then(function () {
    var status = document.getElementById('status');
    status.textContent = 'Options saved: ' + color;
  });
}
document.getElementById('save').addEventListener('click', save_options);
