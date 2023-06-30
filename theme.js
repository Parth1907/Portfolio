document.addEventListener("DOMContentLoaded", () => {
    
    // finding the theme pref using media query
    const themePreferenceDark = window.matchMedia("(prefers-color-scheme: dark)");

    // whenever sys theme is changed we eneed to update and check the theme pref and update the btn txt
    themePreferenceDark.addEventListener("change", (event) => {
        checkThemePreference();
    })
    
    const getOSThemePref = () => themePreferenceDark.matches ? "dark" : "light";
    
    const getThemePrefFromLocalStorage = () => {
        return localStorage.getItem("theme");
    }

    const checkThemePreference = () => {
        const defaultTheme = getOSThemePref();
        const currentTheme = getThemePrefFromLocalStorage();
        if (currentTheme === "dark") {
            document.body.classList.toggle("dark-theme");   
        } else if(currentTheme === "light") {
            document.body.classList.toggle("light-theme");   
        }
        setButtonText(currentTheme ?? defaultTheme)
    }

    // cont sunIcon= btn.innerHTML="&#xf185";

    const setButtonText = (theme) => {
        themeSwitcher.innerHTML = theme === "dark" ? "&#9728;" : "&#9790;";

        // themeSwitcher.textContent = theme
        // if (theme === "dark") {
        //     themeSwitcher.innerHTML="&#9728;";
        // } else {
        //     themeSwitcher.innerHTML="&#9790;"
        // }
    }

    const switchTheme = () => {
        if (themePreferenceDark.matches) {
            document.body.classList.toggle("light-theme")
            theme = document.body.classList.contains("light-theme") ? "light" : "dark"
        } else {
            document.body.classList.toggle("dark-theme")
            theme = document.body.classList.contains("dark-theme") ? "dark" : "light" 
        }
        localStorage.setItem("theme", theme);
        setButtonText(theme)
    }
    
    const themeSwitcher = document.getElementById("theme-switcher");
    themeSwitcher.addEventListener("click", switchTheme);
    
    
    checkThemePreference();
})