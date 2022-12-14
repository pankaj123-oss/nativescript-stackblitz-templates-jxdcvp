import { Observable } from '@nativescript/core';
export function createModel() {
  const vm = new Observable();
  // vm.onTap = () => {
  //   var name = vm.get('name');
  //   console.log(name);
  // };
  return vm;
}
