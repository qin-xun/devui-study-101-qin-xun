export interface SourceType {
  id?: number;
  firstName: string;
  lastName: string;
  dob: Date;
  gender: string;
  detail?: string;
  $checked?: boolean;
  expandConfig?: any;
  children?: any;
}

export const originSource = [
  {
    id: 1,
    firstName: 'XXX',
    lastName: 'XXX',
    dob: new Date(1990, 12, 1),
    gender: 'Male',
  },
  {
    id: 2,
    firstName: 'XXX',
    lastName: 'XXX',
    gender: 'Female',
    dob: new Date(1989, 1, 1),
  },
  {
    id: 3,
    firstName: 'XXX',
    lastName: 'XXX',
    gender: 'Female',
    dob: new Date(1991, 3, 1),
    expandConfig: {description: 'Danni is here'}
  },
  {
    id: 4,
    firstName: 'XXX',
    lastName: 'XXX',
    gender: 'Male',
    dob: new Date(1991, 3, 1),
  },
  {
    id: 5,
    firstName: 'XXX',
    lastName: 'XXX',
    gender: 'Male',
    dob: new Date(1991, 3, 1),
    description: 'lang is here',
  },
  {
    id: 6,
    firstName: 'XXX',
    lastName: 'XXX',
    gender: 'Female',
    dob: new Date(1991, 3, 1),
  },
  {
    id: 7,
    firstName: 'XXX',
    lastName: 'XXX',
    gender: 'Female',
    dob: new Date(1991, 3, 1),
  },
  {
    id: 8,
    firstName: 'XXX',
    lastName: 'XXX',
    gender: 'Female',
    dob: new Date(1991, 3, 1),
  },
  {
    id: 9,
    firstName: 'XXX',
    lastName: 'XXX',
    gender: 'Female',
    dob: new Date(1991, 3, 1),
    detail: '这是另外一个行详情'
  },
  {
    id: 10,
    firstName: 'XXX',
    lastName: 'XXX',
    gender: 'Female',
    dob: new Date(1991, 3, 1),
  }
];

