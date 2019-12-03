export function appConfig($routeProvider: ng.route.IRouteParamsService) {
  $routeProvider
    .when("/overview", {
      template: "<overview></overview>"
    })
    .when("/accounts", {
      template: "<accounts></accounts>"
    })
    .when("/account/:id", {
      template: "<account></account>"
    })
    .when("/people", {
      template: "<people></people>"
    })
    .when("/person/:id", {
      template: "<person></person>"
    })
    .otherwise("/overview");
}
