const app = new Vue({
  el: '#app',

  data: {
    testo: 'Ciao',
    nome: 'Giulia',
    colore: 'rosa',
    immagine: ''
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