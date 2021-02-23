import {
  isValidEmail,
  isValidPrice,
  isValidProductName,
} from './validateFunctions';

describe('Testing product name validation functions', () => {
  it('should invalidate the product name when it´s less than 2 characters', () => {
    const result = isValidProductName('A');
    expect(result).toBeFalsy();
  });
  it('should validate the product name once it has more than 2 characters', () => {
    const result = isValidProductName('Nimbus');
    expect(result).toBeTruthy();
  });
});

describe('Testing email validation functions', () => {
  it('should invalidate the mail adress when it does not contain the "@" symbol', () => {
    const result = isValidEmail('email(at)domain.com');
    expect(result).toBe(false);
  });
  it('should validate the mail address when it does contain the "@" symbol', () => {
    const result = isValidEmail('email@domain.com');
    expect(result).toBe(true);
  });
});

describe('Testing the price field', () => {
  it('should not allow using "."', () => {
    const result = isValidPrice('1.44');
    expect(result).toBe(false);
  });
  it('should validate a price using ","', () => {
    const result = isValidPrice('1,37');
    expect(result).toBe(true);
  });
  it('should not allow to have more than 2 decimals', () => {
    const result = isValidPrice('1,556');
    expect(result).toBe(false);
  });
});
