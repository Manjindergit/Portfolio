import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import profilePic from './media/profile.jpeg';
import background from './media/1.jpeg';

document.addEventListener('DOMContentLoaded', () => {
    const profile = document.getElementById('profilePic');
    profile.src = profilePic;

    const mainContainer = document.getElementById('mainContainer');
    mainContainer.style.backgroundImage = `url(${background})`;
    //background iamge should cover entire mainContainer
    mainContainer.style.backgroundSize = 'cover';
}
);
