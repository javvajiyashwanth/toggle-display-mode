const moon_path = "M14 27.5C14 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 14 12.3122 14 27.5Z";
const sun_path = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
const duration = 3000;

const mode = document.querySelector('h1');
const svg = document.querySelector('svg');
let toggle = false;

svg.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration,
        easing: 'spring'
    });
    timeline
        .add({
            targets: 'path',
            d: [
                { value: toggle ? sun_path : moon_path }
            ]
        })
        .add({
            targets: 'svg',
            rotate: toggle ? 0 : 360
        }, `-= ${duration}`)
        .add({
            targets: 'section',
            backgroundColor: toggle ? 'rgb(255, 255, 255)' : 'rgb(22, 22, 22)',
            color: toggle ? 'rgb(22, 22, 22)' : 'rgb(255, 255, 255)'
        }, `-= ${duration}`)
    mode.innerHTML = toggle ? 'Light Mode' : 'Dark Mode';
    toggle = !toggle;
})