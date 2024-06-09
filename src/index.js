import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import profilePic from './media/profile.jpeg';
import background from './media/1.jpeg';
import resume from './media/ManjinderGrewalResume.pdf';

document.addEventListener('DOMContentLoaded', () => {
    const profile = document.getElementById('profilePic');
    profile.src = profilePic;

    const mainContainer = document.getElementById('mainContainer');
    mainContainer.style.backgroundImage = `url(${background})`;
    mainContainer.style.backgroundSize = 'cover';
    mainContainer.style.backgroundPosition = 'center';
});

document.getElementById('resumeDownloadBtn').addEventListener('click', () => {
    window.open(resume);
});
