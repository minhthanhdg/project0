
const selectElement = (s) => document.querySelector(s);
    
        selectElement('#open').addEventListener('click',()=> {
            selectElement('.list').classList.add('active');
        });
        selectElement('#exit').addEventListener('click',()=> {
            selectElement('.list').classList.remove('active');
        });
       
