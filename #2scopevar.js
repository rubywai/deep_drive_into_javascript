function doing() {
    if (true) {
        var y = 4
        let z = 5
        x = 7
        const w = 5;
       // w = 4; cannot reassign
    }
    console.log(y)
   // console.log(z) z is not accessible
   console.log(x)
}
doing()