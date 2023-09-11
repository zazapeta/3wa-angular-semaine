/**
 * Compute the sum between the given numbers
 * @param a the first number
 * @param b the second number
 * @returns the sum between the first number and the second
 */
function sum(a:number, b: number): number {
  return a + b ;
}

function case1() {
  const expectedResult = 5;
  const result = sum(3,2);
  if(expectedResult !== result){
    throw new Error(`sum(3,2) shoud be equal to ${expectedResult} BUT we got ${result}.`);
  } else {
    console.log(`Youhou: sum(3,2) is ok: ${expectedResult} is equal to ${result}`);
  }
}

function case2() {
  const expectedResult = 12;
  const result = sum(9,3);
  if(expectedResult !== result){
    throw new Error(`sum(9,3) shoud be equal to ${expectedResult} BUT we got ${result}.`);
  } else {
    console.log(`Youhou: sum(9,3) is ok: ${expectedResult} is equal to ${result}`);
  }
}

function main(){
  try {
    case1();
    case2();
  } catch (e){
    console.error('Something went wrong');
    console.error(e);
  }
}

main();