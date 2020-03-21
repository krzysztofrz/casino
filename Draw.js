class Draw {
    constructor() {
        this.options = ["img/chip1.png", "img/chip2.png", "img/chip3.png"];
        let _result = this.drawResult();
        this.getDrawResult = () => _result;
    }




    drawResult() {
        let figures = []
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            const figure = this.options[index];



            let number = 0;

            let pictures = ["chip1.png", "chip2.png", "chip3.png"]



            figures.push(figure)

        }
        return figures

    }

}
const draw = new Draw();
