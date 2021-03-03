const min = (array) => {
    let minimum = Infinity;

    for(i=0;i<array.length;i++)
    {
        minimum = Math.min(minimum,array[i]);
    } 
    return minimum;
}
module.exports = min;
