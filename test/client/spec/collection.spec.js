import {
  containsStrings,
  containsOnlyStrings,
  isArrayOfArrays
} from "src/collection";

describe("containsStrings", () => {
  it("handles empty argument", () => {
    expect(containsStrings()).to.equal(false);
  });

  it("handles empty array", () => {
    expect(containsStrings([])).to.equal(false);
  });

  it("returns false for collections of non-strings", () => {
    expect(containsStrings([0, 1])).to.equal(false);
    expect(containsStrings([undefined, null, NaN])).to.equal(false);
    expect(containsStrings([{}, {a: 'foo'}])).to.equal(false);
  });

  it("returns false for collections with strings", () => {
    expect(containsStrings(['hello'])).to.equal(true);
    expect(containsStrings(['hello', 'there'])).to.equal(true);
    expect(containsStrings([0, 'hello', {}, null])).to.equal(true);
  });
});

describe("containsOnlyStrings", () => {
  it("handles empty argument", () => {
    expect(containsOnlyStrings()).to.equal(false);
  });

  it("handles empty array", () => {
    expect(containsOnlyStrings([])).to.equal(false);
  });

  it("returns false for collections of non-strings", () => {
    expect(containsOnlyStrings([0, 1])).to.equal(false);
    expect(containsOnlyStrings([undefined, null, NaN])).to.equal(false);
    expect(containsOnlyStrings([{}, {a: 'foo'}])).to.equal(false);
  });

  it("returns false for collections with some strings", () => {
    expect(containsOnlyStrings(['hello', 0])).to.equal(false);
    expect(containsOnlyStrings(['hello', ['not me']])).to.equal(false);
    expect(containsOnlyStrings([0, 'hello', {}, null])).to.equal(false);
  });

  it("returns true for collections with only strings", () => {
    expect(containsOnlyStrings(['hello'])).to.equal(true);
    expect(containsOnlyStrings(['hello', 'there'])).to.equal(true);
  });
});

describe("isArrayOfArrays", () => {
  it("handles empty argument", () => {
    expect(isArrayOfArrays()).to.equal(false);
  });

  it("handles empty array", () => {
    expect(isArrayOfArrays([])).to.equal(false);
  });

  it("returns false for collections of non-arrays", () => {
    expect(isArrayOfArrays([1])).to.equal(false);
    expect(isArrayOfArrays([{}])).to.equal(false);
    expect(isArrayOfArrays(['a'])).to.equal(false);
  });

  it("returns false for mixed collections", () => {
    expect(isArrayOfArrays([[], 1, {}])).to.equal(false);
    expect(isArrayOfArrays([1, [], {}])).to.equal(false);
    expect(isArrayOfArrays([1, {}, []])).to.equal(false);
  });

  it("returns true for collections of arrays", () => {
    expect(isArrayOfArrays([ [] ])).to.equal(true);
    expect(isArrayOfArrays([ [{}] ])).to.equal(true);
    expect(isArrayOfArrays([ [ [] ] ])).to.equal(true);
    expect(isArrayOfArrays([ [], [] ])).to.equal(true);
  });
});
