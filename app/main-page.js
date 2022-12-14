import { createModel } from './main-view-model';
import { Observable } from '@nativescript/core';
export function LoadedTo(args) {
  const page = args.object;
  page.bindingContext = onTap();
}
export function onTap() {
  const vm = new Observable();
  var name = vm.get('name');
  console.log(name);
}
