class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        document.getElementById("start").addEventListener("click", this.startGame.bind(this));
        this.spanWallet = document.querySelector(".panel span.wallet");
        this.boards = document.querySelectorAll("div.color img");
        this.inputBid = document.getElementById("bid");

        this.spanResults = document.querySelector(".score span.result")
        this.spanGames = document.querySelector(".score span.number")
        this.spanWins = document.querySelector(".score span.win")
        this.spanLosses = document.querySelector(".score span.loss")


        this.render()
    }


    render(figures = ["img/chipMain.png", "img/chipMain.png", "img/chipMain.png"], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        // console.log('gramy!!');
        this.boards.forEach((board, i) => {
            board.src = `${figures[i]}`;
            // board.style.backgroundColor = figures[i];

        })

      
        this.spanWallet.textContent = money;
        if (result) {
            result = `Wygrałeś ${wonMoney}$`
            
            
        } else if (!result && result !== "") {
            result = `Przegrałeś ${bid}$`;
            Notiflix.Notify.Failure('PRZEGRAŁEŚ');
            Notiflix.Notify.Init({ width:"160px",fontSize:"10px",useIcon:false, }); 





            // this.checkCanPlay = () => {
            
           
         
            //     if (_money = 0){
            //         alert("jsjs")
            //     };
                  
                
            // }

            let wall = document.querySelector(".wallet");

            setTimeout(function(){
               if (wall.textContent == 0  ) { 

                setTimeout(function(){

                    location.reload();
                   },3000)

               swal("KONIEC GRY, PRZEGRAŁEŚ CAŁĄ KASĘ, SPRÓBUJ JESZCZE RAZ" , {
                buttons: false,
              });
            }
               
              
              

            },1000);
            


               
        }
        this.spanResults.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];

        this.inputBid.value = "";

    }

    startGame() {
        if (this.inputBid.value < 1) return swal("KWOTA KTÓRĄ CHCESZ POSTAWIĆ JEST ZA MAŁA") 
        const bid = Math.floor(this.inputBid.value)

        if (!this.wallet.checkCanPlay(bid)) {
            return swal("MASZ ZA MAŁO ŚRODKÓW NA KONCIE")
            
        }

        this.wallet.changeWallet(bid, "-")

        this.draw = new Draw();
        const figures = this.draw.getDrawResult()
        const win = Result.checkWinner(figures);
        const wonMoney = Result.moneyWinInGame(win, bid)
        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStatistics(win, bid);

        this.render(figures, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney)

      


    }

}

const btnRules = document.getElementById("rules")
// let verdict = document.querySelector(".verdict");
// verdict.textContent = verdictValue;

const game = new Game(200)
function rules() {
    swal('ZASADY', 'WYGRYWASZ JEŚLI WYLOSUJESZ 3 IDENTYCZNE ŻETONY LUB GDY KAŻDY ŻETON BĘDZIE INNNEGO KOLORU, TWOJA WYGRANA WYNOSI 3-KROTNOŚĆ POSTAWIONEJ STAWKI, W PRZECIWNYM RAZIE TRACISZ WYSOKOŚĆ ZAKŁADU')
}


btnRules.addEventListener("click", rules);
// btnRules.addEventListener("click", function(){
//     Notiflix.Notify.Success('Success message text');
// })

// if (money == 0 ){
//     alert("dupa")
// };


// setTimeout(rules, 11888500)


// let moj  = function(){
//     alert("działaaa")
// }



// Notiflix.Notify.Init({ width: '300px', fontSize: '14px', timeout: 4000, messageMaxLength: 200, });
// Notiflix.Notify.Success('Sol lucet omnibus');
// btnRules.addEventListener("click", Success);
