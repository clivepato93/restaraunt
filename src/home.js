 const home = document.createElement("div")
const title = document.createElement('h1')
title.textContent = 'Clive\'s Cafe';
home.classList.add('home')
home.appendChild(title)

const info = document.createElement('div')
info.classList.add('info','rect')
const p1 = document.createElement('p')
p1.textContent = "A small local restaurant in the heart of the city centre";
const p2 = document.createElement("p");
p2.textContent  = "I recently dined at Fusion Flavors Bistro, a unique restaurant blending Italian, Jamaican, and Mexican cuisines, and it was an unforgettable experience! The menu offers a delightful journey across cultures, from creamy, perfectly seasoned Fettuccine Alfredo to spicy, jerk-marinated chicken that pairs beautifully with traditional Jamaican rice and peas. Their tacos al pastor, bursting with authentic flavors, were the perfect fusion of bold spices and fresh ingredients. The atmosphere was warm and vibrant, reflecting the diverse culinary inspirations. Whether you're craving a comforting Italian dish or a fiery Caribbean kick, this spot has something to satisfy every palate. Highly recommend! - John Doe"
info.append(p1,p2)
// const hourInfo = document.createElement('div')
// const h3 = document.createElement('h3');
// h3.textContent = 'Hours';
// const hourList = document.createElement('ul');
// hourList.classList.add('hours')
// const hours = ['Monday - Hours 4 - 10:30',
//     'Tuesday - Hours 4 - 10:30',
//     'Wednesday - Hours 4 - 10:30',
//     'Thursday - Hours 4 - 10:30',
//     'Friday - Hours 12 - 10:30',
//     'Saturday - Hours 12 - 10:30',
//     'Sunday - Closed',]
//     hourInfo.append(h3)
//     hours.forEach(hour => {
//         const time = document.createElement('li')
//         time.textContent = hour
//         hourList.appendChild(time)
//     })
//     hourInfo.append(h3,hourList)
home.appendChild(info);
// home.appendChild(hourInfo);                  
export default home
    /* 
<div class="home">
            <h1 title="tet">Clive's Cafe</h1>
            <div class="rect">
                <div class="info">
                    <p>A small local restaurant in the heart of the city centre</p>
                    <p>I recently dined at Fusion Flavors Bistro, a unique restaurant blending Italian, Jamaican, and Mexican
                        cuisines, and it
                        was an unforgettable experience! The menu offers a delightful journey across cultures, from creamy,
                        perfectly seasoned
                        Fettuccine Alfredo to spicy, jerk-marinated chicken that pairs beautifully with traditional Jamaican
                        rice and peas.
                        Their tacos al pastor, bursting with authentic flavors, were the perfect fusion of bold spices and fresh
                        ingredients.
                        The atmosphere was warm and vibrant, reflecting the diverse culinary inspirations. Whether you're
                        craving a comforting
                        Italian dish or a fiery Caribbean kick, this spot has something to satisfy every palate. Highly
                        recommend! - John Doe
                    </p>
                </div>
            </div>
            <div style="text-align: center;">
                <h3>Hours</h3>
                <ul class="hours">
                    <li>Monday - Hours 4- 10:30</li>
                    <li>Tuesday - Hours 4- 10:30</li>
                    <li>Wednesday - Hours 4- 10:30</li>
                    <li>Thursday - Hours 4- 10:30</li>
                    <li>Friday - Hours 12 - 10:30</li>
                    <li>Saturday - Hours 12 - 10:30</li>
                    <li>Sunday - Closed</li>
                </ul>
            </div>
        </div>`;
*/