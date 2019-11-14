import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy,
  HostBinding } from '@angular/core';

import { SourceType, originSource } from './mock-data.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{
//Tab
  tab22acticeID = 'tab1'
  tab1acticeID = 'tab1'

// 手风琴
  restrictOneOpen = false;
  menu = [{
    title: '通用设置',
  }, {
    title: '项目管理', open: true,
    children: [
      {title: '项目设置模板'},
      {title: '设置项目创建者'},
      {title: '项目和成员管理', active: true},
    ]
  }, {
    title: '编译构建',
  }, {
    title: '私有依赖库'
  }];

  
  itemClick(event) {
    console.log('item click' + JSON.stringify(event));
  }
  menuToggle(event) {
    console.log('menu toggle' + JSON.stringify(event));

    if (event.open && event.item.needLoadChildren) {
      event.item.loading = true;
      setTimeout(() => {
        event.item.children = [
          {title: '子内容1'},
          {title: '子内容2'}
        ];
        event.item.needLoadChildren = false;
        event.item.loading = false;
      }, 1000);
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  dataTableOptions = {
    columns: [
        {
            field: 'firstName',
            header: '用户名称',
            fieldType: 'text'
        },
        {
            field: 'lastName',
            header: '昵称',
            fieldType: 'text'
        },
        {
            field: 'gender',
            header: '项目角色',
            fieldType: 'text'
        },
        {
            field: 'dob',
            header: 'Date of birth',
            fieldType: 'date'
        }
    ]
  };
  
  pager1 = {
    total: 100,
    pageIndex: 1,
    pageSize: 10
  };

  setTotal(number) {
    this.pager1.total = number;
  }

  setIndex(number: number) {
    this.pager1.pageIndex = number;
    console.log(this.pager1.pageIndex);
  }

}

