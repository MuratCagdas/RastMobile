import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import LocalStore from 'devextreme/data/local_store';
import { SocialmediaService } from 'src/app/services/socialmedia/socialmedia.service';
import { __values } from 'tslib';
import { AuthService } from 'src/app/services/auth/auth.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SocialmediaService],
})
export class HomeComponent {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  dataSource: any;
  MaxPageSize: number;
  store: LocalStore;
  pagesize: number[] = [];
  readonly allowedPageSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ds: DataSource;

  constructor (
    private socialmedia: SocialmediaService,
    private authService: AuthService
  ) {
    this.authService.CheckisAuthenticated();

    this.dataSource = this.socialmedia.getSocialMediaList();
    this.MaxPageSize = this.socialmedia.getListNumber();


  }

  async addItem($event: any) {
    this.MaxPageSize += 1;

    const medialist = JSON.parse(localStorage.getItem("dx-data-localStore-myLocalData"));
    const newSource = [...medialist, $event.data];

    localStorage.setItem('dx-data-localStore-myLocalData', JSON.stringify(newSource));

  }


}
