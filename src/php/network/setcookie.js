module.exports = function setcookie (name, value, expires, path, domain, secure) {
  //  discuss at: http://locutusjs.io/php/setcookie/
  // original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // bugfixed by: Andreas
  // bugfixed by: Onno Marsman
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //   example 1: setcookie('author_name', 'Kevin van Zonneveld');
  //   returns 1: true

  var setrawcookie = require('../network/setrawcookie')
  return setrawcookie(name, encodeURIComponent(value), expires, path, domain, secure)
}
