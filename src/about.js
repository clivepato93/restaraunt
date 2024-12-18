const about = document.createElement('section');
const title = document.createElement('h3');
title.textContent = 'Opening Times';
const ul = document.createElement('ul');
const subtitle = document.createElement('h4');
subtitle.textContent = "Contact Details";
const number = document.createElement('a')
number.href = "tel:+4733378901";
number.textContent = "+47 333 78 901";
const email = document.createElement('div')
email.classList.add('email')
email.textContent = "mailto:someone@example.com";
ul.classList.add('hours')
const hours = ['Monday - Hours 4- 10:30',
'Tuesday - Hours 4- 10:30',
'Wednesday - Hours 4- 10:30',
'Thursday - Hours 4- 10:30',
'Friday - Hours 12 - 10:30',
'Saturday - Hours 12 - 10:30',
    'Sunday - Closed',]

hours.forEach(hour => {
    const h = document.createElement('li')
    h.textContent = hour
    ul.appendChild(h)
})
about.append(title,ul,subtitle,number,email)

export default about