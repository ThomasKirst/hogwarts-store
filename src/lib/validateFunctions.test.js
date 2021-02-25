import {
  isValidProductName,
  isValidEmail,
  isValidPrice,
} from './validateFunctions';

describe('Beschreibung', () => {
  it('should do something', () => {
    expect(true).toBeFalsy();
  });
});

describe('Product name is valid', () => {
  it('should invalidate the product name when it is less than 2 characters', () => {
    const result = isValidProductName('A');
    expect(result).toBeFalsy();
  });
  it('should validate the product name once it has more than 2 characters', () => {
    const result = isValidProductName('Nimbus 2022');
    expect(result).toBeTruthy();
  });
  it('should invalidate the product when no parameter is given', () => {
    const result = isValidProductName();
    expect(result).toBe(false);
  });
});

describe('Email function validation', () => {
  it('should return false when no "@" symbol is present in the email address', () => {});
});
