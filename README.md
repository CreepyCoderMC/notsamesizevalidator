# Not Same Size Validator
This module is small but easy to use. The purpose of this module is to check if the target string is length are not equals the source string length. It can compare strings and arrays.
## Validation processes
The code checks that the source value is not same length than the target.
### Compare method
This method compare both source value and target value length to see if they are not equal.
## Code sample
This following code is actually how I tested that all methods correctly functioned as intended, is also provided in this module.
```
import { valueIsNotSameSize } from '@teamcoder/notsamesizevalidator';

console.log( "Testing Condition  1 Passed = " + valueIsNotSameSize(  "Hallo " , "world" ) );
console.log( "Testing Condition  2 Passed = " + !valueIsNotSameSize( "Hallo " , "world" ) );
```
The results will look as follows
```
Testing Condition  1 Passed = true
Testing Condition  2 Passed = true
```
## Function Parameters
### Parameters Passed
```
@param  { String , Array } source        The source value to be checked
@param  { String , Array } target        The target value to be checked
```
### Parameters Returned
```
@return { Boolean        }               Validation passed or failed
```
## Notes Before You Start
Very important to remember to always include the following in your main project package.json file:
```
"type": "module"
```
Without this entry in the package file you will get the following error if you try to run your project
```
(node:15500) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use 'node --trace-warnings ...' to show where the warning was created)
C:\Users\ ... \notsamesizevalidator\notsamesizevalidator.js:1
import { valueIsNotSameSize } from '@teamcoder/notsamesizevalidator';
```
## Version History
| Version  | Date                   | Remark                                                                                                |
|----------|------------------------|-------------------------------------------------------------------------------------------------------|
| 1.0.0    | 11 September 2022      | Official first release                                                                                |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/notsamesizevalidator
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
NotSameSizeValidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)