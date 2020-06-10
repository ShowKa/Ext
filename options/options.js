function save_options() {
  const color = document.getElementById('color').value;
  browser.storage.local.set({
        color: color
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved: ' + color;
    });
}

document.getElementById('save').addEventListener('click', save_options);

