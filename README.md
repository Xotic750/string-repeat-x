<a
  href="https://travis-ci.org/Xotic750/string-repeat-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/string-repeat-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/string-repeat-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/string-repeat-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/string-repeat-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/string-repeat-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/string-repeat-x"
  title="npm version">
<img src="https://badge.fury.io/js/string-repeat-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/string-repeat-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/string-repeat-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/string-repeat-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/string-repeat-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/string-repeat-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/string-repeat-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_string-repeat-x"></a>

## string-repeat-x

Constructs and returns a new string which contains the specified number of copies of the string.

<a name="exp_module_string-repeat-x--module.exports"></a>

### `module.exports` ⇒ <code>\*</code> ⏏

**Kind**: Exported member  
**Returns**: <code>\*</code> - The target.  

| Param    | Type                       | Description |
| -------- | -------------------------- | ----------- |
| string   | <code>string</code>        | The string. |
| count    | <code>number|string</code> | The count.  |

**Example**

```js
import repeat from 'string-repeat-x';

repeat('abc', -1); // RangeError
repeat('abc', 0); // ''
repeat('abc', 1); // 'abc'
repeat('abc', 2); // 'abcabc'
repeat('abc', 3.5); // 'abcabcabc' (count will be converted to integer)
repeat('abc', 1/0); // RangeError
```
