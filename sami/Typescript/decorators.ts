// run with : tsc --target esnext --experimentalDecorators decorators.ts
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  // intiialisation
  console.log(`Called ${key}()`);

  const originalMethod = descriptor.value;
  // we have to use function keyword declaration as arrow function does not keep the execution context 
  descriptor.value = function (...args: any[]) {
    console.log('LOG: Start');
    // appel de la metehod orignal
    originalMethod.apply(this, args);
    console.log('LOG: End')
  };
  return descriptor;
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @log
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
const p = new Person('Ron');
p.greet();