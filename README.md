# 🎯 Credit Scout — Smart P2P Lending Matchmaker

**Credit Scout** is an intelligent borrower-matching platform engineered for peer-to-peer (P2P) micro-lending. It automates candidate ranking based on an investor's personalized risk appetite and investment amount, instantly projecting estimated net returns and displaying the top 5 matching borrowers with zero page reloads.

Built with **vanilla HTML5, CSS3, and modern JavaScript**, Credit Scout delivers a responsive fintech dashboard without requiring heavy external dependencies or backend runtimes.

---

## 📌 Problem Statement

In traditional peer-to-peer micro-lending, individual investors struggle to select suitable borrowers:
- **Disparate Risk Appetites**: Investors range from capital preservation seekers to aggressive yield hunters. Manually reviewing dozens of micro-loan listings is slow, inconsistent, and error-prone.
- **Capital Mismatch**: Investment ticket sizes vary significantly (e.g., ₹1,000 vs. ₹1,00,000), making manual portfolio diversification cumbersome.
- **Unclear Risk-Reward Tradeoffs**: Nominal interest rates (APR) do not reflect credit default probabilities, misleading retail lenders about real risk-adjusted returns.

---

## 💡 Our Solution

Credit Scout functions as an automated matchmaking engine that:
1. Accepts investor preferences: **Investment Amount** (₹1,000 to ₹1,00,000) and **Risk Profile** (Low, Medium, or High Risk).
2. Normalizes borrower credit parameters: repayment probabilities, FICO credit scores, interest rates, and loan sizes across 25 verified candidate profiles.
3. Deterministically computes a **Multi-Factor Fit Score** and outputs the **Top 5 Recommended Borrowers**.
4. Continuously updates financial cash-flow simulations and rankings in under 5 milliseconds upon any slider or input change.

---

## ✨ Features

- **Personalized Investor Dashboard**:
  - Displays investor preferences, capital allocation, and live strategy metrics.
  - Indian Rupee (`₹`) native formatting across all controls, metrics, and schedules.
- **Synchronized Investment Amount Controls**:
  - Dual-bound controls: numeric input and range slider (₹1,000 to ₹1,00,000 in steps of ₹1,000).
  - One-click quick capital chips (`₹5,000`, `₹10,000`, `₹25,000`, `₹50,000`, `₹1,00,000`).
  - Real-time inline input validation and error handling.
- **Three Core Risk Profiles**:
  - **Low Risk (Capital Preservation)**: Prioritizes elite 730+ credit scores and 94%–98% repayment security, minimizing default hazards.
  - **Medium Risk (Balanced Growth)**: Balances 11%–14% returns with solid 86%–92% repayment security.
  - **High Risk (Yield Maximization)**: Targets high-yield micro-enterprises (17%–24% APR) while tolerating credit volatility.
  - Fine-tuning continuous slider (0–100) linked to the 3 profiles with dynamic contextual guidance.
- **Top 5 Recommended Borrowers**:
  - Highlights top candidates with `#1 Best Match` visual hierarchy.
  - Displays Borrower Name, verified ID, FICO score, risk category badge, requested loan amount (₹), annualized net ROI (%), loan tenure, repayment security meter, and percentage match score.
  - **Context-Aware "Why Ranked Here" Rationale**: Dynamically explains why each borrower matches the investor's current settings.
  - **Eligibility & Edge-Case Handling**: Displays a clear contextual notice when fewer than 5 borrowers qualify under strict filters, and an empty-state card with a "Reset Filters" action if zero qualify.
- **Data Visualizations**:
  - **Risk vs. Estimated Return Tradeoff Matrix**: Responsive SVG scatter chart mapping all candidate borrowers, highlighting active top 5 selections with pulsing rings.
  - **Portfolio Capital Allocation Bar**: Visual breakdown of principal vs. projected net profit vs. modeled default risk reserve buffer.
- **Interactive Investment Simulator Modal**:
  - Generates detailed cash flow schedules: principal return, gross coupon earnings, risk reserve (LGD) deduction, projected total payout, and monthly amortization.
- **Full 25-Borrower Pool Inspection Tab**:
  - Inspect the entire candidate pool from rank #1 down to #25 with instant risk-tier filtering.
- **Accessibility & Design**:
  - Light and Dark mode toggle with persistent preference storage.
  - Responsive layouts optimized for desktop, tablet, and mobile screens.
  - Accessible color contrast, clear labeling, and subtle CSS transitions.
  - Global **Reset Filters** button to instantly restore default values.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic markup, accessible ARIA roles, live regions.
- **CSS3**: Custom properties (CSS variables), CSS Grid, Flexbox, responsive typography, and dark/light themes.
- **JavaScript (ES6+)**: Vanilla client-side reactivity, SVG chart generation, mathematical modeling, and DOM manipulation.
- **Zero External Runtime Dependencies**: No heavy frontend frameworks or build steps required.

---

## 🚀 How to Run

Credit Scout runs directly in any modern web browser.

### Option 1: Using Python HTTP Server (Recommended)
From the project directory:

```bash
# Navigate to the credit-scout directory
cd credit-scout

# Launch local server
python -m http.server 8000
```

Open your browser and navigate to:
```
http://localhost:8000
```

