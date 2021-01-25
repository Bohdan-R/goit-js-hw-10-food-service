const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

console.log(Theme.LIGHT);

const bodyRef = document.querySelector('body');
const inputRef = document.querySelector('.theme-switch__toggle');

selectedTheme();

inputRef.addEventListener('change', handleThemeInput)

function handleThemeInput(event) {
    if (event.target.checked) {

        localStorage.setItem('Theme', Theme.DARK);
        bodyRef.classList.add(Theme.DARK);
        bodyRef.classList.remove(Theme.LIGHT);
        return;
    };

    localStorage.setItem('Theme', Theme.LIGHT);
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
}

function selectedTheme() {
    const theme = localStorage.getItem('Theme');

    bodyRef.classList.toggle(theme);

    if (theme === Theme.DARK) {
        inputRef.checked = true;
    }
}