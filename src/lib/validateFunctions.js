const isValidProductName = (name) => name && name.length >= 2;

const isValidEmail = (email) => (email ? email.includes('@') : false);

const isValidPrice = (price) => {
  if (!price) return false;

  if (price.includes(',')) {
    const [_, decimals] = price.split(',');
    if (decimals.length <= 2) {
      return true;
    } else {
      return false;
    }
  } else if (!price.includes('.')) {
    return true;
  } else {
    return false;
  }
};

const isValidProductEntry = (product) =>
  isValidProductName(product.name) &&
  isValidPrice(product.price) &&
  isValidEmail(product.supportContact);

export default isValidProductEntry;
