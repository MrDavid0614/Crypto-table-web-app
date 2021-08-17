import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CryptoService } from './crypto.service';

describe('CryptoService', () => {
  let service: CryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get coins', (done: DoneFn)=> {
    service.getCoins().subscribe(coins => {
      expect(coins).toBeTruthy();
      done();
    });
  });
});
