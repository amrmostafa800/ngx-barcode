import { NgModule, ModuleWithProviders } from '@angular/core'
import { NgxBarcodeComponent } from './ngx-barcode.component'

@NgModule({
  declarations: [NgxBarcodeComponent],
  exports: [NgxBarcodeComponent],
})
export class NgxBarcodeModule {
  // TODO why is this a separate `forRoot`?
  static forRoot(): ModuleWithProviders<NgxBarcodeModule> {
    return {
      ngModule: NgxBarcodeModule,
      providers: [],
    }
  }
}
