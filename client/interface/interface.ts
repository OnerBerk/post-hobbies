import React from 'react';

export interface Iusers {
  users: [];
}

export interface Iuser {
  name: String;
  age: number;
  profession: String;
  posts: [];
  hobbies: [];
}

export interface Ipost {
  comment: string;
}

export interface Ichildren {
  children: React.ReactNode;
}

export interface IUiTextInput {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  label: string;
  required?: boolean;
  error?:boolean
}


export interface ILink{
  url:string
  title:string
}
