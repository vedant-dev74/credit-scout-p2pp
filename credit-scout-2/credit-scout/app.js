// Credit Scout - Automated Peer-to-Peer Micro-Lending Matchmaker
// Dual-Role Platform: Lender (Investor) & Borrower (Applicant) Modes (₹ INR)
// Features Automated Monthly Installment (EMI) Reminders & Multi-Channel Alerts

const BORROWER_POOL = [
  {
    id: "BR-MY-01",
    name: "Rahul Verma (You)",
    businessName: "Verma Smart AgriTech Cold-Storage",
    category: "Agriculture",
    location: "Nashik, Maharashtra",
    avatarBg: "from-emerald-500 to-teal-700",
    initials: "RV",
    creditScore: 755,
    grade: "A",
    riskTier: "conservative",
    requestedAmount: 75000,
    fundedAmount: 48000,
    termMonths: 12,
    baseInterestRate: 9.6,
    defaultRiskRate: 0.7,
    debtToIncome: 18,
    annualIncome: 650000,
    story: "Expanding solar cold-storage unit to prevent post-harvest perishables loss for 20 local grape farmers.",
    verified: ["Aadhaar & PAN", "Udyam MSME", "Agricultural GST", "Bank Statements"],
    isUserLoan: true,
    emisPaid: 2,
    totalEmis: 12,
    nextEmiDate: "15 Nov 2026",
    nextEmiDay: 15,
    nextEmiMonth: "Nov",
    nextEmiYear: 2026
  },
  {
    id: "BR-101",
    name: "Ananya Sharma",
    businessName: "EcoHarvest Organic Micro-Farm",
    category: "Agriculture",
    location: "Pune, Maharashtra",
    avatarBg: "from-emerald-500 to-teal-700",
    initials: "AS",
    creditScore: 785,
    grade: "A+",
    riskTier: "conservative",
    requestedAmount: 75000,
    fundedAmount: 52000,
    termMonths: 12,
    baseInterestRate: 8.4,
    defaultRiskRate: 0.5,
    debtToIncome: 14,
    annualIncome: 580000,
    story: "Procuring solar-powered drip irrigation kits to double organic strawberry yields before harvest season.",
    verified: ["Aadhaar & PAN", "3-Yr ITR Filings", "Agricultural Land Title", "Bank Statements"]
  },
  {
    id: "BR-102",
    name: "Rajesh Patel",
    businessName: "Patel Precision CNC Metalcraft",
    category: "Small Business",
    location: "Ahmedabad, Gujarat",
    avatarBg: "from-blue-600 to-indigo-800",
    initials: "RP",
    creditScore: 742,
    grade: "A",
    riskTier: "conservative",
    requestedAmount: 120000,
    fundedAmount: 85000,
    termMonths: 18,
    baseInterestRate: 9.2,
    defaultRiskRate: 0.8,
    debtToIncome: 19,
    annualIncome: 740000,
    story: "Acquiring a CNC lathe tooling upgrade to fulfill a confirmed multi-part automotive supplier subcontract.",
    verified: ["Aadhaar & PAN", "GST Invoices", "Bank Statements", "Machinery Hypothecation"]
  },
  {
    id: "BR-103",
    name: "Amina Ansari",
    businessName: "Noor Handloom & Silk Weaving",
    category: "Artisan Crafts",
    location: "Varanasi, Uttar Pradesh",
    avatarBg: "from-amber-500 to-orange-700",
    initials: "AA",
    creditScore: 715,
    grade: "A",
    riskTier: "conservative",
    requestedAmount: 50000,
    fundedAmount: 32000,
    termMonths: 12,
    baseInterestRate: 9.8,
    defaultRiskRate: 0.9,
    debtToIncome: 21,
    annualIncome: 460000,
    story: "Procuring raw silk yarn and jacquard looms to stock festive season inventory for wholesale boutiques.",
    verified: ["Aadhaar & PAN", "Artisan Weaver Card", "Bank Statements"]
  },
  {
    id: "BR-104",
    name: "Dr. Rohan Kulkarni",
    businessName: "Kulkarni Rural Dental Diagnostics",
    category: "Healthcare",
    location: "Nagpur, Maharashtra",
    avatarBg: "from-cyan-500 to-blue-700",
    initials: "RK",
    creditScore: 760,
    grade: "A+",
    riskTier: "conservative",
    requestedAmount: 150000,
    fundedAmount: 110000,
    termMonths: 24,
    baseInterestRate: 8.9,
    defaultRiskRate: 0.6,
    debtToIncome: 16,
    annualIncome: 920000,
    story: "Refurbishing portable digital dental x-ray sensors used for rural primary health camp consultations.",
    verified: ["Aadhaar & PAN", "Dental Council Registration", "Clinic P&L", "Bank Statements"]
  },
  {
    id: "BR-105",
    name: "Clara D'Souza",
    businessName: "Lumina Coding & Skill Academy",
    category: "Education",
    location: "Panaji, Goa",
    avatarBg: "from-purple-500 to-indigo-700",
    initials: "CD",
    creditScore: 698,
    grade: "B",
    riskTier: "moderate",
    requestedAmount: 80000,
    fundedAmount: 45000,
    termMonths: 12,
    baseInterestRate: 12.4,
    defaultRiskRate: 1.4,
    debtToIncome: 24,
    annualIncome: 620000,
    story: "Procuring 10 refurbished developer laptops to support free scholarship cohorts for young women in tech.",
    verified: ["Aadhaar & PAN", "MSME Udyam Certificate", "Bank Statements"]
  },
  {
    id: "BR-106",
    name: "Vikram Singh",
    businessName: "Apex Express Logistics & Courier",
    category: "Logistics",
    location: "Jaipur, Rajasthan",
    avatarBg: "from-yellow-500 to-amber-700",
    initials: "VS",
    creditScore: 685,
    grade: "B",
    riskTier: "moderate",
    requestedAmount: 140000,
    fundedAmount: 75000,
    termMonths: 18,
    baseInterestRate: 13.5,
    defaultRiskRate: 1.7,
    debtToIncome: 27,
    annualIncome: 810000,
    story: "Down-payment for two commercial CNG delivery vans under active e-commerce last-mile fulfillment contracts.",
    verified: ["Aadhaar & PAN", "Commercial Transport Permit", "Fleet Insurance", "Bank Statements"]
  },
  {
    id: "BR-107",
    name: "Sunita Rao",
    businessName: "Verde Gourmet Cold-Pressed Juices",
    category: "Food & Beverage",
    location: "Bengaluru, Karnataka",
    avatarBg: "from-rose-500 to-pink-700",
    initials: "SR",
    creditScore: 672,
    grade: "B",
    riskTier: "moderate",
    requestedAmount: 65000,
    fundedAmount: 30000,
    termMonths: 12,
    baseInterestRate: 14.1,
    defaultRiskRate: 1.9,
    debtToIncome: 26,
    annualIncome: 540000,
    story: "Installing an industrial cold press extraction unit and blast chiller to supply 12 organic retail cafes.",
    verified: ["Aadhaar & PAN", "FSSAI License", "Bank Statements", "Retail Supply MOUs"]
  },
  {
    id: "BR-108",
    name: "Tariq Sheikh",
    businessName: "Surya Clean Rooftop Solar Systems",
    category: "Clean Tech",
    location: "Indore, Madhya Pradesh",
    avatarBg: "from-sky-500 to-cyan-700",
    initials: "TS",
    creditScore: 704,
    grade: "B+",
    riskTier: "moderate",
    requestedAmount: 180000,
    fundedAmount: 95000,
    termMonths: 24,
    baseInterestRate: 11.9,
    defaultRiskRate: 1.3,
    debtToIncome: 23,
    annualIncome: 880000,
    story: "Wholesale procurement of Tier-1 solar micro-inverters and mounting hardware for commercial orders.",
    verified: ["Aadhaar & PAN", "Electrical Contractor License", "GST Invoices", "Bank Statements"]
  },
  {
    id: "BR-109",
    name: "Kavita Nair",
    businessName: "Kavita Spices & CTC Tea Blends",
    category: "Retail",
    location: "Kochi, Kerala",
    avatarBg: "from-teal-500 to-emerald-700",
    initials: "KN",
    creditScore: 692,
    grade: "B",
    riskTier: "moderate",
    requestedAmount: 60000,
    fundedAmount: 38000,
    termMonths: 12,
    baseInterestRate: 13.0,
    defaultRiskRate: 1.6,
    debtToIncome: 22,
    annualIncome: 490000,
    story: "Transitioning tea packaging to 100% biodegradable compostable tin pouches for export compliance.",
    verified: ["Aadhaar & PAN", "Spices Board Registration", "FSSAI Certificate", "Bank Statements"]
  },
  {
    id: "BR-110",
    name: "Arjun Verma",
    businessName: "PixelForge Mobile Games Studio",
    category: "Tech & Software",
    location: "Hyderabad, Telangana",
    avatarBg: "from-fuchsia-600 to-purple-800",
    initials: "AV",
    creditScore: 638,
    grade: "C+",
    riskTier: "aggressive",
    requestedAmount: 200000,
    fundedAmount: 70000,
    termMonths: 18,
    baseInterestRate: 18.5,
    defaultRiskRate: 2.8,
    debtToIncome: 33,
    annualIncome: 700000,
    story: "Funding hyper-casual game marketing sprint for a newly released cricket simulator with 4.8-star reviews.",
    verified: ["Aadhaar & PAN", "Google Play Developer Account", "AdMob Revenue Dashboard"]
  },
  {
    id: "BR-111",
    name: "Deepa Joshi",
    businessName: "Urban Bloom Hydroponic Farms",
    category: "Agriculture",
    location: "Coimbatore, Tamil Nadu",
    avatarBg: "from-lime-500 to-emerald-700",
    initials: "DJ",
    creditScore: 620,
    grade: "C",
    riskTier: "aggressive",
    requestedAmount: 110000,
    fundedAmount: 35000,
    termMonths: 12,
    baseInterestRate: 19.8,
    defaultRiskRate: 3.2,
    debtToIncome: 35,
    annualIncome: 510000,
    story: "Converting rooftop warehouse shed into vertical nutrient-film micro-greens racks with automated LED timers.",
    verified: ["Aadhaar & PAN", "Lease Deed", "Bank Statements"]
  },
  {
    id: "BR-112",
    name: "Manoj Kumar",
    businessName: "Kumar Custom EV Conversion Hub",
    category: "Automotive",
    location: "Chennai, Tamil Nadu",
    avatarBg: "from-red-500 to-rose-700",
    initials: "MK",
    creditScore: 610,
    grade: "C",
    riskTier: "aggressive",
    requestedAmount: 160000,
    fundedAmount: 48000,
    termMonths: 18,
    baseInterestRate: 21.0,
    defaultRiskRate: 3.6,
    debtToIncome: 36,
    annualIncome: 560000,
    story: "Purchasing battery testing kits and motor conversion controllers for 3-wheeler retrofitting pipeline.",
    verified: ["Aadhaar & PAN", "Customer Pre-Order Slips", "Bank Statements"]
  },
  {
    id: "BR-113",
    name: "Meera Nambiar",
    businessName: "Malabar Spice Coastal Cloud Kitchen",
    category: "Food & Beverage",
    location: "Kozhikode, Kerala",
    avatarBg: "from-amber-600 to-red-600",
    initials: "MN",
    creditScore: 630,
    grade: "C+",
    riskTier: "aggressive",
    requestedAmount: 220000,
    fundedAmount: 90000,
    termMonths: 24,
    baseInterestRate: 18.9,
    defaultRiskRate: 2.9,
    debtToIncome: 32,
    annualIncome: 780000,
    story: "Opening second cloud-kitchen outlet near IT park: commercial induction units and initial dry stocks.",
    verified: ["Aadhaar & PAN", "Commercial Rental Agreement", "FSSAI License", "Bank Statements"]
  },
  {
    id: "BR-114",
    name: "Harpreet Singh",
    businessName: "Singh Heritage Sheesham Woodworks",
    category: "Artisan Crafts",
    location: "Chandigarh, Punjab",
    avatarBg: "from-stone-500 to-stone-700",
    initials: "HS",
    creditScore: 735,
    grade: "A",
    riskTier: "conservative",
    requestedAmount: 85000,
    fundedAmount: 60000,
    termMonths: 12,
    baseInterestRate: 9.4,
    defaultRiskRate: 0.8,
    debtToIncome: 18,
    annualIncome: 630000,
    story: "Seasoned rosewood timber bulk procurement for wedding season custom dining table orders.",
    verified: ["Aadhaar & PAN", "Bank Statements", "Client Advance Receipts"]
  },
  {
    id: "BR-115",
    name: "Priya Sharma",
    businessName: "NovaHealth Tele-Physio Clinic",
    category: "Healthcare",
    location: "Dehradun, Uttarakhand",
    avatarBg: "from-indigo-500 to-blue-700",
    initials: "PS",
    creditScore: 710,
    grade: "A-",
    riskTier: "moderate",
    requestedAmount: 110000,
    fundedAmount: 72000,
    termMonths: 18,
    baseInterestRate: 12.8,
    defaultRiskRate: 1.5,
    debtToIncome: 25,
    annualIncome: 830000,
    story: "Software license and ergonomic resistance sensor equipment for remote physiotherapy rehabilitation.",
    verified: ["Aadhaar & PAN", "BPT Registration Certificate", "Bank Statements"]
  },
  {
    id: "BR-116",
    name: "Devendra Roy",
    businessName: "SurTaal Acoustic Musical Crafts",
    category: "Artisan Crafts",
    location: "Kolkata, West Bengal",
    avatarBg: "from-violet-600 to-fuchsia-800",
    initials: "DR",
    creditScore: 605,
    grade: "C-",
    riskTier: "aggressive",
    requestedAmount: 250000,
    fundedAmount: 65000,
    termMonths: 24,
    baseInterestRate: 22.4,
    defaultRiskRate: 3.9,
    debtToIncome: 38,
    annualIncome: 640000,
    story: "Seasoned tone-wood inventory and semi-automated tuning gauge tools to expand classical guitar exports.",
    verified: ["Aadhaar & PAN", "Export-Import Code (IEC)", "Bank Statements"]
  }
];

