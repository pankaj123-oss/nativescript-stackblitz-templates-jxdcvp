import { createModel } from './main-view-model';
var abc = createModel();
var usernametest = 'Pankaj';
var userpasstest = '123';
export function loadedTo(args) {
  const page = args.object;
  page.bindingContext = abc;
}
export function onTap(args) {
  const button = args.object;
  const page = button.page;
  var name = abc.get('name');
  var pass = abc.get('pass');
  if (name == usernametest && pass == userpasstest) {
    console.log('Name =' + name + '\n Password = ' + pass);
    page.frame.navigate('home');
  } else if (
    (name == undefined && pass == undefined) ||
    (name == null && pass == null)
  ) {
    alert('Name and Password are empty');
  } else if (
    (usernametest !== name && userpasstest !== pass) ||
    name != usernametest ||
    pass != userpasstest
  ) {
    alert('Invalid username and password!!!');
  } else if (name == undefined) {
    alert('Name must be filled out');
  } else if (pass == undefined) {
    alert('Password must be filled out');
  }
}
