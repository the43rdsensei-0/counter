// setting initial value 

let count = 0;

//  set value and btns 

const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(button){
    button.addEventListener('click', function(A){
        const styles = A.currentTarget.classList
        if (styles.contains('decrease')) {
            count--;
            
        } else if (styles.contains('increase')) {
            count++;
            
        } else {
            count = 0;
        }

        // setting the color for negative and positive values

        if (count < 0) {
            value.style.color = "red"
        }
        else if (count > 0) {
            value.style.color = 'green'
        }
        else {
            value.style.color = 'inherit'
        }

        value.textContent = count;
    })
});
