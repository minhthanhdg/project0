
const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click',()=> {
    selectElement('.nav-click').classList.add('active');
});
selectElement('.exit').addEventListener('click',()=> {
    selectElement('.nav-click').classList.remove('active');
});

