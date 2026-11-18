/* Review practice: concepts, scenarios, and model explanations. */
window.FIN36003_BANK = {
  "meta": {
    "examId": "exam-3",
    "edition": "Exam 3",
    "chaptersLabel": "Chapters 14–16 and 26",
    "examMinutes": 75,
    "mcCount": 10,
    "mcPoints": 4,
    "workoutCount": 4,
    "progressKey": "finn36003-exam3-seen-v2",
    "revision": "review-practice-v2",
    "simulationMinWorkoutChapters": 3,
    "simulationMaxWorkoutsPerChapter": 2
  },
  "chapters": [
    {
      "id": "ch14",
      "label": "Chapter 14: Cost of Capital"
    },
    {
      "id": "ch15",
      "label": "Chapter 15: Raising Capital"
    },
    {
      "id": "ch16",
      "label": "Chapter 16: Capital Structure"
    },
    {
      "id": "ch26",
      "label": "Chapter 26: Mergers and Acquisitions"
    }
  ],
  "topics": [
    {
      "id": "equity",
      "chapter": "ch14",
      "label": "Cost of equity: CAPM and dividend growth"
    },
    {
      "id": "wacc",
      "chapter": "ch14",
      "label": "Debt costs, market weights, and WACC"
    },
    {
      "id": "project",
      "chapter": "ch14",
      "label": "Private firms and project risk"
    },
    {
      "id": "dcf",
      "chapter": "ch14",
      "label": "Operating enterprise value and equity value"
    },
    {
      "id": "funds",
      "chapter": "ch15",
      "label": "LPs, GPs, company funding, and stages"
    },
    {
      "id": "ownership",
      "chapter": "ch15",
      "label": "Public/private and primary/secondary markets"
    },
    {
      "id": "ipo",
      "chapter": "ch15",
      "label": "Underwriters, spreads, and IPO underpricing"
    },
    {
      "id": "risk",
      "chapter": "ch16",
      "label": "Restructuring, business risk, and financial risk"
    },
    {
      "id": "mm1",
      "chapter": "ch16",
      "label": "M&M without taxes: value and required returns"
    },
    {
      "id": "mm2",
      "chapter": "ch16",
      "label": "Corporate taxes, tax shields, and value"
    },
    {
      "id": "tradeoff",
      "chapter": "ch16",
      "label": "Distress costs and optimal debt"
    },
    {
      "id": "pecking",
      "chapter": "ch16",
      "label": "Pecking-order theory"
    },
    {
      "id": "forms",
      "chapter": "ch26",
      "label": "Transaction form, consideration, and classification"
    },
    {
      "id": "synergy",
      "chapter": "ch26",
      "label": "Incremental FCFF and synergy"
    },
    {
      "id": "premium",
      "chapter": "ch26",
      "label": "Target value, premium, and buyer NPV"
    },
    {
      "id": "payment",
      "chapter": "ch26",
      "label": "Cash, fixed-share offers, and ownership"
    },
    {
      "id": "goodwill",
      "chapter": "ch26",
      "label": "Goodwill versus the acquisition premium"
    },
    {
      "id": "defenses",
      "chapter": "ch26",
      "label": "Takeover resistance and evidence of success"
    }
  ],
  "formulas": [
    {
      "chapter": "ch14",
      "note": "Study reference using class notation. Percent answers use percentage points (enter 8.50 for 8.50%). Cash flows begin next period unless a question states otherwise.",
      "items": [
        [
          "CAPM",
          "RE = Rf + βE × [E(RM) − Rf]"
        ],
        [
          "Dividend-growth cost of equity",
          "RE = D1/P0 + g; D1 = D0(1 + g)"
        ],
        [
          "After-tax cost of debt",
          "RD × (1 − TC); use the current required debt yield"
        ],
        [
          "Market values and weights",
          "E = shares × price; D = bonds × price; wE = E/(D + E); wD = D/(D + E)"
        ],
        [
          "WACC",
          "WACC = wE × RE + wD × RD × (1 − TC)"
        ],
        [
          "Operating enterprise value",
          "EV0 = Σ[t=1…T] FCFFt/(1 + WACC)^t + TVT/(1 + WACC)^T"
        ],
        [
          "Terminal value",
          "TVT = FCFF(T+1)/(WACC − g); WACC > g"
        ],
        [
          "Equity-value bridge",
          "Equity value = operating EV − market debt + excess cash"
        ],
        [
          "Level and growing perpetuities",
          "PV = C1/r; PV = C1/(r − g), with r > g"
        ],
        [
          "Bond yield reminder",
          "Price = PV(coupons) + PV(face); semiannual: N = 2 × years, PMT = annual coupon/2, annual quoted YTM = 2 × periodic yield"
        ],
        [
          "FCFF reminder",
          "FCFF = EBIT(1 − TC) + depreciation − net capital spending − ΔNWC"
        ],
        [
          "Net capital spending in this course",
          "NCS_t = net fixed assets_t − net fixed assets_(t−1) + depreciation_t"
        ]
      ]
    },
    {
      "chapter": "ch15",
      "note": "IPO calculations ignore other issuance expenses unless stated. “Issuer price” is the price the underwriter pays the company.",
      "items": [
        [
          "Gross and net proceeds",
          "Gross = new shares × offer price; net = new shares × issuer price"
        ],
        [
          "Underwriting spread",
          "Spread = gross proceeds − net proceeds"
        ],
        [
          "IPO underpricing",
          "Dollar underpricing per share = first-day close − offer price"
        ],
        [
          "IPO underpricing percentage",
          "Underpricing % = (first-day close − offer price)/offer price × 100"
        ],
        [
          "Money left on the table",
          "New shares × (first-day close − offer price)"
        ]
      ]
    },
    {
      "chapter": "ch16",
      "note": "M&M shortcuts assume the specified benchmark. EBIT(1 − TC) equals FCFF only with zero net investment. PV(shield) = TC × D assumes permanent debt, usable deductions, and the stated debt-risk discounting.",
      "items": [
        [
          "Simplified equity return",
          "Equity return = net income / initial sponsor equity"
        ],
        [
          "Interest and annual tax shield",
          "Interest = face debt × interest rate; annual shield = deductible interest × TC"
        ],
        [
          "No-tax Proposition II",
          "RE = RA + (RA − RD) × D/E"
        ],
        [
          "Unlevered level-perpetuity value",
          "VU = FCFF1/RU; with zero net investment, FCFF1 = EBIT1(1 − TC)"
        ],
        [
          "Permanent-debt tax shield",
          "PV(interest tax shield) = TC × D"
        ],
        [
          "Levered firm and equity value",
          "VL = VU + PV(tax shield); E = VL − D when there is no excess cash"
        ],
        [
          "Tax-adjusted Proposition II",
          "RE = RU + (RU − RD) × D/E × (1 − TC)"
        ],
        [
          "Trade-off model",
          "VL = VU + PV(tax benefits) − PV(expected distress and agency costs)"
        ]
      ]
    },
    {
      "chapter": "ch26",
      "note": "For these simplified whole-equity acquisitions, match an equity purchase price with standalone target equity value. Goodwill uses identifiable net assets at fair value, including liabilities assumed.",
      "items": [
        [
          "Operating synergy",
          "ΔFCFF = combined FCFF − (standalone FCFFA + standalone FCFFB)"
        ],
        [
          "Buyer acquisition NPV",
          "NPV = standalone target equity value + PV(synergy) − equity purchase price"
        ],
        [
          "Target value to this buyer",
          "Standalone target equity value + PV(synergy)"
        ],
        [
          "Acquisition premium",
          "Equity purchase price − standalone target equity value"
        ],
        [
          "Goodwill (simplified framework)",
          "Purchase price − fair value of identifiable net assets"
        ]
      ]
    }
  ],
  "reviewOutcomes": [
    {
      "chapter": "ch14",
      "ideas": [
        "Required returns are opportunity costs, not guaranteed realized returns.",
        "Match the discount rate to operating risk; distinguish operating enterprise value from equity value."
      ],
      "skills": [
        "Calculate RE with CAPM or dividend growth, debt yield, and market-value WACC.",
        "Use a perpetuity or DCF and bridge operating enterprise value to equity."
      ]
    },
    {
      "chapter": "ch15",
      "ideas": [
        "Explain LP, GP, and portfolio-company roles and the trade-offs of public ownership.",
        "Distinguish primary funding, secondary sales, direct issuance costs, and opportunity costs."
      ],
      "skills": [
        "Calculate gross/net proceeds, underwriting spread, underpricing, and money left on the table.",
        "Interpret new-share ownership changes and staged financing."
      ]
    },
    {
      "chapter": "ch16",
      "ideas": [
        "Separate business risk from financial risk.",
        "Explain the no-tax benchmark, tax benefits, distress costs, and pecking-order financing."
      ],
      "skills": [
        "Reconcile shareholder cash flow plus interest with FCFF in Case 1.",
        "Calculate VU, tax-shield PV, VL, equity, RE, and WACC in Case 2."
      ]
    },
    {
      "chapter": "ch26",
      "ideas": [
        "Separate transaction form, consideration, and industry classification.",
        "Synergy must be incremental; a valuable target can still be overpriced."
      ],
      "skills": [
        "Value positive and negative synergy, premiums, and buyer NPV.",
        "Compare cash and fixed-share offers using original shareholders’ wealth.",
        "Distinguish goodwill from the acquisition premium."
      ]
    }
  ],
  "questions": [
    {
      "id": "e3r2-mc-01",
      "topic": "wacc",
      "diff": "e",
      "kind": "mc",
      "prompt": "A company’s assets fall in value while the amount it owes lenders is unchanged. Before the debt claim itself suffers a loss, which investors absorb the decline through their residual claim?",
      "choices": [
        "Equity investors; lenders have priority, although lenders can also lose if asset value falls far enough.",
        "Debt investors, because a fixed contractual payment makes them the first group required to absorb every decline in asset value.",
        "Neither group, because contractual interest payments eliminate losses for all investors."
      ],
      "correct": 0,
      "why": "Equity is the residual claim: asset value less the debt claim. Priority helps explain differences in risk and required returns, but does not make debt free of default risk."
    },
    {
      "id": "e3r2-mc-02",
      "topic": "equity",
      "diff": "m",
      "kind": "mc",
      "prompt": "Two stocks have the same equity beta, but one has much more company-specific volatility. What does CAPM imply?",
      "choices": [
        "The more volatile stock must have a higher CAPM required return because CAPM prices all sources of total risk.",
        "They have the same required return if they face the same risk-free rate and market-risk premium.",
        "The stock with less company-specific volatility must earn the larger realized return next year."
      ],
      "correct": 1,
      "why": "CAPM prices systematic risk through beta. Diversifiable risk alone does not increase the CAPM required return; neither required return guarantees a realized outcome."
    },
    {
      "id": "e3r2-mc-03",
      "topic": "project",
      "diff": "m",
      "kind": "mc",
      "prompt": "An analyst uses a highly leveraged airline as the sole comparable for a private grocery distributor with little debt. What is the main problem?",
      "choices": [
        "A public company can never provide useful information about a private company, even if their operations and capital structures are similar.",
        "Only the airline’s historical book equity matters, so the analyst should replace its market equity with book equity and make no other adjustments.",
        "The comparable differs in operating risk and leverage, so its equity required return cannot simply be copied."
      ],
      "correct": 2,
      "why": "A useful comparable should inform the risk of the cash flows being valued. Both business risk and leverage affect observed equity risk; private ownership does not remove the opportunity cost of equity."
    },
    {
      "id": "e3r2-mc-04",
      "topic": "project",
      "diff": "m",
      "kind": "mc",
      "prompt": "A mature food distributor funds a speculative software project entirely with debt. Which factor should drive the project’s discount rate?",
      "choices": [
        "The systematic risk of the software cash flows, with suitable financing assumptions.",
        "Only the interest rate on the new debt, because the source of funding determines the operating risk of the project.",
        "The food distributor’s WACC for every investment, regardless of the project’s operating risk."
      ],
      "correct": 0,
      "why": "The use of funds determines the relevant business risk. A company-wide WACC fits projects with similar risk and an appropriate financing mix; cheaper funding does not make risky operations safe."
    },
    {
      "id": "e3r2-mc-05",
      "topic": "wacc",
      "diff": "e",
      "kind": "mc",
      "prompt": "A firm’s book value of debt is $90 million and its market value is $75 million. Which debt value belongs in WACC weights?",
      "choices": [
        "The $90 million book value because WACC must use values reported on the historical balance sheet.",
        "The $75 million market value.",
        "The $15 million difference between the book value and market value."
      ],
      "correct": 1,
      "why": "WACC weights reflect the current market values of investors’ claims, not historical accounting amounts."
    },
    {
      "id": "e3r2-mc-06",
      "topic": "equity",
      "diff": "m",
      "kind": "mc",
      "prompt": "When is RE = D1/P0 + g a useful cost-of-equity estimate?",
      "choices": [
        "For every company, including one expected never to pay dividends, because the model does not depend on distributions.",
        "Only when the current stock price equals its original IPO offer price.",
        "When dividends and a sustainable constant growth rate provide a reasonable description of the company."
      ],
      "correct": 2,
      "why": "The constant-growth dividend model assumes a stable growth pattern and RE > g. D1 is the next expected dividend; D0 must first be grown by one period."
    },
    {
      "id": "e3r2-mc-07",
      "topic": "equity",
      "diff": "e",
      "kind": "mc",
      "prompt": "A stock with a low beta has a very poor return in one year. Does that observation by itself contradict CAPM?",
      "choices": [
        "No. CAPM links systematic risk to required expected returns, while individual realized returns remain uncertain.",
        "Yes. A beta below one guarantees a positive return in every calendar year, even when the overall market falls.",
        "Yes. A single realized loss proves that the company’s true beta must be greater than one."
      ],
      "correct": 0,
      "why": "Required or expected return is different from a realized outcome. One bad year does not establish that the risk-return relationship is wrong."
    },
    {
      "id": "e3r2-mc-08",
      "topic": "dcf",
      "diff": "m",
      "kind": "mc",
      "prompt": "A DCF discounts operating FCFF and produces operating enterprise value. How should nonoperating excess cash enter the equity-value bridge?",
      "choices": [
        "Subtract debt and omit excess cash because shareholders have no claim on cash not needed for operations.",
        "Add excess cash once, and subtract the market value of debt.",
        "Add all excess cash to every forecast FCFF and then add the same cash balance again after the DCF."
      ],
      "correct": 1,
      "why": "Operating enterprise value excludes nonoperating excess cash. Equity value = operating EV − market debt + excess cash, assuming no other claims or assets."
    },
    {
      "id": "e3r2-mc-09",
      "topic": "funds",
      "diff": "e",
      "kind": "mc",
      "prompt": "Several small endowments could each evaluate dozens of private companies themselves, but instead invest through a professionally managed fund. What could justify paying the fund manager?",
      "choices": [
        "The fund structure eliminates operating risk and guarantees that every portfolio company repays all investor capital.",
        "Fees turn the manager into the owner of all committed capital, so investors no longer require investment returns.",
        "The manager can provide specialized screening, monitoring, and investment management that the investors would otherwise need to arrange."
      ],
      "correct": 2,
      "why": "Fund intermediation can pool capital and delegate expertise-intensive decisions to a GP. LPs still bear investment risk, and fees must be evaluated against the services and access provided."
    },
    {
      "id": "e3r2-mc-10",
      "topic": "ownership",
      "diff": "m",
      "kind": "mc",
      "prompt": "A private company has enough cash for its operating plan, but its founder wants personal liquidity. A new investor offers to buy some founder-owned shares. Which statement is most accurate?",
      "choices": [
        "The founder can receive liquidity through a secondary sale while the company remains private and receives no new capital from that sale.",
        "Any founder share sale automatically lists the company on a public exchange and imposes all public-company disclosure obligations.",
        "All proceeds necessarily enter the company because its name appears on the shares being sold."
      ],
      "correct": 0,
      "why": "Separate the financing needs of the company from the liquidity needs of an existing owner. A secondary private sale can change ownership without becoming an IPO or funding the business."
    },
    {
      "id": "e3r2-mc-11",
      "topic": "ownership",
      "diff": "e",
      "kind": "mc",
      "prompt": "A fund purchases newly issued shares from a company and existing shares from its founder. Which purchase directly provides new capital to the company?",
      "choices": [
        "Both purchases, since every transaction involving the company’s stock sends the purchase price to the company.",
        "The purchase of newly issued shares.",
        "Only the purchase from the founder, since the founder originally created the business."
      ],
      "correct": 1,
      "why": "A primary investment sends funds to the issuing company. A secondary purchase pays the existing shareholder selling the shares."
    },
    {
      "id": "e3r2-mc-12",
      "topic": "funds",
      "diff": "m",
      "kind": "mc",
      "prompt": "Why do venture-capital investors often provide funding in stages?",
      "choices": [
        "Staging guarantees that every funded startup will become profitable before the next financing round.",
        "Staging removes the need for monitoring because the founder receives all promised future funding immediately.",
        "Later commitments can depend on milestones and new information, limiting capital at risk before uncertainty resolves."
      ],
      "correct": 2,
      "why": "Staged financing creates opportunities to learn and reassess investment while providing incentives. It does not guarantee success, and later funding is not automatic."
    },
    {
      "id": "e3r2-mc-13",
      "topic": "ipo",
      "diff": "e",
      "kind": "mc",
      "prompt": "In a firm-commitment IPO, what does the underwriter do?",
      "choices": [
        "Purchases the offered securities from the issuer and resells them, bearing placement risk.",
        "Only posts the firm’s financial statements online and guarantees the first-day market price will rise.",
        "Buys all shares after the first day of trading at the closing price and gives the issuer that entire amount."
      ],
      "correct": 0,
      "why": "The issuer receives the agreed issuer price. The underwriter resells at the offer price; the difference is the spread. No first-day price gain is guaranteed."
    },
    {
      "id": "e3r2-mc-14",
      "topic": "ipo",
      "diff": "m",
      "kind": "mc",
      "prompt": "Which explanation could help account for IPO underpricing?",
      "choices": [
        "A legal rule requires every IPO to close above its offer price, protecting all initial investors from losses.",
        "Uncertainty about value and the need to encourage investors to reveal demand and participate in the offering.",
        "Underpricing occurs only when the underwriter’s spread is zero."
      ],
      "correct": 1,
      "why": "Information asymmetry, valuation uncertainty, and bookbuilding incentives are possible explanations. Underpricing is not legally guaranteed and is separate from the underwriting spread."
    },
    {
      "id": "e3r2-mc-15",
      "topic": "ipo",
      "diff": "m",
      "kind": "mc",
      "prompt": "After an IPO closes above the offer price, the company’s CFO proposes recording money left on the table as an additional cash fee owed to the underwriter. Is that appropriate?",
      "choices": [
        "Yes. The issuer must pay the underwriter every dollar by which the first-day close exceeds the offer price.",
        "Yes, unless all newly issued shares were purchased by existing owners, in which case both underpricing and the spread disappear.",
        "No. The first-day price gap is an opportunity-cost measure; it is separate from the contractual underwriting spread."
      ],
      "correct": 2,
      "why": "The spread reduces issuer proceeds relative to public offer proceeds. Underpricing compares the offer with a later market price; it does not create another cash invoice."
    },
    {
      "id": "e3r2-mc-16",
      "topic": "funds",
      "diff": "e",
      "kind": "mc",
      "prompt": "Which comparison between venture capital and buyout private equity is generally accurate?",
      "choices": [
        "VC commonly finances younger growth businesses; buyout funds commonly acquire control of more established businesses.",
        "VC invests only in publicly traded mature firms, while buyout funds are limited to firms with no revenue.",
        "Neither type involves an intermediary because LPs directly select every company-level investment."
      ],
      "correct": 0,
      "why": "These are typical patterns, not universal rules. Both use funds as intermediaries, but investment stage, control, and leverage can differ."
    },
    {
      "id": "e3r2-mc-17",
      "topic": "risk",
      "diff": "e",
      "kind": "mc",
      "prompt": "Under the no-tax M&M benchmark, a debt-financed repurchase reduces the share count and can increase expected earnings per remaining share. Does that alone establish that the operating business became more valuable?",
      "choices": [
        "Yes. Any increase in expected earnings per share proves that total firm value rises by the amount borrowed.",
        "No. Fewer, more leveraged shares divide the same operating business; per-share accounting changes do not establish added total value.",
        "Yes. Retiring shares removes business risk from the operating assets and makes the remaining equity safer."
      ],
      "correct": 1,
      "why": "Separate total business value from how claims are divided. With operating assets fixed and no taxes or frictions, the repurchase adds financial risk rather than new operating cash flow."
    },
    {
      "id": "e3r2-mc-18",
      "topic": "risk",
      "diff": "m",
      "kind": "mc",
      "prompt": "A company issues new equity and uses all proceeds to repay debt. Holding operating assets fixed, which risk is most directly reduced for remaining shareholders?",
      "choices": [
        "Business risk, because every reduction in debt eliminates uncertainty in product demand and operating margins.",
        "All systematic and company-specific risk, so the remaining equity becomes risk-free.",
        "Financial risk from fixed debt payments."
      ],
      "correct": 2,
      "why": "Repaying debt reduces leverage and financial risk. The operating business can still face demand, cost, and other business risks."
    },
    {
      "id": "e3r2-mc-19",
      "topic": "mm1",
      "diff": "m",
      "kind": "mc",
      "prompt": "Under M&M with no taxes and no financing frictions, why does introducing debt leave total cash flow to investors unchanged?",
      "choices": [
        "Interest reallocates the same operating cash flow between lenders and shareholders.",
        "Interest creates new operating revenue equal to the payment, so lenders gain without any change in shareholder cash flow.",
        "Lenders’ receipts are excluded when evaluating total cash flow to investors."
      ],
      "correct": 0,
      "why": "With no taxes or net investment, shareholder cash flow = EBIT − interest; lender cash flow = interest. Their sum remains EBIT = FCFF."
    },
    {
      "id": "e3r2-mc-20",
      "topic": "mm1",
      "diff": "m",
      "kind": "mc",
      "prompt": "A no-tax financing proposal promises to replace equity with cheap debt while holding the required return on the remaining equity fixed. Which assumption should you challenge?",
      "choices": [
        "The inclusion of lenders in WACC, because the return required by debt investors should be omitted when debt is cheaper than equity.",
        "The unchanged equity required return: more leverage makes the residual equity riskier under the M&M assumptions.",
        "The use of market values, because historical book values must always determine the firm’s current financing opportunity cost."
      ],
      "correct": 1,
      "why": "The claimed saving ignores the response of equity risk and RE. In the no-tax benchmark that response offsets the greater weight on lower-cost debt."
    },
    {
      "id": "e3r2-mc-21",
      "topic": "mm2",
      "diff": "e",
      "kind": "mc",
      "prompt": "What creates the corporate interest tax shield in the tax-only M&M model?",
      "choices": [
        "Dividend payments are deducted from corporate taxable income in exactly the same way as interest.",
        "Borrowing eliminates taxes on all operating earnings, regardless of how much interest is paid.",
        "Deductible interest reduces taxable income, lowering corporate taxes."
      ],
      "correct": 2,
      "why": "Annual tax savings equal deductible interest × the corporate tax rate, assuming the company can fully use the deduction."
    },
    {
      "id": "e3r2-mc-22",
      "topic": "mm2",
      "diff": "m",
      "kind": "mc",
      "prompt": "Which assumptions support the shortcut PV(interest tax shield) = TC × D?",
      "choices": [
        "Permanent debt, full use of interest deductions, and discounting the level tax shield at the cost of debt.",
        "Debt is repaid next year and all tax savings are received immediately at the acquisition date.",
        "Any maturity, any future debt schedule, and any ability to use deductions give exactly the same shortcut."
      ],
      "correct": 0,
      "why": "For a level perpetual shield: annual shield = TC × D × RD; dividing by RD gives TC × D. A finite or changing debt schedule requires valuing its actual tax savings."
    },
    {
      "id": "e3r2-mc-23",
      "topic": "mm2",
      "diff": "m",
      "kind": "mc",
      "prompt": "At a fixed positive D/E ratio with RU > RD, how does the tax-adjusted M&M equity-risk premium compare with the no-tax formula?",
      "choices": [
        "It becomes zero at every corporate tax rate because deductibility removes all financial risk.",
        "It is smaller because (RU − RD)(D/E) is multiplied by (1 − TC).",
        "It is always larger because taxes must increase all required returns by the same percentage."
      ],
      "correct": 1,
      "why": "Hold RU, RD, and D/E fixed for this comparison. Taxes scale the financial-risk premium by (1 − TC); changing valuation can also change D/E in a full case."
    },
    {
      "id": "e3r2-mc-24",
      "topic": "risk",
      "diff": "e",
      "kind": "mc",
      "prompt": "A distributor borrows to buy a new business whose demand is much more cyclical than its current operations. Can we assume that only financial risk changes?",
      "choices": [
        "Yes. Every transaction involving debt must leave operating assets and business risk unchanged, including acquisitions of different businesses.",
        "No. Borrowing eliminates financial risk, while all uncertainty is reclassified as business risk.",
        "No. Borrowing changes financial risk, and the different operating business can also change business risk."
      ],
      "correct": 2,
      "why": "A pure recapitalization holds operations fixed. This proposal also changes the assets and their operating exposure, so the usual unchanged-business-risk assumption does not automatically apply."
    },
    {
      "id": "e3r2-mc-25",
      "topic": "tradeoff",
      "diff": "m",
      "kind": "mc",
      "prompt": "An extra increment of debt adds $1.60 million of PV tax benefits and $2.10 million of PV expected distress and agency costs. What does the static trade-off model imply?",
      "choices": [
        "Reject this increment because it reduces firm value by $0.50 million.",
        "Accept it because tax savings increase firm value before distress costs are considered.",
        "Eliminate all outstanding debt because this increment proves that every dollar of existing borrowing destroys value."
      ],
      "correct": 0,
      "why": "The incremental change is 1.60 − 2.10 = −0.50 million. This conclusion concerns the additional debt, not necessarily all debt already outstanding."
    },
    {
      "id": "e3r2-mc-26",
      "topic": "tradeoff",
      "diff": "m",
      "kind": "mc",
      "prompt": "Why can financial-distress costs affect debt choices even before a company files for bankruptcy?",
      "choices": [
        "They cannot; a firm should ignore all potential distress costs until it has formally entered bankruptcy.",
        "Expected legal costs and disruptions to customers, suppliers, and operations can reduce value in advance.",
        "All distress costs are certain cash expenses paid immediately when the first bond is issued."
      ],
      "correct": 1,
      "why": "The relevant trade-off uses expected costs, including indirect costs. Their probability and size can rise with leverage before formal bankruptcy occurs."
    },
    {
      "id": "e3r2-mc-27",
      "topic": "pecking",
      "diff": "e",
      "kind": "mc",
      "prompt": "A company borrows after its internally generated cash falls short of planned investment. Under pecking-order theory, does this establish that managers have found a fixed optimal debt ratio?",
      "choices": [
        "Yes. Any use of debt proves that marginal tax benefits exactly equal marginal expected distress costs.",
        "Yes. Pecking-order theory requires the same debt ratio for all firms with the same corporate tax rate.",
        "No. Borrowing can reflect an external funding need and a preference for debt over new equity, without implying a fixed leverage target."
      ],
      "correct": 2,
      "why": "The pecking order is a financing preference: internal funds, then debt, then equity. A funding deficit can generate borrowing without the static trade-off model’s target-ratio interpretation."
    },
    {
      "id": "e3r2-mc-28",
      "topic": "mm2",
      "diff": "h",
      "kind": "mc",
      "prompt": "In a level-perpetuity tax-only example, expected EBIT, RU, RD, and permanent debt are held fixed. If the corporate tax rate rises, which statement is necessarily correct?",
      "choices": [
        "The unlevered value falls while the value of the interest tax shield rises.",
        "Unlevered value and the tax shield both rise because taxes always increase the business’s operating cash flow.",
        "Levered value must rise solely because TC × D rises, so there is no need to reconsider the unlevered value."
      ],
      "correct": 0,
      "why": "VU = EBIT(1 − TC)/RU falls; PV(shield) = TC × D rises. Both effects must be considered when evaluating total value. Do not hold VU fixed while also changing taxes on the same EBIT."
    },
    {
      "id": "e3r2-mc-29",
      "topic": "forms",
      "diff": "e",
      "kind": "mc",
      "prompt": "A buyer purchases a controlling interest in a target’s voting shares, pays cash, and retains the target as a subsidiary. Which classification is correct?",
      "choices": [
        "A stock acquisition with stock consideration because target shares change hands.",
        "A stock acquisition with cash consideration.",
        "An asset acquisition because buying a company indirectly provides access to its assets."
      ],
      "correct": 1,
      "why": "Transaction form describes what is bought; consideration describes how it is paid for. Purchasing shares need not involve issuing shares."
    },
    {
      "id": "e3r2-mc-30",
      "topic": "forms",
      "diff": "e",
      "kind": "mc",
      "prompt": "A sporting-goods retailer acquires a manufacturer that supplies some of the products sold in its stores. Which classification fits that relationship?",
      "choices": [
        "Horizontal, because every acquisition involving companies with business customers occurs at the same stage of production.",
        "Conglomerate, because owning a supplier always creates an unrelated business with no operating connection.",
        "Vertical: the firms operate at different stages in the supply chain."
      ],
      "correct": 2,
      "why": "Classification describes the firms’ operating relationship. Retailing and manufacturing sit at different stages; integration may create benefits or costs, so the classification alone does not establish positive NPV."
    },
    {
      "id": "e3r2-mc-31",
      "topic": "synergy",
      "diff": "m",
      "kind": "mc",
      "prompt": "A buyer changes an offer from cash to its own shares, but expected operations, taxes, and investment needs are unchanged. What happens to the estimated operating synergy?",
      "choices": [
        "The operating synergy estimate stays unchanged; the payment method can still change who owns the combined business and how gains are shared.",
        "Operating synergy rises by the quoted value of the new shares because stock consideration creates free operating cash flow.",
        "Operating synergy disappears because only all-cash transactions can generate incremental FCFF."
      ],
      "correct": 0,
      "why": "Measure operating synergy from cash flows together versus separately. Changing consideration alone does not change those operating cash flows, although it can change ownership and financing outcomes."
    },
    {
      "id": "e3r2-mc-32",
      "topic": "synergy",
      "diff": "m",
      "kind": "mc",
      "prompt": "An acquisition is expected to increase revenue. Why is that fact alone insufficient to establish positive synergy value?",
      "choices": [
        "Revenue increases can never create synergy because only cost reductions count as cash-flow improvements.",
        "Added operating costs, taxes, integration costs, and investment needs may outweigh the revenue benefit.",
        "Every revenue increase creates equal FCFF automatically, so the only remaining issue is the bidder’s share count."
      ],
      "correct": 1,
      "why": "Value incremental after-tax free cash flow, net of necessary spending and integration. Revenue is only one channel."
    },
    {
      "id": "e3r2-mc-33",
      "topic": "premium",
      "diff": "m",
      "kind": "mc",
      "prompt": "With target standalone value and expected synergy fixed, what happens to the buyer’s NPV when bidding competition raises the price?",
      "choices": [
        "It rises because the higher premium creates an equal increase in the target’s operating FCFF.",
        "It stays unchanged because the purchase price affects accounting goodwill rather than shareholders’ wealth.",
        "It falls as more value is paid to the target’s owners."
      ],
      "correct": 2,
      "why": "Buyer NPV = target standalone equity value + PV(synergy) − equity purchase price. Price determines how the available gains are shared."
    },
    {
      "id": "e3r2-mc-34",
      "topic": "payment",
      "diff": "m",
      "kind": "mc",
      "prompt": "A target’s owners are offered buyer shares. Why should they examine the buyer’s fundamentals rather than treat the pre-offer stock quote as a guaranteed dollar payoff?",
      "choices": [
        "They would own a claim on the combined business; misvaluation or new information about the buyer can change what that claim is worth.",
        "A stock quote legally guarantees that sellers can redeem all new shares for that dollar amount at any later date.",
        "Newly issued shares have no economic value until the bidder pays an equal amount of cash to the target’s former owners."
      ],
      "correct": 0,
      "why": "Stock consideration exposes sellers to equity value and information about the bidder, including possible misvaluation. The quoted share price is evidence about value, not a guarantee; cash preservation does not make the ownership transferred free."
    },
    {
      "id": "e3r2-mc-35",
      "topic": "payment",
      "diff": "m",
      "kind": "mc",
      "prompt": "Compared with accepting a fixed cash price, what exposure do target shareholders take on when accepting a fixed number of buyer shares?",
      "choices": [
        "They receive a guaranteed dollar amount and therefore transfer all integration and synergy risk to the buyer.",
        "They participate in future gains and losses of the combined company.",
        "They retain ownership only in the target’s former assets, regardless of the buyer’s later performance."
      ],
      "correct": 1,
      "why": "Cash fixes the seller’s payment in this simplified setting. Buyer stock gives sellers an ownership interest in the combined business and its uncertain outcomes."
    },
    {
      "id": "e3r2-mc-36",
      "topic": "payment",
      "diff": "h",
      "kind": "mc",
      "prompt": "Combined equity value is higher in a stock-funded acquisition than in an otherwise comparable cash-funded acquisition. Does that alone make stock better for the buyer’s original owners?",
      "choices": [
        "Yes. Original owners receive all combined equity value even when new shares are issued to the sellers.",
        "Yes. Any new shares mechanically add wealth without giving the sellers an ownership interest.",
        "No. Compare the value retained by the original shareholders after accounting for new shares and retained cash."
      ],
      "correct": 2,
      "why": "A stock deal keeps cash but adds shareholders. Original owners’ wealth equals their shares × post-deal value per share, or their ownership fraction × combined equity value."
    },
    {
      "id": "e3r2-mc-37",
      "topic": "goodwill",
      "diff": "m",
      "kind": "mc",
      "prompt": "Two simplified purchase-price allocations use the same equity price and the same target standalone equity value. The second recognizes more identifiable intangible assets at fair value, with liabilities unchanged. What happens to goodwill and the acquisition premium?",
      "choices": [
        "Goodwill falls, while the premium is unchanged.",
        "Both rise because recognizing any additional asset requires adding that asset’s value to the acquisition price already agreed.",
        "The premium falls while goodwill is unchanged, because the premium is the accounting residual after identifiable assets are recognized."
      ],
      "correct": 0,
      "why": "Goodwill subtracts fair value of identifiable net assets from price. The premium subtracts standalone equity value from price. Changing the allocation alone changes the first benchmark, not the second."
    },
    {
      "id": "e3r2-mc-38",
      "topic": "goodwill",
      "diff": "h",
      "kind": "mc",
      "prompt": "When will goodwill exceed the acquisition premium in the simplified all-equity purchase framework?",
      "choices": [
        "In every acquisition, because goodwill is legally required to be larger than the premium.",
        "When the target’s standalone equity value exceeds the fair value of identifiable net assets.",
        "Only when the buyer’s acquisition NPV is negative."
      ],
      "correct": 1,
      "why": "Goodwill − premium = standalone equity value − fair value of identifiable net assets. There is no universal ranking, and neither amount alone establishes the buyer’s NPV."
    },
    {
      "id": "e3r2-mc-39",
      "topic": "defenses",
      "diff": "m",
      "kind": "mc",
      "prompt": "Management says an acquisition is successful because next year’s earnings per share will increase. What is the strongest response?",
      "choices": [
        "Any EPS increase proves a positive NPV even if integration requires substantial cash investment.",
        "An acquisition creates value only if the acquired company keeps its original brand forever.",
        "EPS growth alone does not show that the value of incremental cash flows exceeds the price paid."
      ],
      "correct": 2,
      "why": "Evaluate incremental cash flows, risk, integration costs, and price. EPS can change with accounting and financing without establishing economic value creation."
    },
    {
      "id": "e3r2-mc-40",
      "topic": "defenses",
      "diff": "m",
      "kind": "mc",
      "prompt": "What are two possible effects of a poison pill or other takeover defense?",
      "choices": [
        "It can strengthen bargaining for a higher price or help managers block a value-enhancing offer.",
        "It always helps shareholders because blocking any takeover automatically increases standalone cash flow.",
        "It forces every bidder to complete a merger at the current market price."
      ],
      "correct": 0,
      "why": "Resistance can improve terms or protect incumbent management. Shareholder value depends on whether better offers result or attractive transactions are prevented."
    }
  ]
};
