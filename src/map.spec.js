const map = require('./map');

describe('Map', () => {

    it('Map of [] and cube and  is []', () => {
        
        expect(map([], element=>math.pow(element,3))).toEqual([]);
    });

    it('Map of [1,2,3], identity and  is [1,2,3]', () => {
        expect(map([1,2,3], element=>element*1)).toEqual([1,2,3]);
    });

    it('Map of [1,2,3] and cube and  is [1,8,27]', () => {
        expect(map([1,2,3], element=> Math.pow(element,3))).toEqual([1,8,27]);
    });

    it('Map of [a{x : 10}] and someObject => someObject.x + 1 and  is [11]', () => {
        expect(   map([a={x : 10}], someObject => someObject.x + 1)).toEqual([11]);
    });

})
