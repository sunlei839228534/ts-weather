 export interface weatherResponse {
  status: String
  count: String
  info: String
  infocode: String
  lives: {
    province: String
    city: String
    adcode: String
    weather: String
    winddirection: String
    windpower: String
    humidity: String
    reporttime: String
  } []
}

export type UserInfoResponse = {
  status: string,
  info: string,
  infocode: string,
  province: string,
  city: string,
  adcode: string,
  rectangle: string
}
