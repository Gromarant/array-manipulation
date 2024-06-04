const selectElement = (selector) => document.querySelector(selector);
const forMethod = selectElement('.for_method');
const forEachMethod = selectElement('.forEach_method');
const letters =  ['a', 'b', 'c'];

const createItem = (item) => document.createElement(item);

const loops = (arr) => {
    if(arr) {
        for(let index = 0; index < arr.length; index++) {
            selectElement('.for_method ul').innerHTML += `<li>${arr[index]}</li>`;
        };
        selectElement('.for_method h1').innerText = 'for method:';

        
        arr.forEach(item => selectElement('.forEach_method ul').innerHTML += `<li>${item}</li>`);
        selectElement('.forEach_method h1').innerText = 'forEach method:'
    } else {
        return;
    }
};
loops(letters);
