// Dark Mode Functionality
function initializeDarkMode() {
    const desktopToggle = document.querySelector('#checkbox-desktop');
    const mobileToggle = document.querySelector('#checkbox-mobile');
    
    function switchTheme(isDark) {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            // Update both toggles
            if (desktopToggle) desktopToggle.checked = true;
            if (mobileToggle) mobileToggle.checked = true;
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            // Update both toggles
            if (desktopToggle) desktopToggle.checked = false;
            if (mobileToggle) mobileToggle.checked = false;
        }
    }
    
    function handleToggleChange(e) {
        switchTheme(e.target.checked);
    }

    // Event listeners for both toggles
    if (desktopToggle) {
        desktopToggle.addEventListener('change', handleToggleChange);
    }
    
    if (mobileToggle) {
        mobileToggle.addEventListener('change', handleToggleChange);
    }

    // Sync both toggles when one is clicked
    function syncToggles() {
        if (desktopToggle && mobileToggle) {
            desktopToggle.addEventListener('change', function() {
                mobileToggle.checked = desktopToggle.checked;
            });
            
            mobileToggle.addEventListener('change', function() {
                desktopToggle.checked = mobileToggle.checked;
            });
        }
    }
    
    syncToggles();

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        if (currentTheme === 'dark') {
            if (desktopToggle) desktopToggle.checked = true;
            if (mobileToggle) mobileToggle.checked = true;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeDarkMode);

// Debug function
function debugToggles() {
    const toggles = document.querySelectorAll('.theme-switch input');
    console.log('Found toggles:', toggles.length);
    
    toggles.forEach((toggle, index) => {
        console.log(`Toggle ${index + 1}:`, {
            id: toggle.id,
            checked: toggle.checked,
            visible: toggle.offsetParent !== null
        });
    });
}

// Run debug after page load
setTimeout(debugToggles, 1000);