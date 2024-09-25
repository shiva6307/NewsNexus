const apiKey = '115d0425fb8a4084927a242802b08991';

// Element references
const newsContainer = document.getElementById('news-container');
const categoryTitle = document.getElementById('news-category-title');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const categoryTabs = document.querySelectorAll('.category-tab');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');
const currentPageDisplay = document.getElementById('current-page');

// Pagination state
let currentPage = 1;
let totalPages = 1;
let currentCategory = 'general';  // Default category

// Function to fetch news by category and page
async function fetchNewsByCategory(category, page = 1) {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${apiKey}&page=${page}&pageSize=5`);
    const data = await response.json();
    totalPages = Math.ceil(data.totalResults / 5);  // Assuming 5 articles per page
    displayNews(data.articles, category);
    updatePaginationButtons();
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
  }
}

// Function to display news articles
function displayNews(articles, category) {
  newsContainer.innerHTML = articles.map(article => `
    <div class="news-card">
      <img src="${article.urlToImage || 'placeholder.jpg'}" alt="News Image" />
      <h3>${article.title}</h3>
      <p>${article.description || 'Click below to read more'}</p>
      <a href="${article.url}" target="_blank" class="read-more">Read More</a>
    </div>
  `).join('');
  categoryTitle.innerText = `Top ${category.charAt(0).toUpperCase() + category.slice(1)} News`;
}

// Function to fetch news based on search query
async function searchNews(query, page = 1) {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&page=${page}&pageSize=5`);
    const data = await response.json();
    totalPages = Math.ceil(data.totalResults / 5);  // Assuming 5 articles per page
    displayNews(data.articles, 'Search Results');
    updatePaginationButtons();
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
}

 
// Update pagination buttons
function updatePaginationButtons() {
  currentPageDisplay.innerText = `Page ${currentPage}`;
  prevPageButton.disabled = currentPage === 1;
  nextPageButton.disabled = currentPage === totalPages;
}

// Add event listener to search button
searchButton.addEventListener('click', () => {
  const query = searchInput.value;
  if (query) {
    currentPage = 1;
    searchNews(query, currentPage);
  }
});

// Add event listeners to category tabs
categoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const category = tab.getAttribute('data-category');
    currentCategory = category;
    currentPage = 1;  // Reset to first page
    fetchNewsByCategory(category, currentPage);
  });
});

// Add event listeners for pagination buttons
prevPageButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchNewsByCategory(currentCategory, currentPage);
  }
});

nextPageButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchNewsByCategory(currentCategory, currentPage);
  }
});

// Fetch general news on page load
fetchNewsByCategory(currentCategory, currentPage);