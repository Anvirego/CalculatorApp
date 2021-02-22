//import { interpolate } from 'react-native-reanimated'
//import render from './App.test.js'
//import renderer from 'react-test-renderer';
import Calculator from './App';
const calc = new Calculator;

describe('test', function () {

    it('_converToMathExpressionTest', () => {
        console.log("=== ONE ====");
        expect(calc._convertToMathExpression("1+1")).toBe("1+1");
        
    });
/*
    it('_converToMathExpressionTest2', () => {
        console.log("=== ONE ====");
        expect(calc._convertToMathExpression("2*2")).toBe("2*2");
        
    });

    it('_evaluateTest', () => {
        console.log("=== TWO ===");
        expect(calc._evaluate("Test", "1+9")).toBe(10);
    });
*/
    it('_evaluateTest2', () => {
        console.log("=== TWO ===");
        expect(calc._evaluate("Test", "1+1")).toBe(2);
    });

    
});



    