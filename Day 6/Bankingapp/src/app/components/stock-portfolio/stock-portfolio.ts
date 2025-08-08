import { CurrencyPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-portfolio',
  imports: [NgFor,CurrencyPipe],
  templateUrl: './stock-portfolio.html',
  styleUrls: ['./stock-portfolio.css']
})
export class StockPortfolio {
  portfoliolist = [
    { stockId: 101, Qty: 30, purchasePrice: 4000, currentPrice: 5000 },
    { stockId: 102, Qty: 40, purchasePrice: 6000, currentPrice: 3000 },
    { stockId: 103, Qty: 25, purchasePrice: 2000, currentPrice: 2500 },
    { stockId: 104, Qty: 50, purchasePrice: 1500, currentPrice: 1200 },
    { stockId: 105, Qty: 10, purchasePrice: 8000, currentPrice: 9000 },
    { stockId: 106, Qty: 60, purchasePrice: 500, currentPrice: 450 },
    { stockId: 107, Qty: 35, purchasePrice: 3000, currentPrice: 3500 },
    { stockId: 108, Qty: 20, purchasePrice: 7000, currentPrice: 6500 },
    { stockId: 109, Qty: 15, purchasePrice: 10000, currentPrice: 12000 },
    { stockId: 110, Qty: 45, purchasePrice: 2500, currentPrice: 2000 }
  ];

  get totalInvestment(): number {
    return this.portfoliolist.reduce((sum, stock) => sum + stock.Qty * stock.purchasePrice, 0);
  }

  get portfolioValue(): number {
    return this.portfoliolist.reduce((sum, stock) => sum + stock.Qty * stock.currentPrice, 0);
  }

  get overallStatus(): string {
    return this.portfolioValue >= this.totalInvestment ? 'Overall Profit' : 'Overall Loss';
  }
}
