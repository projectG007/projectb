let currentPage = 1;
const totalPages = 3;

function showPage(pageNumber) {
    for (let i = 1; i <= totalPages; i++) {
        const page = document.getElementById(`page${i}`);
        if (page) {
            page.style.display = (i === pageNumber) ? 'flex' : 'none';
        }
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// On load, show first page
window.onload = () => {
    showPage(currentPage);
};
