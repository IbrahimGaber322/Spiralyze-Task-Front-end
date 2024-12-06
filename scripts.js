document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);

    // Video modal functionality
    const playButton = document.querySelector('.sp-play-button');
    const closeButton = document.querySelector('.sp-video-section__close');
    const videoModal = document.getElementById('videoModal');

    playButton.addEventListener('click', openVideo);
    closeButton.addEventListener('click', closeVideo);
    videoModal.addEventListener('click', closeModalOnBackground);
});

/**
 * Handles the form submission by validating each input field.
 * @param {Event} event - The form submission event.
 */
const handleFormSubmit = (event) => {
    event.preventDefault(); // Stop default submission

    const form = event.target;
    const inputs = form.querySelectorAll('input');
    const firstNameField = form.querySelector('input[name="firstName"]');
    const lastNameField = form.querySelector('input[name="lastName"]');
    const emailField = form.querySelector('input[name="email"]');
    const companyField = form.querySelector('input[name="company"]');

    if (firstNameField.value === '') {
        const parentSibling = firstNameField.parentElement.nextElementSibling;
        parentSibling.classList.add('sp-error-active');
        return;

    } else {
        const parentSibling = firstNameField.parentElement.nextElementSibling;
        parentSibling.classList.remove('sp-error-active');
    }

    if (lastNameField.value === '') {
        const parentSibling = lastNameField.parentElement.nextElementSibling;
        parentSibling.classList.add('sp-error-active');
        return;

    } else {
        const parentSibling = lastNameField.parentElement.nextElementSibling;
        parentSibling.classList.remove('sp-error-active');
    }

    if (emailField.value === '' || !validateEmail(emailField.value)) {
        const parentSibling = emailField.parentElement.nextElementSibling;
        parentSibling.classList.add('sp-error-active');
        return;

    }
    else {
        const parentSibling = emailField.parentElement.nextElementSibling;
        parentSibling.classList.remove('sp-error-active');
    }

    if (companyField.value === '') {
        const parentSibling = companyField.parentElement.nextElementSibling;
        parentSibling.classList.add('sp-error-active');
        return;

    } else {
        const parentSibling = companyField.parentElement.nextElementSibling;
        parentSibling.classList.remove('sp-error-active');
    }

    // Check if all fields are valid
    const isValid = [...inputs].every((input) => input.value !== '');
    if (isValid) {
        form.reset();
    }

};

/**
 * Validates the email format.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if the email is valid, false otherwise.
 */
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

/**
 * Opens the video modal and plays the YouTube video.
 */
const openVideo = () => {
    const youtubeVideo = document.getElementById('youtubeVideo');
    const videoModal = document.getElementById('videoModal');

    // Set the YouTube video URL (replace VIDEO_ID with your YouTube video ID)
    youtubeVideo.src = "https://www.youtube.com/embed/VIDEO_ID?autoplay=1";

    // Show the modal
    videoModal.style.display = "flex";
};

/**
 * Closes the video modal and stops the YouTube video.
 */
const closeVideo = () => {
    const youtubeVideo = document.getElementById('youtubeVideo');
    const videoModal = document.getElementById('videoModal');

    // Stop the video and hide the modal
    youtubeVideo.src = "";
    videoModal.style.display = "none";
};

/**
 * Closes the modal if the background is clicked.
 * @param {Event} event - The click event.
 */
const closeModalOnBackground = (event) => {
    const modalContent = document.querySelector('.sp-video-section__modal-content');
    if (!modalContent.contains(event.target)) {
        closeVideo();
    }
};
