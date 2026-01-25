document.addEventListener('DOMContentLoaded', function() {
    // Search Modal Functionality
    const searchIcon = document.querySelector('.header__icons-search');
    const searchModal = document.querySelector('.search-modal');
    const searchModalClose = document.querySelector('.search-modal__close');
    const searchModalOverlay = document.querySelector('.search-modal__overlay');
    const searchInput = document.querySelector('.search-modal__input');
    
    function openSearchModal() {
        searchModal.classList.add('search-modal--active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => searchInput.focus(), 300);
    }
    
    function closeSearchModal() {
        searchModal.classList.remove('search-modal--active');
        document.body.style.overflow = '';
        searchInput.value = '';
    }
    
    if (searchIcon) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            openSearchModal();
        });
    }
    
    if (searchModalClose) {
        searchModalClose.addEventListener('click', closeSearchModal);
    }
    
    if (searchModalOverlay) {
        searchModalOverlay.addEventListener('click', closeSearchModal);
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchModal.classList.contains('search-modal--active')) {
            closeSearchModal();
        }
    });
    
    // Solutions Dropdown Functionality
    const solutionButton = document.querySelector('.solution');
    const solutionsDropdown = document.querySelector('.solutions-dropdown');
    
    function toggleSolutionsDropdown() {
        const isActive = solutionsDropdown.classList.contains('solutions-dropdown--active');
        
        // Close all dropdowns
        document.querySelectorAll('.solutions-dropdown').forEach(dropdown => {
            dropdown.classList.remove('solutions-dropdown--active');
        });
        document.querySelectorAll('.solution').forEach(button => {
            button.classList.remove('solution--active');
        });
        
        // Open this dropdown if it was closed
        if (!isActive) {
            solutionsDropdown.classList.add('solutions-dropdown--active');
            solutionButton.classList.add('solution--active');
        }
    }
    
    if (solutionButton && solutionsDropdown) {
        solutionButton.addEventListener('click', function(e) {
            e.preventDefault();
            toggleSolutionsDropdown();
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav__item-2')) {
            document.querySelectorAll('.solutions-dropdown').forEach(dropdown => {
                dropdown.classList.remove('solutions-dropdown--active');
            });
            document.querySelectorAll('.solution').forEach(button => {
                button.classList.remove('solution--active');
            });
        }
    });
    
    // Search Tags Functionality (for both modal and search section)
    function setupSearchTags(tagSelector, inputSelector) {
        const tags = document.querySelectorAll(tagSelector);
        const input = document.querySelector(inputSelector);
        
        tags.forEach(tag => {
            tag.addEventListener('click', function() {
                const tagText = this.textContent.trim();
                input.value = tagText;
                input.focus();
                
                // Add visual feedback
                input.style.borderColor = '#4a5fff';
                setTimeout(() => {
                    input.style.borderColor = '';
                }, 1000);
            });
        });
    }
    
    // Setup search tags in modal
    setupSearchTags('.search-modal__tag', '#searchInput');
    
    // Setup search tags in search section
    setupSearchTags('.search__tag', '.search__input');
    
    // Footer Logo Hover Effect Enhancement
    const footerLogo = document.querySelector('.footer__logo');
    if (footerLogo) {
        footerLogo.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 4px 8px rgba(74, 95, 255, 0.3))';
        });
        
        footerLogo.addEventListener('mouseleave', function() {
            this.style.filter = '';
        });
    }
    
    // Smooth scroll for footer links
    document.querySelectorAll('.footer__link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default if it's a same-page link
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add loading animation for search
    function addSearchLoading(input, button) {
        button.addEventListener('click', function() {
            if (input.value.trim()) {
                this.innerHTML = `
                    <div class="search-spinner"></div>
                `;
                this.style.pointerEvents = 'none';
                
                // Simulate search delay
                setTimeout(() => {
                    this.innerHTML = `
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" aria-hidden="true">
                            <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="none" />
                            <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="none" />
                        </svg>
                    `;
                    this.style.pointerEvents = '';
                    
                    // Here you would typically perform the actual search
                    console.log('Searching for:', input.value);
                }, 1000);
            }
        });
    }
    
    // Add search loading for modal
    const modalSearchBtn = document.querySelector('.search-modal__search-btn');
    if (modalSearchBtn && searchInput) {
        addSearchLoading(searchInput, modalSearchBtn);
    }
    
    // Add search loading for main search section
    const mainSearchInput = document.querySelector('.search__input');
    const mainSearchBtn = document.querySelector('.search__search-btn');
    if (mainSearchInput && mainSearchBtn) {
        addSearchLoading(mainSearchInput, mainSearchBtn);
    }
});

// Add CSS for spinner dynamically
const spinnerCSS = `
.search-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-top: 2px solid #000;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = spinnerCSS;
document.head.appendChild(styleSheet);
