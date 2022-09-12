export class User {
  id: number;
  email: string;
  password: string;
  name: string;
  surname: string;
  role: string;
  username: string;

  constructor( email: string, password: string, name: string, surname: string, username: string) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.username = username;
  }
}
