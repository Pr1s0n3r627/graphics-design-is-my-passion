function randomizePosition(element) {
    const x = Math.random() * (window.innerWidth - element.offsetWidth);
    const y = Math.random() * (window.innerHeight - element.offsetHeight);
    const rotate = Math.random() * 360;
    const scale = 0.5 + Math.random() * 1.5;
    element.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`;
}

function randomizeColor(element) {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.color = randomColor;
}

function applyRandomStyles() {
    const heading = document.querySelector('h1');
    const image = document.querySelector('img');

    setInterval(() => {
        randomizePosition(heading);
        randomizePosition(image);
        randomizeColor(heading);
    }, 1000);
}

window.onload = applyRandomStyles;
