
// Pirmais uzdevums - Izveido masīvu ar padoto vērtību, un skaitu masīvā


export function fill(arraySize, value){

    return new Array(arraySize).fill(value);

}


//Otrais uzdevums - Izveidot funkciju, kas atgriež masīvu reverse secībā

export function reverse(array){
    const reversed = [];
    for(let i = array.length - 1; i >= 0; i -= 1) {
        reversed.push(array[i]);

    }
    return reversed;
}

// Trešais uzdevums - Izveidot funkciju, kas iztīra masīvu no visām nevajadzīgām vērtībām: false, undefined, empty strings, zero, null

export function compact(array){
    return array.filter(x => x > 0);


}




//Ceturtais uzdevums - Izveidot funkciju, kas pārveido masīvu objektā

export const arrayFromPairs = (arrry) =>
     arrry.reduce((acc, value) => {
        if(Array.isArray(value)){
            acc[value[0]] = value[1];
        }
        return acc;
    }, {});
