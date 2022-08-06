import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace', // TODO: name of pipe
})
export class ReplaceSpacePipe implements PipeTransform {
  // TODO: NickName: Hi I Pepe => hi-i-pepe
  transform(value: string, args?: string): string {
    return value.split(' ').join(args).toLowerCase();
  }
}
