export interface User {
  labID: string;
  countryIID: string;
  cityID: string;
  labName: string;
  labMobileNo: string;
  labPassword: string;
  labLogo: string;
  labAddressLine: string;
  labFullAddress: string;
  labLatitude:string;
  labLongitude:string;
  labDescription:string;
  labEmail:string;
  labStatus:string;
  labCreatedDate:string;
  centers:[],
  labTests:[]
}
export interface Token {
  access: {
    token: string;
    expires: Date;
  }
}