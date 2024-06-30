export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  }),
  getters: {
    isInCart: (state) => (product) => {
      return state.cartItems.some((item) => item.id === product.id);
    },
  },
  actions: {
    toggleProductInCart(product) {
      if (this.isInCart(product)) {
        this.cartItems = this.cartItems.filter(
          (item) => item.id !== product.id
        );
      } else {
        this.cartItems.push(product);
      }
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },

    removeCartItem(product) {
      this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
  },
});
