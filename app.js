// =============================================================================
// SEMINAR PRESENTATION ENGINE
// Clean presentation engine with dynamic canvas visuals, character animations,
// and failsafe data initialization.
// =============================================================================

// Failsafe Slide Data (Guarantees slides work even if slides.js is blocked)
if (typeof slidesData === 'undefined' || !Array.isArray(slidesData) || slidesData.length === 0) {
  window.slidesData = [
    {
      id: 1,
      title: "TRAPPED BY DESIGN",
      subtitle: "The Hidden Psychology of How Modern Business Steals Your Money and Attention",
      footer: "Powered by Ajay K J",
      visualType: "grid-3d",
      bulletPoints: []
    },
    {
      id: 2,
      title: "The Illusion of Choice",
      subtitle: "",
      visualType: "monolith-maze",
      bulletPoints: [
        "We believe our buying decisions belong entirely to us.",
        "The truth is, human psychology is highly hackable.",
        "Every interface, notification, and price tag is a silent trap designed to bypass your defenses."
      ]
    },
    {
      id: 3,
      title: "My First Lesson in Business",
      subtitle: "",
      visualType: "exchange-story",
      bulletPoints: [
        "\"When I was a kid, I went to a shop to buy an 8-rupee pen. I gave the shopkeeper a 10-rupee note, expecting 2 rupees back.\"",
        "\"Instead of coins, he handed me two chocolates and said, 'I don't have any change.'\"",
        "\"I didn't want the candy, but I took it anyway. Looking back, I realized it wasn't a coin shortage at all—it was a trick.\"",
        "\"The shopkeeper forced me to buy something I never asked for. I didn't make the choice. He made it for me.\""
      ]
    },
    {
      id: 4,
      title: "The Coca-Cola Ice Trick",
      subtitle: "",
      visualType: "cola-ice-trick",
      bulletPoints: [
        "\"Think about the last time you bought a cold Coca-Cola at a fast-food restaurant.\"",
        "\"You see two options on the menu: a medium cup or a massive large cup. You pay the extra money because the large cup looks like a much better deal.\"",
        "\"But here is the trick: the workers fill that large cup straight to the top with ice. If you take the ice out, the medium and the large hold the exact same amount of actual soda.\"",
        "\"You didn't buy more to drink. You just paid extra money for frozen water and a bigger paper cup.\""
      ]
    },
    {
      id: 5,
      title: "The Trap of the Free Trial",
      subtitle: "",
      visualType: "free-trial-trap",
      bulletPoints: [
        "\"We have all signed up for a free trial or a software subscription online, thinking it is risk-free.\"",
        "\"They make it effortless to join—just one click, a saved card, and you are inside. But when you finally want to leave, the door is locked.\"",
        "\"They hide the cancellation button behind five different menus, force you to click through popups, or even make you talk to a customer service agent just to stop paying.\"",
        "\"They use friction as a weapon. They count on the fact that you will get too tired, too busy, or too annoyed to finish canceling, forcing you to pay for another month you never wanted.\""
      ]
    },
    {
      id: 6,
      title: "The Illusion of Progress",
      subtitle: "(The Coffee Stamp Trick)",
      visualType: "coffee-stamp-trick",
      bulletPoints: []
    },
    {
      id: 7,
      title: "The Trap of Manufactured Scarcity",
      subtitle: "",
      visualType: "manufactured-scarcity",
      bulletPoints: [
        "Websites show fake warnings like 'Only 1 item left in stock!'",
        "This triggers instant panic and the fear of missing out.",
        "You stop comparing prices and rush to buy immediately.",
        "The warning is often just programmed code to force fast purchases."
      ]
    },
    {
      id: 8,
      title: "The Phantom Countdown Timer",
      subtitle: "",
      visualType: "phantom-timer",
      bulletPoints: [
        "Booking sites display a ticking timer warning your seats will expire.",
        "The artificial urgency forces you to hurry and ignore extra fees.",
        "When the timer hits zero, refreshing the page simply resets it.",
        "It is a manufactured emergency to make you buy without thinking."
      ]
    },
    {
      id: 9,
      title: "The PDF Editor Subscription Trap",
      subtitle: "",
      visualType: "pdf-trap",
      bulletPoints: [
        "You use a 'free' online tool to edit, merge, or sign a document.",
        "After spending time editing, you click download.",
        "A sudden paywall demands a monthly subscription to get your file back.",
        "Your document is held hostage at the final step when you are out of time."
      ]
    },
    {
      id: 10,
      title: "The Free Delivery Cart Trap",
      subtitle: "",
      visualType: "cart-trap",
      bulletPoints: [
        "Stores notify you: 'Add just $15 more to unlock free delivery!'",
        "Your brain shifts from what you need to finding filler items.",
        "You spend $20 on extra items just to avoid a $5 delivery fee.",
        "You don't save money—the store successfully makes you spend more."
      ]
    },
    {
      id: 11,
      title: "The Invisible Digital Ear",
      subtitle: "(The Targeted Ad Trap)",
      visualType: "targeted-ad",
      bulletPoints: [
        "You speak about a product out loud to a friend without typing it.",
        "Minutes later, your social media feed is flooded with ads for it.",
        "Algorithms track shared Wi-Fi, location proximity, and friend activity.",
        "They predict what you want before you even search for it."
      ]
    },
    {
      id: 12,
      title: "The Bait Price Switch",
      subtitle: "(Drip Pricing)",
      visualType: "drip-pricing",
      bulletPoints: [
        "An item or ticket is advertised at an attractive low price like $10.",
        "You spend time completing the booking and entering your details.",
        "At final checkout, extra hidden fees are suddenly tacked on.",
        "The true cost is revealed only after you are already committed."
      ]
    },
    {
      id: 13,
      title: "The Emotional Ping",
      subtitle: "(Zomato's Push Notification Trap)",
      visualType: "zomato-push",
      bulletPoints: [
        "Apps send funny notifications that look like friendly texts.",
        "Jokes and emojis make you forget it is an advertisement.",
        "They trigger food cravings when you feel bored or lonely.",
        "Friendly messages trick you into ordering food on impulse."
      ]
    },
    {
      id: 14,
      title: "The Fake Scratch Card",
      subtitle: "(The Gamified Ad Trap - Google Pay & PhonePe)",
      visualType: "scratch-card",
      bulletPoints: [
        "Paying a bill gives you a digital scratch card.",
        "You scratch it expecting real cashback money.",
        "Instead, you just get discount coupons and betting app ads.",
        "Lottery excitement is used to push sponsored advertisements."
      ]
    },
    {
      id: 15,
      title: "The Cart-Padding Trap",
      subtitle: "(Minimum Order Hostage - Quick Commerce)",
      visualType: "cart-padding",
      bulletPoints: [
        "You add an urgent ₹35 cooking essential (like milk) to your cart.",
        "A warning blocks checkout: 'Add ₹165 more to place your order!'",
        "You toss chips, sodas, and snacks into the cart to meet the minimum.",
        "Your urgent essential is held hostage to make you spend 5x more on junk."
      ]
    },
    {
      id: 16,
      title: "Dark Patterns in Action",
      subtitle: "Real-World Video Demonstration",
      visualType: "video-case",
      bulletPoints: [
        "Watch real interfaces manipulate user decisions in real time.",
        "Artificial urgency tricks you into skipping critical details.",
        "Always pause and review total prices before the final click."
      ]
    },
    {
      id: 17,
      title: "Questions & Answers",
      subtitle: "",
      visualType: "qa-creative",
      bulletPoints: []
    },
    {
      id: 18,
      title: "Thank You!",
      subtitle: "",
      visualType: "thank-you-creative",
      bulletPoints: []
    }
  ];
}

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentSlideIndex = 0;
  const totalSlides = slidesData.length;
  let timerSeconds = 0;
  let timerInterval = null;
  let isTimerRunning = false;

  // DOM Elements
  const progressBar = document.getElementById('progressBar');
  const currentSlideNum = document.getElementById('currentSlideNum');
  const totalSlideNum = document.getElementById('totalSlideNum');

  const slideCard = document.getElementById('slideContent');
  const slideTitle = document.getElementById('slideTitle');
  const slideSubtitle = document.getElementById('slideSubtitle');
  const slideBody = document.getElementById('slideBody');
  const slideKeyPoints = document.getElementById('slideKeyPoints');
  const slideFooter = document.getElementById('slideFooter');
  const footerText = document.getElementById('footerText');
  const characterCol = document.getElementById('characterCol');
  const cocaColaCol = document.getElementById('cocaColaCol');
  const characterWrapper = document.getElementById('characterWrapper');
  const shopkeeperThumb = document.getElementById('shopkeeperThumb');

  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const dotsContainer = document.getElementById('dotsContainer');

  const btnFullscreen = document.getElementById('btnFullscreen');
  const timerPill = document.getElementById('timerPill');
  const presentationTimer = document.getElementById('presentationTimer');

  // Canvas Setup
  const canvas = document.getElementById('visualCanvas');
  const ctx = canvas.getContext('2d');
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  let mouseX = canvasWidth / 2;
  let mouseY = canvasHeight / 2;
  let targetMouseX = mouseX;
  let targetMouseY = mouseY;
  let animTime = 0;

  // ===========================================================================
  // INITIALIZATION
  // ===========================================================================
  function init() {
    totalSlideNum.textContent = String(totalSlides).padStart(2, '0');
    renderNavigationDots();
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', onMouseMove);

    // Render first slide
    goToSlide(0);

    // Start presentation timer automatically
    startTimer();

    // Start background canvas animation loop
    animateCanvas();

    // Interactive shopkeeper hover & click effects
    const dealBubble = document.getElementById('dealBubble');
    const bubbleTitle = document.getElementById('bubbleTitle');
    const bubbleSub = document.getElementById('bubbleSub');

    if (characterWrapper) {
      characterWrapper.addEventListener('mouseenter', () => {
        characterWrapper.classList.add('fast-pump');
        if (bubbleTitle) bubbleTitle.textContent = '"Change ila mwone!"';
        if (bubbleSub) bubbleSub.textContent = 'Chocolates aano vendathu? 🍫😉';
        if (dealBubble) dealBubble.classList.add('bubble-glow');
      });

      characterWrapper.addEventListener('mouseleave', () => {
        characterWrapper.classList.remove('fast-pump');
        if (bubbleTitle) bubbleTitle.textContent = '"Change ila mwone!"';
        if (bubbleSub) bubbleSub.textContent = 'Take 2 chocolates instead 😉';
        if (dealBubble) dealBubble.classList.remove('bubble-glow');
      });

      characterWrapper.addEventListener('click', () => {
        characterWrapper.classList.add('fast-pump');
        if (bubbleTitle) bubbleTitle.textContent = '"Change ila mwone! 🍫"';
        if (bubbleSub) bubbleSub.textContent = 'Here, take chocolates! ✨';
        setTimeout(() => {
          if (bubbleTitle) bubbleTitle.textContent = '"Change ila mwone!"';
          if (bubbleSub) bubbleSub.textContent = 'Take 2 chocolates instead 😉';
          characterWrapper.classList.remove('fast-pump');
        }, 2200);
      });
    }
  }

  // ===========================================================================
  // NAVIGATION DOTS
  // ===========================================================================
  function renderNavigationDots() {
    dotsContainer.innerHTML = '';
    slidesData.forEach((slide, idx) => {
      const dot = document.createElement('button');
      dot.className = `slide-dot ${idx === currentSlideIndex ? 'active' : ''}`;
      dot.setAttribute('title', `Go to Slide ${idx + 1}`);
      dot.setAttribute('aria-label', `Slide ${idx + 1}`);
      dot.addEventListener('click', () => goToSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }

  function updateNavigationDots() {
    const dots = dotsContainer.querySelectorAll('.slide-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlideIndex);
    });
  }

  // ===========================================================================
  // SLIDE TRANSITION LOGIC
  // ===========================================================================
  function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    currentSlideIndex = index;
    const slide = slidesData[currentSlideIndex];

    // Update Counter & Progress
    currentSlideNum.textContent = String(currentSlideIndex + 1).padStart(2, '0');
    const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Button states
    btnPrev.disabled = currentSlideIndex === 0;
    btnNext.disabled = currentSlideIndex === totalSlides - 1;

    // Trigger smooth slide card entrance animation
    slideCard.classList.remove('animate-in');
    void slideCard.offsetWidth; // Force CSS reflow
    slideCard.classList.add('animate-in');

    // Title
    slideTitle.textContent = slide.title || '';

    // Subtitle
    if (slide.subtitle && slide.subtitle.trim().length > 0) {
      slideSubtitle.style.display = 'block';
      slideSubtitle.textContent = slide.subtitle;
    } else {
      slideSubtitle.style.display = 'none';
      slideSubtitle.textContent = '';
    }

    // Bullet Points
    if (slide.bulletPoints && slide.bulletPoints.length > 0) {
      slideBody.style.display = 'block';
      slideKeyPoints.innerHTML = '';
      slide.bulletPoints.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        slideKeyPoints.appendChild(li);
      });
    } else {
      slideBody.style.display = 'none';
      slideKeyPoints.innerHTML = '';
    }

    // Slide Footer (only on Slide 1)
    if (slide.footer && slide.footer.trim().length > 0) {
      slideFooter.style.display = 'flex';
      const cleanAuthor = slide.footer.replace(/^(powered\s*by\s*:?)/i, '').trim();
      footerText.innerHTML = `Powered by <strong class="author-name">${cleanAuthor || 'Ajay K J'}</strong>`;
    } else {
      slideFooter.style.display = 'none';
    }

    // Slide 3 Character Illustration (Shopkeeper)
    if (currentSlideIndex === 2) { // Slide 3: Shopkeeper
      if (characterCol) characterCol.style.display = 'flex';
      slideCard.classList.add('wide-card');
    } else { // Slides 1, 2, 4
      if (characterCol) characterCol.style.display = 'none';
      slideCard.classList.remove('wide-card');
    }

    updateNavigationDots();
  }

  function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
      goToSlide(currentSlideIndex + 1);
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  }

  // ===========================================================================
  // PRESENTATION TIMER
  // ===========================================================================
  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    isTimerRunning = true;
    timerInterval = setInterval(() => {
      timerSeconds++;
      const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
      const secs = String(timerSeconds % 60).padStart(2, '0');
      presentationTimer.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  function toggleTimer() {
    if (isTimerRunning) {
      clearInterval(timerInterval);
      isTimerRunning = false;
      timerPill.style.opacity = '0.5';
    } else {
      startTimer();
      timerPill.style.opacity = '1';
    }
  }

  // ===========================================================================
  // FULLSCREEN
  // ===========================================================================
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Fullscreen error: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // ===========================================================================
  // EVENT LISTENERS & KEYBOARD CONTROLS
  // ===========================================================================
  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', prevSlide);
  btnFullscreen.addEventListener('click', toggleFullscreen);
  timerPill.addEventListener('click', toggleTimer);

  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        nextSlide();
        break;

      case 'ArrowLeft':
      case 'PageUp':
      case 'Backspace':
        e.preventDefault();
        prevSlide();
        break;

      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;

      case 't':
      case 'T':
        e.preventDefault();
        toggleTimer();
        break;

      case '1':
        goToSlide(0);
        break;

      case '2':
        goToSlide(1);
        break;

      case '3':
        goToSlide(2);
        break;

      case '4':
        goToSlide(3);
        break;
    }
  });

  // Touch Swipe Support for Mobile & Tablets
  let touchStartX = 0;
  let touchEndX = 0;

  window.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const threshold = 50;
    const diff = touchEndX - touchStartX;
    if (diff < -threshold) {
      nextSlide();
    } else if (diff > threshold) {
      prevSlide();
    }
  }, { passive: true });

  // Mouse move for subtle 3D parallax
  function onMouseMove(e) {
    targetMouseX = e.clientX;
    targetMouseY = e.clientY;
  }

  // ===========================================================================
  // DYNAMIC VISUAL CANVAS (ANIMATIONS PRESERVED)
  // ===========================================================================
  function resizeCanvas() {
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    canvas.width = canvasWidth * window.devicePixelRatio;
    canvas.height = canvasHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  function animateCanvas() {
    animTime += 0.02;

    // Smooth mouse interpolation
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;

    // Clear canvas
    ctx.fillStyle = '#08090c';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    const currentSlide = slidesData[currentSlideIndex];

    if (currentSlide && currentSlide.visualType === 'grid-3d') {
      render3DGrid();
    } else if (currentSlide && currentSlide.visualType === 'monolith-maze') {
      renderMonolithMaze();
    } else if (currentSlide && currentSlide.visualType === 'exchange-story') {
      renderExchangeStory();
    } else if (currentSlide && currentSlide.visualType === 'cola-ice-trick') {
      renderColaIceVisual();
    }

    requestAnimationFrame(animateCanvas);
  }

  // ---------------------------------------------------------------------------
  // SLIDE 1: SUBTLE 3D PERSPECTIVE GRID OVERLAY
  // ---------------------------------------------------------------------------
  function render3DGrid() {
    const horizonY = canvasHeight * 0.45;
    const offsetX = (mouseX - canvasWidth / 2) * 0.08;
    const offsetY = (mouseY - canvasHeight / 2) * 0.05;

    const horizonGlow = ctx.createRadialGradient(
      canvasWidth * 0.65 + offsetX, horizonY + offsetY, 10,
      canvasWidth * 0.65 + offsetX, horizonY + offsetY, canvasWidth * 0.5
    );
    horizonGlow.addColorStop(0, 'rgba(0, 255, 136, 0.12)');
    horizonGlow.addColorStop(0.5, 'rgba(56, 189, 248, 0.04)');
    horizonGlow.addColorStop(1, 'rgba(8, 9, 12, 0)');
    ctx.fillStyle = horizonGlow;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    const vpX = canvasWidth * 0.62 + offsetX;
    const vpY = horizonY + offsetY;

    ctx.save();
    ctx.beginPath();
    ctx.rect(0, horizonY - 10, canvasWidth, canvasHeight - horizonY + 10);
    ctx.clip();

    const numRadials = 28;
    for (let i = -numRadials; i <= numRadials; i++) {
      const spread = i * (canvasWidth / 14);
      const bottomX = vpX + spread * 2.2;
      const bottomY = canvasHeight + 100;

      const grad = ctx.createLinearGradient(vpX, vpY, bottomX, bottomY);
      grad.addColorStop(0, 'rgba(0, 255, 136, 0)');
      grad.addColorStop(0.3, 'rgba(0, 255, 136, 0.08)');
      grad.addColorStop(1, 'rgba(56, 189, 248, 0.22)');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(vpX, vpY);
      ctx.lineTo(bottomX, bottomY);
      ctx.stroke();
    }

    const numHorizontals = 16;
    const speed = (animTime * 28) % 60;

    for (let i = 0; i < numHorizontals; i++) {
      const progress = ((i * 35 + speed) % 550) / 550;
      if (progress <= 0.01) continue;

      const y = vpY + Math.pow(progress, 2.2) * (canvasHeight - vpY);
      const halfWidth = Math.pow(progress, 1.8) * canvasWidth * 1.5;

      const alpha = Math.min(progress * 0.45, 0.3);
      ctx.strokeStyle = `rgba(0, 255, 136, ${alpha})`;
      ctx.lineWidth = Math.max(0.8, progress * 2);

      ctx.beginPath();
      ctx.moveTo(vpX - halfWidth, y);
      ctx.lineTo(vpX + halfWidth, y);
      ctx.stroke();
    }

    for (let p = 0; p < 30; p++) {
      const px = (Math.sin(p * 99 + animTime * 0.4) * 0.5 + 0.5) * canvasWidth;
      const py = vpY + (Math.cos(p * 37 + animTime * 0.3) * 0.5 + 0.5) * (canvasHeight - vpY);
      const pSize = (py - vpY) / (canvasHeight - vpY) * 2.5 + 0.5;

      ctx.fillStyle = p % 2 === 0 ? 'rgba(0, 255, 136, 0.55)' : 'rgba(56, 189, 248, 0.45)';
      ctx.beginPath();
      ctx.arc(px, py, pSize, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  // ---------------------------------------------------------------------------
  // SLIDE 2: TOWERING EMERALD MONOLITH & GLOWING MAZE
  // ---------------------------------------------------------------------------
  function renderMonolithMaze() {
    const centerX = canvasWidth * 0.68 + (mouseX - canvasWidth / 2) * 0.04;
    const groundY = canvasHeight * 0.62;

    const monolithGlow = ctx.createRadialGradient(
      centerX, groundY - 180, 20,
      centerX, groundY - 180, 480
    );
    monolithGlow.addColorStop(0, 'rgba(0, 255, 136, 0.3)');
    monolithGlow.addColorStop(0.4, 'rgba(16, 185, 129, 0.12)');
    monolithGlow.addColorStop(1, 'rgba(8, 9, 12, 0)');
    ctx.fillStyle = monolithGlow;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    drawPerspectiveMaze(centerX, groundY);
    drawMonolith(centerX, groundY);
    drawMazePulses(centerX, groundY);
  }

  function drawPerspectiveMaze(cx, gy) {
    ctx.save();
    const rows = 12;
    const cols = 22;
    const cellWidth = canvasWidth * 0.045;

    for (let r = 0; r < rows; r++) {
      const zProgress = (r + 1) / rows;
      const nextZProgress = (r + 2) / rows;

      const y1 = gy + Math.pow(zProgress, 1.8) * (canvasHeight - gy);
      const y2 = gy + Math.pow(nextZProgress, 1.8) * (canvasHeight - gy);

      for (let c = -cols / 2; c < cols / 2; c++) {
        const x1 = cx + c * cellWidth * Math.pow(zProgress, 1.3);
        const x2 = cx + (c + 1) * cellWidth * Math.pow(zProgress, 1.3);
        const nextX1 = cx + c * cellWidth * Math.pow(nextZProgress, 1.3);

        const seed = Math.abs(Math.sin(r * 41.3 + c * 17.7));
        const isCorridor = seed > 0.42;

        if (isCorridor) {
          const alpha = 0.08 + Math.pow(zProgress, 1.5) * 0.28;
          ctx.strokeStyle = seed > 0.7 ? `rgba(0, 255, 136, ${alpha})` : `rgba(56, 189, 248, ${alpha * 0.8})`;
          ctx.lineWidth = Math.max(1, zProgress * 2.2);

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y1);
          ctx.stroke();

          if (seed > 0.6) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(nextX1, y2);
            ctx.stroke();
          }
        }
      }
    }
    ctx.restore();
  }

  function drawMonolith(cx, gy) {
    ctx.save();

    const monoWidth = 140;
    const monoHeight = 360;
    const topY = gy - monoHeight;

    const beamGrad = ctx.createLinearGradient(cx, topY, cx, gy + 150);
    beamGrad.addColorStop(0, 'rgba(0, 255, 136, 0.45)');
    beamGrad.addColorStop(0.3, 'rgba(0, 255, 136, 0.15)');
    beamGrad.addColorStop(1, 'rgba(0, 255, 136, 0)');

    ctx.fillStyle = beamGrad;
    ctx.beginPath();
    ctx.moveTo(cx, topY - 10);
    ctx.lineTo(cx + monoWidth * 2.5, gy + 200);
    ctx.lineTo(cx - monoWidth * 2.5, gy + 200);
    ctx.closePath();
    ctx.fill();

    const baseShadow = ctx.createRadialGradient(cx, gy, 10, cx, gy, monoWidth * 1.5);
    baseShadow.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
    baseShadow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = baseShadow;
    ctx.beginPath();
    ctx.ellipse(cx, gy, monoWidth * 1.3, 30, 0, 0, Math.PI * 2);
    ctx.fill();

    const leftGrad = ctx.createLinearGradient(cx - monoWidth / 2, topY, cx, gy);
    leftGrad.addColorStop(0, '#062d1f');
    leftGrad.addColorStop(0.5, '#021810');
    leftGrad.addColorStop(1, '#080d0b');

    ctx.fillStyle = leftGrad;
    ctx.beginPath();
    ctx.moveTo(cx, topY);
    ctx.lineTo(cx - monoWidth * 0.45, topY + 40);
    ctx.lineTo(cx - monoWidth * 0.5, gy);
    ctx.lineTo(cx, gy + 15);
    ctx.closePath();
    ctx.fill();

    const rightGrad = ctx.createLinearGradient(cx, topY, cx + monoWidth / 2, gy);
    rightGrad.addColorStop(0, '#00ff88');
    rightGrad.addColorStop(0.25, '#10b981');
    rightGrad.addColorStop(0.7, '#044e33');
    rightGrad.addColorStop(1, '#021e14');

    ctx.fillStyle = rightGrad;
    ctx.beginPath();
    ctx.moveTo(cx, topY);
    ctx.lineTo(cx + monoWidth * 0.5, topY + 35);
    ctx.lineTo(cx + monoWidth * 0.55, gy);
    ctx.lineTo(cx, gy + 15);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = 'rgba(0, 255, 136, 0.85)';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#00ff88';
    ctx.shadowBlur = 15;

    ctx.beginPath();
    ctx.moveTo(cx, topY);
    ctx.lineTo(cx, gy + 15);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(0, 255, 136, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx, topY);
    ctx.lineTo(cx + monoWidth * 0.5, topY + 35);
    ctx.lineTo(cx + monoWidth * 0.55, gy);
    ctx.lineTo(cx, gy + 15);
    ctx.lineTo(cx - monoWidth * 0.5, gy);
    ctx.lineTo(cx - monoWidth * 0.45, topY + 40);
    ctx.closePath();
    ctx.stroke();

    ctx.shadowBlur = 20;
    ctx.strokeStyle = '#00ff88';
    ctx.lineWidth = 2;
    const eyeY = topY + 110 + Math.sin(animTime * 1.5) * 4;

    ctx.beginPath();
    ctx.moveTo(cx - 24, eyeY);
    ctx.lineTo(cx, eyeY - 14);
    ctx.lineTo(cx + 24, eyeY);
    ctx.lineTo(cx, eyeY + 14);
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(cx, eyeY, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function drawMazePulses(cx, gy) {
    ctx.save();
    const pulseCount = 14;

    for (let i = 0; i < pulseCount; i++) {
      const t = (animTime * 0.7 + i * 1.4) % 10;
      const progress = t / 10;

      const row = Math.floor(progress * 10);
      const zProgress = Math.min(0.95, (row + 1) / 11);
      const y = gy + Math.pow(zProgress, 1.8) * (canvasHeight - gy);

      const lateralOffset = Math.sin(i * 3 + animTime * 1.2) * (canvasWidth * 0.22) * zProgress;
      const x = cx + lateralOffset;

      const size = 3 + zProgress * 4;
      ctx.shadowColor = '#00ff88';
      ctx.shadowBlur = 10;
      ctx.fillStyle = i % 3 === 0 ? '#38bdf8' : '#00ff88';

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  // ---------------------------------------------------------------------------
  // SLIDE 3: VALUE EXCHANGE / TRANSACTION ORBITS
  // ---------------------------------------------------------------------------
  function renderExchangeStory() {
    const cx = canvasWidth * 0.76 + (mouseX - canvasWidth / 2) * 0.03;
    const cy = canvasHeight * 0.52 + (mouseY - canvasHeight / 2) * 0.03;

    const aura = ctx.createRadialGradient(cx, cy, 10, cx, cy, canvasWidth * 0.35);
    aura.addColorStop(0, 'rgba(251, 191, 36, 0.12)');
    aura.addColorStop(0.4, 'rgba(0, 255, 136, 0.05)');
    aura.addColorStop(1, 'rgba(8, 9, 12, 0)');
    ctx.fillStyle = aura;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.save();

    const rings = 4;
    for (let r = 1; r <= rings; r++) {
      const radiusX = r * 50;
      const radiusY = r * 24;
      const rot = animTime * 0.12 * (r % 2 === 0 ? 1 : -1);

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);

      ctx.strokeStyle = r % 2 === 0 ? 'rgba(251, 191, 36, 0.18)' : 'rgba(0, 255, 136, 0.18)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 10]);
      ctx.lineDashOffset = animTime * 15 * (r % 2 === 0 ? 1 : -1);

      ctx.beginPath();
      ctx.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();
    }

    ctx.restore();
  }

  // ---------------------------------------------------------------------------
  // SLIDE 4: COCA-COLA ICE TRICK CANVAS VISUAL
  // ---------------------------------------------------------------------------
  function renderColaIceVisual() {
    const cx = canvasWidth * 0.76 + (mouseX - canvasWidth / 2) * 0.03;
    const cy = canvasHeight * 0.5;

    // Cold cyan & crimson fizzy gradient aura
    const aura = ctx.createRadialGradient(cx, cy, 20, cx, cy, canvasWidth * 0.4);
    aura.addColorStop(0, 'rgba(56, 189, 248, 0.16)');
    aura.addColorStop(0.35, 'rgba(239, 68, 68, 0.06)');
    aura.addColorStop(1, 'rgba(8, 9, 12, 0)');
    ctx.fillStyle = aura;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Effervescent rising soda bubbles & cold sparkles
    ctx.save();
    const bubbleCount = 45;
    for (let b = 0; b < bubbleCount; b++) {
      const speed = 1.2 + (b % 5) * 0.5;
      const yProgress = ((animTime * speed * 35 + b * 45) % (canvasHeight * 0.85));
      const y = canvasHeight * 0.9 - yProgress;
      const xSpread = Math.sin(b * 33.7 + animTime * 0.8) * 160;
      const x = cx + xSpread;

      const size = 1.5 + (b % 4) * 1.8;
      const alpha = Math.sin((yProgress / (canvasHeight * 0.85)) * Math.PI) * 0.45;

      ctx.fillStyle = b % 2 === 0 ? `rgba(56, 189, 248, ${alpha})` : `rgba(255, 255, 255, ${alpha * 0.8})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Shimmering ice crystal flakes
    for (let f = 0; f < 18; f++) {
      const fx = cx + Math.sin(f * 43.1 + animTime * 0.5) * 220;
      const fy = cy + Math.cos(f * 27.3 + animTime * 0.4) * 180;
      const fSize = 2 + (f % 3) * 2;
      const fAlpha = 0.25 + Math.sin(animTime * 2 + f) * 0.2;

      ctx.strokeStyle = `rgba(56, 189, 248, ${fAlpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(fx - fSize, fy);
      ctx.lineTo(fx + fSize, fy);
      ctx.moveTo(fx, fy - fSize);
      ctx.lineTo(fx, fy + fSize);
      ctx.stroke();
    }
    ctx.restore();
  }

  // SLIDE 5: THE TRAP OF THE FREE TRIAL CANVAS VISUAL
  function renderFreeTrialTrapVisual() {
    const cx = canvasWidth * 0.72 + (mouseX - canvasWidth / 2) * 0.04;
    const cy = canvasHeight * 0.5 + (mouseY - canvasHeight / 2) * 0.04;

    // Dark amber & crimson ambient radial gradient aura
    const aura = ctx.createRadialGradient(cx, cy, 30, cx, cy, canvasWidth * 0.45);
    aura.addColorStop(0, 'rgba(251, 191, 36, 0.12)');
    aura.addColorStop(0.35, 'rgba(239, 68, 68, 0.06)');
    aura.addColorStop(1, 'rgba(8, 9, 12, 0)');
    ctx.fillStyle = aura;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Floating digital date particles & padlocks
    ctx.save();
    const numParticles = 24;
    for (let i = 0; i < numParticles; i++) {
      const speed = 0.8 + (i % 4) * 0.3;
      const y = ((animTime * speed * 25 + i * 50) % canvasHeight);
      const x = cx + Math.sin(i * 19.3 + animTime * 0.7) * 200;
      const alpha = Math.sin((y / canvasHeight) * Math.PI) * 0.35;

      ctx.fillStyle = i % 3 === 0 ? `rgba(251, 191, 36, ${alpha})` : (i % 3 === 1 ? `rgba(239, 68, 68, ${alpha})` : `rgba(56, 189, 248, ${alpha})`);
      ctx.font = '10px monospace';
      const labels = ['AUG 1', 'SEP 1', 'Rs 1499', '🔒', 'FREE', 'DEBIT'];
      ctx.fillText(labels[i % labels.length], x, y);
    }
    ctx.restore();
  }

  // =========================================================================
  // SLIDE 5: FREE TRIAL CALENDAR & DEBIT SIMULATOR
  // =========================================================================
  let calState = {
    month: 7, // 7 = August (0-indexed)
    year: 2026,
    trialStarted: false
  };

  const USER_LINKEDIN_URL = "https://www.linkedin.com";

  function initCalendarSimulator() {
    const calMonthName = document.getElementById('calMonthName');
    const calYearName = document.getElementById('calYearName');
    const calGrid = document.getElementById('calGrid');
    const debitNotificationCard = document.getElementById('debitNotificationCard');
    const calendarCard = document.getElementById('calendarCard');
    const calPrevBtn = document.getElementById('calPrevBtn');
    const calNextBtn = document.getElementById('calNextBtn');
    const btnCancelTrap = document.getElementById('btnCancelTrap');
    const frictionLockToast = document.getElementById('frictionLockToast');

    if (!calGrid) return;

    function renderCalendar() {
      calGrid.innerHTML = '';
      const isAugust = calState.month === 7;

      if (calMonthName) calMonthName.textContent = isAugust ? 'AUGUST' : 'SEPTEMBER';
      if (calYearName) calYearName.textContent = '2026';

      if (isAugust) {
        if (calendarCard) calendarCard.classList.remove('september-trap');
        if (debitNotificationCard) debitNotificationCard.style.display = 'none';
        if (frictionLockToast) frictionLockToast.style.display = 'none';

        // August 2026 starts on Saturday (5 empty cells for Mon-Fri)
        for (let e = 0; e < 5; e++) {
          const empty = document.createElement('div');
          empty.className = 'cal-day-cell empty';
          calGrid.appendChild(empty);
        }

        // Days 1 to 31
        for (let d = 1; d <= 31; d++) {
          const cell = document.createElement('div');
          cell.className = 'cal-day-cell';
          cell.textContent = d;

          if (d === 1) {
            cell.classList.add('active-trial-day');
            cell.title = 'August 1 (Click to visit LinkedIn)';
            cell.addEventListener('click', (e) => {
              e.stopPropagation();
              calState.trialStarted = true;
              window.open(USER_LINKEDIN_URL, '_blank');
              if (calNextBtn) calNextBtn.classList.add('hint-pulse');
            });
          }

          calGrid.appendChild(cell);
        }
      } else {
        // September 2026
        if (calendarCard) calendarCard.classList.add('september-trap');
        if (calNextBtn) calNextBtn.classList.remove('hint-pulse');

        // September 2026 starts on Tuesday (1 empty cell)
        for (let e = 0; e < 1; e++) {
          const empty = document.createElement('div');
          empty.className = 'cal-day-cell empty';
          calGrid.appendChild(empty);
        }

        // Days 1 to 30
        for (let d = 1; d <= 30; d++) {
          const cell = document.createElement('div');
          cell.className = 'cal-day-cell';
          cell.textContent = d;

          if (d === 1) {
            cell.classList.add('renewal-day');
            cell.title = 'Day 31: LinkedIn Auto-Renewal Date (Card Charged)';
            const tag = document.createElement('span');
            tag.className = 'renewal-day-tag';
            tag.textContent = 'CHARGED';
            cell.appendChild(tag);

            cell.addEventListener('click', (e) => {
              e.stopPropagation();
              if (debitNotificationCard) {
                debitNotificationCard.style.display = 'block';
              }
            });
          }

          calGrid.appendChild(cell);
        }

        // Show the exact BZCBSSBI SMS debit notification from user's image
        if (debitNotificationCard) debitNotificationCard.style.display = 'block';
      }
    }

    // Navigation buttons
    if (calPrevBtn) {
      calPrevBtn.onclick = () => {
        calState.month = 7; // Back to August
        renderCalendar();
      };
    }

    if (calNextBtn) {
      calNextBtn.onclick = () => {
        calState.month = 8; // Forward to September
        renderCalendar();
      };
    }

    // Also allow clicking the month name to toggle
    if (calMonthName) {
      calMonthName.style.cursor = 'pointer';
      calMonthName.title = 'Click to switch month';
      calMonthName.onclick = () => {
        calState.month = calState.month === 7 ? 8 : 7;
        renderCalendar();
      };
    }

    // Cancel button friction trap
    if (btnCancelTrap) {
      btnCancelTrap.onclick = (e) => {
        e.stopPropagation();
        if (frictionLockToast) {
          frictionLockToast.style.display = 'flex';
        }
      };
    }

    renderCalendar();
  }

  // Initialize
  init();
});
