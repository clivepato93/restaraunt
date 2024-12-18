import jerk from "./jerk-chicken-12-500x500.jpg";

const string = `<div class="menu-items">
        <div class="item">
            <div class="left"> 
                <h3 class="item-title">Jerk Chicken</h3>
                <img src="jerk-chicken-12-500x500.jpg" alt="jerk-chicken">
            </div>
            <div class="right">
                <div class="ingredients">Ingredients: Chicken, Scotch bonnet peppers, allspice, thyme, garlic, ginger, green onions, soy sauce, brown sugar, lime
                juice.</div>
                <div class="add-info">Comes with Rice & Veg</div>
            </div>
        </div>
        <div class="item row-reverse">
            <div class="left">
                <h3 class="item-title">Jerk Chicken</h3>
                <img src="jerk-chicken-12-500x500.jpg" alt="jerk-chicken">
            </div>
            <div class="right">
                <div class="ingredients">Ingredients: Chicken, Scotch bonnet peppers, allspice, thyme, garlic, ginger, green
                    onions, soy sauce, brown sugar, lime
                    juice.</div>
                <div class="add-info">Comes with Rice & Veg</div>
            </div>
        </div>
       </div>`;

const menu = document.createElement('div')
menu.classList.add('menu-items');
const item = document.createElement('div');
item.classList.add('item');
const left = document.createElement('left');
const h3 = document.createElement('h3');
h3.classList.add('item-title');
h3.textContent = 'Jerk Chicken';
const img = document.createElement('img');
img.src = jerk;
img.alt = 'Jerk Chicken';
const right = document.createElement('div')
right.classList.add('right')
const ingredients = document.createElement('div')
ingredients.classList.add('ingredients')
ingredients.textContent = 'Ingredients: Chicken, Scotch bonnet peppers, allspice, thyme, garlic, ginger, green onions, soy sauce, brown sugar, lime juice';
const info = document.createElement('div');
info.classList.add('add-info');
info.textContent = "Comes with Rice & Veg";
item.append(left, right)

left.append(h3,img)
right.append(ingredients,info)
menu.append(item)
const item2 = item.cloneNode(true)
item2.classList.add('row-reverse')
console.log(item2);
menu.append(item,item2)
console.log(menu);
export default menu