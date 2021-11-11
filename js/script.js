const app = new Vue({
  el: '#app',

  data: {
    testo: 'Ciao',
    nome: 'Giulia',
    colore: 'rosa',
    immagine: 'https://www.focus.it/images/2021/06/08/cane_1020x680.jpg'
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
    }

   

  }

})