/**
 * Credit Scout — Professional Fintech Matchmaker Dashboard
 * Architecture:
 * - Deterministic multi-factor utility algorithm
 * - Live reactive ranking & instant DOM updates
 * - Indian Rupee (₹) currency handling
 * - 3 distinct Risk Profiles (Low, Medium, High) + Continuous fine-tuning
 * - Interactive Risk vs. Return Tradeoff SVG Matrix
 * - Credit Score Distribution Overview & FICO Tier breakdowns
 * - Real-time Simulation Activity Feed
 * - Responsive Dashboard Sidebar & Top Navigation
 * - Investment Cash Flow Amortization Simulator Modal
 */

(function () {
  'use strict';

  // --- 25 Verified Borrower Profiles (Embedded Fallback) ---
  const EMBEDDED_BORROWERS = [
    { id: "BR-101", name: "Elena Sharma", loanAmount: 45000, purpose: "Bakery Oven & Cold Dough Retarder Upgrade", interestRate: 8.5, repaymentProbability: 0.96, riskLevel: "Low", creditScore: 765, termMonths: 12, location: "Pune, Maharashtra", category: "Food Processing" },
    { id: "BR-102", name: "Kwesi Patel", loanAmount: 30000, purpose: "Solar-Powered Drip Irrigation Pump", interestRate: 8.8, repaymentProbability: 0.95, riskLevel: "Low", creditScore: 752, termMonths: 12, location: "Anand, Gujarat", category: "Agriculture" },
    { id: "BR-103", name: "Maria Fernandez", loanAmount: 60000, purpose: "Organic Greenhouse Polyhouse Expansion", interestRate: 9.2, repaymentProbability: 0.94, riskLevel: "Low", creditScore: 745, termMonths: 18, location: "Ooty, Tamil Nadu", category: "Horticulture" },
    { id: "BR-104", name: "Rameshwar Sen", loanAmount: 75000, purpose: "Precision CNC Wood Carving Machine", interestRate: 7.8, repaymentProbability: 0.97, riskLevel: "Low", creditScore: 785, termMonths: 24, location: "Saharanpur, Uttar Pradesh", category: "Manufacturing" },
    { id: "BR-105", name: "Fatima Bi", loanAmount: 35000, purpose: "Handloom Jacquard Weaving Looms", interestRate: 8.0, repaymentProbability: 0.96, riskLevel: "Low", creditScore: 760, termMonths: 12, location: "Varanasi, Uttar Pradesh", category: "Textiles & Crafts" },
    { id: "BR-106", name: "Deepak Verma", loanAmount: 90000, purpose: "Micro Dairy Chilling & Pasteurizer Tank", interestRate: 9.0, repaymentProbability: 0.93, riskLevel: "Low", creditScore: 738, termMonths: 18, location: "Karnal, Haryana", category: "Dairy & Livestock" },
    { id: "BR-107", name: "Ananya Deshmukh", loanAmount: 40000, purpose: "Sustainable Apiary & Honey Filter Unit", interestRate: 8.4, repaymentProbability: 0.95, riskLevel: "Low", creditScore: 758, termMonths: 14, location: "Mahabaleshwar, Maharashtra", category: "Agriculture" },
    { id: "BR-108", name: "Siddharth Rao", loanAmount: 85000, purpose: "Clean Water Reverse Osmosis Plant", interestRate: 8.2, repaymentProbability: 0.96, riskLevel: "Low", creditScore: 770, termMonths: 20, location: "Coimbatore, Tamil Nadu", category: "Clean Tech" },
    { id: "BR-109", name: "Carlos Joseph", loanAmount: 50000, purpose: "Electric Three-Wheeler Delivery Fleet", interestRate: 12.0, repaymentProbability: 0.91, riskLevel: "Medium", creditScore: 695, termMonths: 18, location: "Indore, Madhya Pradesh", category: "Logistics" },
    { id: "BR-110", name: "Sunita Roy", loanAmount: 35000, purpose: "Solar Cold Storage Box for Fresh Fish", interestRate: 11.5, repaymentProbability: 0.92, riskLevel: "Medium", creditScore: 708, termMonths: 12, location: "Kochi, Kerala", category: "Fisheries" },
    { id: "BR-111", name: "Hiroshi Murthy", loanAmount: 65000, purpose: "Artisanal Glazed Terracotta Gas Kiln", interestRate: 13.0, repaymentProbability: 0.89, riskLevel: "Medium", creditScore: 682, termMonths: 24, location: "Khurja, Uttar Pradesh", category: "Artisan Craft" },
    { id: "BR-112", name: "Sofia Nair", loanAmount: 45000, purpose: "Mobile Cold Brew & Specialty Tea Cart", interestRate: 13.8, repaymentProbability: 0.88, riskLevel: "Medium", creditScore: 676, termMonths: 16, location: "Bengaluru, Karnataka", category: "Food & Beverage" },
    { id: "BR-113", name: "Jamal Ansari", loanAmount: 55000, purpose: "Brassware Laser Etching Equipment", interestRate: 12.5, repaymentProbability: 0.90, riskLevel: "Medium", creditScore: 692, termMonths: 15, location: "Moradabad, Uttar Pradesh", category: "Manufacturing" },
    { id: "BR-114", name: "Anya Kulkarni", loanAmount: 28000, purpose: "Apparel Boutique Overlock Stitching Setup", interestRate: 11.2, repaymentProbability: 0.92, riskLevel: "Medium", creditScore: 712, termMonths: 12, location: "Kolhapur, Maharashtra", category: "Textiles" },
    { id: "BR-115", name: "Mateo D'Souza", loanAmount: 70000, purpose: "Artisanal Spiced Cheese Ripening Facility", interestRate: 13.2, repaymentProbability: 0.87, riskLevel: "Medium", creditScore: 668, termMonths: 20, location: "Panaji, Goa", category: "Food & Beverage" },
    { id: "BR-116", name: "Pooja Banerjee", loanAmount: 38000, purpose: "Vertical Hydroponic Greens Polyhouse", interestRate: 14.2, repaymentProbability: 0.86, riskLevel: "Medium", creditScore: 664, termMonths: 14, location: "Siliguri, West Bengal", category: "Urban Agriculture" },
    { id: "BR-117", name: "Tariq Qureshi", loanAmount: 58000, purpose: "Solar Clinic Vaccine Cooling Units", interestRate: 11.8, repaymentProbability: 0.91, riskLevel: "Medium", creditScore: 702, termMonths: 18, location: "Lucknow, Uttar Pradesh", category: "Healthcare" },
    { id: "BR-118", name: "Priya Chauhan", loanAmount: 32000, purpose: "Robotics & STEM Lab Hardware for School", interestRate: 13.4, repaymentProbability: 0.88, riskLevel: "Medium", creditScore: 680, termMonths: 12, location: "Jaipur, Rajasthan", category: "Education Tech" },
    { id: "BR-119", name: "Naveen Singhal", loanAmount: 95000, purpose: "High-Frequency Induction Furnace Crucible", interestRate: 18.0, repaymentProbability: 0.81, riskLevel: "High", creditScore: 632, termMonths: 24, location: "Ludhiana, Punjab", category: "Foundry" },
    { id: "BR-120", name: "Roberto D'Cruz", loanAmount: 52000, purpose: "Late-Night Gourmet Food Truck Overhaul", interestRate: 19.5, repaymentProbability: 0.78, riskLevel: "High", creditScore: 615, termMonths: 18, location: "Margao, Goa", category: "Food & Beverage" },
    { id: "BR-121", name: "Leila Mir", loanAmount: 80000, purpose: "Pashmina Shawl Digital Loom & Export Lot", interestRate: 18.8, repaymentProbability: 0.79, riskLevel: "High", creditScore: 622, termMonths: 20, location: "Srinagar, Jammu & Kashmir", category: "Handicrafts & Export" },
    { id: "BR-122", name: "Marcus Pillai", loanAmount: 110000, purpose: "Agri-Drone Multi-Spectral Crop Analyzer", interestRate: 22.5, repaymentProbability: 0.74, riskLevel: "High", creditScore: 595, termMonths: 24, location: "Madurai, Tamil Nadu", category: "Agritech" },
    { id: "BR-123", name: "Bhavna Joshi", loanAmount: 48000, purpose: "Botanical Essential Oils Distillation Unit", interestRate: 20.8, repaymentProbability: 0.75, riskLevel: "High", creditScore: 602, termMonths: 16, location: "Dehradun, Uttarakhand", category: "Specialty Extracts" },
    { id: "BR-124", name: "Kenji Saxena", loanAmount: 125000, purpose: "Indie Game Studio Motion Capture Rigs", interestRate: 23.8, repaymentProbability: 0.71, riskLevel: "High", creditScore: 580, termMonths: 24, location: "Noida, Uttar Pradesh", category: "Digital Media" },
    { id: "BR-125", name: "Zara Qadir", loanAmount: 98000, purpose: "Biodegradable Bagasse Food Tray Machine", interestRate: 21.5, repaymentProbability: 0.77, riskLevel: "High", creditScore: 610, termMonths: 24, location: "Bhopal, Madhya Pradesh", category: "Eco-Packaging" }
  ];

  // --- Application State ---
  let rawBorrowers = [];
  let currentEligibleBorrowers = [];
  let currentRankedBorrowers = [];
  let currentInvestmentAmount = 25000; // ₹25,000 default
  let currentRiskAppetiteIndex = 50;   // 0 to 100 slider
  let currentRiskProfile = 'medium';    // 'low' | 'medium' | 'high'
  let strictTierFiltering = false;
  let minCreditScoreThreshold = 0;

  // --- In-Memory Simulation Activity Log ---
  const recentActivities = [
    { type: 'init', title: 'Deterministic Scoring Online', desc: 'Loaded 25 verified borrower profiles with live multi-factor scoring.', time: 'Just now' },
    { type: 'preset', title: 'Baseline Strategy Configured', desc: 'Balanced Growth (Medium Risk • ₹25,000) deployed.', time: '2m ago' },
    { type: 'ranking', title: 'Candidate Pool Evaluated', desc: 'Ranked top candidates with #1 Elena Sharma (Bakery Upgrade).', time: '3m ago' }
  ];

  // --- DOM Elements ---
  const amountInput = document.getElementById('amount-input');
  const amountSlider = document.getElementById('amount-slider');
  const amountFormatted = document.getElementById('amount-formatted');
  const sliderAmountReadout = document.getElementById('slider-amount-readout');
  const amountChips = document.querySelectorAll('.amount-chip');
  const amountValidationMsg = document.getElementById('amount-validation-msg');

  const riskProfileCards = document.querySelectorAll('.risk-profile-card');
  const riskSlider = document.getElementById('risk-slider');
  const sliderRiskReadout = document.getElementById('slider-risk-readout');
  const riskBadge = document.getElementById('risk-badge');
  const riskBadgeText = document.getElementById('risk-badge-text');
  const riskImpactTitle = document.getElementById('risk-impact-title');
  const riskImpactDesc = document.getElementById('risk-impact-desc');

  const strictTierToggle = document.getElementById('strict-tier-toggle');
  const creditScoreFilter = document.getElementById('credit-score-filter');
  const activeMatchesPill = document.getElementById('active-matches-pill');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  const headerResetBtn = document.getElementById('header-reset-btn');
  const presetSelect = document.getElementById('investor-preset');

  const avgRoiStat = document.getElementById('avg-roi-stat');
  const estProfitStat = document.getElementById('est-profit-stat');
  const profitCalcNote = document.getElementById('profit-calc-note');
  const avgProbStat = document.getElementById('avg-prob-stat');
  const eligibleCountStat = document.getElementById('eligible-count-stat');
  const avgCreditScoreStat = document.getElementById('avg-credit-score-stat');
  const creditTierSubtext = document.getElementById('credit-tier-subtext');

  const scatterChart = document.getElementById('scatter-chart');
  const allocCapitalLabel = document.getElementById('alloc-capital-label');
  const allocTotalPayout = document.getElementById('alloc-total-payout');
  const barPrincipal = document.getElementById('bar-principal');
  const barNetRoi = document.getElementById('bar-net-roi');
  const barRiskLoss = document.getElementById('bar-risk-loss');
  const footProfitVal = document.getElementById('foot-profit-val');
  const footLossVal = document.getElementById('foot-loss-val');

  const tabTop5 = document.getElementById('tab-top5');
  const tabAll = document.getElementById('tab-all');
  const sectionTop5 = document.getElementById('top5-section');
  const sectionAll = document.getElementById('all-section');
  const top5Badge = document.getElementById('top5-badge');
  const allCountBadge = document.getElementById('all-count-badge');

  const top5CardsContainer = document.getElementById('top5-cards-container');
  const fewerMatchesBanner = document.getElementById('fewer-matches-banner');
  const fewerMatchesTitle = document.getElementById('fewer-matches-title');
  const fewerMatchesReason = document.getElementById('fewer-matches-reason');
  const broadenFiltersBtn = document.getElementById('broaden-filters-btn');
  const emptyStateContainer = document.getElementById('empty-state-container');
  const emptyResetBtn = document.getElementById('empty-reset-btn');

  const tableRiskFilter = document.getElementById('table-risk-filter');
  const allBorrowersTbody = document.getElementById('all-borrowers-tbody');

  const toggleMethodologyBtn = document.getElementById('toggle-methodology-btn');
  const methodologyDrawer = document.getElementById('methodology-drawer');

  const loanModal = document.getElementById('loan-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body-content');
  const modalRankBadge = document.getElementById('modal-rank-badge');
  const toast = document.getElementById('toast');
  const themeToggle = document.getElementById('theme-toggle');

  // Sidebar Elements
  const dashboardSidebar = document.getElementById('dashboard-sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
  const sidebarCloseBtn = document.getElementById('sidebar-close-btn');

  // Sidebar Navigation Links
  const navItemMatchmaker = document.getElementById('nav-item-matchmaker');
  const navItemDirectory = document.getElementById('nav-item-directory');
  const navItemAnalytics = document.getElementById('nav-item-analytics');
  const navItemCredit = document.getElementById('nav-item-credit');
  const navItemActivity = document.getElementById('nav-item-activity');
  const navItemMethodology = document.getElementById('nav-item-methodology');

  // Sidebar Snapshot
  const sidebarAmountVal = document.getElementById('sidebar-amount-val');
  const sidebarRiskLabel = document.getElementById('sidebar-risk-label');
  const sidebarRoiLabel = document.getElementById('sidebar-roi-label');

  // --- Formatting Helpers ---
  function formatINR(number) {
    if (isNaN(number)) return '₹0';
    return '₹' + Math.round(number).toLocaleString('en-IN');
  }

  // --- Initialize App ---
  async function init() {
    initTheme();
    setupEventListeners();
    await loadBorrowersData();
    renderRecentActivity();
    recalculateAndRender();
  }

  // --- Data Loading with Dual Fallback ---
  async function loadBorrowersData() {
    try {
      const response = await fetch('./borrowers.json');
      if (!response.ok) throw new Error('Network response not ok');
      rawBorrowers = await response.json();
    } catch (err) {
      console.warn('Fallback: Loaded embedded borrower dataset:', err.message);
      rawBorrowers = JSON.parse(JSON.stringify(EMBEDDED_BORROWERS));
    }
  }

  // --- Theme Management (Trustworthy Blue & White Default) ---
  function initTheme() {
    const savedTheme = localStorage.getItem('credit_scout_theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }

  function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('credit_scout_theme', isDark ? 'dark' : 'light');
    showToast(isDark ? 'Switched to Midnight Navy Theme' : 'Switched to Trustworthy Blue & White Theme');
  }

  // --- Financial & ROI Calculations ---
  function calculateExpectedRoi(borrower) {
    const p = borrower.repaymentProbability;
    const r = borrower.interestRate;
    const lgd = 35.0; // Loss Given Default %
    const expectedLoss = (1 - p) * lgd;
    const netYield = (p * r) - expectedLoss;
    return Math.max(0.5, Number(netYield.toFixed(2)));
  }

  // --- Multi-Factor Deterministic Match Score ---
  function scoreBorrower(borrower, alphaRisk, minP, maxP, minR, maxR, minRoi, maxRoi) {
    const p = borrower.repaymentProbability;
    const r = borrower.interestRate;
    const roi = borrower.expectedRoi;
    const cs = borrower.creditScore;

    // Normalizations [0, 1]
    const normSafety = (p - minP) / (maxP - minP || 1);
    const normYield = (r - minR) / (maxR - minR || 1);
    const normRoi = (roi - minRoi) / (maxRoi - minRoi || 1);
    const normCreditScore = Math.max(0, Math.min(1, (cs - 550) / (800 - 550)));

    let rawScore = 0;

    if (currentRiskProfile === 'low') {
      rawScore = (normSafety * 45) + (normCreditScore * 30) + (normRoi * 15) + (normYield * 10);
      if (borrower.riskLevel === 'High') rawScore -= 25;
      else if (borrower.riskLevel === 'Medium') rawScore -= 10;
      rawScore = 65 + (rawScore / 80) * 32;
    } else if (currentRiskProfile === 'high') {
      rawScore = (normYield * 50) + (normRoi * 30) + (normCreditScore * 10) + (normSafety * 10);
      if (borrower.riskLevel === 'Low') rawScore -= 20;
      rawScore = 65 + (rawScore / 80) * 32;
    } else {
      const balancePenalty = (Math.abs(normSafety - 0.70) * 20) + (Math.abs(normYield - 0.40) * 15);
      rawScore = 75 - balancePenalty + (normRoi * 20) + (normCreditScore * 10);
      if (borrower.riskLevel === 'Medium') rawScore += 8;
      else if (borrower.riskLevel === 'High') rawScore -= 8;
      rawScore = 60 + (rawScore / 100) * 36;
    }

    return Math.min(99.2, Math.max(52.0, Number(rawScore.toFixed(1))));
  }

  // --- Transparent "Why Ranked Here" Generator ---
  function generateWhyRanked(borrower, rank, investAmount) {
    const probPct = Math.round(borrower.repaymentProbability * 100);
    const defRiskPct = (100 - probPct).toFixed(1);
    const roiPct = borrower.expectedRoi.toFixed(1);
    const ratePct = borrower.interestRate.toFixed(1);
    const estProfitFormatted = formatINR(investAmount * (borrower.expectedRoi / 100));

    const fundedPct = Math.min(100, Math.round((investAmount / borrower.loanAmount) * 100));
    const coverageText = fundedPct >= 100 ? "100% fully funded" : `${fundedPct}% funded`;

    if (currentRiskProfile === 'low') {
      if (rank === 1) return `★ Top Capital Guardian: Outstanding ${probPct}% repayment reliability and ${borrower.creditScore} credit score protect your ${formatINR(investAmount)} principal while earning ${roiPct}% net return.`;
      if (borrower.creditScore >= 760) return `Elite Credit Profile: Prime ${borrower.creditScore} score with just ${defRiskPct}% default risk perfectly matches your capital preservation mandate (${coverageText}).`;
      if (rank <= 3) return `Defensive Anchor: Steady ${ratePct}% coupon paired with ${probPct}% repayment security delivers an estimated ${estProfitFormatted} net profit.`;
      return `Low-Volatility Match: High credit score (${borrower.creditScore}) and low loss variance keep default hazard to a minimum.`;
    } else if (currentRiskProfile === 'high') {
      if (rank === 1) return `★ Maximum Yield Champion: Top-tier ${ratePct}% interest APR drives peak portfolio growth (+${estProfitFormatted} projected return), meeting your high-yield goal.`;
      if (borrower.interestRate >= 21) return `High-Yield Outperformer: ${ratePct}% APR heavily rewards your aggressive risk tolerance with strong net upside (${roiPct}% ROI).`;
      if (rank <= 3) return `Growth Accelerator: Strong ${ratePct}% coupon offers superior cash flow (+${estProfitFormatted}) aligned with calculated risk taking.`;
      return `Yield Fit: Top-quartile interest spread aligns with your aggressive capital deployment strategy.`;
    } else {
      if (rank === 1) return `★ Optimal Risk-Reward Balance: Ideal sweet spot delivering ${roiPct}% net return with solid ${probPct}% repayment integrity (+${estProfitFormatted} profit).`;
      if (borrower.riskLevel === 'Medium') return `Balanced Sweet Spot: ${ratePct}% interest rate comfortably insulates against credit risk, earning an estimated ${estProfitFormatted} net return (${coverageText}).`;
      if (borrower.riskLevel === 'Low') return `Reliability Buffer: Safe ${probPct}% repayment floor keeps your balanced portfolio anchored while capturing ${ratePct}% yield.`;
      return `Competitive Net Yield: ${roiPct}% expected ROI delivers steady capital expansion with controlled credit exposure.`;
    }
  }

  // --- Recalculate, Filter & Re-rank All Borrowers ---
  function recalculateAndRender() {
    if (!rawBorrowers || rawBorrowers.length === 0) return;

    validateInvestmentAmount();

    const alphaRisk = currentRiskAppetiteIndex / 100;

    rawBorrowers.forEach(b => {
      b.expectedRoi = calculateExpectedRoi(b);
    });

    currentEligibleBorrowers = rawBorrowers.filter(b => {
      if (b.creditScore < minCreditScoreThreshold) return false;

      if (strictTierFiltering) {
        if (currentRiskProfile === 'low' && b.riskLevel !== 'Low') return false;
        if (currentRiskProfile === 'medium' && b.riskLevel === 'High') return false;
        if (currentRiskProfile === 'high' && b.riskLevel !== 'High') return false;
      }

      return true;
    });

    let minP = 1, maxP = 0, minR = 100, maxR = 0, minRoi = 100, maxRoi = 0;
    rawBorrowers.forEach(b => {
      if (b.repaymentProbability < minP) minP = b.repaymentProbability;
      if (b.repaymentProbability > maxP) maxP = b.repaymentProbability;
      if (b.interestRate < minR) minR = b.interestRate;
      if (b.interestRate > maxR) maxR = b.interestRate;
      if (b.expectedRoi < minRoi) minRoi = b.expectedRoi;
      if (b.expectedRoi > maxRoi) maxRoi = b.expectedRoi;
    });

    const scoredEligible = currentEligibleBorrowers.map(b => {
      const fitScore = scoreBorrower(b, alphaRisk, minP, maxP, minR, maxR, minRoi, maxRoi);
      return {
        ...b,
        fitScore: fitScore
      };
    });

    scoredEligible.sort((a, b) => {
      if (b.fitScore !== a.fitScore) return b.fitScore - a.fitScore;
      if (currentRiskProfile === 'low') return b.creditScore - a.creditScore;
      if (currentRiskProfile === 'high') return b.interestRate - a.interestRate;
      return b.expectedRoi - a.expectedRoi;
    });

    scoredEligible.forEach((b, index) => {
      b.rank = index + 1;
      b.whyRanked = generateWhyRanked(b, b.rank, currentInvestmentAmount);
    });

    currentRankedBorrowers = scoredEligible;

    // Update all UI Components
    updateControlUI();
    updateSummaryStats();
    updateScatterChart();
    updateCapitalAllocationStrip();
    renderTop5Cards();
    renderAllBorrowersTable();
    updateCreditScoreOverview();
    updateSidebarSnapshot();
  }

  // --- Investment Amount Validation ---
  function validateInvestmentAmount() {
    let msg = '';
    if (isNaN(currentInvestmentAmount)) {
      msg = 'Please enter a valid numeric investment amount.';
    } else if (currentInvestmentAmount < 1000) {
      msg = 'Minimum demo investment amount is ₹1,000.';
    } else if (currentInvestmentAmount > 100000) {
      msg = 'Maximum demo investment amount is ₹1,00,000.';
    }

    if (msg) {
      amountValidationMsg.textContent = msg;
      amountValidationMsg.classList.remove('hidden');
    } else {
      amountValidationMsg.classList.add('hidden');
    }
  }

  // --- Update Control UI State ---
  function updateControlUI() {
    amountFormatted.textContent = formatINR(currentInvestmentAmount);
    sliderAmountReadout.textContent = formatINR(currentInvestmentAmount);
    amountInput.value = currentInvestmentAmount;
    amountSlider.value = currentInvestmentAmount;

    amountChips.forEach(chip => {
      const chipVal = parseInt(chip.getAttribute('data-amount'), 10);
      chip.classList.toggle('active', chipVal === currentInvestmentAmount);
    });

    riskProfileCards.forEach(card => {
      const profile = card.getAttribute('data-profile');
      const isActive = profile === currentRiskProfile;
      card.classList.toggle('active', isActive);
      card.setAttribute('aria-checked', isActive ? 'true' : 'false');
    });

    riskSlider.value = currentRiskAppetiteIndex;
    sliderRiskReadout.textContent = `Index: ${currentRiskAppetiteIndex} / 100`;

    let badgeClass = 'badge-medium';
    let badgeText = 'Medium Risk';
    let impactTitle = 'How Medium Risk Affects Matching:';
    let impactDesc = 'Balanced allocation (40% Safety, 40% Return, 20% Alignment). Prioritizes borrowers with 86%–92% repayment security and attractive 11%–14% interest rates.';

    if (currentRiskProfile === 'low') {
      badgeClass = 'badge-low';
      badgeText = 'Low Risk';
      impactTitle = 'How Low Risk Affects Matching:';
      impactDesc = 'Capital Preservation priority (40% Safety, 30% FICO Score, 20% Alignment). Strongly elevates borrowers with prime 730+ credit scores and 94%–98% repayment security to minimize default exposure.';
    } else if (currentRiskProfile === 'high') {
      badgeClass = 'badge-high';
      badgeText = 'High Risk';
      impactTitle = 'How High Risk Affects Matching:';
      impactDesc = 'Yield Maximization priority (45% Interest APR, 30% Net Return, 15% Alignment). Favors micro-enterprises with high coupons (17%–24% APR) for maximum capital growth upside.';
    }

    riskBadge.className = `risk-badge ${badgeClass}`;
    riskBadgeText.textContent = badgeText;
    riskImpactTitle.textContent = impactTitle;
    riskImpactDesc.textContent = impactDesc;

    activeMatchesPill.innerHTML = `<strong>${currentEligibleBorrowers.length}</strong> of ${rawBorrowers.length} Eligible`;
    allCountBadge.textContent = `${rawBorrowers.length}`;
  }

  // --- Update Summary KPI Stats ---
  function updateSummaryStats() {
    const topMatches = currentRankedBorrowers.slice(0, 5);

    if (topMatches.length === 0) {
      avgRoiStat.textContent = '0.0%';
      estProfitStat.textContent = '₹0';
      avgProbStat.textContent = '0.0%';
      profitCalcNote.textContent = `on ${formatINR(currentInvestmentAmount)} deployed`;
      eligibleCountStat.textContent = `0 / ${rawBorrowers.length}`;
      if (avgCreditScoreStat) avgCreditScoreStat.textContent = 'N/A';
      return;
    }

    const avgRoi = topMatches.reduce((acc, b) => acc + b.expectedRoi, 0) / topMatches.length;
    const avgProb = topMatches.reduce((acc, b) => acc + b.repaymentProbability, 0) / topMatches.length;
    const avgScore = Math.round(topMatches.reduce((acc, b) => acc + b.creditScore, 0) / topMatches.length);
    const estProfit = currentInvestmentAmount * (avgRoi / 100);

    avgRoiStat.textContent = `+${avgRoi.toFixed(1)}%`;
    estProfitStat.textContent = `+${formatINR(estProfit)}`;
    profitCalcNote.textContent = `on ${formatINR(currentInvestmentAmount)} deployed`;
    avgProbStat.textContent = `${(avgProb * 100).toFixed(1)}%`;
    eligibleCountStat.textContent = `${currentEligibleBorrowers.length} / ${rawBorrowers.length}`;

    if (avgCreditScoreStat) {
      avgCreditScoreStat.textContent = `${avgScore} FICO`;
    }
    if (creditTierSubtext) {
      if (avgScore >= 740) creditTierSubtext.textContent = 'Prime Tier Quality';
      else if (avgScore >= 700) creditTierSubtext.textContent = 'Good Standing Quality';
      else if (avgScore >= 650) creditTierSubtext.textContent = 'Fair Growth Quality';
      else creditTierSubtext.textContent = 'Micro-Yield Quality';
    }
  }

  // --- Sidebar Mini Snapshot ---
  function updateSidebarSnapshot() {
    const topMatches = currentRankedBorrowers.slice(0, 5);
    const avgRoi = topMatches.length ? (topMatches.reduce((acc, b) => acc + b.expectedRoi, 0) / topMatches.length).toFixed(1) : '0.0';

    if (sidebarAmountVal) sidebarAmountVal.textContent = formatINR(currentInvestmentAmount);
    if (sidebarRiskLabel) sidebarRiskLabel.textContent = currentRiskProfile.charAt(0).toUpperCase() + currentRiskProfile.slice(1) + ' Risk';
    if (sidebarRoiLabel) sidebarRoiLabel.textContent = `+${avgRoi}% Est. ROI`;
  }

  // --- Credit Score Distribution Overview Widget ---
  function updateCreditScoreOverview() {
    const container = document.getElementById('credit-tier-bars-container');
    const top5Badge = document.getElementById('top5-avg-score-badge');
    if (!container || !rawBorrowers.length) return;

    const topMatches = currentRankedBorrowers.slice(0, 5);
    if (topMatches.length > 0 && top5Badge) {
      const top5AvgScore = Math.round(topMatches.reduce((acc, b) => acc + b.creditScore, 0) / topMatches.length);
      top5Badge.textContent = `Top 5 Avg: ${top5AvgScore} FICO`;
    }

    const tiers = [
      { name: 'Prime Elite', range: '740–800 FICO', min: 740, max: 800, colorClass: 'tier-prime' },
      { name: 'Good Standing', range: '700–739 FICO', min: 700, max: 739, colorClass: 'tier-good' },
      { name: 'Fair Growth', range: '650–699 FICO', min: 650, max: 699, colorClass: 'tier-fair' },
      { name: 'Micro-Yield', range: '580–649 FICO', min: 580, max: 649, colorClass: 'tier-micro' }
    ];

    container.innerHTML = '';

    tiers.forEach(t => {
      const matching = rawBorrowers.filter(b => b.creditScore >= t.min && b.creditScore <= t.max);
      const count = matching.length;
      const pct = Math.round((count / rawBorrowers.length) * 100);
      const avgProb = matching.length ? Math.round((matching.reduce((acc, b) => acc + b.repaymentProbability, 0) / matching.length) * 100) : 0;

      const row = document.createElement('div');
      row.className = 'credit-tier-row';
      row.innerHTML = `
        <div class="tier-meta-top">
          <div class="tier-title-group">
            <span class="tier-dot ${t.colorClass}"></span>
            <span class="tier-name">${t.name}</span>
            <span class="tier-range">${t.range}</span>
          </div>
          <div class="tier-counts">
            <strong>${count}</strong> Profiles (${pct}%)
          </div>
        </div>
        <div class="tier-progress-track">
          <div class="tier-progress-bar ${t.colorClass}" style="width: ${pct}%"></div>
        </div>
        <div class="tier-subtext">Avg. Historical Repayment Security: <strong>${avgProb}%</strong></div>
      `;
      container.appendChild(row);
    });
  }

  // --- Real-time Activity Feed ---
  function addRecentActivity(type, title, desc) {
    recentActivities.unshift({
      type,
      title,
      desc,
      time: 'Just now'
    });
    if (recentActivities.length > 5) recentActivities.pop();
    renderRecentActivity();
  }

  function renderRecentActivity() {
    const list = document.getElementById('recent-activity-list');
    if (!list) return;

    list.innerHTML = '';
    recentActivities.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'activity-item';

      let icon = '⚡';
      if (item.type === 'pledge') icon = '💰';
      else if (item.type === 'preset') icon = '⚖️';
      else if (item.type === 'filter') icon = '🔍';
      else if (item.type === 'risk') icon = '🛡️';

      itemEl.innerHTML = `
        <div class="activity-icon-bubble">${icon}</div>
        <div class="activity-content">
          <div class="activity-top">
            <span class="activity-title">${item.title}</span>
            <span class="activity-time">${item.time}</span>
          </div>
          <p class="activity-desc">${item.desc}</p>
        </div>
      `;
      list.appendChild(itemEl);
    });
  }

  // --- Capital Allocation & Payout Visualizer ---
  function updateCapitalAllocationStrip() {
    const topMatches = currentRankedBorrowers.slice(0, 5);
    const amount = currentInvestmentAmount;

    allocCapitalLabel.textContent = formatINR(amount);

    if (topMatches.length === 0) {
      allocTotalPayout.innerHTML = `Total Payout: <strong>${formatINR(amount)}</strong>`;
      barPrincipal.style.width = '100%';
      barNetRoi.style.width = '0%';
      barRiskLoss.style.width = '0%';
      footProfitVal.textContent = '+₹0';
      footLossVal.textContent = '-₹0';
      return;
    }

    const avgRoi = topMatches.reduce((acc, b) => acc + b.expectedRoi, 0) / topMatches.length;
    const avgProb = topMatches.reduce((acc, b) => acc + b.repaymentProbability, 0) / topMatches.length;
    const avgDefaultLoss = (1 - avgProb) * 35.0;

    const estProfit = amount * (avgRoi / 100);
    const estLossBuffer = amount * (avgDefaultLoss / 100);
    const totalPayout = amount + estProfit;

    allocTotalPayout.innerHTML = `Total Projected Payout: <strong>${formatINR(totalPayout)}</strong>`;
    footProfitVal.textContent = `+${formatINR(estProfit)}`;
    footLossVal.textContent = `-${formatINR(estLossBuffer)}`;

    const totalBasis = amount + estProfit + estLossBuffer;
    const pWidth = ((amount / totalBasis) * 100).toFixed(1);
    const rWidth = ((estProfit / totalBasis) * 100).toFixed(1);
    const lWidth = ((estLossBuffer / totalBasis) * 100).toFixed(1);

    barPrincipal.style.width = `${pWidth}%`;
    barPrincipal.textContent = `Principal (${formatINR(amount)})`;

    barNetRoi.style.width = `${rWidth}%`;
    barNetRoi.textContent = `+${formatINR(estProfit)} Profit`;

    barRiskLoss.style.width = `${lWidth}%`;
    barRiskLoss.textContent = `Loss Buffer`;
  }

  // --- Interactive Risk vs Return SVG Scatter Chart ---
  function updateScatterChart() {
    if (!scatterChart || !rawBorrowers.length) return;

    const w = 800;
    const h = 280;
    const padL = 60;
    const padR = 40;
    const padT = 30;
    const padB = 40;

    const plotW = w - padL - padR;
    const plotH = h - padT - padB;

    const minX = 0, maxX = 32;
    const minY = 4, maxY = 16;

    function scaleX(val) {
      return padL + ((val - minX) / (maxX - minX)) * plotW;
    }

    function scaleY(val) {
      return padT + plotH - ((val - minY) / (maxY - minY)) * plotH;
    }

    let svgHtml = `
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    `;

    // Horizontal gridlines & Y-axis labels (ROI %)
    for (let roi = 4; roi <= 16; roi += 3) {
      const y = scaleY(roi);
      svgHtml += `
        <line x1="${padL}" y1="${y}" x2="${w - padR}" y2="${y}" stroke="var(--border-subtle)" stroke-dasharray="3 3" stroke-width="1" />
        <text x="${padL - 10}" y="${y + 4}" fill="var(--text-muted)" font-size="11" font-family="var(--font-mono)" text-anchor="end">${roi}%</text>
      `;
    }

    // Vertical gridlines & X-axis labels (Default Risk %)
    for (let risk = 0; risk <= 30; risk += 6) {
      const x = scaleX(risk);
      svgHtml += `
        <line x1="${x}" y1="${padT}" x2="${x}" y2="${padT + plotH}" stroke="var(--border-subtle)" stroke-dasharray="3 3" stroke-width="1" />
        <text x="${x}" y="${padT + plotH + 20}" fill="var(--text-muted)" font-size="11" font-family="var(--font-mono)" text-anchor="middle">${risk}%</text>
      `;
    }

    // Axis titles
    svgHtml += `
      <text x="${padL + plotW / 2}" y="${h - 8}" fill="var(--text-secondary)" font-size="11" font-weight="700" text-anchor="middle">Estimated Default Risk (100% - Repayment Probability)</text>
      <text x="${16}" y="${padT + plotH / 2}" fill="var(--text-secondary)" font-size="11" font-weight="700" text-anchor="middle" transform="rotate(-90 16 ${padT + plotH / 2})">Est. Net ROI (%)</text>
    `;

    const top5Ids = new Set(currentRankedBorrowers.slice(0, 5).map(b => b.id));

    rawBorrowers.forEach(b => {
      const defaultRisk = (1 - b.repaymentProbability) * 100;
      const x = scaleX(defaultRisk);
      const y = scaleY(b.expectedRoi);
      const isTop5 = top5Ids.has(b.id);
      const rankedObj = currentRankedBorrowers.find(r => r.id === b.id);
      const rankNum = rankedObj ? rankedObj.rank : null;

      let fillColor = '#059669'; // low
      if (b.riskLevel === 'Medium') fillColor = '#d97706';
      if (b.riskLevel === 'High') fillColor = '#dc2626';

      if (isTop5) {
        svgHtml += `
          <circle cx="${x}" cy="${y}" r="15" fill="none" stroke="#2563eb" stroke-width="2.5" opacity="0.9" filter="url(#glow)">
            <animate attributeName="r" values="13;18;13" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="${x}" cy="${y}" r="8" fill="${fillColor}" stroke="#ffffff" stroke-width="2" style="cursor: pointer;" data-borrower-id="${b.id}">
            <title>Rank #${rankNum}: ${b.name} (${b.riskLevel} Risk, Net ROI: +${b.expectedRoi}%)</title>
          </circle>
          <text x="${x}" y="${y - 14}" fill="#2563eb" font-size="10" font-weight="800" font-family="var(--font-mono)" text-anchor="middle">#${rankNum}</text>
        `;
      } else {
        svgHtml += `
          <circle cx="${x}" cy="${y}" r="5" fill="${fillColor}" opacity="0.5" stroke="#ffffff" stroke-width="1" style="cursor: pointer;" data-borrower-id="${b.id}">
            <title>${b.name} (${b.riskLevel} Risk, Net ROI: +${b.expectedRoi}%)</title>
          </circle>
        `;
      }
    });

    scatterChart.innerHTML = svgHtml;

    scatterChart.querySelectorAll('circle[data-borrower-id]').forEach(circle => {
      circle.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-borrower-id');
        openLoanModal(id);
      });
    });
  }

  // --- Render Top 5 Borrower Cards ---
  function renderTop5Cards() {
    const topMatches = currentRankedBorrowers.slice(0, 5);
    const eligibleTotal = currentEligibleBorrowers.length;

    top5Badge.textContent = `${Math.min(5, eligibleTotal)} Matches`;

    if (eligibleTotal === 0) {
      top5CardsContainer.innerHTML = '';
      emptyStateContainer.classList.remove('hidden');
      fewerMatchesBanner.classList.add('hidden');
      return;
    } else {
      emptyStateContainer.classList.add('hidden');
    }

    if (eligibleTotal < 5) {
      fewerMatchesBanner.classList.remove('hidden');
      fewerMatchesTitle.textContent = `Notice: Only ${eligibleTotal} borrower${eligibleTotal > 1 ? 's' : ''} qualify`;
      fewerMatchesReason.textContent = `Only ${eligibleTotal} borrower${eligibleTotal > 1 ? 's' : ''} satisfied your active criteria (Min Credit Score: ${minCreditScoreThreshold > 0 ? minCreditScoreThreshold : 'None'}, Strict Risk Filter: ${strictTierFiltering ? 'Enabled (' + currentRiskProfile.toUpperCase() + ')' : 'Disabled'}). Remaining candidates were excluded.`;
    } else {
      fewerMatchesBanner.classList.add('hidden');
    }

    top5CardsContainer.innerHTML = '';

    topMatches.forEach(b => {
      const card = document.createElement('article');
      card.className = `borrower-card rank-${b.rank}`;
      card.setAttribute('aria-label', `Rank #${b.rank} borrower: ${b.name}`);

      const initials = b.name.split(' ').map(n => n[0]).join('').slice(0, 2);
      const estRupeeProfit = formatINR(currentInvestmentAmount * (b.expectedRoi / 100));
      const fundedPct = Math.min(100, Math.round((currentInvestmentAmount / b.loanAmount) * 100));
      const repayPct = Math.round(b.repaymentProbability * 100);

      const riskPillClass = b.riskLevel.toLowerCase();
      const fillClass = b.riskLevel === 'Low' ? 'low-risk' : (b.riskLevel === 'Medium' ? 'med-risk' : 'high-risk');

      const rankLabels = ['🥇 #1 Best Match', '🥈 #2 Top Fit', '🥉 #3 Fit', '#4 Fit', '#5 Fit'];
      const rankLabel = rankLabels[b.rank - 1] || `#${b.rank} Fit`;

      card.innerHTML = `
        <div class="card-top">
          <div class="card-borrower-info">
            <div class="borrower-avatar">${initials}</div>
            <div class="borrower-name-group">
              <h3 class="borrower-name">
                ${b.name}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#2563eb" title="Verified Borrower Profile" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </h3>
              <span class="borrower-location">📍 ${b.location} • <span class="borrower-id-tag">${b.id}</span></span>
            </div>
          </div>
          <div class="card-rank-tag">
            <span class="rank-pill">${rankLabel}</span>
            <span class="fit-percent">${b.fitScore}% Match</span>
          </div>
        </div>

        <div class="card-purpose-block">
          <div class="purpose-category-tag">${b.category}</div>
          <div class="purpose-text">"${b.purpose}"</div>
        </div>

        <div class="card-metrics-grid">
          <div class="metric-item">
            <span class="metric-label-sm">Estimated Net ROI</span>
            <span class="metric-value-lg text-success">+${b.expectedRoi.toFixed(1)}%</span>
            <span class="metric-sub">+${estRupeeProfit} on ${formatINR(currentInvestmentAmount)}</span>
          </div>

          <div class="metric-item">
            <span class="metric-label-sm">Interest Rate (APR)</span>
            <span class="metric-value-lg">${b.interestRate.toFixed(1)}%</span>
            <span class="metric-sub">${b.termMonths} Months Tenure</span>
          </div>

          <div class="metric-item prob-bar-container">
            <span class="metric-label-sm">Repayment Security</span>
            <span class="metric-value-lg">${repayPct}%</span>
            <div class="prob-bar-bg">
              <div class="prob-bar-fill ${fillClass}" style="width: ${repayPct}%"></div>
            </div>
          </div>

          <div class="metric-item">
            <span class="metric-label-sm">Risk Assessment</span>
            <div style="margin-top: 4px; display: flex; align-items: center; justify-content: space-between;">
              <span class="risk-pill ${riskPillClass}">${b.riskLevel} Risk</span>
              <span class="metric-sub">${b.creditScore} FICO</span>
            </div>
          </div>
        </div>

        <div class="allocation-share-block">
          <span>Requested Loan: <strong>${formatINR(b.loanAmount)}</strong></span>
          <span>Your Allocation Share: <strong>${fundedPct}%</strong></span>
        </div>

        <div class="why-ranked-box">
          <div class="why-icon">💡</div>
          <div class="why-content">
            <span class="why-title">Why Ranked Here</span>
            <p class="why-text">${b.whyRanked}</p>
          </div>
        </div>

        <button type="button" class="card-action-btn" data-borrower-id="${b.id}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          Simulate Investment (${formatINR(currentInvestmentAmount)})
        </button>
      `;

      top5CardsContainer.appendChild(card);
    });

    top5CardsContainer.querySelectorAll('.card-action-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-borrower-id');
        openLoanModal(id);
      });
    });
  }

  // --- Render All 25 Borrowers Pool Table ---
  function renderAllBorrowersTable() {
    allBorrowersTbody.innerHTML = '';
    const filter = tableRiskFilter.value;

    const filtered = currentRankedBorrowers.filter(b => {
      if (filter === 'all') return true;
      return b.riskLevel === filter;
    });

    filtered.forEach(b => {
      const tr = document.createElement('tr');
      if (b.rank <= 5) tr.classList.add('top5-row');

      const isRank1 = b.rank === 1 ? 'rank-1' : '';
      const riskPillClass = b.riskLevel.toLowerCase();

      tr.innerHTML = `
        <td><span class="table-rank-badge ${isRank1}">#${b.rank}</span></td>
        <td>
          <div class="table-borrower-name">${b.name}</div>
          <div class="table-borrower-sub">${b.creditScore} FICO • ${b.id}</div>
        </td>
        <td>
          <div>${b.purpose}</div>
          <div class="table-borrower-sub">📍 ${b.location} • ${b.category}</div>
        </td>
        <td><strong>${formatINR(b.loanAmount)}</strong></td>
        <td><span style="font-family: var(--font-mono); font-weight: 700;">${b.interestRate.toFixed(1)}%</span></td>
        <td><span style="font-family: var(--font-mono); font-weight: 700;">${Math.round(b.repaymentProbability * 100)}%</span></td>
        <td><span class="risk-pill ${riskPillClass}">${b.riskLevel}</span></td>
        <td><span class="table-roi-badge">+${b.expectedRoi.toFixed(1)}%</span></td>
        <td><span class="table-score">${b.fitScore}%</span></td>
        <td><div class="table-why-cell">${b.whyRanked}</div></td>
        <td style="text-align: right;">
          <button type="button" class="table-action-btn" data-borrower-id="${b.id}">Inspect</button>
        </td>
      `;

      allBorrowersTbody.appendChild(tr);
    });

    allBorrowersTbody.querySelectorAll('.table-action-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-borrower-id');
        openLoanModal(id);
      });
    });
  }

  // --- Investment Simulator Modal ---
  function openLoanModal(borrowerId) {
    const borrower = rawBorrowers.find(b => b.id === borrowerId);
    if (!borrower) return;

    const rankedEntry = currentRankedBorrowers.find(b => b.id === borrowerId);
    const rankDisplay = rankedEntry ? `#${rankedEntry.rank} Fit (${rankedEntry.fitScore}% Match)` : `Unranked (Filtered)`;

    const investAmount = currentInvestmentAmount;
    const fundedPct = Math.min(100, Math.round((investAmount / borrower.loanAmount) * 100));
    const grossInterestEarnings = investAmount * (borrower.interestRate / 100);
    const expectedLossDeduction = investAmount * ((1 - borrower.repaymentProbability) * 0.35);
    const netProfit = investAmount * (borrower.expectedRoi / 100);
    const totalExpectedPayout = investAmount + netProfit;
    const monthlyPayment = (totalExpectedPayout / borrower.termMonths).toFixed(0);

    modalRankBadge.textContent = rankDisplay;
    modalRankBadge.className = `badge ${rankedEntry && rankedEntry.rank === 1 ? 'badge-low' : 'badge-medium'}`;

    document.getElementById('modal-title').textContent = `${borrower.name} — ${borrower.category}`;

    modalBody.innerHTML = `
      <div>
        <div class="modal-section-title">Borrower Profile &amp; Location</div>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.45;">
          ${borrower.name} is seeking <strong>${formatINR(borrower.loanAmount)}</strong> over <strong>${borrower.termMonths} months</strong> for <em>${borrower.purpose}</em> in ${borrower.location}. Verified credit score of <strong>${borrower.creditScore} FICO</strong>.
        </p>
      </div>

      <div>
        <div class="modal-section-title">Cash Flow Breakdown for Your ${formatINR(investAmount)} Investment</div>
        <div class="modal-flow-grid">
          <div class="modal-flow-item">
            <span class="label">Your Allocation</span>
            <span class="value">${formatINR(investAmount)}</span>
          </div>
          <div class="modal-flow-item">
            <span class="label">Loan Share</span>
            <span class="value">${fundedPct}% of ${formatINR(borrower.loanAmount)}</span>
          </div>
          <div class="modal-flow-item">
            <span class="label">Gross Coupon APR</span>
            <span class="value">${borrower.interestRate.toFixed(1)}% (+${formatINR(grossInterestEarnings)})</span>
          </div>
          <div class="modal-flow-item">
            <span class="label">Risk Reserve / LGD Buffer</span>
            <span class="value text-danger">-${formatINR(expectedLossDeduction)} (${Math.round((1 - borrower.repaymentProbability) * 100)}% Default Risk)</span>
          </div>
          <div class="modal-flow-item">
            <span class="label">Expected Net Yield</span>
            <span class="value text-success">+${borrower.expectedRoi.toFixed(1)}% APR (+${formatINR(netProfit)})</span>
          </div>
          <div class="modal-flow-item">
            <span class="label">Monthly Cash Flow</span>
            <span class="value">~${formatINR(monthlyPayment)} / month</span>
          </div>
        </div>
      </div>

      <div class="modal-payout-highlight">
        <div>
          <div class="modal-payout-label">Projected Total Cash Payout</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">Principal + Probability-Adjusted Net Interest</div>
        </div>
        <div class="modal-payout-val">${formatINR(totalExpectedPayout)}</div>
      </div>

      <div class="why-ranked-box">
        <div class="why-icon">💡</div>
        <div class="why-content">
          <span class="why-title">Ranking Match Rationale</span>
          <p class="why-text">${rankedEntry ? rankedEntry.whyRanked : "This borrower does not currently qualify under your strict filter criteria."}</p>
        </div>
      </div>

      <button type="button" class="modal-confirm-btn" id="modal-commit-btn">
        Simulate Funding ${formatINR(investAmount)} in this Loan
      </button>
    `;

    loanModal.classList.remove('hidden');

    document.getElementById('modal-commit-btn').addEventListener('click', () => {
      addRecentActivity('pledge', `Capital Pledged: ${formatINR(investAmount)}`, `Simulated funding pledged to ${borrower.name} (${borrower.purpose})`);
      showToast(`Pledged simulated investment of ${formatINR(investAmount)} to ${borrower.name}'s loan!`);
      closeLoanModal();
    });
  }

  function closeLoanModal() {
    loanModal.classList.add('hidden');
  }

  // --- Toast Notifications ---
  let toastTimer = null;
  function showToast(message) {
    if (toastTimer) clearTimeout(toastTimer);
    toast.textContent = `✓ ${message}`;
    toast.classList.remove('hidden');
    toastTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, 3200);
  }

  // --- Reset All Filters Helper ---
  function resetAllFilters() {
    currentInvestmentAmount = 25000;
    currentRiskProfile = 'medium';
    currentRiskAppetiteIndex = 50;
    strictTierFiltering = false;
    minCreditScoreThreshold = 0;

    strictTierToggle.checked = false;
    creditScoreFilter.value = '0';
    tableRiskFilter.value = 'all';

    addRecentActivity('preset', 'Portfolio Settings Reset', 'Restored default settings (Medium Risk, ₹25,000 deployed).');
    recalculateAndRender();
    showToast('Reset all filters to defaults (Medium Risk, ₹25,000)');
  }

  // --- Event Listeners Setup ---
  function setupEventListeners() {
    // 1. Numeric Amount Input
    amountInput.addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val)) val = 1000;
      currentInvestmentAmount = val;
      recalculateAndRender();
    });

    amountInput.addEventListener('change', () => {
      addRecentActivity('pledge', 'Capital Deployment Updated', `Adjusted investment amount to ${formatINR(currentInvestmentAmount)}.`);
    });

    // 2. Amount Slider
    amountSlider.addEventListener('input', (e) => {
      let val = parseInt(e.target.value, 10);
      currentInvestmentAmount = val;
      recalculateAndRender();
    });

    // 3. Quick Amount Chips
    amountChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        const val = parseInt(e.currentTarget.getAttribute('data-amount'), 10);
        currentInvestmentAmount = val;
        addRecentActivity('pledge', 'Quick Capital Allocated', `Selected ${formatINR(val)} via quick allocation chip.`);
        recalculateAndRender();
      });
    });

    // 4. Three Risk Profile Cards
    riskProfileCards.forEach(card => {
      card.addEventListener('click', (e) => {
        const profile = e.currentTarget.getAttribute('data-profile');
        currentRiskProfile = profile;

        if (profile === 'low') {
          currentRiskAppetiteIndex = 15;
        } else if (profile === 'medium') {
          currentRiskAppetiteIndex = 50;
        } else if (profile === 'high') {
          currentRiskAppetiteIndex = 85;
        }

        addRecentActivity('risk', 'Risk Appetite Changed', `Switched investment mandate to ${profile.toUpperCase()} RISK.`);
        recalculateAndRender();
        showToast(`Switched strategy to ${profile.toUpperCase()} RISK`);
      });
    });

    // 5. Fine-Tuning Risk Slider
    riskSlider.addEventListener('input', (e) => {
      const idx = parseInt(e.target.value, 10);
      currentRiskAppetiteIndex = idx;

      if (idx <= 33) {
        currentRiskProfile = 'low';
      } else if (idx <= 66) {
        currentRiskProfile = 'medium';
      } else {
        currentRiskProfile = 'high';
      }

      recalculateAndRender();
    });

    // 6. Strict Tier Filtering Toggle
    strictTierToggle.addEventListener('change', (e) => {
      strictTierFiltering = e.target.checked;
      addRecentActivity('filter', 'Tier Filtering Updated', `Strict Tier Filter set to ${strictTierFiltering ? 'ENABLED' : 'DISABLED'}.`);
      recalculateAndRender();
      showToast(strictTierFiltering ? 'Strict Tier Filtering: ON' : 'Strict Tier Filtering: OFF');
    });

    // 7. Credit Score Threshold Filter
    creditScoreFilter.addEventListener('change', (e) => {
      minCreditScoreThreshold = parseInt(e.target.value, 10);
      addRecentActivity('filter', 'Credit Score Filter Set', `Set minimum credit threshold to ${minCreditScoreThreshold > 0 ? minCreditScoreThreshold + '+' : 'All'}.`);
      recalculateAndRender();
    });

    // 8. Preset Dropdown
    presetSelect.addEventListener('change', (e) => {
      const preset = e.target.value;
      if (preset === 'conservative') {
        currentRiskProfile = 'low';
        currentRiskAppetiteIndex = 15;
        currentInvestmentAmount = 10000;
      } else if (preset === 'balanced') {
        currentRiskProfile = 'medium';
        currentRiskAppetiteIndex = 50;
        currentInvestmentAmount = 25000;
      } else if (preset === 'aggressive') {
        currentRiskProfile = 'high';
        currentRiskAppetiteIndex = 85;
        currentInvestmentAmount = 50000;
      } else if (preset === 'micro') {
        currentRiskProfile = 'low';
        currentRiskAppetiteIndex = 15;
        currentInvestmentAmount = 5000;
      } else if (preset === 'max') {
        currentRiskProfile = 'medium';
        currentRiskAppetiteIndex = 50;
        currentInvestmentAmount = 100000;
      }

      strictTierFiltering = false;
      strictTierToggle.checked = false;
      minCreditScoreThreshold = 0;
      creditScoreFilter.value = '0';

      addRecentActivity('preset', 'Preset Strategy Applied', `Applied ${preset.toUpperCase()} strategy preset (${formatINR(currentInvestmentAmount)} deployed).`);
      recalculateAndRender();
      showToast(`Applied preset: ${preset.toUpperCase()} (${formatINR(currentInvestmentAmount)})`);
      e.target.value = '';
    });

    // 9. Reset Buttons
    resetFiltersBtn.addEventListener('click', resetAllFilters);
    headerResetBtn.addEventListener('click', resetAllFilters);
    if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAllFilters);
    if (broadenFiltersBtn) broadenFiltersBtn.addEventListener('click', resetAllFilters);

    // 10. Tabs View Switching
    function switchToTop5() {
      tabTop5.classList.add('active');
      tabTop5.setAttribute('aria-selected', 'true');
      tabAll.classList.remove('active');
      tabAll.setAttribute('aria-selected', 'false');

      sectionTop5.classList.remove('hidden');
      sectionAll.classList.add('hidden');

      if (navItemMatchmaker) navItemMatchmaker.classList.add('active');
      if (navItemDirectory) navItemDirectory.classList.remove('active');
    }

    function switchToAll() {
      tabAll.classList.add('active');
      tabAll.setAttribute('aria-selected', 'true');
      tabTop5.classList.remove('active');
      tabTop5.setAttribute('aria-selected', 'false');

      sectionAll.classList.remove('hidden');
      sectionTop5.classList.add('hidden');

      if (navItemDirectory) navItemDirectory.classList.add('active');
      if (navItemMatchmaker) navItemMatchmaker.classList.remove('active');
    }

    tabTop5.addEventListener('click', switchToTop5);
    tabAll.addEventListener('click', switchToAll);

    // Sidebar Navigation Links
    if (navItemMatchmaker) {
      navItemMatchmaker.addEventListener('click', () => {
        switchToTop5();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeSidebar();
      });
    }

    if (navItemDirectory) {
      navItemDirectory.addEventListener('click', () => {
        switchToAll();
        document.getElementById('tabs-container').scrollIntoView({ behavior: 'smooth' });
        closeSidebar();
      });
    }

    if (navItemAnalytics) {
      navItemAnalytics.addEventListener('click', () => {
        document.getElementById('analytics-section').scrollIntoView({ behavior: 'smooth' });
        closeSidebar();
      });
    }

    if (navItemCredit) {
      navItemCredit.addEventListener('click', () => {
        document.getElementById('credit-overview-card').scrollIntoView({ behavior: 'smooth' });
        closeSidebar();
      });
    }

    if (navItemActivity) {
      navItemActivity.addEventListener('click', () => {
        document.getElementById('activity-feed-card').scrollIntoView({ behavior: 'smooth' });
        closeSidebar();
      });
    }

    if (navItemMethodology) {
      navItemMethodology.addEventListener('click', () => {
        document.getElementById('methodology-section').scrollIntoView({ behavior: 'smooth' });
        methodologyDrawer.classList.remove('hidden');
        toggleMethodologyBtn.innerHTML = 'Hide Formula Details &uarr;';
        closeSidebar();
      });
    }

    // Responsive Mobile Sidebar Toggle
    function openSidebar() {
      if (dashboardSidebar) dashboardSidebar.classList.add('open');
      if (sidebarOverlay) sidebarOverlay.classList.add('active');
    }

    function closeSidebar() {
      if (dashboardSidebar) dashboardSidebar.classList.remove('open');
      if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    }

    if (sidebarToggleBtn) sidebarToggleBtn.addEventListener('click', openSidebar);
    if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    // 11. Table Risk Filter
    tableRiskFilter.addEventListener('change', () => {
      renderAllBorrowersTable();
    });

    // 12. Formula Methodology Drawer Toggle
    toggleMethodologyBtn.addEventListener('click', () => {
      const isHidden = methodologyDrawer.classList.toggle('hidden');
      toggleMethodologyBtn.innerHTML = isHidden ? 'View Formula Details &darr;' : 'Hide Formula Details &uarr;';
    });

    // 13. Theme Toggle
    themeToggle.addEventListener('click', toggleTheme);

    // 14. Modal Close
    modalClose.addEventListener('click', closeLoanModal);
    loanModal.addEventListener('click', (e) => {
      if (e.target === loanModal) closeLoanModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !loanModal.classList.contains('hidden')) {
        closeLoanModal();
      }
    });
  }

  // Self-execute
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
