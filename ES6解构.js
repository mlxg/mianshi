const arr = ['this is a string', 2, 3, 4];

//传统方式
// var a = arr[0],
//     b = arr[1],
//     c = arr[2];

//解构赋值，是不是简洁很多？
const [d, b, c] = arr;

console.log(d);//this is a string
console.log(b);//2
console.log(c);//3

// 解构的作用是可以快速取得数组或对象当中的元素或属性

var obj = {
    name: 'chris',
    sex: 'male',
    age: 26,
    son: {
        sonname: '大熊',
        sonsex: 'male',
        sonage: 1
    }
};

var {name, sex, age, son} = obj;
console.log(name + ' ' + sex + ' ' + age); //chris male 26
console.log(son); // { sonname: '大熊', sonsex: 'male', sonage: 1 }

// var obj = {
//     name: 'chris',
//     sex: 'male',
//     age: 26
// };

var {name: nickname, age: howo} = obj;

console.log(nickname + '' + howo);

//传参解构
function fn3({sex, age, name, son: {name: sonname}}) {
    console.log(name + ' ' + sex + ' ' + age + ' ' + sonname);
}

fn3(obj);
//chris male 26 大熊

//循环解构

var arr1 = [{name: 'chris', age: 26}, {name: 'jack', age: 27}, {name: 'peter', age: 28}];

for (let {age, name} of arr1) {
    console.log(name + ' ' + age);
}


for(let i of arr1){
    console.log(i.name+i.age)
}

for(let i in arr1){
    console.log(arr1[i].name)
}
//chris 26
//jack 27
//peter 28