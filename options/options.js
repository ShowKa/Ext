function save_options() {
  const color = document.getElementById('color').value;
  document.getElementById('status').textContent = 'saved: ' + color;
}

document.getElementById('save').addEventListener('click', save_options);

