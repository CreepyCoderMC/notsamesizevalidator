import { valueIsNotSameSize } from '@teamcoder/notsamesizevalidator';

console.log( "Testing Condition  1 Passed = " + valueIsNotSameSize(  "Hallo " , "world" ) );
console.log( "Testing Condition  2 Passed = " + !valueIsNotSameSize( "Hallo " , "world" ) );