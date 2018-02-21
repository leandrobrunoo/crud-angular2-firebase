// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCElRJoWnpSd58ll4SDyCpk78u9A7pjaGk",
    authDomain: "lancamentos-freitas.firebaseapp.com",
    databaseURL: "https://lancamentos-freitas.firebaseio.com",
    projectId: "lancamentos-freitas",
    storageBucket: "lancamentos-freitas.appspot.com",
    messagingSenderId: "777813376117"
  }
};
