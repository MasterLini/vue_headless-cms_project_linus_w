export class owner {
  private firstname: string;
  private lastname: string;
  private age: number;

  constructor(firstname: string, lastname: string, age: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  public getFirstname(): string {
    return this.firstname;
  }

  public getLastname(): string {
    return this.lastname;
  }

  public getAge(): number {
    return this.age;
  }
}

