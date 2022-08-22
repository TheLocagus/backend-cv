export interface ContactInterface {
  id: string;
  imgName: string;
  value: string;
  url: string;
  type: DynamicButtonEnum;
}

export interface ContactResponseInterface {
  contacts: ContactInterface[];
}

export enum DynamicButtonEnum {
  copy = 'copy',
  redirect = 'redirect',
}
