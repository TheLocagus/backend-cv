import { ContactInterface, ProjectInterface } from '../types';

export function checkIsProject(element: any): element is ProjectInterface {
  return true;
}

export function checkIsContact(element: any): element is ContactInterface {
  return true;
}
