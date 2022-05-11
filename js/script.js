
const app = new Vue ({

  el: '#app',

  data:{

    emails: [],
    isLoading: true,

  },

  mounted() {

    this.generateEmails(10);

  }, methods: {

    generateEmails(number){

      for (let index = 0; index < number ; index++) {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(resp =>{
          this.emails[index] = resp.data.response;
        })

      }

      //Inserito per ritardare il
      setTimeout(() => {
        this.isLoading = false} , 2000);

    }

  },

})