"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResults_1 = require("../MatchResults");
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let teamWins = 0;
        for (let match of matches) {
            if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResults.HomeWin) {
                teamWins++;
            }
            else if (match[2] === 'Man United' && match[5] === MatchResults_1.MatchResults.AwayWin) {
                teamWins++;
            }
        }
        return `Team ${this.teamName} has won ${teamWins} games!`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
