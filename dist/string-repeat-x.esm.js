import numberIsFinite from 'is-finite-x';
import toInteger from 'to-integer-x';
import requireObjectCoercible from 'require-object-coercible-x';
import toStr from 'to-string-x';
import attempt from 'attempt-x';
import methodize from 'simple-methodize-x';
var EMPTY_STRING = '';
var nativeRepeat = EMPTY_STRING.repeat;
var methodizedRepeat = typeof nativeRepeat === 'function' && methodize(nativeRepeat);
var isWorking = attempt(methodizedRepeat, 'a', 5).value === 'aaaaa';

var patchedRepeat = function repeat(value, count) {
  return methodizedRepeat(requireObjectCoercible(value), count) || EMPTY_STRING;
};

var assertRange = function assertRange(n) {
  // Account for out-of-bounds indices
  if (n < 0 || !numberIsFinite(n)) {
    throw new RangeError('Invalid count value');
  }

  return n;
};

export var implementation = function repeat(value, count) {
  var string = toStr(requireObjectCoercible(value));
  var n = assertRange(toInteger(count));
  var result = EMPTY_STRING;

  while (n) {
    if (n % 2 === 1) {
      result += string;
    }

    if (n > 1) {
      string += string;
    }
    /* eslint-disable-next-line no-bitwise */


    n >>= 1;
  }

  return result;
};
/**
 * Repeat the given string the specified number of times.
 *
 * @param {string} value - The string to repeat.
 * @param {(number|string)} count - The number of times to repeat the string.
 * @returns {string} Repeated string.
 */

var $repeat = isWorking ? patchedRepeat : implementation;
export default $repeat;

//# sourceMappingURL=string-repeat-x.esm.js.map