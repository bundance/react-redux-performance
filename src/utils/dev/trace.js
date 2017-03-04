import R from 'ramda';

console.log('********** CAUTION: Trace has been imported. Make sure you remove it for production ***********');

/**
 * Trace the values that are passed between functions in compose(). Helps debug composed functions.
 *
 * e.g.
 *
 * 		const left = () => 'world';
 * 		const middle = () => 'there';
 * 		const right = () => 'hello';
 *
 * 		const result = compose(left, middle, trace('*** output of right function: '), right);
 * 		//> *** output of right function: hello
 *
 * 		const result = compose(left, trace('*** output of middle function: '), middle, right);
 * 		//> *** output of middle function: there
 */
export const trace = R.curry((tag, x) => {
    console.log(tag, x);
    return x;
});

/**************************************************************************************************************/

/**
 * log object for use in traceFn() below
 * @type {{apply: (function(*, *, *=))}}
 */
const log = {
    apply (target, ctx, args) {
        const returnVal = Reflect.apply(...arguments);

        console.info(`\r\n
Traced Function
---------------
Function name: ${ target.name || 'Unknown'}
${ target }
	
**** Args in: ****
${ JSON.stringify(args, null, 2) }
	
**** Result out: **** 
${ JSON.stringify(returnVal, null, 2) }
	
`);

        return returnVal;
    }
};

/**
 * Trace a function. Logs the function body and its supplied arguments. Then executes the function and logs the
 * output.
 *
 * @param fn function name
 *
 * traceFn is a higer-order function. Use it as follows:
 *
 *  const myFunc = (arg) => arg + 2;
 *  const tracedMyFunc = traceFn(myFunc);
 *
 *  tracedMyFunc(3)
 *
 *  // Output:
 *
 *  Traced Function
 * ---------------
 * Function name: test
 * function test(val) {
 *    console.log('in test');
 *    return val + 2;
 *}
 *
 * **** Args in: ****
 * [
 * 3
 * ]
 *
 * **** Result out: ****
 * 5
 *
 */
export const traceFn = (fn) => new Proxy(fn, log);