// App State
const state = {
  currentRole: "lender", // "lender" | "borrower"
  investmentAmount: 50000,
  riskAppetite: "moderate",
  categoryFilter: "all",
  maxTermFilter: "all",
  activeModalBorrower: null,
  rankedBorrowers: [],
  fundedMap: {},
  mobileTab: "controls",
  myLoans: [],
  
  // Borrower Application Form state
  borrowerForm: {
    amount: 75000,
    termMonths: 12,
    category: "Agriculture",
    name: "Rahul Verma",
    businessName: "Verma Smart AgriTech Cold-Storage",
    location: "Nashik, Maharashtra",
    creditBand: "prime",
    revenue: 650000,
    story: "Expanding solar cold-storage unit to prevent post-harvest perishables loss for 20 local grape farmers."
  },

  // Automated Monthly Installment (EMI) Reminder Settings
  reminderSettings: {
    daysPrior: 3, // 1, 3, 5, or 7 days before due date
    channels: {
      whatsapp: true,
      sms: true,
      email: true,
      inApp: true
    },
    autoPay: false,
    phone: "+91 98765 43210",
    email: "rahul.verma@agritech.in"
  }
};

// Initialize User Loan into myLoans
const initialUserLoan = BORROWER_POOL.find(b => b.isUserLoan);
if (initialUserLoan) {
  state.myLoans.push(initialUserLoan);
}

// Format Currency in Indian Rupees (₹)
function formatCurrency(num) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(num);
}

