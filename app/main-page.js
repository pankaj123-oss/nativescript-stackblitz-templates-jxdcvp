import { createModel } from './main-view-model';
export function LoadedTo(args) {
  const page = args.object;
  page.bindingContext = createModel();
}
