const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');


menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})
const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active'); 
    }, 1100);

    navLinks.forEach(link =>{
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active'); 
    }, 1100);

    sections.forEach(section =>{
        section.classList.remove('active');
    });

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

navLinks.forEach((link,idx) => {
    link.addEventListener('click', ()=>{
        if(!link.classList.contains('active')){
            activePage();
            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', ()=>{
    if(!navLinks[0].classList.contains('active')){
        activePage();
        navLinks[0].classList.add('active');
    }

    setTimeout(() => {
        sections[0].classList.add('active');
    }, 1100);
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn,idx) => {
    btn.addEventListener('click',()=>{

        const resumeDetails = document.querySelectorAll('.resume-detail')
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = ()=>{
    const imgSlide = document.querySelector('.portfolio-corousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail =>{
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', ()=>{
    if(index<2){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {index =3;
    arrowRight.classList.add('disabled');
    }
    activePortfolio();
    
});

arrowLeft.addEventListener('click', ()=>{
    if(index>1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {index =0;
    arrowLeft.classList.add('disabled');
    }
    activePortfolio();
    
});


// Initialize EmailJS with your user ID
(function() {
    emailjs.init("x3m-FcL0uIa21wE3l");
})();

function sendEmail(e) {
    e.preventDefault();

    const form = document.getElementById('contactForm');
    const button = form.querySelector('.btn');
    const buttonText = button.querySelector('.button-text');
    const buttonLoader = button.querySelector('.button-loader');

    form.classList.add('submitting');
    buttonText.classList.add('hidden');
    buttonLoader.classList.remove('hidden');

    const existingMessages = form.querySelectorAll('.success-message, .error-message');
    existingMessages.forEach(msg => msg.remove());

    const templateParams = {
        from_name: document.getElementById('fullName').value,
        from_email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        to_email: 'prathamesh.k0904@gmail.com' 
    };

    emailjs.send('service_77kkap1', 'template_7v57w9c', templateParams)
        .then(function(response) {
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Message sent successfully!';
            form.appendChild(successMessage);

            // Reset form
            form.reset();
        }, function(error) {
            // Create error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Failed to send message. Please try again.';
            form.appendChild(errorMessage);
        })
        .finally(function() {
            // Reset button state
            form.classList.remove('submitting');
            buttonText.classList.remove('hidden');
            buttonLoader.classList.add('hidden');
        });
}