document.addEventListener('DOMContentLoaded', () => {
    fetch('Data.json')
        .then(response => response.json())
        .then(data => {
            const boxImages = data["box-images"];

                document.getElementById('manImg').src = boxImages[0].Link;
                document.getElementById('manTitle').textContent = boxImages[0].title;
                
                document.getElementById('womenImg').src = boxImages[1].Link;
                document.getElementById('womenTitle').textContent = boxImages[1].title;
                
                document.getElementById('shoesImg').src = boxImages[2].Link;
                document.getElementById('shoesTitle').textContent = boxImages[2].title;
   
        })
        .catch(error => console.error('Error loading the JSON file:', error));
});




var i=1
function next()
{
    var mainImg = document.getElementById('main-image');
            if(i < 3)
            {    
                i++;
            }
            else
            {
                i=1;
            }
        mainImg.src = "./images/main-img" + i + ".jpg"
}

function prev()
{
    var mainImg = document.getElementById('main-image');
            if(i <= 1)
            {    
                i=3;
            }
            else
            {
                i--;
            }
        mainImg.src = "./images/main-img" + i + ".jpg"
}

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.addToCartBtn');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));

            const existingItem = cart.find(item => item.name === productName);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
        });
    });
});
