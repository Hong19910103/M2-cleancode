"use strict";
exports.__esModule = true;
exports.TennisGame = void 0;
var TennisGame = /** @class */ (function () {
    function TennisGame() {
        this.LOVE = 0;
        this.FIFTEEN = 1;
        this.THIRTY = 2;
        this.FORTY = 3;
        this.score = '';
    }
    TennisGame.prototype.getScore = function (firstPlayerName, secondPlayerName, firstPlayerScore, secondPlayerScore) {
        var temporaryScore = 0;
        if (firstPlayerScore == secondPlayerScore) {
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
        }
        else if (firstPlayerScore >= 4 || secondPlayerScore >= 4) {
            return this.advantage(firstPlayerScore, secondPlayerScore);
        }
        else {
            for (var i = 1; i < 3; i++) {
                if (i == 1)
                    temporaryScore = firstPlayerScore;
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
    };
    TennisGame.prototype.advantage = function (firstPlayerScore, secondPlayerScore) {
        var minusResult = firstPlayerScore - secondPlayerScore;
        if (minusResult == 1)
            this.score = "Advantage player1";
        else if (minusResult == -1)
            this.score = "Advantage player2";
        else if (minusResult >= 2)
            this.score = "Win for player1";
        else
            this.score = "Win for player2";
    };
    return TennisGame;
}());
exports.TennisGame = TennisGame;
