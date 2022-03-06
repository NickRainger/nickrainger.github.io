document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button")
    if (! isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
        document.getElementById("search").focus();
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

var icon = document.getElementById("icon")
var themeButton = document.getElementById("theme-button")
var app = document.getElementsByTagName("BODY")[0]

icon.onclick = function() {

    if (localStorage.getItem("theme") == "dark") {
	    localStorage.setItem("theme", "light");
	    app.setAttribute("theme", "light");
        icon.src = "img/sun.png";
    } else {
	    localStorage.setItem("theme", "dark");
	    app.setAttribute("theme", "dark");
        icon.src = "img/moon.png";
    }
}

document.getElementsByTagName("BODY")[0].setAttribute("theme", localStorage.getItem("theme"))
var theme = localStorage.getItem("theme")
if (theme == "dark") {
    icon.src = "img/moon.png";
    app.setAttribute("theme", "dark");
} else {
    icon.src = "img/sun.png";
    app.setAttribute("theme", "light");
}
//navigator.clipboard.writeText('copyText.value');