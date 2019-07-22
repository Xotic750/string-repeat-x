<a href="https://travis-ci.org/Xotic750/string-repeat-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/string-repeat-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/string-repeat-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/string-repeat-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/string-repeat-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/string-repeat-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/string-repeat-x" title="npm version">
<img src="https://badge.fury.io/js/string-repeat-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_module-boilerplate-x"></a>

## string-repeat-x

Constructs and returns a new string which contains the specified number of copies of the string.

<a name="exp_module_module-boilerplate-x--module.exports"></a>

### `module.exports` ⇒ <code>\*</code> ⏏

This method is just a placeholder.

**Kind**: Exported member  
**Returns**: <code>\*</code> - The target.  
**Throws**:

- <code>Error</code> If target is not undefined.

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
