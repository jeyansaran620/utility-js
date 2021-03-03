const reduce = (array,func,value) => {

    if (value== undefined && typeof array[0] === "string")
    {
        value = '';
    }

    for(i=0;i<array.length;i++)
    {
        value = func(value,array[i]);
    }
    return value;
}
module.exports = reduce;
