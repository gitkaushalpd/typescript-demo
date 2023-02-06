class Customer3 {
  firstName: string;
  lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

// lets create an instance
let myCustomer = new Customer3("Martin", "Luther");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
