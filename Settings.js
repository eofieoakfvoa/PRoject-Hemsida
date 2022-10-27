function GetUsername() {
    const username = document.getElementById('textbox_id').value;
    localStorage.setItem("Username", username);
    console.log(username)
    console.log(localStorage.Username)
  }

 // function to set a given theme/color-scheme
 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
} 