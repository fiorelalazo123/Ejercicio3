import { Injectable } from '@angular/core';

@Injectable()
export class FilterTextService {
  constructor() {
  }

  filter(data: string, props: Array<string>, originalList: Array<any>, startsWith: boolean = false)  {
    let filteredList: any[];
    if (data && props && originalList) {
      data = data.toLowerCase();
      let filtered: any;
      if (!startsWith) {
        filtered = originalList.filter(item => {
          let match = false;
          for (const prop of props) {
            if (item[prop].toString().toLowerCase().indexOf(data) > -1) {
              match = true;
              break;
            }
          }
          return match;
        });
      } else {
        filtered = originalList.filter(item => {
          let match = false;
          for (const prop of props) {
            if (item[prop].toString().toLowerCase().startsWith(data) ) {
              match = true;
              break;
            }
          }
          return match;
        });
      }
      filteredList = filtered;
    } else {
      filteredList = originalList;
    }
    return filteredList;
  }
}
