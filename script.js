// Function to toggle notice board visibility
function toggleNoticeBoard() {
    const noticeBoard = document.querySelector(".notice-board");
    noticeBoard.classList.toggle("expanded");
    const noticeContent = document.getElementById('noticeContent');
    noticeContent.style.display = noticeBoard.classList.contains("expanded") ? 'block' : 'none';
}

// Function to open and close the management popup
const expandArrow = document.getElementById('expandArrow');
const managementPopup = document.getElementById('managementPopup');
const closePopup = document.getElementById('closePopup');

// Open popup on arrow click
expandArrow.addEventListener('click', function() {
    managementPopup.classList.toggle('hidden');
    managementPopup.style.display = managementPopup.classList.contains('hidden') ? 'none' : 'block';
});

// Close popup on close button click
closePopup.addEventListener('click', function() {
    managementPopup.classList.add('hidden');
    managementPopup.style.display = 'none';
});

// Optional: Close popup when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === managementPopup) {
        managementPopup.classList.add('hidden');
        managementPopup.style.display = 'none';
    }
});
