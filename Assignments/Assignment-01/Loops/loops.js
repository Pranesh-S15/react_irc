var arr = [1, 2, 3, 4, 5];
var newarr = arr.map(myfun)

function myfun(num)
{
    return num*10;
}

newarr.forEach(myprint)

function myprint(num)
{
    console.log(num+" ");
}