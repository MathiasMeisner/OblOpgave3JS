Vue.createApp({

    data() {

        return {
            word: null,
            message: null,
            messagetolower: null,
            messagetoupper: null
        }

    },

    methods: {
        showWords() {
            if(this.word == null) {
                this.message = "empty"
            }
            else {
                this.message = this.word.toString()
                this.messagetolower = this.word.toLowerCase().toString()
                this.messagetoupper = this.word.toUpperCase().toString()
            }
        }
    }

}).mount("#app")