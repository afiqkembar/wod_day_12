function input(s) { // LBH QVQ VG!

  return s.split('')

    .map.call(s, function(char) {

      x = char.charCodeAt(0);

    if (x < 65 || x > 90) {
        return String.fromCharCode(x);
      }

      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }

      return String.fromCharCode(x - 13);
    }).join('');
}

document.write(input("HELLO AFIQ KEMBAR"));
