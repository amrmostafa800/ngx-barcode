<div align="center">
  <img src="https://cdn.rawgit.com/yobryon/ngx-barcode/master/docs/assets/ngx-barcode.svg" width="200px" alt="ngx-barcode">
  <h1 align="center">@amrmostafa800/ngx-barcode</h1>
  <p>small try to update @greatcloak/ngx-barcode to angular V18</p>
</div>

---

# Changes vs ngx-barcode

This repository is a repackaged and updated version of ngx-barcode.

- Updated for angular 13+
- Repackaged using angular cli for more efficient distribution files and standardized builds
- Updated jsbarcode to latest 3.11.5+ with modern `import` statements

Install via

`npm i --save @amrmostafa800/ngx-barcode`

# Original

An angular component for Angular 13+ for creating 1-D barcodes based on [Lindell's JsBarcode](https://github.com/lindell/JsBarcode).

This is an updated and repackaged version of the original ngx-barcode. We have repackaged using the angular cli and angular v9.

## Benefits over ngx-barcode

- Repackaged using angular cli instead of custom build
  - Easy to upgrade via `ng update`
  - Standard build process
- Uses latest angular v9
  - Actively updated to newer versions since this is used in live production apps. Typically updated a few weeks after each major angular release.
- Minor improvements as needed

## Features

- Compatible with original ngx-barcode(just change imports)
- Repackaged using angular cli and updated to support angular v9
- supports all barcode formats provided by JsBarcode

  - CODE128
  - EAN
  - CODE39
  - ITF-14
  - MSI
  - Pharmacode
  - Codabar

## Installation

To use ngx-barcode in your project, install it via npm:

```bash
$ npm install --save @amrmostafa800/ngx-barcode
```

## Usage

Import the NgxBarcodeModule into your desired module:

```typescript
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

// Import ngx-barcode module
import { NgxBarcodeModule } from '@amrmostafa800/ngx-barcode'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxBarcodeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Once the library is imported, you can use the ngx-barcode component in your Angular application:

```xml
<!-- Adding a barcode in app.component.html -->
<h1>
  {{title}}
</h1>
<ngx-barcode [bc-value]="value" [bc-display-value]="true"></ngx-barcode>
```

## Development

To build the `@amrmostafa800/ngx-barcode` library using the angular cli use the following command.

```bash
npm run build
```

## New Release

To build and publish a new version run the following script.

```bash
./build-prod-publish.sh
```

## Demo

We do not maintain a demo of this new version however you can look at the oriignal project's demo page to get an idea of what this does.

Basic [demo](https://yobryon.github.io/ngx-cdbarcode/demo/).

## License

MIT © [Bryon Williams](mailto:bryon.williams@live.com)
