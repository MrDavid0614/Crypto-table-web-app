import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CryptoService } from 'src/app/shared/crypto/crypto.service';
import { Coin } from 'src/app/shared/models/coin';

@Component({
  selector: 'app-crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.scss']
})
export class CryptoTableComponent implements OnInit, OnDestroy {
  private getCoinsSubscription: Subscription;
  columns: string[] = [
    '#',
    'Logo',
    'Coin',
    'Price',
    'Price Change',
    '24h Volume'
  ];
  coins: Coin[] = [];
  filteredCoins: Coin[] = [];
  isLoading: boolean = true;

  constructor(private cryptoService: CryptoService) { 
    this.getCoinsSubscription = this.cryptoService.getCoins().subscribe((coins)=> {
      setTimeout(() => this.isLoading = false, 1000);
      this.coins = coins;
      this.filteredCoins = coins;
    });
  }

  ngOnInit(): void {
  }

  filterTable(event: Event): void {
    const text: string = (event.target as HTMLInputElement).value;
    this.filteredCoins = this.coins.filter(coin => coin.name.toLowerCase().includes(text.toLowerCase()) ||
                                                    coin.symbol.toLowerCase().includes(text.toLowerCase()));
  }

  ngOnDestroy(): void {
    this.getCoinsSubscription.unsubscribe();
  }

}
