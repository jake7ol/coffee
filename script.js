
// https://api.telegram.org/bot6561454864:AAGUcO5-ci85QRBLgn3m3cqyoKErgwVyNtU/getUpdates

// https://api.telegram.org/bot6561454864:AAGUcO5-ci85QRBLgn3m3cqyoKErgwVyNtU/sendMessage?chat_id=5517870462&text=hi_i_am_bot

let array = [5, 8, 2 ,4];

for (let i = 0; i < array.length -1; i++) {
    for (let q = 0; q < array.length -1; q++) {
if (array[q] > array[q + 1]) {
    let c = array[q]
    array[q] = array[q + 1]
    array[q + 1] = c
}
    }
}
console.log(array)