const txtElement = [' Pelajar', ' Gamers', ' Manusia'];
let count = 0;
let txtindex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

    console.log();

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtindex);
    document.querySelector('.efek-ngetik').textContent = words;
    
    if(words.length == currentTxt.length){
        count++;
        txtindex = 0;
    }

    setTimeout(ngetik, 500);

})();

// disini saya membuat coding javascript untuk membuat efek mengetik, saya mendeklarasikannya dengan efek ngetik kemudian saya panggil di html
