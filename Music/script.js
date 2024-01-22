document.addEventListener('DOMContentLoaded', function () {
    const noteButtons = document.querySelectorAll('.note-button');
    const playButton = document.getElementById('play-button');
    const correctButtonSpan = document.getElementById('correct-button');
    const correctInfo = document.getElementById('correct-info');
    const correctCountSpan = document.getElementById('correct-count');
    const wrongCountSpan = document.getElementById('wrong-count');

    let correctButton;
    let correctCount = 0;
    let wrongCount = 0;

    window.playGame = function() {
        correctButtonSpan.textContent = '';
        correctInfo.style.display = 'none';
        correctButton = getRandomButton();
        enableButtons();
        updateInfo();
        playSound(correctButton.textContent);
    }

    window.checkNote = function(button, value) {
        disableButtons();
        playSound(button.textContent);
        if (button === correctButton) {
            correctCount += value;
            correctInfo.style.display = 'block';
            correctInfo.textContent = `Botão Correto: ${correctButton.textContent}. Correto!`;
        } else {
            wrongCount += value;
            correctInfo.style.display = 'block';
            correctInfo.textContent = `Botão Correto: ${correctButton.textContent}. Errado!`;
        }
        updateInfo();
        setTimeout(window.playGame, 1000); // Reinicia o jogo após 1 segundo
    }

    function playSound(note) {
        const audioElement = document.getElementById(`audio-${note}`);
        audioElement.play();
    }

    function getRandomButton() {
        const randomIndex = Math.floor(Math.random() * noteButtons.length);
        return noteButtons[randomIndex];
    }

    function updateInfo() {
        correctCountSpan.textContent = correctCount;
        wrongCountSpan.textContent = wrongCount;
    }

    function enableButtons() {
        noteButtons.forEach(button => button.disabled = false);
    }

    function disableButtons() {
        noteButtons.forEach(button => button.disabled = true);
    }

    // Iniciar o jogo quando a página carregar
    window.playGame();
});
