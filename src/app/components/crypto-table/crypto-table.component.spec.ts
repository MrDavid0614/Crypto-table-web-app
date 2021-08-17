import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CryptoService } from 'src/app/shared/crypto/crypto.service';

import { CryptoTableComponent } from './crypto-table.component';

describe('CryptoTableComponent', () => {
  let component: CryptoTableComponent;
  let fixture: ComponentFixture<CryptoTableComponent>;
  let cryptoService: CryptoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoTableComponent ],
      imports: [HttpClientModule],
      providers: [CryptoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    cryptoService = TestBed.inject(CryptoService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should search', (done: DoneFn) => {
    cryptoService.getCoins().subscribe(coins => {
      fixture.componentInstance.coins = coins;
      const searchInput: HTMLInputElement = fixture.debugElement.query(By.css('.search-input')).nativeElement;
      
      searchInput.value = 'ethereum';
      searchInput.dispatchEvent(new Event('keyup'));
      const currentCoins = fixture.componentInstance.filteredCoins;
      expect(currentCoins).not.toEqual(coins);
      done();
    })
  });
});
