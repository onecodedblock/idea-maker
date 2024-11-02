function saveText() {
    const text = document.getElementById('text-editor').value;
    localStorage.setItem('ideas', text);
    document.getElementById('message').innerText = 'Ideas saved!';
}

function loadText() {
    const savedText = localStorage.getItem('ideas');
    if (savedText) {
        document.getElementById('text-editor').value = savedText;
        document.getElementById('message').innerText = 'Ideas loaded!';
    } else {
        document.getElementById('message').innerText = 'No saved ideas found.';
    }
}
