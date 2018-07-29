const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let i = 0;
  document.body.addEventListener('keydown', function(e) {
    key = parseInt(e.which || e.detail);
    if (key === code[i]) {
      i++;

      if (i === code.length) {
        alert('You cracked the code!');

        i = 0;
      }
    } else {
      i = 0;
    }
  })
}
