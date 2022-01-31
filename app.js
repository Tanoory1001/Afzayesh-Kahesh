let numberbox = document.querySelector("#numberbox");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");

// let my_number = 0;

plus.addEventListener('click', function () {
    my_number = numberbox.value;
    my_number++;
    numberbox.value = my_number;
});

minus.addEventListener('click', () => {
    my_number = numberbox.value;
    my_number--;
    numberbox.value = my_number;
});
reset.addEventListener('click',() => {
    my_number = 0
    numberbox.value = my_number
})