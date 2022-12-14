import { createModel } from './main-view-model';
import { Observable } from '@nativescript/core';
var abc = createModel();
var usernametest = "pankaj";

export function loadedTo(args) {
  const page = args.object;
  page.bindingContext = abc;
}
export function onTap(args) {
  var name = abc.get('name');

  console.log(name);
}
