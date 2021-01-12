function min(array)
{
    let result = array[0];
    for (i in array) 
    {
        if (array[i] < result)
        {
            result = array[i];
        }
    }
    return result;
}

function max(array)
{
    let result = array[0];
    for (i in array)
    {
        if (array[i] > result) 
        {
            result = array[i];
        }
    }
    return result;
}

function median(array)
{
    let tmp = [];
    for (i in array)
    {
        tmp.push(array[i]);
    }
    sort(tmp, 0, tmp.length - 1);
    return tmp[tmp.length / 2];
}

function sort(array, left, right)
{
    if (left < right)
    {
        let pivot = array[Math.floor((left + right) / 2)];
        let l = left;
        let r = right;
        while (l <= r)
        {
            while (array[l] < pivot) 
            {
                l++;
            }
            while (array[r] > pivot)
            {
                r--;
            }
            if (l >= r)
            {
                break;
            }
            let tmp = array[l];
            array[l] = array[r];
            array[r] = tmp;
            l++;
            r--;
        }
        sort(array, left, r);
        sort(array, r + 1, right);
    }
}

let numbers = [];
for (let i = 0; i < 1000; i++)
{
    numbers.push(Math.round(1000 * Math.random()));
}
console.log("minimum: ", min(numbers));
console.log("maximum: ", max(numbers));
console.log("median: ", median(numbers));
sort(numbers, 0, numbers.length - 1);
console.log(numbers);
elements = document.getElementsByTagName('*');
tags = []
for (let i in elements)
{
    tag = elements[i].tagName;
    if (tag != undefined)
    {
        tags.push(elements[i].tagName);
    }
}
sort(tags, 0, tags.length - 1);
let count = 0;
for (let i = 0; i < tags.length; i++)
{
    count += 1;
    if (tags[i + 1] != tags[i])
    {
        console.log(tags[i], " - ", count);
        count = 0;
    }
}

