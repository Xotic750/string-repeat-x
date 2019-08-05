import $repeat, {implementation} from '../src/string-repeat-x';

[implementation, $repeat].forEach((repeat, testNum) => {
  describe(`repeat ${testNum}`, function() {
    it('should return an empty string when a number is not given:', function() {
      expect.assertions(1);
      expect(repeat('a')).toBe('');
    });

    it('should return an empty string when zero or null is given as the number:', function() {
      expect.assertions(4);
      expect(repeat('', 0)).toBe('');
      expect(repeat('a', 0)).toBe('');
      expect(repeat('', null)).toBe('');
      expect(repeat('a', null)).toBe('');
    });

    it('should repeat the given string n times', function() {
      expect.assertions(11);
      expect(repeat(' ', 0)).toBe('');
      expect(repeat('a', 0)).toBe('');
      expect(repeat('a', 1)).toBe('a');
      expect(repeat('a', 2)).toBe('aa');
      expect(repeat('a', 3)).toBe('aaa');
      expect(repeat('   ', 3)).toBe('         ');
      expect(repeat('a ', 3)).toBe('a a a ');
      expect(repeat('a', 10)).toBe('aaaaaaaaaa');
      expect(repeat('b ', 10)).toBe('b b b b b b b b b b ');
      expect(repeat('a ', 10)).toBe('a a a a a a a a a a ');
      expect(repeat('abc ', 25)).toBe(
        'abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc ',
      );
    });

    it('should allow the multiplier to be a string:', function() {
      expect.assertions(6);
      expect(repeat('a', '0')).toBe('');
      expect(repeat('a', '1')).toBe('a');
      expect(repeat('a', '2')).toBe('aa');
      expect(repeat('a', '10')).toBe('aaaaaaaaaa');
      expect(repeat('b ', '10')).toBe('b b b b b b b b b b ');
      expect(repeat('a ', '10')).toBe('a a a a a a a a a a ');
    });

    it('should cache strings until the string changes:', function() {
      expect.assertions(6);
      expect(repeat('a', '5')).toBe('aaaaa');
      expect(repeat('b ', '5')).toBe('b b b b b ');
      expect(repeat('a ', '5')).toBe('a a a a a ');
      expect(repeat('c ', '5')).toBe('c c c c c ');
      expect(repeat('a ', '5')).toBe('a a a a a ');
      expect(repeat('b ', '5')).toBe('b b b b b ');
    });

    it('should throw an error when string is null or undefined:', function() {
      expect.assertions(3);
      expect(function() {
        repeat();
      }).toThrowErrorMatchingSnapshot();
      expect(function() {
        repeat(undefined);
      }).toThrowErrorMatchingSnapshot();
      expect(function() {
        repeat(null);
      }).toThrowErrorMatchingSnapshot();
    });

    it('should throw an error when count is invalid:', function() {
      expect.assertions(2);
      expect(function() {
        repeat('a', -1);
      }).toThrowErrorMatchingSnapshot();
      expect(function() {
        repeat('a', Infinity);
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
