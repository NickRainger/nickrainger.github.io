document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button")
    if (! isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

var icon = document.getElementById("icon")

icon.onclick = function() {
    var app = document.getElementsByTagName("BODY")[0]

    if (localStorage.getItem("theme") == "light") {
	    localStorage.setItem("theme", "dark");
	    app.setAttribute("theme", "dark");
        icon.src = "img/moon.png";
        icon.style.background = "#fff"
    } else {
	    localStorage.setItem("theme", "light");
	    app.setAttribute("theme", "light");
        icon.src = "img/sun.png";
        icon.style.background = "#091219"
    }
}

document.getElementsByTagName("BODY")[0].setAttribute("theme", localStorage.getItem("theme"))
var theme = localStorage.getItem("theme")
if (theme == "light") {
    icon.src = "img/sun.png";
    icon.style.background = "#091219"
} else {
    icon.src = "img/moon.png";
    icon.style.background = "#fff"
}
navigator.clipboard.writeText('copyText.vafdsflue');