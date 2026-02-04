
const proposalView = document.getElementById('proposal-view');
const successView = document.getElementById('success-view');
const errorView = document.getElementById('error-view');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const bgMusic = document.getElementById('bgMusic');



// Removed autoplay attempt on load — music is played on user interaction (CLICK ME)

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
