let app = new Vue({
    el: '#app',
    data:{
        timerTitle: false,
        imgBig: 'big',
        images: [
            'https://cdn.dribbble.com/users/43762/screenshots/1438973/ng-colab-space_day.gif',
            'https://i.pinimg.com/originals/2c/5e/5b/2c5e5b2046de05ff3f3e28fbe1b7d169.gif',
            'https://www.domusweb.it/content/dam/domusweb/it/speciali/domusfordesign/2020/il-nuovo-design-italiano/domus-for-design-annichiarico-bianchi-03.jpg.foto.rmedium.jpg',
            'https://i.pinimg.com/originals/e4/d6/68/e4d668d1400a3a4541f861cb383074e6.gif',
            'https://i.stack.imgur.com/Dil7r.gif',
            'https://media3.giphy.com/media/LwzDBXlwVOGz7zi8cp/giphy.gif',
            'https://miro.medium.com/max/1600/1*kiAtJzGH6tcKnILUKJenvA.gif',
            'https://s3.amazonaws.com/blog.invisionapp.com/uploads/2017/04/running-gif.gif',
            'https://33.media.tumblr.com/c414f6e92d4ca4229080483543afcc27/tumblr_nwj4jxKySK1qgzs6bo1_540.gif',
            'https://i.gifer.com/G4H1.gif',
            'https://vitalvernici.it/wp-content/uploads/2020/10/city-illustration-motion-design.gif',
            'https://miro.medium.com/max/1600/1*Ig4t1nwU_RTQAnMym1tURg.gif',
            'https://joyenergizer.com/wp-content/uploads/2017/01/GIFS-21.gif',
            'https://freefrontend.com/assets/img/css-animation-examples/css-handbook-download-animation.gif',
            'https://media4.giphy.com/media/xUOwG9fkX7kINUrIw8/giphy.gif',
            'https://i.pinimg.com/originals/c3/66/af/c366af06de9d81af7adf8188ce872734.gif'
        ],
        countImg: 0,
        count2: 1,
        count3: 2,
        rotationText: 'grades',
        interval: ''

    },
    created(){
        this.interval = setInterval( this.nextImg,3000 );
    },
    methods: {

        titleTime(){
            
            this.timerTitle = !this.timerTitle;
        },
        nextImg(){
            //qui gli dico che quando il contatore é uguale alla lunghezza dell'array Img
            //mi torna a 0 , else incrementa
            if(this.countImg == (this.images.length - 1)){
                this.countImg = 0;
            }
            else{
                this.countImg++;
            }

            if (this.count2 == (this.images.length - 1)) {
                this.count2 = 1;
            }
            else {
                this.count2++;
            }

            if (this.count3 == (this.images.length - 1)) {
                this.count3 = 2;
            }
            else {
                this.count3++;
            }
            
        },
        prevImg(){
            this.countImg--;
            (this.countImg < 0) ? this.countImg = (this.images.length-1) : this.countImg --;
            this.count2--;
            (this.count2 < 1) ? this.count2 = (this.images.length - 2) : this.count2--;
            this.count3--;
            (this.count3 < 2) ? this.count3 = (this.images.length - 3) : this.count3--;
        },
        changeImg(indice){
            this.count2 = indice;
            clearInterval(this.interval);
        },
        ruotaTesto(){
            (this.rotationText == 'grades') ? this.rotationText = 'grades-complete' : this.rotationText = 'grades';
        }

    }
});