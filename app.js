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

    // Slide 3 Shopkeeper Character Column & Wide Card
    if (currentSlideIndex === 2) { // Slide 3
      if (characterCol) characterCol.style.display = 'flex';
      slideCard.classList.add('wide-card');
    } else {
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

  // Initialize
  init();
});
