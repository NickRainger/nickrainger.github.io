document.addEventListener('click', e=> {
    const isDropdownButton = e.target.matches("[data-dropdown-button")
    if (!isDropdownButton&& e.target.closest('[data-dropdown]') != null) return

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



function toggle_theme() {
    var app = document.getElementsByTagName("BODY")[0]

    if (localStorage.getItem("theme") == "light") {
	    localStorage.setItem("theme", "dark")
	    app.setAttribute("theme", "dark")
    } else {
	    localStorage.setItem("theme", "light")
	    app.setAttribute("theme", "light")
    }
}

document.getElementsByTagName("BODY")[0].setAttribute("theme", localStorage.getItem("theme"))
