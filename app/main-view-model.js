import { Observable } from '@nativescript/core';
export function createModel() {
  const vm = new Observable();
  return vm;
}
