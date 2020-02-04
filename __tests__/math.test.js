import {fibonacci} from '../src/mathProbs';

describe('fibonacci', () => {

  test('return an array', function(){
    var outPut = fibonacci(4);
    expect(typeof outPut).toEqual('object');
  });

  test('return of length equal to argument', function(){
    var outPut = fibonacci(4);
    expect(outPut.length).toEqual(4);
  });

  test('checks that the array is the fibonacci', function(){
    var outPut = fibonacci(4);
    expect(outPut).toEqual([0,1,1,2]);
  });
})

