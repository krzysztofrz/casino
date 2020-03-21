class Result {
    static moneyWinInGame(result, bid) {
        if (result) return 3 * bid ;
        else return 0;

    }
    static checkWinner(draw) {
        Notiflix.Notify.Init({ width:"160px",fontSize:"10px",useIcon:false, '@media(min-width: 788px)': {
            fontSize: '40px', width:"280px"
          }}); 

        if (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) return [true, Notiflix.Notify.Success('WYGRAŁEŚ')] ;
        else return  false;
    }
}

// Result.moneyWinInGame(true, 12) 

// else return [false, Notiflix.Notify.Failure('PRZEGRAŁEŚ')];

// [true, Notiflix.Notify.Success('WYGRAŁEŚ')];