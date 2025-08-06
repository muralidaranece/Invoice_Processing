import { Component, OnInit } from '@angular/core';
import { GameService } from '../_services/game.service';
import { Word } from '../_models/word.model';

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.css']
})
export class WordSearchComponent implements OnInit {
  grid: string[][] = [];
  wordsToFind: string[] = [];
  foundWords: string[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.loadWords();
  }

  loadWords(): void {
    this.gameService.getWordSearchWords('easy').subscribe((words: Word[]) => {
      this.wordsToFind = words.map(w => w.wordText.toUpperCase());
      this.generateGrid();
    });
  }

  generateGrid(): void {
    const gridSize = 10;
    // Initialize empty grid
    this.grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));

    // Place words horizontally for simplicity
    this.wordsToFind.forEach((word, index) => {
      if (index >= gridSize) return; // Prevent overflow
      for (let i = 0; i < word.length; i++) {
        this.grid[index][i] = word[i];
      }
    });

    // Fill empty cells with random letters
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (this.grid[row][col] === '') {
          this.grid[row][col] = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }
      }
    }
  }

  selectWord(word: string): void {
    if (!this.foundWords.includes(word)) {
      this.foundWords.push(word);
    }
  }

  isFound(word: string): boolean {
    return this.foundWords.includes(word);
  }
}
