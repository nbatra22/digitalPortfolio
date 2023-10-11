function navigateTo(page) {
    // Update the subtitle
    document.getElementById('subtitle').innerText = page === 'home.html' ? 'Home' : page.charAt(0).toUpperCase() + page.slice(0, -5);

    // Navigate to the respective page
    window.location.href = page;
}
