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

    // Helper function to validate a field and toggle error state
    const validateField = (field, validator = (value) => value !== '') => {
        const errorElement = field.parentElement.nextElementSibling;
        if (!validator(field.value)) {
            errorElement.classList.add('sp-error-active');
            return false;
        }
        errorElement.classList.remove('sp-error-active');
        return true;
    };

    // Sequentially validate fields
    const fields = [
        { field: form.querySelector('input[name="firstName"]') },
        { field: form.querySelector('input[name="lastName"]') },
        { field: form.querySelector('input[name="email"]'), validator: validateEmail },
        { field: form.querySelector('input[name="company"]') },
    ];

    for (const { field, validator } of fields) {
        if (!validateField(field, validator)) {
            return; // Stop validation if a field fails
        }
    }

    // If all fields are valid, reset the form
    form.reset();
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
