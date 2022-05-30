// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  private24Url: "https://next.privat24.ua/payments/form/%7B%22token%22%3A%2297d62ab7-a4d0-408e-b500-6d0805f40626%22%7D",
  bankAccount: {
    organization: "Церква Різдва Христового м.Бердичів",
    IBAN: "UA623052990000026004036401791",
    USREOU: "13576641",
    serviceName: "Благодійні пожертвування"
  },
  google: {
    APIKey: "AIzaSyCDz22wkz0HH3CI3KR5RBPftIqmHRg-trI",
    youtubeChannelId: "UCpVpoBhcKUkvnVKt0m3fdkw"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
