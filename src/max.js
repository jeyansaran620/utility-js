const max = (array) => {
    let maximum = -Infinity;

    for(i=0;i<array.length;i++)
    {
        maximum = Math.max(maximum,array[i]);
    } 
    return maximum;
}
module.exports = max;