// Calculate EMI using standard amortization formula
function calculateEMI(principal, annualRate, months) {
  const r = (annualRate / 12) / 100;
  if (r === 0) return Math.round(principal / months);
  const emi = (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  return Math.round(emi);
}

// Math & Matchmaking Engine for Lenders
function calculateBorrowerMatch(borrower, investmentAmount, riskAppetite) {
  let riskAffinity = 0;
  if (riskAppetite === "conservative") {
    if (borrower.riskTier === "conservative") riskAffinity = 96;
    else if (borrower.riskTier === "moderate") riskAffinity = 62;
    else riskAffinity = 25;
    riskAffinity += Math.min(10, Math.max(-15, (borrower.creditScore - 720) * 0.25));
  } else if (riskAppetite === "moderate") {
    if (borrower.riskTier === "moderate") riskAffinity = 97;
    else if (borrower.riskTier === "conservative") riskAffinity = 80;
    else riskAffinity = 72;
    riskAffinity += Math.min(8, Math.max(-8, (borrower.creditScore - 670) * 0.15));
  } else if (riskAppetite === "aggressive") {
    if (borrower.riskTier === "aggressive") riskAffinity = 98;
    else if (borrower.riskTier === "moderate") riskAffinity = 78;
    else riskAffinity = 45;
    riskAffinity += Math.min(12, (borrower.baseInterestRate - 12) * 1.5);
  }

  const effectiveFunded = (borrower.fundedAmount + (state.fundedMap[borrower.id] || 0));
  const remainingNeeded = Math.max(0, borrower.requestedAmount - effectiveFunded);
  
  const idealMaxAllocation = Math.min(remainingNeeded, Math.max(1000, Math.round(investmentAmount * 0.25)));
  
  let amountAffinity = 100;
  if (remainingNeeded <= 0) {
    amountAffinity = 10;
  } else if (investmentAmount > remainingNeeded * 4) {
    amountAffinity = 85;
  } else if (investmentAmount < 3000) {
    amountAffinity = 75;
  } else {
    amountAffinity = 95;
  }

  const platformFee = 0.5;
  const estimatedNetROI = Math.max(1.0, +(borrower.baseInterestRate - borrower.defaultRiskRate - platformFee).toFixed(1));
  const estimatedProfit = Math.round((idealMaxAllocation * (estimatedNetROI / 100)) * (borrower.termMonths / 12));
  const monthlyPayback = Math.round((idealMaxAllocation + estimatedProfit) / borrower.termMonths);

  const roiWeightScore = Math.min(100, estimatedNetROI * 5);
  const compositeScore = Math.round(
    (Math.max(0, Math.min(100, riskAffinity)) * 0.50) +
    (amountAffinity * 0.25) +
    (roiWeightScore * 0.25)
  );

  return {
    ...borrower,
    remainingNeeded,
    effectiveFunded,
    fundingPercent: Math.min(100, Math.round((effectiveFunded / borrower.requestedAmount) * 100)),
    recommendedAllocation: idealMaxAllocation,
    estimatedNetROI,
    estimatedProfit,
    monthlyPayback,
    matchScore: Math.min(99, Math.max(45, compositeScore))
  };
}

function getRankedBorrowers() {
  let list = BORROWER_POOL.map(b => calculateBorrowerMatch(b, state.investmentAmount, state.riskAppetite));

  if (state.categoryFilter !== "all") {
    list = list.filter(b => b.category.toLowerCase().includes(state.categoryFilter.toLowerCase()));
  }

  if (state.maxTermFilter !== "all") {
    const termMax = parseInt(state.maxTermFilter);
    list = list.filter(b => b.termMonths <= termMax);
  }

  list.sort((a, b) => b.matchScore - a.matchScore);
  return list;
}

// DOM Elements
const investmentSlider = document.getElementById("investment-slider");
const investmentInput = document.getElementById("investment-input");
const topBorrowersList = document.getElementById("top-borrowers-list");
const summaryRoi = document.getElementById("summary-roi");
const summaryMonthly = document.getElementById("summary-monthly");
const summaryAllocated = document.getElementById("summary-allocated");
const summaryScore = document.getElementById("summary-score");
const poolCount = document.getElementById("pool-count");
const dossierModal = document.getElementById("dossier-modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");
const categoryFilter = document.getElementById("category-filter");
const termFilter = document.getElementById("term-filter");
const diversifyBtn = document.getElementById("diversify-btn");
const exportCsvBtn = document.getElementById("export-csv-btn");
const dockAmount = document.getElementById("dock-amount");
const dockRoi = document.getElementById("dock-roi");

// Update Lender Top Summary Strip
function updateSummaryMetrics(top5) {
  if (!top5.length) {
    summaryRoi.innerText = "0.0%";
    summaryMonthly.innerText = "₹0";
    summaryAllocated.innerText = "₹0";
    summaryScore.innerText = "0%";
    if (dockRoi) dockRoi.innerText = "0% ROI";
    return;
  }

  const avgRoi = (top5.reduce((acc, b) => acc + b.estimatedNetROI, 0) / top5.length).toFixed(1);
  const totalMonthly = top5.reduce((acc, b) => acc + b.monthlyPayback, 0);
  const totalAllocated = top5.reduce((acc, b) => acc + b.recommendedAllocation, 0);
  const avgScore = Math.round(top5.reduce((acc, b) => acc + b.matchScore, 0) / top5.length);

  summaryRoi.innerText = `${avgRoi}%`;
  summaryMonthly.innerText = `+${formatCurrency(totalMonthly)}/mo`;
  summaryAllocated.innerText = formatCurrency(totalAllocated);
  summaryScore.innerText = `${avgScore}%`;

  if (dockAmount) dockAmount.innerText = formatCurrency(state.investmentAmount);
  if (dockRoi) dockRoi.innerText = `${avgRoi}% ROI`;
}

// Render Top 5 Borrower Cards for Lenders
function renderTopBorrowers() {
  const ranked = getRankedBorrowers();
  state.rankedBorrowers = ranked;
  const top5 = ranked.slice(0, 5);

  updateSummaryMetrics(top5);
  if (poolCount) poolCount.innerText = `${ranked.length} Micro-Borrowers Evaluated`;

  if (!top5.length) {
    topBorrowersList.innerHTML = `
      <div class="p-8 sm:p-12 text-center text-slate-400 glass-panel rounded-2xl border border-slate-800">
        <div class="text-3xl sm:text-4xl mb-2 sm:mb-3">🔍</div>
        <h3 class="text-base sm:text-lg font-semibold text-slate-200">No borrowers match your filters</h3>
        <p class="text-xs sm:text-sm mt-1">Reset your filters or increase investment amount.</p>
      </div>
    `;
    return;
  }

  topBorrowersList.innerHTML = top5.map((borrower, index) => {
    const rank = index + 1;
    const rankBadgeClass = rank === 1 ? "rank-badge-1" : rank === 2 ? "rank-badge-2" : rank === 3 ? "rank-badge-3" : "rank-badge-other";
    
    const riskBadge = borrower.riskTier === "conservative" 
      ? '<span class="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Conservative</span>'
      : borrower.riskTier === "moderate"
      ? '<span class="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">Moderate</span>'
      : '<span class="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">High Yield</span>';

    const userLoanBadge = borrower.isUserLoan ? `
      <span class="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 animate-pulse">
        ⭐ Your Listed Loan
      </span>
    ` : '';

    return `
      <div class="glass-panel glass-card-hover rounded-2xl p-3.5 sm:p-5 border ${borrower.isUserLoan ? 'border-indigo-500/50 bg-indigo-950/20' : 'border-slate-800'} relative transition-all duration-300">
        
        <!-- Header: Rank, Names & Badges -->
        <div class="flex items-start justify-between gap-2 mb-3">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl font-extrabold flex items-center justify-center text-xs sm:text-sm shadow-md shrink-0 ${rankBadgeClass}">
              #${rank}
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 flex-wrap">
                <h3 class="font-bold text-slate-100 text-sm sm:text-base truncate">${borrower.name}</h3>
                <span class="text-[10px] sm:text-xs px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700 font-mono">${borrower.id}</span>
                ${userLoanBadge}
              </div>
              <p class="text-[11px] sm:text-xs text-slate-400 truncate mt-0.5">
                🏢 ${borrower.businessName} • 📍 ${borrower.location}
              </p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-end sm:items-center gap-1 shrink-0">
            ${riskBadge}
            <div class="px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-bold flex items-center gap-1">
              <span>🎯</span>
              <span>${borrower.matchScore}%</span>
            </div>
          </div>
        </div>

        <!-- Backstory Pitch -->
        <p class="text-[11px] sm:text-xs text-slate-300 mb-3 bg-slate-900/60 p-2.5 sm:p-3 rounded-xl border border-slate-800/80 line-clamp-2 leading-relaxed">
          "${borrower.story}"
        </p>

        <!-- Metrics Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-3">
          <div class="bg-slate-900/80 p-2 sm:p-2.5 rounded-xl border border-slate-800/60">
            <span class="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Est. Net ROI</span>
            <span class="text-base sm:text-lg font-black text-emerald-400 font-mono flex items-center gap-1 mt-0.5">
              ${borrower.estimatedNetROI}%
              <span class="text-[9px] text-slate-400 font-normal">p.a.</span>
            </span>
            <span class="text-[10px] text-slate-500 block truncate">Gross: ${borrower.baseInterestRate}%</span>
          </div>

          <div class="bg-slate-900/80 p-2 sm:p-2.5 rounded-xl border border-slate-800/60">
            <span class="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Credit Grade</span>
            <span class="text-base sm:text-lg font-bold text-indigo-400 font-mono mt-0.5 block">
              Grade ${borrower.grade}
            </span>
            <span class="text-[10px] text-slate-500 block truncate">Score ${borrower.creditScore} • DTI ${borrower.debtToIncome}%</span>
          </div>

          <div class="bg-slate-900/80 p-2 sm:p-2.5 rounded-xl border border-slate-800/60">
            <span class="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Allocation</span>
            <span class="text-base sm:text-lg font-bold text-slate-100 font-mono mt-0.5 block truncate">
              ${formatCurrency(borrower.recommendedAllocation)}
            </span>
            <span class="text-[10px] text-emerald-400 block truncate">+${formatCurrency(borrower.estimatedProfit)} profit</span>
          </div>

          <div class="bg-slate-900/80 p-2 sm:p-2.5 rounded-xl border border-slate-800/60">
            <span class="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Term Duration</span>
            <span class="text-base sm:text-lg font-bold text-slate-200 font-mono mt-0.5 block">
              ${borrower.termMonths} mo
            </span>
            <span class="text-[10px] text-slate-400 block truncate">~${formatCurrency(borrower.monthlyPayback)}/mo</span>
          </div>
        </div>

        <!-- Funding Progress Bar -->
        <div class="mb-3">
          <div class="flex justify-between text-[10px] sm:text-xs text-slate-400 mb-1 font-mono">
            <span>Funded: ${borrower.fundingPercent}%</span>
            <span>${formatCurrency(borrower.effectiveFunded)} / ${formatCurrency(borrower.requestedAmount)}</span>
          </div>
          <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500" style="width: ${borrower.fundingPercent}%"></div>
          </div>
        </div>

        <!-- Mobile Touch Action Buttons -->
        <div class="flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-2 pt-2.5 border-t border-slate-800/80">
          <button onclick="openDossierModal('${borrower.id}')" class="h-10 sm:h-9 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 hover:text-white text-xs font-semibold transition flex items-center justify-center gap-1.5">
            <span>📄 Full Dossier</span>
          </button>
          
          <button onclick="fundBorrower('${borrower.id}', ${borrower.recommendedAllocation})" class="h-10 sm:h-9 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/10">
            <span>⚡ Fund ${formatCurrency(borrower.recommendedAllocation)}</span>
          </button>
        </div>

      </div>
    `;
  }).join("");
}

// Live Input Handlers (Lender)
function handleInvestmentChange(value) {
  const numeric = Math.max(1000, Math.min(1000000, Number(value) || 0));
  state.investmentAmount = numeric;
  if (investmentSlider) investmentSlider.value = numeric;
  if (investmentInput) investmentInput.value = numeric;
  renderTopBorrowers();
}

function setRiskAppetite(level) {
  state.riskAppetite = level;
  document.querySelectorAll("[data-risk]").forEach(btn => {
    if (btn.dataset.risk === level) {
      btn.classList.add("ring-2", "ring-emerald-400", "bg-slate-800");
      btn.classList.remove("border-transparent", "opacity-75");
    } else {
      btn.classList.remove("ring-2", "ring-emerald-400", "bg-slate-800");
      btn.classList.add("border-transparent", "opacity-75");
    }
  });
  renderTopBorrowers();
}

function applyPreset(amount, risk) {
  handleInvestmentChange(amount);
  setRiskAppetite(risk);
  showToast(`Applied preset: ${formatCurrency(amount)} • ${risk.toUpperCase()}`);
}

// ==========================================
// BORROWER PORTAL LOGIC & APPLICATION ENGINE
// ==========================================

function getBorrowerAssessment(creditBand) {
  switch (creditBand) {
    case "prime":
      return { grade: "A+", rate: 8.8, defaultRisk: 0.6, score: 775, tier: "conservative", approvalChance: "98% High" };
    case "good":
      return { grade: "A", rate: 10.5, defaultRisk: 1.1, score: 720, tier: "conservative", approvalChance: "94% Strong" };
    case "fair":
      return { grade: "B", rate: 13.5, defaultRisk: 1.8, score: 670, tier: "moderate", approvalChance: "88% Moderate" };
    case "new":
    default:
      return { grade: "C+", rate: 17.5, defaultRisk: 2.8, score: 625, tier: "aggressive", approvalChance: "82% Emerging" };
  }
}

function updateBorrowerCalculatorView() {
  const amount = Number(state.borrowerForm.amount) || 75000;
  const tenure = Number(state.borrowerForm.termMonths) || 12;
  const assessment = getBorrowerAssessment(state.borrowerForm.creditBand);
  
  const monthlyEmi = calculateEMI(amount, assessment.rate, tenure);
  const totalRepayment = monthlyEmi * tenure;
  const totalInterest = totalRepayment - amount;

  const elAmount = document.getElementById("borrower-calc-amount");
  const elEmi = document.getElementById("borrower-calc-emi");
  const elRate = document.getElementById("borrower-calc-rate");
  const elInterest = document.getElementById("borrower-calc-interest");
  const elGrade = document.getElementById("borrower-calc-grade");
  const elApproval = document.getElementById("borrower-calc-approval");
  const elLendersCount = document.getElementById("borrower-calc-lenders");

  if (elAmount) elAmount.innerText = formatCurrency(amount);
  if (elEmi) elEmi.innerText = formatCurrency(monthlyEmi);
  if (elRate) elRate.innerText = `${assessment.rate}% p.a.`;
  if (elInterest) elInterest.innerText = formatCurrency(totalInterest);
  if (elGrade) elGrade.innerText = `Grade ${assessment.grade}`;
  if (elApproval) elApproval.innerText = assessment.approvalChance;
  
  const matchingLenders = Math.min(32, Math.max(8, Math.round(amount / 8000)));
  if (elLendersCount) elLendersCount.innerText = `${matchingLenders} Active Lenders Ready`;
}

window.handleBorrowerAmountChange = function(val) {
  const amount = Math.max(5000, Math.min(500000, Number(val) || 0));
  state.borrowerForm.amount = amount;
  const slider = document.getElementById("borrower-amount-slider");
  const input = document.getElementById("borrower-amount-input");
  if (slider) slider.value = amount;
  if (input) input.value = amount;
  updateBorrowerCalculatorView();
};

window.setBorrowerTenure = function(months) {
  state.borrowerForm.termMonths = Number(months);
  document.querySelectorAll("[data-tenure]").forEach(btn => {
    if (Number(btn.dataset.tenure) === Number(months)) {
      btn.classList.add("ring-2", "ring-indigo-400", "bg-indigo-600/30", "text-white");
      btn.classList.remove("text-slate-400", "bg-slate-900");
    } else {
      btn.classList.remove("ring-2", "ring-indigo-400", "bg-indigo-600/30", "text-white");
      btn.classList.add("text-slate-400", "bg-slate-900");
    }
  });
  updateBorrowerCalculatorView();
};

window.setBorrowerCreditBand = function(band) {
  state.borrowerForm.creditBand = band;
  document.querySelectorAll("[data-band]").forEach(btn => {
    if (btn.dataset.band === band) {
      btn.classList.add("ring-2", "ring-indigo-400", "bg-slate-800");
      btn.classList.remove("opacity-60");
    } else {
      btn.classList.remove("ring-2", "ring-indigo-400", "bg-slate-800");
      btn.classList.add("opacity-60");
    }
  });
  updateBorrowerCalculatorView();
};

// ========================================================
// AUTOMATED MONTHLY INSTALLMENT (EMI) REMINDER HUB ENGINE
// ========================================================

// Render the Prominent Upcoming Installment Reminder Banner
function renderBorrowerReminderHub() {
  const hubContainer = document.getElementById("borrower-reminder-hub");
  if (!hubContainer) return;

  const activeLoan = state.myLoans[0]; // Primary active loan
  if (!activeLoan) {
    hubContainer.innerHTML = '';
    hubContainer.classList.add("hidden");
    return;
  }

  hubContainer.classList.remove("hidden");
  const emi = calculateEMI(activeLoan.requestedAmount, activeLoan.baseInterestRate, activeLoan.termMonths);
  const daysPrior = state.reminderSettings.daysPrior;

  // Active channels display
  const channelsList = [];
  if (state.reminderSettings.channels.whatsapp) channelsList.push("💬 WhatsApp");
  if (state.reminderSettings.channels.sms) channelsList.push("📱 SMS");
  if (state.reminderSettings.channels.email) channelsList.push("✉️ Email");
  if (state.reminderSettings.channels.inApp) channelsList.push("🔔 Push");

  hubContainer.innerHTML = `
    <div class="glass-panel reminder-pulse rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-amber-500/40 bg-gradient-to-r from-amber-950/20 via-slate-900/90 to-amber-950/20 shadow-2xl space-y-4">
      
      <!-- Top Status Row -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-amber-500/20">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg font-bold shrink-0">
            🔔
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-sm sm:text-base font-extrabold text-white">Upcoming Monthly Installment (EMI) Reminder</h3>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono">
                Active Schedule
              </span>
            </div>
            <p class="text-[11px] text-slate-400 mt-0.5">Automated notification scheduled before every month's due date</p>
          </div>
        </div>

        <!-- Countdown Tag -->
        <div class="flex items-center gap-1.5 self-start sm:self-auto">
          <span class="px-3 py-1 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            Due in 4 Days (15 Nov 2026)
          </span>
        </div>
      </div>

      <!-- Detail Grid: Due Info & Channels -->
      <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
        
        <div class="sm:col-span-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 space-y-1">
          <span class="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Installment Amount Due</span>
          <div class="text-xl sm:text-2xl font-black text-amber-400 font-mono">${formatCurrency(emi)}</div>
          <span class="text-[11px] text-slate-400 block">EMI #${activeLoan.emisPaid + 1} of ${activeLoan.totalEmis} • Loan ${activeLoan.id}</span>
        </div>

        <div class="sm:col-span-8 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 space-y-2">
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-400">📅 Automatic Reminder Trigger:</span>
            <span class="font-bold text-slate-200 font-mono">${daysPrior} Days Prior (12 Nov 2026 at 9:00 AM)</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-400">📲 Notification Channels:</span>
            <span class="font-bold text-emerald-400 font-mono">${channelsList.join(" • ")}</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-400">🛡️ Timely Payment Reward:</span>
            <span class="font-semibold text-indigo-300">+15 CIBIL Score Points & Higher Limit</span>
          </div>
        </div>

      </div>

      <!-- Action Row: Test Alert, Configure, Sync Calendar, Pay Now -->
      <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800">
        <div class="flex items-center gap-2 flex-wrap">
          <button onclick="triggerTestReminderNotification('${activeLoan.id}', ${emi})" class="h-9 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-amber-300 border border-amber-500/30 text-xs font-bold transition flex items-center gap-1.5 active:scale-95">
            <span>📲 Test Alert Preview</span>
          </button>

          <button onclick="openReminderSettingsModal()" class="h-9 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition flex items-center gap-1.5 active:scale-95">
            <span>⚙️ Reminder Settings</span>
          </button>

          <button onclick="exportEmiCalendar('${activeLoan.id}')" class="h-9 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition flex items-center gap-1.5 active:scale-95">
            <span>📅 Sync Calendar (.ics)</span>
          </button>
        </div>

        <button onclick="payBorrowerEMI('${activeLoan.id}', ${emi})" class="h-9 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-slate-950 font-extrabold text-xs transition flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 active:scale-95">
          <span>💳 Pay Installment (${formatCurrency(emi)})</span>
        </button>
      </div>

    </div>
  `;
}

// Open Reminder Configuration Modal
window.openReminderSettingsModal = function() {
  const modal = document.getElementById("reminder-modal");
  if (!modal) return;

  const currentDays = state.reminderSettings.daysPrior;
  const ch = state.reminderSettings.channels;

  const modalBody = document.getElementById("reminder-modal-content");
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">🔔</div>
            <div>
              <h3 class="font-extrabold text-white text-base">Monthly Installment Reminder Preferences</h3>
              <p class="text-xs text-slate-400 mt-0.5">Customize how and when you receive EMI alerts before every installment</p>
            </div>
          </div>
        </div>

        <!-- Lead Time Selection -->
        <div class="space-y-2">
          <label class="text-xs font-bold uppercase tracking-wider text-slate-300 block">
            ⏰ When Should We Remind You?
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button type="button" onclick="setReminderDays(1)" id="rem-day-1" class="p-2.5 rounded-xl border ${currentDays === 1 ? 'border-amber-400 bg-amber-500/20 text-amber-300' : 'border-slate-800 bg-slate-900 text-slate-400'} text-xs font-bold transition text-center">
              1 Day Before
            </button>
            <button type="button" onclick="setReminderDays(3)" id="rem-day-3" class="p-2.5 rounded-xl border ${currentDays === 3 ? 'border-amber-400 bg-amber-500/20 text-amber-300' : 'border-slate-800 bg-slate-900 text-slate-400'} text-xs font-bold transition text-center">
              3 Days Before ⭐
            </button>
            <button type="button" onclick="setReminderDays(5)" id="rem-day-5" class="p-2.5 rounded-xl border ${currentDays === 5 ? 'border-amber-400 bg-amber-500/20 text-amber-300' : 'border-slate-800 bg-slate-900 text-slate-400'} text-xs font-bold transition text-center">
              5 Days Before
            </button>
            <button type="button" onclick="setReminderDays(7)" id="rem-day-7" class="p-2.5 rounded-xl border ${currentDays === 7 ? 'border-amber-400 bg-amber-500/20 text-amber-300' : 'border-slate-800 bg-slate-900 text-slate-400'} text-xs font-bold transition text-center">
              7 Days Before
            </button>
          </div>
        </div>

        <!-- Notification Channels -->
        <div class="space-y-2">
          <label class="text-xs font-bold uppercase tracking-wider text-slate-300 block">
            📲 Alert Delivery Channels
          </label>
          <div class="grid grid-cols-2 gap-2.5">
            <label class="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer">
              <input type="checkbox" id="chk-whatsapp" ${ch.whatsapp ? 'checked' : ''} class="accent-emerald-500 w-4 h-4 rounded" />
              <span class="text-xs font-medium text-slate-200">💬 WhatsApp Messages</span>
            </label>
            <label class="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer">
              <input type="checkbox" id="chk-sms" ${ch.sms ? 'checked' : ''} class="accent-emerald-500 w-4 h-4 rounded" />
              <span class="text-xs font-medium text-slate-200">📱 SMS Text Alerts</span>
            </label>
            <label class="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer">
              <input type="checkbox" id="chk-email" ${ch.email ? 'checked' : ''} class="accent-emerald-500 w-4 h-4 rounded" />
              <span class="text-xs font-medium text-slate-200">✉️ Email Invoices</span>
            </label>
            <label class="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer">
              <input type="checkbox" id="chk-inapp" ${ch.inApp ? 'checked' : ''} class="accent-emerald-500 w-4 h-4 rounded" />
              <span class="text-xs font-medium text-slate-200">🔔 In-App Push Alerts</span>
            </label>
          </div>
        </div>

        <!-- Contact Details -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
          <div>
            <label class="text-[11px] text-slate-400 block mb-1">Mobile Number (for WhatsApp & SMS)</label>
            <input type="text" id="rem-phone" value="${state.reminderSettings.phone}" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-mono" />
          </div>
          <div>
            <label class="text-[11px] text-slate-400 block mb-1">Email Address</label>
            <input type="email" id="rem-email" value="${state.reminderSettings.email}" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white font-mono" />
          </div>
        </div>

        <!-- UPI AutoPay Mandate Toggle -->
        <div class="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 flex items-start gap-3">
          <input type="checkbox" id="chk-autopay" ${state.reminderSettings.autoPay ? 'checked' : ''} class="accent-indigo-500 w-4 h-4 rounded mt-0.5" />
          <div>
            <label for="chk-autopay" class="text-xs font-bold text-white block cursor-pointer">Enable e-NACH / UPI AutoPay Mandate</label>
            <p class="text-[11px] text-slate-400 mt-0.5">Automatically deducts the monthly installment on due date from your primary bank account so you never incur late penalties.</p>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="flex justify-end gap-2.5 pt-3 border-t border-slate-800">
          <button onclick="closeReminderSettingsModal()" class="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:text-white transition">Cancel</button>
          <button onclick="saveReminderSettings()" class="px-5 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold transition shadow-lg shadow-emerald-500/20">
            Save Reminder Preferences
          </button>
        </div>
      </div>
    `;
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("overflow-hidden");
};

window.closeReminderSettingsModal = function() {
  const modal = document.getElementById("reminder-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
  document.body.classList.remove("overflow-hidden");
};

window.setReminderDays = function(days) {
  state.reminderSettings.daysPrior = days;
  [1, 3, 5, 7].forEach(d => {
    const el = document.getElementById(`rem-day-${d}`);
    if (el) {
      if (d === days) {
        el.className = "p-2.5 rounded-xl border border-amber-400 bg-amber-500/20 text-amber-300 text-xs font-bold transition text-center";
      } else {
        el.className = "p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-400 text-xs font-bold transition text-center";
      }
    }
  });
};

window.saveReminderSettings = function() {
  const chkWa = document.getElementById("chk-whatsapp");
  const chkSms = document.getElementById("chk-sms");
  const chkEmail = document.getElementById("chk-email");
  const chkInapp = document.getElementById("chk-inapp");
  const chkAutopay = document.getElementById("chk-autopay");
  const phone = document.getElementById("rem-phone");
  const email = document.getElementById("rem-email");

  state.reminderSettings.channels = {
    whatsapp: chkWa ? chkWa.checked : true,
    sms: chkSms ? chkSms.checked : true,
    email: chkEmail ? chkEmail.checked : true,
    inApp: chkInapp ? chkInapp.checked : true
  };
  state.reminderSettings.autoPay = chkAutopay ? chkAutopay.checked : false;
  if (phone) state.reminderSettings.phone = phone.value;
  if (email) state.reminderSettings.email = email.value;

  closeReminderSettingsModal();
  showToast(`🔔 Saved! Reminders will be sent ${state.reminderSettings.daysPrior} days before every month's installment.`);
  renderBorrowerReminderHub();
  renderBorrowerActiveLoans();
};

// Trigger simulated realistic phone notification
window.triggerTestReminderNotification = function(loanId, emiAmount) {
  const modal = document.getElementById("notification-preview-modal");
  const content = document.getElementById("notification-preview-content");
  if (!modal || !content) return;

  const loan = state.myLoans.find(l => l.id === loanId) || state.myLoans[0];
  const daysPrior = state.reminderSettings.daysPrior;

  content.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between pb-3 border-b border-slate-800">
        <div class="flex items-center gap-2">
          <span class="text-xl">📲</span>
          <div>
            <h4 class="font-bold text-white text-sm">Simulated Alert: Monthly Installment Due Notice</h4>
            <p class="text-[11px] text-slate-400">Incoming notification dispatched ${daysPrior} days prior to due date</p>
          </div>
        </div>
        <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Delivered</span>
      </div>

      <!-- WhatsApp Style Notification Bubble -->
      <div class="bg-[#0b141a] border border-[#202c33] rounded-2xl p-4 shadow-xl space-y-2.5 font-sans">
        <div class="flex items-center justify-between border-b border-[#202c33] pb-2">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-slate-950">CS</div>
            <span class="text-xs font-bold text-emerald-400">Credit Scout India Verified</span>
          </div>
          <span class="text-[10px] text-slate-400 font-mono">Today, 9:00 AM</span>
        </div>

        <p class="text-xs text-slate-200 leading-relaxed">
          🔔 <strong>Dear ${loan.name.split(" ")[0]},</strong><br><br>
          This is a friendly reminder that your upcoming monthly micro-loan installment for <strong>${loan.businessName}</strong> is approaching:
        </p>

        <div class="bg-[#111b21] p-3 rounded-xl border border-[#202c33] space-y-1 text-xs font-mono">
          <div class="flex justify-between">
            <span class="text-slate-400">Loan ID:</span>
            <span class="text-white font-bold">${loan.id}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Due Date:</span>
            <span class="text-amber-400 font-bold">${loan.nextEmiDate}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Installment Amount:</span>
            <span class="text-emerald-400 font-bold">${formatCurrency(emiAmount)}</span>
          </div>
        </div>

        <p class="text-[11px] text-slate-300">
          ✅ <em>Pay on or before the due date to boost your CIBIL score by +15 points and unlock higher micro-loan limits!</em>
        </p>

        <div class="pt-2">
          <button onclick="payBorrowerEMI('${loan.id}', ${emiAmount}); closeNotificationPreviewModal();" class="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-2">
            <span>💳 Pay Installment Online (${formatCurrency(emiAmount)})</span>
          </button>
        </div>
      </div>

      <div class="flex justify-end pt-2">
        <button onclick="closeNotificationPreviewModal()" class="px-4 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:text-white transition">Dismiss</button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.classList.add("overflow-hidden");
};

window.closeNotificationPreviewModal = function() {
  const modal = document.getElementById("notification-preview-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
  document.body.classList.remove("overflow-hidden");
};

// Export Calendar Event (.ics) with 3-day reminder alarm
window.exportEmiCalendar = function(loanId) {
  const loan = state.myLoans.find(l => l.id === loanId) || state.myLoans[0];
  const emi = calculateEMI(loan.requestedAmount, loan.baseInterestRate, loan.termMonths);

  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Credit Scout//Micro-Lending Installment Reminder//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:Credit Scout EMI Due: ${formatCurrency(emi)} (${loan.id})`,
    `DESCRIPTION:Monthly installment payment of ${formatCurrency(emi)} for ${loan.businessName} is due today. Timely repayment improves your credit rating.`,
    "DTSTART:20261115T090000Z",
    "DTEND:20261115T100000Z",
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    `DESCRIPTION:Reminder: Credit Scout monthly installment of ${formatCurrency(emi)} is due in 3 days!`,
    "-TRIGGER:-P3D",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `credit_scout_emi_reminder_${loan.id}.ics`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast(`📅 Downloaded calendar reminder event (.ics) for 15 Nov 2026!`);
};

// Render Borrower's Active Loans
function renderBorrowerActiveLoans() {
  const container = document.getElementById("borrower-active-loans-list");
  if (!container) return;

  if (!state.myLoans.length) {
    container.innerHTML = `
      <div class="p-8 text-center text-slate-400 glass-panel rounded-2xl border border-slate-800">
        <div class="text-3xl mb-2">📋</div>
        <h4 class="text-sm font-bold text-slate-200">No active loans submitted yet</h4>
        <p class="text-xs text-slate-400 mt-1">Use the application form on the left to submit your first micro-loan request.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.myLoans.map(loan => {
    const effectiveFunded = loan.fundedAmount + (state.fundedMap[loan.id] || 0);
    const fundingPercent = Math.min(100, Math.round((effectiveFunded / loan.requestedAmount) * 100));
    const emi = calculateEMI(loan.requestedAmount, loan.baseInterestRate, loan.termMonths);
    const isFullyFunded = fundingPercent >= 100;
    const daysPrior = state.reminderSettings.daysPrior;

    return `
      <div class="glass-panel rounded-2xl p-4 sm:p-5 border border-indigo-500/30 bg-slate-900/80 shadow-xl space-y-3.5">
        <div class="flex items-start justify-between gap-2">
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">${loan.id}</span>
              <h4 class="font-bold text-white text-sm sm:text-base">${loan.businessName}</h4>
            </div>
            <p class="text-xs text-slate-400 mt-0.5">${loan.name} • 📍 ${loan.location} • ${loan.category}</p>
          </div>
          <span class="px-2.5 py-1 rounded-full text-xs font-bold ${isFullyFunded ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'}">
            ${isFullyFunded ? '✅ 100% Disbursed' : '🟢 Live Funding'}
          </span>
        </div>

        <!-- Progress Bar -->
        <div>
          <div class="flex justify-between text-xs text-slate-300 font-mono mb-1">
            <span>Funded: <strong>${fundingPercent}%</strong> (${formatCurrency(effectiveFunded)})</span>
            <span>Target: ${formatCurrency(loan.requestedAmount)}</span>
          </div>
          <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div class="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-500" style="width: ${fundingPercent}%"></div>
          </div>
        </div>

        <!-- Loan Terms & Next EMI -->
        <div class="grid grid-cols-3 gap-2 text-center text-xs font-mono">
          <div class="bg-slate-800/80 p-2 rounded-xl">
            <span class="text-[10px] text-slate-400 block">Interest Rate</span>
            <span class="font-bold text-indigo-400">${loan.baseInterestRate}% p.a.</span>
          </div>
          <div class="bg-slate-800/80 p-2 rounded-xl">
            <span class="text-[10px] text-slate-400 block">Monthly EMI</span>
            <span class="font-bold text-emerald-400">${formatCurrency(emi)}</span>
          </div>
          <div class="bg-slate-800/80 p-2 rounded-xl">
            <span class="text-[10px] text-slate-400 block">EMIs Repaid</span>
            <span class="font-bold text-white">${loan.emisPaid} / ${loan.totalEmis}</span>
          </div>
        </div>

        <!-- Reminder Badge Strip inside card -->
        <div class="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between text-xs">
          <div class="flex items-center gap-1.5">
            <span class="text-amber-400 font-bold">🔔 Reminder:</span>
            <span class="text-slate-300 font-mono">Scheduled ${daysPrior}d prior to ${loan.nextEmiDate}</span>
          </div>
          <button onclick="openReminderSettingsModal()" class="text-amber-300 hover:text-white underline text-[11px] font-semibold">
            Edit
          </button>
        </div>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-2 border-t border-slate-800">
          <button onclick="payBorrowerEMI('${loan.id}', ${emi})" class="h-10 px-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/10 active:scale-95">
            <span>💳 Pay Next EMI (${formatCurrency(emi)})</span>
          </button>
          
          <button onclick="viewMyLoanAsLender('${loan.id}')" class="h-10 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition flex items-center justify-center gap-1.5 active:scale-95">
            <span>👀 View in Lender Mode</span>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Submit a new borrower loan
window.submitBorrowerLoan = function() {
  const nameInput = document.getElementById("borrower-name");
  const bizInput = document.getElementById("borrower-biz");
  const cityInput = document.getElementById("borrower-city");
  const categoryInput = document.getElementById("borrower-category");
  const storyInput = document.getElementById("borrower-story");
  const revenueInput = document.getElementById("borrower-revenue");

  const name = (nameInput && nameInput.value.trim()) || "Rahul Verma";
  const businessName = (bizInput && bizInput.value.trim()) || "Verma Modern Micro-Ventures";
  const location = (cityInput && cityInput.value.trim()) || "Pune, Maharashtra";
  const category = (categoryInput && categoryInput.value) || "Small Business";
  const story = (storyInput && storyInput.value.trim()) || "Purchasing inventory and automated equipment to expand customer fulfillment.";
  const revenue = Number(revenueInput && revenueInput.value) || 600000;

  const assessment = getBorrowerAssessment(state.borrowerForm.creditBand);
  const amount = Number(state.borrowerForm.amount) || 75000;
  const tenure = Number(state.borrowerForm.termMonths) || 12;

  const newId = `BR-MY-0${state.myLoans.length + 1}`;

  const newLoan = {
    id: newId,
    name: `${name} (You)`,
    businessName,
    category,
    location,
    avatarBg: "from-indigo-600 to-purple-800",
    initials: name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2) || "ME",
    creditScore: assessment.score,
    grade: assessment.grade,
    riskTier: assessment.tier,
    requestedAmount: amount,
    fundedAmount: Math.round(amount * 0.15),
    termMonths: tenure,
    baseInterestRate: assessment.rate,
    defaultRiskRate: assessment.defaultRisk,
    debtToIncome: 20,
    annualIncome: revenue,
    story,
    verified: ["Aadhaar & PAN", "Udyam Registration", "Bank Statements"],
    isUserLoan: true,
    emisPaid: 0,
    totalEmis: tenure,
    nextEmiDate: "15 Nov 2026",
    nextEmiDay: 15,
    nextEmiMonth: "Nov",
    nextEmiYear: 2026
  };

  state.myLoans.unshift(newLoan);
  BORROWER_POOL.unshift(newLoan);

  showToast(`🎉 Loan request of ${formatCurrency(amount)} published live with automated monthly installment reminders!`);
  renderBorrowerActiveLoans();
  renderBorrowerReminderHub();
  renderTopBorrowers();

  const loanListEl = document.getElementById("borrower-active-loans-list");
  if (loanListEl) {
    loanListEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Simulate Paying EMI and advancing to next month's installment schedule
window.payBorrowerEMI = function(loanId, emiAmount) {
  const loan = state.myLoans.find(l => l.id === loanId);
  if (!loan) return;

  if (loan.emisPaid < loan.totalEmis) {
    loan.emisPaid += 1;
    
    // Advance next EMI month
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let currIdx = months.indexOf(loan.nextEmiMonth || "Nov");
    let nextIdx = (currIdx + 1) % 12;
    loan.nextEmiMonth = months[nextIdx];
    if (nextIdx === 0) loan.nextEmiYear = (loan.nextEmiYear || 2026) + 1;
    loan.nextEmiDate = `15 ${loan.nextEmiMonth} ${loan.nextEmiYear || 2026}`;

    showToast(`✅ Successfully paid EMI ${loan.emisPaid}/${loan.totalEmis} of ${formatCurrency(emiAmount)}! Next installment reminder scheduled for 15 ${loan.nextEmiMonth}.`);
    renderBorrowerActiveLoans();
    renderBorrowerReminderHub();
  } else {
    showToast(`🏆 Congratulations! This micro-loan has already been fully paid off!`);
  }
};

window.viewMyLoanAsLender = function(loanId) {
  switchRole("lender");
  showToast(`🔍 Switched to Lender Mode! Your loan #${loanId} is highlighted in the pool.`);
  
  const loan = BORROWER_POOL.find(b => b.id === loanId);
  if (loan) {
    setRiskAppetite(loan.riskTier);
  }
};

// Role Switching
window.switchRole = function(role) {
  state.currentRole = role;

  const lenderContainer = document.getElementById("lender-view-container");
  const borrowerContainer = document.getElementById("borrower-view-container");
  const roleBtnLender = document.getElementById("role-btn-lender");
  const roleBtnBorrower = document.getElementById("role-btn-borrower");
  const dockLenderStats = document.getElementById("dock-lender-stats");
  const dockBorrowerStats = document.getElementById("dock-borrower-stats");

  if (role === "lender") {
    if (lenderContainer) lenderContainer.classList.remove("hidden");
    if (borrowerContainer) borrowerContainer.classList.add("hidden");

    if (roleBtnLender) {
      roleBtnLender.className = "flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 bg-emerald-500 text-slate-950 shadow-md";
    }
    if (roleBtnBorrower) {
      roleBtnBorrower.className = "flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 text-slate-300 hover:text-white";
    }

    if (dockLenderStats) dockLenderStats.classList.remove("hidden");
    if (dockBorrowerStats) dockBorrowerStats.classList.add("hidden");

    renderTopBorrowers();
  } else {
    if (lenderContainer) lenderContainer.classList.add("hidden");
    if (borrowerContainer) borrowerContainer.classList.remove("hidden");

    if (roleBtnBorrower) {
      roleBtnBorrower.className = "flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 bg-indigo-500 text-white shadow-md";
    }
    if (roleBtnLender) {
      roleBtnLender.className = "flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 text-slate-300 hover:text-white";
    }

    if (dockLenderStats) dockLenderStats.classList.add("hidden");
    if (dockBorrowerStats) dockBorrowerStats.classList.remove("hidden");

    updateBorrowerCalculatorView();
    renderBorrowerActiveLoans();
    renderBorrowerReminderHub();
  }
};

window.switchMobileTab = function(tab) {
  state.mobileTab = tab;
  const controlsSection = document.getElementById("controls-section");
  const resultsSection = document.getElementById("results-section");
  const tabControls = document.getElementById("mobile-tab-controls");
  const tabResults = document.getElementById("mobile-tab-results");

  if (tab === "controls") {
    if (controlsSection) controlsSection.classList.remove("hidden");
    if (resultsSection) resultsSection.classList.add("hidden");
    if (tabControls) {
      tabControls.className = "flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-emerald-500 text-slate-950 shadow-md";
    }
    if (tabResults) {
      tabResults.className = "flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 text-slate-300 hover:text-white";
    }
  } else {
    if (controlsSection) controlsSection.classList.add("hidden");
    if (resultsSection) resultsSection.classList.remove("hidden");
    if (tabResults) {
      tabResults.className = "flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-emerald-500 text-slate-950 shadow-md";
    }
    if (tabControls) {
      tabControls.className = "flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 text-slate-300 hover:text-white";
    }
  }
};

window.scrollToTopResults = function() {
  if (window.innerWidth < 1024) {
    switchMobileTab("results");
  }
  const resultsEl = document.getElementById("results-section");
  if (resultsEl) {
    resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

window.toggleMissionDetails = function() {
  const content = document.getElementById("mission-content");
  const icon = document.getElementById("mission-toggle-icon");
  if (!content) return;

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    if (icon) icon.innerText = "▲ Hide";
  } else {
    content.classList.add("hidden");
    if (icon) icon.innerText = "▼ Show Problem & Solution";
  }
};

// Dossier Modal
window.openDossierModal = function(id) {
  const borrower = BORROWER_POOL.find(b => b.id === id);
  if (!borrower) return;

  modalContent.innerHTML = `
    <div class="space-y-4 sm:space-y-5">
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <span class="px-2 py-0.5 rounded text-[10px] sm:text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">${borrower.id} • Grade ${borrower.grade}</span>
          <h2 class="text-lg sm:text-2xl font-extrabold text-white mt-1 truncate">${borrower.name}</h2>
          <p class="text-xs sm:text-sm text-slate-400 truncate">${borrower.businessName} • ${borrower.category} in ${borrower.location}</p>
        </div>
        <div class="text-right shrink-0">
          <div class="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">${borrower.estimatedNetROI || borrower.baseInterestRate}%</div>
          <div class="text-[10px] sm:text-xs text-slate-400">Net Annual ROI</div>
        </div>
      </div>

      <div class="bg-slate-900/90 p-3 sm:p-4 rounded-xl border border-slate-800">
        <h4 class="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1">Micro-Lending Purpose & Growth Utilization</h4>
        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${borrower.story}</p>
      </div>

      <div class="grid grid-cols-3 gap-2">
        <div class="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 text-center">
          <span class="text-[10px] text-slate-400 block">Annual Turnover</span>
          <div class="text-xs sm:text-sm font-bold text-slate-100 font-mono mt-0.5">${formatCurrency(borrower.annualIncome)}</div>
        </div>
        <div class="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 text-center">
          <span class="text-[10px] text-slate-400 block">DTI Ratio</span>
          <div class="text-xs sm:text-sm font-bold text-slate-100 font-mono mt-0.5">${borrower.debtToIncome}%</div>
        </div>
        <div class="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 text-center">
          <span class="text-[10px] text-slate-400 block">Default Risk</span>
          <div class="text-xs sm:text-sm font-bold text-slate-100 font-mono mt-0.5">${borrower.defaultRiskRate}%</div>
        </div>
      </div>

      <div>
        <h4 class="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">Verified Due Diligence & KYC</h4>
        <div class="flex flex-wrap gap-1.5">
          ${borrower.verified.map(v => `
            <span class="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] sm:text-xs flex items-center gap-1 font-medium">
              <span>✓</span> ${v}
            </span>
          `).join("")}
        </div>
      </div>

      <div class="bg-slate-900/80 p-3 sm:p-4 rounded-xl border border-slate-800">
        <h4 class="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">Payback Schedule (${borrower.termMonths} Months)</h4>
        <div class="grid grid-cols-3 gap-2 text-center text-xs font-mono">
          <div class="bg-slate-800/80 p-2 rounded-lg">
            <span class="text-slate-400 block text-[10px]">Loan Size</span>
            <span class="font-bold text-white text-xs sm:text-sm">${formatCurrency(borrower.requestedAmount)}</span>
          </div>
          <div class="bg-slate-800/80 p-2 rounded-lg">
            <span class="text-slate-400 block text-[10px]">Monthly EMI</span>
            <span class="font-bold text-emerald-400 text-xs sm:text-sm">~${formatCurrency(calculateEMI(borrower.requestedAmount, borrower.baseInterestRate, borrower.termMonths))}</span>
          </div>
          <div class="bg-slate-800/80 p-2 rounded-lg">
            <span class="text-slate-400 block text-[10px]">Interest Rate</span>
            <span class="font-bold text-teal-400 text-xs sm:text-sm">${borrower.baseInterestRate}% p.a.</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 pt-3 border-t border-slate-800">
        <button onclick="closeDossierModal()" class="h-11 sm:h-10 px-4 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition">Close</button>
        <button onclick="fundBorrower('${borrower.id}', ${borrower.recommendedAllocation || Math.round(state.investmentAmount * 0.25)}); closeDossierModal();" class="h-11 sm:h-10 px-5 rounded-xl bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-slate-950 font-bold text-xs sm:text-sm transition shadow-lg shadow-emerald-500/20">
          Fund Micro-Loan (${formatCurrency(borrower.recommendedAllocation || Math.round(state.investmentAmount * 0.25))})
        </button>
      </div>
    </div>
  `;

  dossierModal.classList.remove("hidden");
  dossierModal.classList.add("flex");
  document.body.classList.add("overflow-hidden");
};

window.closeDossierModal = function() {
  dossierModal.classList.add("hidden");
  dossierModal.classList.remove("flex");
  document.body.classList.remove("overflow-hidden");
};

window.fundBorrower = function(id, amount) {
  state.fundedMap[id] = (state.fundedMap[id] || 0) + amount;
  showToast(`🎉 Allocated ${formatCurrency(amount)} to #${id}! Real-time funding updated.`);
  renderTopBorrowers();
  renderBorrowerActiveLoans();
  renderBorrowerReminderHub();
};

function showToast(message) {
  const existing = document.getElementById("credit-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "credit-toast";
  toast.className = "fixed bottom-16 lg:bottom-5 left-4 right-4 sm:left-auto sm:right-5 z-50 bg-slate-900/95 border border-emerald-500/50 text-white px-4 py-3 rounded-2xl shadow-2xl text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-2 transform transition-all duration-300 backdrop-blur-md";
  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

window.handleOneClickDiversify = function() {
  const top5 = state.rankedBorrowers.slice(0, 5);
  if (!top5.length) return;

  top5.forEach(b => {
    state.fundedMap[b.id] = (state.fundedMap[b.id] || 0) + b.recommendedAllocation;
  });

  showToast(`🚀 Successfully diversified ${formatCurrency(state.investmentAmount)} across Top 5 borrowers!`);
  renderTopBorrowers();
  renderBorrowerActiveLoans();
  renderBorrowerReminderHub();
};

window.exportMatchesCsv = function() {
  const top5 = state.rankedBorrowers.slice(0, 5);
  if (!top5.length) return;

  const headers = ["Rank", "BorrowerID", "Name", "Business", "Category", "Location", "CreditScore", "Grade", "RiskTier", "RequestedAmount_INR", "EstimatedNetROI", "RecommendedAllocation_INR", "MatchScore"];
  const rows = top5.map((b, i) => [
    i + 1,
    `"${b.id}"`,
    `"${b.name}"`,
    `"${b.businessName}"`,
    `"${b.category}"`,
    `"${b.location}"`,
    b.creditScore,
    b.grade,
    b.riskTier,
    b.requestedAmount,
    `${b.estimatedNetROI}%`,
    b.recommendedAllocation,
    `${b.matchScore}%`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `credit_scout_recommendations_inr_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast("📁 Exported Top 5 Matches to CSV (INR)");
};

function handleResize() {
  if (window.innerWidth >= 1024) {
    const controlsSection = document.getElementById("controls-section");
    const resultsSection = document.getElementById("results-section");
    if (controlsSection) controlsSection.classList.remove("hidden");
    if (resultsSection) resultsSection.classList.remove("hidden");
  } else {
    switchMobileTab(state.mobileTab);
  }
}

function init() {
  if (investmentSlider) investmentSlider.addEventListener("input", e => handleInvestmentChange(e.target.value));
  if (investmentInput) investmentInput.addEventListener("input", e => handleInvestmentChange(e.target.value));

  document.querySelectorAll("[data-risk]").forEach(btn => {
    btn.addEventListener("click", () => setRiskAppetite(btn.dataset.risk));
  });

  if (categoryFilter) categoryFilter.addEventListener("change", e => {
    state.categoryFilter = e.target.value;
    renderTopBorrowers();
  });

  if (termFilter) termFilter.addEventListener("change", e => {
    state.maxTermFilter = e.target.value;
    renderTopBorrowers();
  });

  if (modalClose) modalClose.addEventListener("click", closeDossierModal);
  if (dossierModal) {
    dossierModal.addEventListener("click", e => {
      if (e.target === dossierModal) closeDossierModal();
    });
  }

  if (diversifyBtn) diversifyBtn.addEventListener("click", handleOneClickDiversify);
  if (exportCsvBtn) exportCsvBtn.addEventListener("click", exportMatchesCsv);

  // Borrower Portal Listeners
  const borrowerSlider = document.getElementById("borrower-amount-slider");
  const borrowerInput = document.getElementById("borrower-amount-input");
  if (borrowerSlider) borrowerSlider.addEventListener("input", e => handleBorrowerAmountChange(e.target.value));
  if (borrowerInput) borrowerInput.addEventListener("input", e => handleBorrowerAmountChange(e.target.value));

  const borrowerCategory = document.getElementById("borrower-category");
  if (borrowerCategory) {
    borrowerCategory.addEventListener("change", e => {
      state.borrowerForm.category = e.target.value;
      updateBorrowerCalculatorView();
    });
  }

  window.addEventListener("resize", handleResize);

  setRiskAppetite("moderate");
  handleInvestmentChange(50000);
  updateBorrowerCalculatorView();
  renderBorrowerActiveLoans();
  renderBorrowerReminderHub();

  if (window.innerWidth < 1024) {
    switchMobileTab("controls");
  }

  switchRole("lender");
}

document.addEventListener("DOMContentLoaded", init);
