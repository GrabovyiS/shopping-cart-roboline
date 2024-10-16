async function fetchProducts() {
  try {
    const response = await fetch("https://webapi.omoloko.ru/api/v1/products");
    if (response.ok) {
      const result = await response.json();
      return result.products.splice(0, 10);
    } else {
      return Promise.reject(new Error(response.status));
    }
  } catch (error) {
    return Promise.reject(new Error(error));
  }
}

export default fetchProducts;
