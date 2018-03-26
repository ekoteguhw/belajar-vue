const app = new Vue({
  el: '#app',
  data: {
    product: {
      title: 'Kaos kaki',
      description: [
        'Bahan katun 80%',
        'Bahan polyester 20%',
        'Nyaman untuk semua gender',
      ],
      image: './assets/kaoskaki.jpg',
      inventory: 20,
      inStock: true,
      variants: [
        {
          id: 1,
          color: 'Image 1',
          image: './assets/one.jpg',
        },
        {
          id: 2,
          color: 'Image 2',
          image: './assets/two.jpg',
        },
        {
          id: 3,
          color: 'Image 3',
          image: './assets/three.jpg',
        },
        {
          id: 4,
          color: 'Image 4',
          image: './assets/four.jpg',
        },
      ],
    },
    cart: 0,
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
      this.product.inventory -= 1;
      if (this.product.inventory < 0) {
        this.product.inStock = false;
      }
    },
    checkStock: function() {
      let stock = this.product.inventory;
      if (stock > 5) {
        this.product.inStock = true;
        return 'available';
      } else if (stock > 0 && stock <= 5) {
        this.product.inStock = true;
        return 'warning';
      } else {
        this.product.inStock = false;
        return 'danger';
      }
    },
    updateProduct: function(image) {
      this.product.image = image;
    },
  },
});
