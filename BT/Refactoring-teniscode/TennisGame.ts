export class TennisGame {

    private readonly LOVE: number = 0;
    private readonly FIFTEEN: number = 1;
    private readonly THIRTY: number = 2;
    private readonly FORTY: number = 3;

    score: string = '';

    getScore(firstPlayerName: string,
             secondPlayerName: string,
             firstPlayerScore: number,
             secondPlayerScore: number) {
        let temporaryScore = 0;

        if (firstPlayerScore === secondPlayerScore) {
            switch (firstPlayerScore) {
                case this.LOVE:
                    this.score = "Love-All";
                    break;
                case this.FIFTEEN:
                    this.score = "Fifteen-All";
                    break;
                case this.THIRTY:
                    this.score = "Thirty-All";
                    break;
                case this.FORTY:
                    this.score = "Forty-All";
                    break;
                default:
                    this.score = "Deuce";
                    break;

            }

        } else if (firstPlayerScore >= 4 || secondPlayerScore >= 4) {
            return this.advantage(firstPlayerScore,secondPlayerScore)
        } else {
            for (let i = 1; i < 3; i++) {
                if (i === 1) temporaryScore = firstPlayerScore;
                else {
                    this.score += "-";
                    temporaryScore = secondPlayerScore;
                }
                switch (temporaryScore) {
                    case this.LOVE:
                        this.score += "Love";
                        break;
                    case this.FIFTEEN:
                        this.score += "Fifteen";
                        break;
                    case this.THIRTY:
                        this.score += "Thirty";
                        break;
                    case this.FORTY:
                        this.score += "Forty";
                        break;
                }
            }
        }
    }
    advantage(firstPlayerScore,secondPlayerScore){
            let minusResult = firstPlayerScore - secondPlayerScore;
            if (minusResult === 1) this.score = "Advantage player1";
            else if (minusResult === -1) this.score = "Advantage player2";
            else if (minusResult >= 2) this.score = "Win for player1";
            else this.score = "Win for player2";

    }

}