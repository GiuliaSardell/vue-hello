const app = new Vue({
  el: '#app',

  data: {
    testo: 'Ciao',
    nome: 'Giulia',
    colore: 'rosa',
    immagine: 'https://www.google.com/search?q=cane&sxsrf=AOaemvJPiQOy5J6bvIer044lTxwzjWKARA:1636554657359&tbm=isch&source=iu&ictx=1&fir=MvP4M-Ltg8eq6M%252CdYmeLHQox7NZPM%252C_%253Bl2bqDbRpTsqGyM%252CaON4w6Yr3iBpKM%252C_%253BQWmmq-2z1qjd2M%252CfxDZJOwgU3wYaM%252C_%253BNiSTCwNlUy_0ZM%252CEiMB_7-anfwwuM%252C_&vet=1&usg=AI4_-kRpAZNxRA_rBKs1TeeNaqgAzTN5Xw&sa=X&ved=2ahUKEwjO_oaYgY70AhWYhf0HHRa9D2EQ_B16BAhWEAE#imgrc=MvP4M-Ltg8eq6M'
  },

  methods: {
    saluta(){
      this.testo="Ciao "+this.nome
      console.log('ciao ' + this.nome)
    },

    coloreBlue(){
      this.colore = "blue"
    },

    coloreRosa(){
      this.colore="rosa"
    },

    cancella(){
      this.testo=""
    },

    immagineFunction(){
      document.querySelector('#img').innerHTML = 
      `
      <img src="{{immagine}}" alt=""
      `
    
    }

  }

})