export class User {

  id: number;
  username: string;
  password: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;

  constructor(

    id: number = 0,
    username: string = '',
    password: string = '',
    email: string = '',
    role: string = '',
    firstName: string = '',
    lastName: string = ''
  )
  {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;

  }
}
