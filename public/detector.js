const startButton = document.getElementById('startButton');
const result = document.getElementById('result');

startButton.addEventListener('click', () => {
  result.classList.add('hidden');
  startButton.disabled = true;
  startButton.textContent = 'Analizando...';

  // Simula una "lectura" del detector (reemplazar por datos reales si tienes hardware)
  setTimeout(() => {
    const isLying = Math.random() < 0.5; // 50% de mentir

    result.textContent = isLying ? "¡Mentiste! 😈" : "Dijiste la verdad 😇";
    result.style.color = isLying ? "#ff4444" : "#44ff44";
    result.classList.remove('hidden');
    startButton.disabled = false;
    startButton.textContent = 'Iniciar';

    // Guarda en Firebase
    const log = {
      timestamp: new Date().toISOString(),
      result: isLying ? "mentira" : "verdad"
    };

    firebase.database().ref('detector_logs').push(log);
  }, 3000);
});