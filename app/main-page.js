import { createViewModel } from './main-view-model';

export function onTap(args) {
  const button = args.object;
  const page = button.page;
  page.bindingContext = createViewModel();
}
