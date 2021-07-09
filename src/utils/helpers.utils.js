/**
 * Anonymous Function
 * @param {any} event - event
 * @returns {void}
 */
 export const anonymousFunc = () => {};

 /**
  * @function ternaryResolver
  * @description resolves a ternary expression
  * @param {any} resolvedExpression - resolvedExpression
  * @param {any} truthyValue - truthyValue
  * @param {any} falsyValue - falsyValue
  * @return {any} - any
  */
 export const ternaryResolver = (resolvedExpression, truthyValue, falsyValue) => {
   return resolvedExpression ? truthyValue : falsyValue;
 };
 
 /**
  * @function fallbackResolver
  * @description resolves a truthy value and returns a fallback when falsy
  * @param {any} actualValue - actualValue
  * @param {any} fallbackValue - fallbackValue
  * @return {any} - any
  */
 export const fallbackResolver = (actualValue, fallbackValue) => {
   return actualValue || fallbackValue;
 };
 
 /**
  * @function conditionalFuncResolver
  * @description resolves functions conditionally
  * @param {boolean} resolvedExpression - resolvedExpression
  * @param {Function} truthyFunc - truthyFunc
  * @param {Function} falsyFunc - falsyFunc
  * @return {void}
  */
 export const conditionalFuncResolver = (
   resolvedExpression,
   truthyFunc = anonymousFunc,
   falsyFunc = anonymousFunc
 ) => {
   if (resolvedExpression && typeof truthyFunc === "function") {
     truthyFunc();
   } else if (typeof falsyFunc === "function") {
     falsyFunc();
   }
 };
 
 /**
  * @function strictRender
  * @description renders a JSX if the resolver is truthy
  * @param {any} resolvedExpression - resolvedExpression
  * @param {any} JSX - JSX
  * @return {any} - any
  */
 export const strictRender = (resolvedExpression, JSX) => {
   return resolvedExpression && JSX;
 };
 