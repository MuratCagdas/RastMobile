# RastMobile

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Installation

1.Proje Angular versioan 16.1.4 olduğu için gerekli [güncellemeleri](https://docs.angular.lat/cli/update) yapın.

2.Projeyi github adresinden klonlayarak bilgisayarınıza yükleyin.

3.Visual Studio Code ile projeyi açın.

4.`npm install` ile kütüphane bağımlılıklarını yükleyin.

5.`ng serve --open` ile projeyi çalıştırın. 

6.Karşınıza Login sayfası gelecektir.Bu login sayfası [fake API'ye](https://dummyjson.com/docs/auth) istek atmaktadır.Atılan istek sonuncda gelen token ve username blgileri localstorage kaydedilmektedir.
username:`kminchelle`
Password:`0lelplR`

7.Ana sayfada tablo vardır. Açılışta localstroge'da kayıtlı veri varsa onu yansıtır. Yoksa manuel olarak veri ekler. `+` butonuna basıldığında dialog penceresi açılır. Ekleme yaptığınızda localstroge güncellenir ve tabloda bu ekleme yapılan veriyi gösterir.



