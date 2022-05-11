
const app = new Vue ({

  el: '#app',

  data:{

    emails: [],
    isLoading: true,
    numberOfEmail: 10

  },

  mounted() {

    this.generateEmails(this.numberOfEmail);

  }, methods: {

    generateEmails(number){

      for ( let index = 0; index < number ; index++) {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(resp =>{
          this.emails.push(resp.data.response);
          console.log(resp.data.response);
        })

        console.log('INDEX: ',index);
        console.log('NUMBER: ',number);

        if (index === number - 1){
          setTimeout(() => {
            this.isLoading = false; } , 2000);
        }

      }


      //Inserito per ritardare il caricamento della lista
      // setTimeout(() => {
      //   } , 2000);

    }

  },

})