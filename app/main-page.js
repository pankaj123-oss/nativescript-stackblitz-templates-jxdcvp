import { createModel } from './main-view-model';
import { Observable } from '@nativescript/core';
var abc = createModel()
export function LoadedTo(args) {
  const page = args.object;
  page.bindingContext = abc;
}
export function onTap(args) {
  var name = abc.get('name');
  console.log(name);
}
