function greeter(person: string[]): string {
  return "Hello, " + person.join(' ');
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); // Output: Hello, Jane Doe

//Alternative solution if you want to greet each element individually:
function greeter2(person: string[]): string[] {
  return person.map(name => "Hello, " + name);
}

console.log(greeter2(user)); // Output: ['Hello, Jane', 'Hello, Doe']