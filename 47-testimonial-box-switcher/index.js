window.addEventListener('load', ()=> {
    console.log('window loaded');
});

const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImg = document.querySelector('.user-img');
const userName = document.querySelector('.user-name');
const role = document.querySelector('.role')

const testimonials = 'data.js';
fetch(testimonials)
.then( resp => { return resp.json()})
.then( data => {
    console.log(data)

    let idx = 1

    function updateTestimonial() {
      const { name, position, photo, text } = data[idx]
    
      testimonial.innerHTML = text
      userImg.src = photo
      userName.innerHTML = name
      role.innerHTML = position
    
      idx++
    
      if (idx > data.length - 1) {
        idx = 0
      }
    }
    
    setInterval(updateTestimonial, 10000)
});