### Option 2: Direct File Open
You can also open `index.html` directly in your browser (double-click the file or use your browser's "Open File" menu). Credit Scout features an embedded dataset fallback ensuring zero downtime even if local `file://` CORS restrictions apply.

---

## 🧮 How the Matching Algorithm Works

The algorithm is **deterministic, normalized, and transparent**, ensuring identical inputs always yield identical rankings without arbitrary randomness.

### 1. Data Normalization
All borrowers in the candidate pool are evaluated across four normalized dimensions in the range $[0, 1]$:

$$\text{Safety } (S) = \frac{P - P_{\min}}{P_{\max} - P_{\min}}$$

$$\text{Yield } (Y) = \frac{R - R_{\min}}{R_{\max} - R_{\min}}$$

$$\text{Net ROI Factor } (NR) = \frac{\text{ROI} - \text{ROI}_{\min}}{\text{ROI}_{\max} - \text{ROI}_{\min}}$$

$$\text{Credit Score Factor } (CS) = \frac{\text{Score} - 550}{800 - 550}$$

Where:
- $P$: Repayment Probability ($0.71 \le P \le 0.97$)
- $R$: Interest Rate APR ($7.8\% \le R \le 23.8\%$)
- $\text{ROI}$: Expected Net ROI
- $\text{Score}$: Borrower FICO credit score ($580 \le \text{Score} \le 785$)

### 2. Risk Alignment Metric
Let $\alpha \in [0, 1]$ represent the investor's risk preference index. The borrower's inherent risk factor is defined as $B_{\text{risk}} = 1 - S$. The risk alignment factor measures proximity between borrower risk and investor preference:

$$\text{Alignment} = 1 - |\alpha - B_{\text{risk}}|$$

### 3. Dynamic Strategy Weighting
Based on the selected risk profile, the algorithm applies deterministic weights:

- **Low Risk ($\alpha \le 0.33$)**:
  $$\text{Match Score} = 100 \times \big( 0.40 \cdot S + 0.30 \cdot CS + 0.20 \cdot \text{Alignment} + 0.10 \cdot NR \big)$$
  *Prioritizes capital protection, high credit scores, and low default variance.*

- **Medium Risk ($0.33 < \alpha \le 0.66$)**:
  $$\text{Match Score} = 100 \times \big( 0.35 \cdot \text{Alignment} + 0.35 \cdot NR + 0.15 \cdot S + 0.15 \cdot Y \big)$$
  *Optimizes the risk-adjusted sweet spot, balancing competitive yields with steady repayment integrity.*

- **High Risk ($\alpha > 0.66$)**:
  $$\text{Match Score} = 100 \times \big( 0.45 \cdot Y + 0.30 \cdot NR + 0.15 \cdot \text{Alignment} + 0.10 \cdot CS \big)$$
  *Elevates high coupon APR and net returns for maximum portfolio upside.*

### 4. Eligibility Filtering
Borrowers must satisfy eligibility rules:
- Platform minimum loan ticket ($\ge ₹1,000$).
- Minimum credit score threshold set by the investor.
- When **Strict Tier Filtering** is enabled, borrowers outside the chosen risk category are excluded.
- If fewer than 5 borrowers satisfy the conditions, Credit Scout renders all available matches alongside an informative banner explaining the exclusions.

---

## 📊 ROI Estimation Method

In microfinance and peer-to-peer credit, gross interest received does not equal realized investor yield because of potential credit default and recovery costs.

### Net ROI Formula:
$$\text{Expected Net ROI (\%)} = (P \times R) - \big( (1 - P) \times \text{LGD} \big)$$

Where:
- $P$: Historical Repayment Probability (e.g., $0.96$ for 96%)
- $R$: Nominal Interest Rate APR (e.g., $8.5\%$)
- $\text{LGD}$: Loss Given Default severity, conservatively modeled at $35\%$. This reflects amortized monthly principal received before default and partial post-default recoveries.

### Projected Net Profit in Rupees (₹):
$$\text{Projected Profit (₹)} = \text{Investment Amount (₹)} \times \frac{\text{Expected Net ROI}}{100}$$

### Total Projected Payout:
$$\text{Total Payout (₹)} = \text{Investment Amount (₹)} + \text{Projected Profit (₹)}$$

---

## ⚠️ Demo Data Disclaimer

1. **Synthetic Simulation Only**: All borrower profiles, business descriptions, credit scores, locations, and loan amounts depicted in Credit Scout are synthetic demo data created solely for academic demonstrations and hackathon evaluations.
2. **No Guaranteed Returns**: The projected returns and ROI values are mathematical estimations derived from probabilistic default models. They do not represent guaranteed returns or real-world investment guarantees.
3. **No Real Bureau or Banking Connection**: Credit Scout is a frontend prototype. It does not connect to credit rating agencies (such as CIBIL or Experian) or real banking APIs, nor does it collect banking credentials or real money.

---

## 🔮 Future Improvements

1. **Automated Auto-Invest Bundles**: Allow investors to split capital evenly across the top 5 borrowers with a single click (e.g., allocating ₹5,000 each across 5 loans).
2. **Secondary Market & Liquidity Pool**: Simulate an early exit mechanism where investors can transfer fractional loan notes to peer lenders.
3. **Multi-Currency Support**: Add configurable currency selectors (INR, USD, EUR, GBP) with live FX conversion rates.
4. **Machine Learning Default Predictor**: Train an XGBoost or Random Forest model on historical microfinance datasets (e.g., Kiva, LendingClub) to dynamically estimate borrower repayment probabilities from cash-flow history.
5. **Backend Database & Authentication**: Connect with a Node.js/FastAPI backend and PostgreSQL database for persistent investor portfolios and user accounts.
