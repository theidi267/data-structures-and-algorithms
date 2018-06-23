'use strict';

let balancedBraces = require('../multi-bracket-validation.js');

describe('Maches brackets in string, disregarding other content', () => {
  it('balancedBraces(ab[cd]{})', () => {
    let outcome = balancedBraces('ab[cd]{}');
    expect(outcome).toEqual(true);
  });
});

describe('returns true if matched', () => {
  it('balancedBraces([(){}[[]])', () => {
    let outcome  = balancedBraces('(){}[[]]');
    expect(outcome ).toEqual(true);
  });
});

describe('returns false if not matched', () => {
  it('balancedBraces([({}])', () => {
    let outcome  = balancedBraces('[({}]');
    expect(outcome ).toEqual(false);
  });
});