var misol = +prompt("yechmoqchi bo'lgan misollar moqdorini kiriting");
for ( let i = 0 ; i < misol; i++) {
    var misol1 = Math.floor(Math.random() * 40 + 1);
    var misol2 = Math.floor(Math.random() * 40 + 1);
    if (misol1 < 11 && misol2 < 11) {
        var natija = misol1 * misol2;
        var javob = +prompt(`${misol1} * ${misol2} `)
        if (natija == javob){
        console.log(`sizning javob to'g'ri - ${javob}`);

        }else{
            console.log(`sizning javob noto'g'ri - ${javob} !To'g'ri javob ${natija}`);
        }
    }
    else if (misol1 > 31 || misol2 < 31) {
        var natija = misol1 - misol2;
        var javob = +prompt(`${misol1} - ${misol2} `)
        if (natija == javob){
            console.log(`sizning javob to'g'ri - ${javob}`);
    
            }else{
                console.log(`sizning javob noto'g'ri - ${javob} !To'g'ri javob ${natija}`);
            }
    } else if (misol1 > 31 || misol2 < 41) {
        var natija = misol1 + misol2;
        var javob = +prompt(`${misol1} + ${misol2} `)
        if (natija == javob){
            console.log(`sizning javob to'g'ri - ${javob}`);
    
            }else{
                console.log(`sizning javob noto'g'ri - ${javob} !To'g'ri javob ${natija}`);
            }
    }
}