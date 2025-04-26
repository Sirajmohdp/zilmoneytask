import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchPipe'
})
export class SearchPipe implements PipeTransform {
//   transform(items: any, filter: any, defaultFilter: boolean=false): any {
//     if (!filter || !Array.isArray(items)) {
//         return items;
//     }

//     if (filter && Array.isArray(items)) {
//         let filterKeys = Object.keys(filter);

//         if (defaultFilter) {

//             return items.filter(item =>
//                 filterKeys.reduce((x, keyName) =>
//                     (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
//         }
//         else {
//           console.log('here');

//             return items.filter(item => {
//                 return filterKeys.some((keyName) => {
//                     return new RegExp(filter[keyName], 'gi').test(item[keyName]) || 
//                     new RegExp(filter[keyName], 'gi').test(item.data[keyName]) ||
//                     filter[keyName] == "";
//                 });
//             });
//         }
//     }
// }

  transform(items: any[], searchtext:string): any[] {
    if (!items || !searchtext) {
      return items;
    }
    searchtext = searchtext.toLowerCase();
    return items.filter(item => {
      return Object.keys(item).some(key => {
        if (typeof item[key] === 'string') {
          return item[key].toLowerCase().includes(searchtext);
        }
        return false;
      });
    });
  }
  // hr.india@zilmoney.com
 
}
