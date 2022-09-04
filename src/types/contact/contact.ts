export interface ContactInterface {
  id: string;
  imgName: string;
  value: string;
  url: string;
  type: DynamicButtonEnum;
}

export interface ContactResponseInterface {
  contacts: ContactInterface[];
  title: 'Contact' | 'Kontakt';
}

export enum DynamicButtonEnum {
  copy = 'copy',
  redirect = 'redirect',
}
