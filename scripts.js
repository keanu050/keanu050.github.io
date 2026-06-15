// Interactive popup effects
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effects to all cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
    });
  });

  // Add interactive text tooltips
  const interactiveTexts = document.querySelectorAll('.interactive-text');
  interactiveTexts.forEach(text => {
    text.addEventListener('mouseenter', function() {
      const tooltip = this.querySelector('.tooltip-popup');
      if (tooltip) {
        tooltip.style.opacity = '1';
      }
    });
    text.addEventListener('mouseleave', function() {
      const tooltip = this.querySelector('.tooltip-popup');
      if (tooltip) {
        tooltip.style.opacity = '0';
      }
    });
  });

  // Add click effects to links
  const accentLinks = document.querySelectorAll('a.accent');
  accentLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.href === '#') {
        e.preventDefault();
        showPopup('Dit is een interactieve link!');
      }
    });
  });

  // Add smooth hover glow to buttons
  const buttons = document.querySelectorAll('.btn-accent');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 0 20px rgba(77, 166, 255, 0.8)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.boxShadow = 'none';
    });
  });
});

// Function to show popup
function showPopup(message) {
  const popup = document.createElement('div');
  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #4da6ff;
    color: #000;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 10px 40px rgba(77, 166, 255, 0.5);
    z-index: 10000;
    font-weight: bold;
    animation: popupIn 0.3s ease-out;
  `;
  popup.textContent = message;
  document.body.appendChild(popup);
  
  setTimeout(() => {
    popup.style.animation = 'popupOut 0.3s ease-out';
    setTimeout(() => popup.remove(), 300);
  }, 2000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes popupIn {
    from {
      opacity: 0;
      transform: translate(-50%, -60%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  
  @keyframes popupOut {
    from {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -40%);
    }
  }
`;
document.head.appendChild(style);