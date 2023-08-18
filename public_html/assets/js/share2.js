// script.js
document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copyButton2');
    const notification = document.getElementById('notification2');

    copyButton.addEventListener('click', () => {
        const textToCopy = window.location.href;
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 1000);
    });
});

