import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CryptoService } from './crypto/crypto.service';

@NgModule({
  declarations: [],
  providers: [CryptoService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
