let obj1={name:"person 1",age:5}
let obj2={age:5,name:"person 1"}

 let issame=true

if(Object.keys(obj1).length ===Object.keys(obj2).length){
    // console.log("length is same")

    for(let key in obj1){
        if(obj1[key]===obj2[key]){
            // console.log(key +"has same value")
        }else{
            issame=false;
            console.log(key+"doesnt have same value");
        }
    }

}else{
    console.log("objects are different")
}
if(issame){
    console.log("objects are same")

}else{
    console.log("objects are different")
}