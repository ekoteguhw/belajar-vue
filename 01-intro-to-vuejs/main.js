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
      inventory: 50,
      variants: [
        {
          id: 1,
          color: 'gray',
        },
        {
          id: 2,
          color: 'blue',
        },
        {
          id: 3,
          color: 'brown',
        },
        {
          id: 4,
          color: 'black',
        },
      ],
    },
  },
});
