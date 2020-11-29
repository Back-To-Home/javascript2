// break, continue
// 01 짝수출력
for(let i = 0; i<10; i++){
    if(i%2 == 0){
        console.log(i);
    }
}
// 02 8을 만나면 탈출
for(let i = 0; i<10; i++){
    console.log(i);
    if(i == 8){
        console.log('break!!!');
        break;
    }
}
