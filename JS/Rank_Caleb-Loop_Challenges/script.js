// ---------- Challenge I
console.log('Challenge I')
for (let i=1; i<=20; i++){
    if (i % 2 != 0){
        console.log(i);
    }
}

// ---------- Challenge II
console.log('Challenge II')
for (let i=100; i>=0; i--){
    if (i % 3 == 0){
        console.log(i);
    }
}

// ---------- Challenge III
console.log('Challenge III')
for (let i=4; i>-4; i-=1.5){
    console.log(i);
}

// ---------- Challenge IV
console.log('Challenge IV')
var sum = 0;
for (let i=1; i<=100; i++){
    sum += i;
}
console.log(sum);

// ---------- Challenge V
console.log('Challenge V')
var product = 1;
for (let i=1; i<=12; i++){
    product *= i;
}
console.log(product);