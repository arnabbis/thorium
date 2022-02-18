function support(a,arr){
    let max=arr[0]
    let min=arr[0]
    for(let index=1;index<a;index++){
        if(arr[index]>max){
        max=arr[index]
    }
    if(arr[index]<min){
        min=arr[index]
    }
}
var difference=max-min
return difference
}
const arr=[1,2,3,4,5,6]
const reasult= support(arr)
console.log(reasult)