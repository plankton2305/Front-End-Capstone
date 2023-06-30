
// Save the product to localStorage
export const saveToCloset = (product) => {
  const closetData = localStorage.getItem('yourCloset');
  let closet = closetData ? JSON.parse(closetData) : [];

  // Check if the product is already saved
  const existingProduct = closet.find((item) => item.product.id === product.product.id);
  if (!existingProduct) {
    closet.push(product);
    localStorage.setItem('yourCloset', JSON.stringify(closet));
  }
};

// Retrieve all products from localStorage
export const getFromCloset = () => {
  const closetData = localStorage.getItem('yourCloset');
  return closetData ? JSON.parse(closetData) : [];
};

// Remove a product from localStorage by its ID
export const removeFromCloset = (productId) => {
  const closetData = localStorage.getItem('yourCloset');
  let closet = closetData ? JSON.parse(closetData) : [];

  // Filter out the product with the matching ID
  const updatedCloset = closet.filter((item) => item.product.id !== productId);

  localStorage.setItem('yourCloset', JSON.stringify(updatedCloset));
};