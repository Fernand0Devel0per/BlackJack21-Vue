const App = Vue.createApp({
    data(){
        return{
            deck: [],
            isplayerOneTurn: true,
            playerOne: {},
            playerTwo: {},
            revealResult: false,
            isHidden: true,
            winner: '',
            endGame: false
        }
    },
    computed:{
       totalPlayerOne(){
        return this.playerOne.total;
       },
       totalPlayerTwo(){
        return this.playerTwo.total;
       },
       stateButton(){
        return (this.endGame) ?  'isDisable' : 'isAble'
       }    
    },
    mounted() {
        this.mountNewGame();
    },
    methods: {
        stop(){
            if(this.isplayerOneTurn){
                this.isplayerOneTurn = false;
            }
            else{
                this.checkWinner(this.playerOne,this.playerTwo);
            }
        },
        nextCard(){
            if(this.isplayerOneTurn){
                this.addCard(this.playerOne);
            }else{
                this.addCard(this.playerTwo);
            }
        },
        addCard(player){
            let drawnCard = this.drawCard();
            this.insertCard(player,drawnCard);
            if(this.explode(player.total))
            {
                this.declareWinner(`The winner is ${this.returnThewinner(player)}`);
                this.endGame = true;
            }
        },
        returnThewinner(player){
            return (player == this.playerOne) ? this.IsNameValid(this.playerTwo) : this.IsNameValid(this.playerOne);
        },
        explode(total){
            return total > 21
        },
        raffleNumber(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        drawCard(){
            let drawNumber = this.raffleNumber(0, (this.deck.lenght -1));
            let card;
            [card] = this.deck.splice(drawNumber, 1);
            return card;
        },
        insertCard(players, card){
            players.total += card.value;
            players.lastCard = card.src;
        },
        shuffleArray(inputArray){
            inputArray.sort(()=> Math.random() - 0.5);
        },
        checkWinner(playerOne, playerTwo){
            if (playerOne.total > playerTwo.total) {
                this.declareWinner(`The winner is ${this.IsNameValid(playerOne)}`);
            }else if(playerTwo.total > playerOne.total){
                this.declareWinner(`The winner is ${this.IsNameValid(playerTwo)}`);
            }else{
                this.declareWinner('Draw Game');
            }
            this.endGame = true;
        },
        IsNameValid(player){
            if (player === this.playerOne) {
                return player.name === "" ? "Player 1" : player.name
            }else {
                return player.name === "" ? "Player 2" : player.name
            }
        },
        declareWinner(winner){
            this.winner = winner
            this.isHidden = false;
        },
        mountPlayer(){
            return {
                total: 0,
                name:'',
                lastCard:'./cards/startCard.png'
            }
        },
        resetGame(){
            this.revealResult = false,
            this.isHidden = true,
            this.winner = '',
            this.endGame = false
            this.mountNewGame();
        },
        mountNewGame(){
            this.playerOne = this.mountPlayer();
            this.playerTwo = this.mountPlayer();
            this.deck = this.mountDeck();
            this.shuffleArray(this.deck);
        },
        mountDeck(){
            return [
                {
                    name:'Ás de Copas',
                    value: 1,
                    src: "./cards/as-copas.png"
                },
                {
                    name:'2 de Copas',
                    value: 2,
                    src: "./cards/2-copas.png"
                },
                {
                    name:'3 de Copas',
                    value: 3,
                    src: "./cards/3-copas.png"
                },
                {
                    name:'4 de Copas',
                    value: 4,
                    src: "./cards/4-copas.png"
                },
                {
                    name:'5 de Copas',
                    value: 5,
                    src: "./cards/5-copas.png"
                },
                {
                    name:'6 de Copas',
                    value: 6,
                    src: "./cards/6-copas.png"
                },
                {
                    name:'7 de Copas',
                    value: 7,
                    src: "./cards/7-copas.png"
                },
                {
                    name:'8 de Copas',
                    value: 8,
                    src: "./cards/8-copas.png"
                },
                {
                    name:'9 de Copas',
                    value: 9,
                    src: "./cards/9-copas.png"
                },
                {
                    name:'10 de Copas',
                    value: 10,
                    src: "./cards/10-copas.png"
                },
                {
                    name:'J de Copas',
                    value: 10,
                    src: "./cards/J-copas.png"
                },
                {
                    name:'Q de Copas',
                    value: 10,
                    src: "./cards/Q-copas.png"
                },
                {
                    name:'K de Copas',
                    value: 10,
                    src: "./cards/K-copas.png"
                },
                {
                    name:'Ás de Espadas',
                    value: 1,
                    src: "./cards/as-copas.png"
                },
                {
                    name:'2 de Espada',
                    value: 2,
                    src: "./cards/2-espada.png"
                },
                {
                    name:'3 de Espada',
                    value: 3,
                    src: "./cards/3-espada.png"
                },
                {
                    name:'4 de Espada',
                    value: 4,
                    src: "./cards/4-espada.png"
                },
                {
                    name:'5 de Espada',
                    value: 5,
                    src: "./cards/5-espada.png"
                },
                {
                    name:'6 de Espada',
                    value: 6,
                    src: "./cards/6-espada.png"
                },
                {
                    name:'7 de Espada',
                    value: 7,
                    src: "./cards/7-espada.png"
                },
                {
                    name:'8 de Espada',
                    value: 8,
                    src: "./cards/8-espada.png"
                },
                {
                    name:'9 de Espada',
                    value: 9,
                    src: "./cards/9-espada.png"
                },
                {
                    name:'10 de Espada',
                    value: 10,
                    src: "./cards/10-espada.png"
                },
                {
                    name:'J de Espada',
                    value: 10,
                    src: "./cards/J-espada.png"
                },
                {
                    name:'Q de Espada',
                    value: 10,
                    src: "./cards/Q-espada.png"
                },
                {
                    name:'K de Espada',
                    value: 10,
                    src: "./cards/K-espada.png"
                },
                {
                    name:'Ás de Paus',
                    value: 1,
                    src: "./cards/as-paus.png"
                },
                {
                    name:'2 de Paus',
                    value: 2,
                    src: "./cards/2-paus.png"
                },
                {
                    name:'3 de Paus',
                    value: 3,
                    src: "./cards/3-paus.png"
                },
                {
                    name:'4 de Paus',
                    value: 4,
                    src: "./cards/4-paus.png"
                },
                {
                    name:'5 de Paus',
                    value: 5,
                    src: "./cards/5-paus.png"
                },
                {
                    name:'6 de Paus',
                    value: 6,
                    src: "./cards/6-paus.png"
                },
                {
                    name:'7 de Paus',
                    value: 7,
                    src: "./cards/7-paus.png"
                },
                {
                    name:'8 de Paus',
                    value: 8,
                    src: "./cards/8-paus.png"
                },
                {
                    name:'9 de Paus',
                    value: 9,
                    src: "./cards/9-paus.png"
                },
                {
                    name:'10 de Paus',
                    value: 10,
                    src: "./cards/10-paus.png"
                },
                {
                    name:'J de Paus',
                    value: 10,
                    src: "./cards/J-paus.png"
                },
                {
                    name:'Q de Paus',
                    value: 10,
                    src: "./cards/Q-paus.png"
                },
                {
                    name:'K de Paus',
                    value: 10,
                    src: "./cards/K-paus.png"
                },
                {
                    name:'Ás de Ouro',
                    value: 1,
                    src: "./cards/as-ouro.png"
                },
                {
                    name:'2 de Ouro',
                    value: 2,
                    src: "./cards/2-ouro.png"
                },
                {
                    name:'3 de Ouro',
                    value: 3,
                    src: "./cards/3-ouro.png"
                },
                {
                    name:'4 de Ouro',
                    value: 4,
                    src: "./cards/4-ouro.png"
                },
                {
                    name:'5 de Ouro',
                    value: 5,
                    src: "./cards/5-ouro.png"
                },
                {
                    name:'6 de Ouro',
                    value: 6,
                    src: "./cards/6-ouro.png"
                },
                {
                    name:'7 de Ouro',
                    value: 7,
                    src: "./cards/7-ouro.png"
                },
                {
                    name:'8 de Ouro',
                    value: 8,
                    src: "./cards/8-ouro.png"
                },
                {
                    name:'9 de Ouro',
                    value: 9,
                    src: "./cards/9-ouro.png"
                },
                {
                    name:'10 de Ouro',
                    value: 10,
                    src: "./cards/10-ouro.png"
                },
                {
                    name:'J de Ouro',
                    value: 10,
                    src: "./cards/J-ouro.png"
                },
                {
                    name:'Q de Ouro',
                    value: 10,
                    src: "./cards/Q-ouro.png"
                },
                {
                    name:'K de Ouro',
                    value: 10,
                    src: "./ards/K-ouro.png"
                }];
        }
    }
});

App.mount('#assignment')