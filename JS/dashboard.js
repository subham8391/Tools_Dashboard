function isAuthenticate() {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  if (!userDetails?.password || !userDetails?.email) {
    window.location.pathname = "/index.html";
  }
  return;
}

function logout() {
  localStorage.removeItem("userDetails");
  window.location.pathname = "/index.html";
}


//navbar 
const toggleButton = document.getElementById("toggleSidebar");
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const hedtitle = document.querySelector('.hed-title');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    toggleButton.classList.toggle('active');
    content.classList.toggle('active');
    hedtitle.classList.toggle('active');
});


// show data as per there click

function showContent(contentId) {
  const contentSections = document.querySelectorAll('.content');
  
  // Hide all content sections
  contentSections.forEach(section => {
      section.style.display = 'none';
  });
  
  // Show the selected content
  const selectedContent = document.getElementById(contentId);
  if (selectedContent) {
      selectedContent.style.display = 'block';
  }
}

// Add event listeners to navigation links
document.getElementById('home-link').addEventListener('click', () => {
  showContent('home-content');
});

document.getElementById('about-link').addEventListener('click', () => {
  showContent('about-content');
});

document.getElementById('services-link').addEventListener('click', () => {
  showContent('services-content');
});

document.getElementById('portfolio-link').addEventListener('click', () => {
  showContent('portfolio-content');
});

document.getElementById('contact-link').addEventListener('click', () => {
  showContent('contact-content');
});

// Initially, show the Home content
showContent('home-content');