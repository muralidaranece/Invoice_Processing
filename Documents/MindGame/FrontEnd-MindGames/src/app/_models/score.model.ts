export interface Score {
  scoreId: number;
  userId: number;
  gameType: string;  // 'WordSearch', 'Quiz', 'FourLetters', 'WordHunt'
  scoreValue: number;
  playedOn: Date;
}
