const fibonacci = limit => {

    let N1=0;
    let N2=1;
    let SUMA=0
    const arr = []
    arr.length=limit-1
    for(let i=0;i<21;i++)
    {
        SUMA=N1+N2;
        arr [i] = SUMA
    
        N1=N2
        N2=SUMA;
    }
    return arr
}

console.log(fibonacci(21))

