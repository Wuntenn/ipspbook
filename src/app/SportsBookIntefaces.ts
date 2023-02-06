export interface InplayEventId {
  id: number
}

export interface InplayEvent {
  id: number,
  homeTeam: string,
  awayTeam: string,
  homeScore: number,
  awayScore: number,
  marketId: number
}

export interface InplayMarket {
  id: number,
  home: number,
  draw: number,
  away: number
}

//{\"id\":1,\"hometeam\":\"chelsea\",\"awayteam\":\"fulham\",\"homescore\":1,\"awayscore\":3,\"marketid\":101}
//Market: {\"id\":101,\"home\":\"9.18\",\"draw\":\"11.40\",\"away\":\"16.65\"}