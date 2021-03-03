const filter = require('./filter');

describe('Filter', () => {

    it('filter of [] and x => true and  is []', () => {
        
        expect(filter([], x => true)).toEqual([]);
    });

    it('filter of [1,2,3] and x => true and  is [1,2,3]', () => {
        
        expect(filter([1,2,3], x => true)).toEqual([1,2,3]);
    });

    it('filter of [1,2,3] and x => false and  is [1,2,3]', () => {
        
        expect(filter([1,2,3], x => false)).toEqual([]);
    });
    it('filter of [1,2,3] and x => x > 1 and  is [2,3]', () => {
        
        expect(filter([1,2,3], x => x > 1)).toEqual([2,3]);
    });

    it("filter of ['a','B','c','D'] and filterUpperCase and  is ['B','D']", () => {
        
        expect(filter(['a','B','c','D'] , x => x===x.toUpperCase())).toEqual(['B','D']);
    });

})
