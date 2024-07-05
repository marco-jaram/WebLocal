document.addEventListener('DOMContentLoaded', function() {
    const targetElement = document.getElementById('tinytype');
    const textsToType = ['conectan.', 'enganchan.'];
    const typeSpeed = 100; // Speed in milliseconds between each character
    const deleteSpeed = 50; // Speed in milliseconds between each character deletion
    const delayBetweenTexts = 1000; // Delay in milliseconds before starting to type the next text

    let currentTextIndex = 0;

    function typeText(element, text, speed, callback) {
        let index = 0;

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else if (callback) {
                setTimeout(callback, delayBetweenTexts);
            }
        }

        type();
    }

    function deleteText(element, speed, callback) {
        let text = element.textContent;
        let length = text.length;

        function erase() {
            if (length > 0) {
                element.textContent = text.substring(0, length - 1);
                length--;
                setTimeout(erase, speed);
            } else if (callback) {
                callback();
            }
        }

        erase();
    }

    function startTypingAnimation() {
        if (currentTextIndex < textsToType.length) {
            typeText(targetElement, textsToType[currentTextIndex], typeSpeed, function() {
                deleteText(targetElement, deleteSpeed, function() {
                    currentTextIndex++;
                    startTypingAnimation();
                });
            });
        } else {
            currentTextIndex = 0; // Reset index to loop the animation
            startTypingAnimation();
        }
    }

    // Initialize typing effect
    startTypingAnimation();
});
