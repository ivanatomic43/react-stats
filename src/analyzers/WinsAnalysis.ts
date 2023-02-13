import { MatchData } from './../MatchData';
import { Analyzer } from "../Summary";
import { MatchResults } from '../MatchResults';

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string){}

  run(matches: MatchData[]): string {
    let teamWins = 0;

    for (let match of matches) {
      if(match[1] === 'Man United' && match[5] === MatchResults.HomeWin ){
        teamWins++;
      } else if(match[2] === 'Man United' && match[5] === MatchResults.AwayWin ){
      teamWins++;
      }
    }

    return `Team ${this.teamName} has won ${teamWins} games!`;
  }
}