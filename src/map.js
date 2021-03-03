const map = (array,func) => {
    if(array.length<1)
        return array;
    let new_array = [];
    for(i=0;i<array.length;i++)
        new_array[i]=func(array[i]);
    return new_array;   
}
module.exports = map;
