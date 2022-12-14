import { Observable } from '@nativescript/core';

export function onTap(args) {
  const mv = new Observable();
  const page = args.object;
  var name = mv.get('name');
  console.log(name);
}
