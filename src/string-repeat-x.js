import numberIsFinite from 'is-finite-x';
import toInteger from 'to-integer-x';
import requireObjectCoercible from 'require-object-coercible-x';
import toStr from 'to-string-x';
import attempt from 'attempt-x';

const EMPTY_STRING = '';
const {repeat: nativeRepeat} = EMPTY_STRING;
const hasNative = attempt(() => nativeRepeat.call('a', 5)).value === 'aaaaa';

/**
 * Repeat the given string the specified number of times.
 *
 * @param {string} value - The string to repeat.
 * @param {(number|string)} count - The number of times to repeat the string.
 * @returns {string} Repeated string.
 */
let $repeat;

if (hasNative) {
  $repeat = function repeat(value, count) {
    return nativeRepeat.call(requireObjectCoercible(value), count) || EMPTY_STRING;
  };
} else {
  $repeat = function repeat(value, count) {
    let string = toStr(requireObjectCoercible(value));
    let n = toInteger(count);

    // Account for out-of-bounds indices
    if (n < 0 || !numberIsFinite(n)) {
      throw new RangeError('Invalid count value');
    }

    let result = EMPTY_STRING;
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
}

const r = $repeat;

export default r;
