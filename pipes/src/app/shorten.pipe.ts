import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "shorten"
})
export class ShortenPipe implements PipeTransform {
  transform(value: any,start:number, limit:number): any {
    if (value.length > limit) {
      return value.substring(start, limit) + ' ...';
    }
    return value;
  }


}
