
const proposalView = document.getElementById('proposal-view');
const successView = document.getElementById('success-view');
const errorView = document.getElementById('error-view');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const bgMusic = document.getElementById('bgMusic');


document.addEventListener('DOMContentLoaded', () => {
    bgMusic.volume = 0.5;
    bgMusic.play().catch(() => {

        console.log('Autoplay blocked, waiting for user interaction...');
    });
});



yesBtn.addEventListener('click', () => {

    document.querySelector('.card').classList.add('hidden');
    successView.classList.remove('hidden');


    document.title = 'Valentines';
});


noBtn.addEventListener('click', () => {

    proposalView.classList.add('hidden');


    errorView.classList.remove('hidden');


    document.title = 'No internet';


    document.querySelectorAll('.error-view a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
});
