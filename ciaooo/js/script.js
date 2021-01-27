let app = new Vue({
    el: '#app',
    data:{
        timerTitle: false,
        images: [
            'https://cdn.dribbble.com/users/43762/screenshots/1438973/ng-colab-space_day.gif',
            'https://i.pinimg.com/originals/2c/5e/5b/2c5e5b2046de05ff3f3e28fbe1b7d169.gif',
            'https://www.domusweb.it/content/dam/domusweb/it/speciali/domusfordesign/2020/il-nuovo-design-italiano/domus-for-design-annichiarico-bianchi-03.jpg.foto.rmedium.jpg',
            'https://i.pinimg.com/originals/e4/d6/68/e4d668d1400a3a4541f861cb383074e6.gif',
            'https://i.stack.imgur.com/Dil7r.gif',
            'https://media3.giphy.com/media/LwzDBXlwVOGz7zi8cp/giphy.gif',
            'https://miro.medium.com/max/1600/1*kiAtJzGH6tcKnILUKJenvA.gif',
            'https://s3.amazonaws.com/blog.invisionapp.com/uploads/2017/04/running-gif.gif'
        ],
        left: 0,
        countPosition: 50

    },
    methods: {

        titleTime(){
            
            this.timerTitle = !this.timerTitle;
        },
        nextImg(){
            //qui gli dico che quando il contatore é uguale alla lunghezza dell'array Img
            //mi torna a 0 , else incrementa
            this.left += countPosition;
        },
        prevImg(){
            this.countImg--;
        }
    }
});