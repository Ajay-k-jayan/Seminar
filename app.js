// =============================================================================
// SEMINAR PRESENTATION ENGINE
// Complete presentation system with canvas animations, speaker notes drawer,
// shortcuts guide, and responsive slide layouts.
// Clean presentation engine with dynamic canvas visuals and smooth slide transitions.
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentSlideIndex = 0;
  const totalSlides = slidesData.length;
  let isNotesOpen = false;
  let scriptFontSize = 1.35; // rem
  let timerSeconds = 0;
  let timerInterval = null;
  let isTimerRunning = false;

  // DOM Elements
  const progressBar = document.getElementById('progressBar');
  const currentSlideNum = document.getElementById('currentSlideNum');
  const totalSlideNum = document.getElementById('totalSlideNum');

  const slideCard = document.getElementById('slideContent');
  const slideMeta = document.getElementById('slideMeta');
  const slideTag = document.getElementById('slideTag');
  const slideVisualTheme = document.getElementById('slideVisualTheme');
  const slideTitle = document.getElementById('slideTitle');
  const slideSubtitle = document.getElementById('slideSubtitle');
  const slideBody = document.getElementById('slideBody');
  const slideKeyPoints = document.getElementById('slideKeyPoints');
  const slideFooter = document.getElementById('slideFooter');
  const footerText = document.getElementById('footerText');

  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const dotsContainer = document.getElementById('dotsContainer');

  const btnFullscreen = document.getElementById('btnFullscreen');
  const timerPill = document.getElementById('timerPill');
  const presentationTimer = document.getElementById('presentationTimer');

  // Speaker Script Panel Elements
  const speakerPanel = document.getElementById('speakerPanel');
  const btnNotesToggle = document.getElementById('btnNotesToggle');
  const btnCloseScript = document.getElementById('btnCloseScript');
  const speakerScriptText = document.getElementById('speakerScriptText');
  const scriptSlideContext = document.getElementById('scriptSlideContext');
  const scriptEstTime = document.getElementById('scriptEstTime');
  const scriptWordCount = document.getElementById('scriptWordCount');
  const btnFontDown = document.getElementById('btnFontDown');
  const btnFontUp = document.getElementById('btnFontUp');

  // Shortcuts Modal Elements
  const btnHelp = document.getElementById('btnHelp');
  const shortcutsModal = document.getElementById('shortcutsModal');
  const btnCloseModal = document.getElementById('btnCloseModal');

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

    // Title & Subtitle
    // Title
    slideTitle.textContent = slide.title || '';

    // Subtitle (only show if non-empty)
    if (slide.subtitle && slide.subtitle.trim().length > 0) {
      slideSubtitle.style.display = 'block';
      slideSubtitle.textContent = slide.subtitle;
    } else {
      slideSubtitle.style.display = 'none';
      slideSubtitle.textContent = '';
    }

    // Slide 1 vs Subsequent Slides Layout
    if (slide.isTitleSlide || currentSlideIndex === 0) {
      // First page (Title / Header page): Clean minimal layout matching user screenshot
      if (slideMeta) slideMeta.style.display = 'none';
      if (slideBody) slideBody.style.display = 'none';
      if (slideFooter) {
        slideFooter.style.display = 'flex';
        const cleanAuthor = (slide.footer || '').replace(/^(powered\s*by\s*:?)/i, '').trim();
        footerText.innerHTML = `Powered by <strong class="author-name">${cleanAuthor || 'Ajay K J'}</strong>`;
      }
    // Bullet Points (only show if present in slide data)
    if (slide.bulletPoints && slide.bulletPoints.length > 0) {
      slideBody.style.display = 'block';
      slideKeyPoints.innerHTML = '';
      slide.bulletPoints.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        slideKeyPoints.appendChild(li);
      });
    } else {
      // Subsequent slides: Full features enabled (tags, theme pills, bullet points)
      if (slideMeta) {
        slideMeta.style.display = 'flex';
        slideTag.textContent = slide.tag || `Slide ${String(currentSlideIndex + 1).padStart(2, '0')}`;
        slideVisualTheme.textContent = slide.themePill || 'Visual Perspective';
      }
      slideBody.style.display = 'none';
      slideKeyPoints.innerHTML = '';
    }

      if (slideBody && slide.bulletPoints && slide.bulletPoints.length > 0) {
        slideBody.style.display = 'block';
        slideKeyPoints.innerHTML = '';
        slide.bulletPoints.forEach(point => {
          const li = document.createElement('li');
          li.textContent = point;
          slideKeyPoints.appendChild(li);
        });
      } else if (slideBody) {
        slideBody.style.display = 'none';
      }

      // Hide "Powered by" on other slides as requested
      if (slideFooter) slideFooter.style.display = 'none';
    // Slide Footer (only show on slides that have footer defined, e.g. Slide 1)
    if (slide.footer && slide.footer.trim().length > 0) {
      slideFooter.style.display = 'flex';
      const cleanAuthor = slide.footer.replace(/^(powered\s*by\s*:?)/i, '').trim();
      footerText.innerHTML = `Powered by <strong class="author-name">${cleanAuthor || 'Ajay K J'}</strong>`;
    } else {
      slideFooter.style.display = 'none';
    }

    // Update Speaker Notes Panel for this slide
    updateSpeakerNotes(slide);
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
  // SPEAKER SCRIPT PANEL
  // ===========================================================================
  function updateSpeakerNotes(slide) {
    if (!speakerPanel) return;
    scriptSlideContext.textContent = `Slide ${slide.id}: ${slide.title}`;
    speakerScriptText.textContent = `"${slide.speakerScript || 'No notes for this slide.'}"`;

    const script = slide.speakerScript || '';
    const words = script.trim().length > 0 ? script.trim().split(/\s+/).length : 0;
    const estimatedSeconds = Math.max(5, Math.round((words / 130) * 60));
    scriptWordCount.textContent = `${words} words`;
    scriptEstTime.textContent = `~${estimatedSeconds} seconds`;
  }

  function toggleSpeakerNotes(forceState) {
    if (!speakerPanel) return;
    isNotesOpen = forceState !== undefined ? forceState : !isNotesOpen;
    speakerPanel.classList.toggle('hidden', !isNotesOpen);
    if (btnNotesToggle) btnNotesToggle.classList.toggle('active', isNotesOpen);
  }

  // Script Font Scaling
  if (btnFontUp) {
    btnFontUp.addEventListener('click', () => {
      if (scriptFontSize < 2.0) {
        scriptFontSize += 0.15;
        speakerScriptText.style.fontSize = `${scriptFontSize}rem`;
      }
    });
  }

  if (btnFontDown) {
    btnFontDown.addEventListener('click', () => {
      if (scriptFontSize > 1.0) {
        scriptFontSize -= 0.15;
        speakerScriptText.style.fontSize = `${scriptFontSize}rem`;
      }
    });
  }

  if (btnNotesToggle) btnNotesToggle.addEventListener('click', () => toggleSpeakerNotes());
  if (btnCloseScript) btnCloseScript.addEventListener('click', () => toggleSpeakerNotes(false));

  // ===========================================================================
  // SHORTCUTS MODAL
  // ===========================================================================
  function toggleShortcutsModal(forceState) {
    if (!shortcutsModal) return;
    const isHidden = shortcutsModal.classList.contains('hidden');
    const newState = forceState !== undefined ? !forceState : isHidden;
    shortcutsModal.classList.toggle('hidden', !newState);
  }

  if (btnHelp) btnHelp.addEventListener('click', () => toggleShortcutsModal(true));
  if (btnCloseModal) btnCloseModal.addEventListener('click', () => toggleShortcutsModal(false));
  if (shortcutsModal) {
    shortcutsModal.addEventListener('click', (e) => {
      if (e.target === shortcutsModal) toggleShortcutsModal(false);
    });
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
  // EVENT LISTENERS & KEYBOARD SHORTCUTS
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

      case 's':
      case 'S':
        e.preventDefault();
        toggleSpeakerNotes();
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

      case '?':
        e.preventDefault();
        toggleShortcutsModal();
        break;

      case 'Escape':
        toggleSpeakerNotes(false);
        toggleShortcutsModal(false);
        break;

      case '1':
        goToSlide(0);
        break;

      case '2':
        goToSlide(1);
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

    // Deep space glow behind horizon
    const horizonGlow = ctx.createRadialGradient(
      canvasWidth * 0.65 + offsetX, horizonY + offsetY, 10,
      canvasWidth * 0.65 + offsetX, horizonY + offsetY, canvasWidth * 0.5
    );
    horizonGlow.addColorStop(0, 'rgba(0, 255, 136, 0.12)');
    horizonGlow.addColorStop(0.5, 'rgba(56, 189, 248, 0.04)');
    horizonGlow.addColorStop(1, 'rgba(8, 9, 12, 0)');
    ctx.fillStyle = horizonGlow;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Perspective floor lines radiating from vanishing point
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

    // Moving horizontal cross lines (giving infinite forward motion)
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

    // Floating data particles
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

    // Ambient emerald back aura
    const monolithGlow = ctx.createRadialGradient(
      centerX, groundY - 180, 20,
      centerX, groundY - 180, 480
    );
    monolithGlow.addColorStop(0, 'rgba(0, 255, 136, 0.3)');
    monolithGlow.addColorStop(0.4, 'rgba(16, 185, 129, 0.12)');
    monolithGlow.addColorStop(1, 'rgba(8, 9, 12, 0)');
    ctx.fillStyle = monolithGlow;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // 1. Perspective Glowing Maze on the Ground
    drawPerspectiveMaze(centerX, groundY);

    // 2. Towering Emerald Monolith
    drawMonolith(centerX, groundY);

    // 3. Trapped Digital Pulses navigating the maze
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

    // Projected Volumetric Downward Light Beam from the Monolith
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

    // Shadow at the base
    const baseShadow = ctx.createRadialGradient(cx, gy, 10, cx, gy, monoWidth * 1.5);
    baseShadow.addColorStop(0, 'rgba(0, 0, 0, 0.9)');
    baseShadow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = baseShadow;
    ctx.beginPath();
    ctx.ellipse(cx, gy, monoWidth * 1.3, 30, 0, 0, Math.PI * 2);
    ctx.fill();

    // Monolith Left Facet (Dark Obsidian)
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

    // Monolith Right Facet (Emerald Light Catch)
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

    // Glowing Monolith Edges
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

    // Glowing Glyph
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

  // Initialize
  init();
});
