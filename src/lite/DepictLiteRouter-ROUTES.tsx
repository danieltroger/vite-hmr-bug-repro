export enum ROUTES {
  HOME = "/",
  LOGIN = "/login",
  DEFAULT_REDIRECT = "/:merchantId",
  GETTING_STARTED = "/:merchantId/getting-started",
  COLLECTIONS = "/:merchantId/collections",
  COLLECTION = "/:merchantId/collections/:collectionId",
  BOOST_AND_BURY = "/:merchantId/boost-and-bury",
  SETTINGS = "/:merchantId/settings",
  MULTI_STORE_CONNECTIONS = "/:merchantId/settings/connections",
  NO_MERCHANTS = "/no-merchants",
  NOT_FOUND = "/404",
  MAINTENANCE = "/maintenance",
  UNAUTHORIZED = "/unauthorized",
}
