// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: false,
  firebase: {
    apiKey: "AIzaSyD_nC644BmPDMRvDKmjJpnBzNCfTq4lspE",
    authDomain: "blog-e0156.firebaseapp.com",
    projectId: "blog-e0156",
    storageBucket: "blog-e0156.appspot.com",
    messagingSenderId: "1054351834906",
    appId: "1:1054351834906:web:c54f4583af851ee357f6a3"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
