/* FINN 36003 Exam 3: public-review topics and original hypothetical practice. */
window.FIN36003_BANK = {
  "meta": {
    "examId": "exam-3",
    "edition": "Exam 3",
    "chaptersLabel": "Chapters 14–16 and 26",
    "examMinutes": 75,
    "mcCount": 10,
    "mcPoints": 4,
    "workoutCount": 4,
    "examPoints": 105,
    "scoreBase": 100,
    "progressKey": "finn36003-exam3-seen-v1",
    "simulationFamilies": [
      "wacc_capm",
      "ipo",
      "mm_tax",
      "cash_stock"
    ],
    "mcByChapter": {
      "ch14": 2,
      "ch15": 2,
      "ch16": 3,
      "ch26": 3
    }
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
  "questions": [
    {
      "id": "e3-mc-01",
      "topic": "wacc",
      "diff": "e",
      "kind": "mc",
      "prompt": "Why is a firm’s required return on debt typically lower than its required return on equity?",
      "choices": [
        "Lenders have contractual payments and priority over shareholders, making their claims generally less risky.",
        "Debt holders receive all of the firm’s upside after the contractual interest payment, so they accept a lower promised return.",
        "The corporate interest deduction guarantees that lenders cannot lose their principal."
      ],
      "correct": 0,
      "why": "Equity is the residual claim and absorbs losses before debt. The tax deduction lowers the issuer’s after-tax debt cost, but does not guarantee lenders repayment."
    },
    {
      "id": "e3-mc-02",
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
      "id": "e3-mc-03",
      "topic": "project",
      "diff": "m",
      "kind": "mc",
      "prompt": "How could a privately held cold-storage company estimate its cost of capital when its own shares do not trade?",
      "choices": [
        "Use the owners’ historical purchase price as the equity value and assume that privately held equity has no required return.",
        "Apply the company’s borrowing rate to every cash flow because private shares do not have a quoted beta.",
        "Use public firms with similar operating risk as evidence, then allow for the private company’s financing mix."
      ],
      "correct": 2,
      "why": "Comparable businesses provide evidence about business risk and required returns. A private company’s equity still has an opportunity cost, and debt alone does not measure the risk of its operating assets."
    },
    {
      "id": "e3-mc-04",
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
      "id": "e3-mc-05",
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
      "id": "e3-mc-06",
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
      "id": "e3-mc-07",
      "topic": "equity",
      "diff": "e",
      "kind": "mc",
      "prompt": "Stock A has a higher equity beta than Stock B. Under CAPM, what follows if the market-risk premium is positive?",
      "choices": [
        "Stock A has a higher required return; its realized return can still be lower.",
        "Stock A must outperform Stock B every year, since higher beta guarantees higher cash flows.",
        "Stock B has the higher required return because it provides a safer investment."
      ],
      "correct": 0,
      "why": "A higher beta means greater exposure to systematic risk and a higher required return. Realized outcomes remain uncertain."
    },
    {
      "id": "e3-mc-08",
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
      "id": "e3-mc-09",
      "topic": "funds",
      "diff": "e",
      "kind": "mc",
      "prompt": "A university endowment commits capital to a buyout fund. The fund manager selects acquisitions and oversees portfolio companies. Who plays which role?",
      "choices": [
        "The endowment is GP because it provides most of the capital, and each portfolio company is an LP.",
        "All participants are direct lenders, so ownership and investment selection do not matter.",
        "The endowment is an LP, and the fund manager acts as GP."
      ],
      "correct": 2,
      "why": "LPs commit capital and receive distributions. GPs organize, select, and manage investments, typically receiving fees and performance compensation."
    },
    {
      "id": "e3-mc-10",
      "topic": "ownership",
      "diff": "m",
      "kind": "mc",
      "prompt": "Why might a successful company prefer to remain privately held?",
      "choices": [
        "Its owners may value control and lower public disclosure obligations despite more limited liquidity.",
        "Private ownership eliminates the need to provide investors with returns or disclose any information to them.",
        "Private companies are guaranteed cheaper equity than public companies because their shares do not fluctuate daily."
      ],
      "correct": 0,
      "why": "Remaining private involves trade-offs among control, disclosure, financing access, and liquidity. It does not eliminate investors’ required returns or monitoring."
    },
    {
      "id": "e3-mc-11",
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
      "id": "e3-mc-12",
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
      "id": "e3-mc-13",
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
      "id": "e3-mc-14",
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
      "id": "e3-mc-15",
      "topic": "ipo",
      "diff": "m",
      "kind": "mc",
      "prompt": "An IPO closes above its offer price. How does the resulting “money left on the table” differ from the underwriting spread?",
      "choices": [
        "Both are additional cash checks the issuer must send to underwriters after the stock closes on its first trading day.",
        "The spread is the first-day price increase, while money left on the table is the underwriter’s contractual fee.",
        "It is an opportunity cost of selling at the offer price; the spread is the difference between offer proceeds and issuer proceeds."
      ],
      "correct": 2,
      "why": "Money left on the table = shares issued × (first-day close − offer price). Spread = shares issued × (offer price − issuer price), ignoring other issuance costs."
    },
    {
      "id": "e3-mc-16",
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
      "id": "e3-mc-17",
      "topic": "risk",
      "diff": "e",
      "kind": "mc",
      "prompt": "A company issues corporate bonds and uses all proceeds to repurchase shares. What happens to its financing mix?",
      "choices": [
        "Debt falls and equity rises because repurchasing shares raises new money from stockholders.",
        "Debt increases and the remaining equity base becomes more leveraged.",
        "The operating assets must increase by the amount of the bond issue even though the proceeds are paid out."
      ],
      "correct": 1,
      "why": "Borrowing followed by a repurchase changes claims on the business. It does not by itself expand the operating assets; equity holders face more financial risk."
    },
    {
      "id": "e3-mc-18",
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
      "id": "e3-mc-19",
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
      "id": "e3-mc-20",
      "topic": "mm1",
      "diff": "m",
      "kind": "mc",
      "prompt": "Why does cheaper debt fail to reduce WACC in the no-tax M&M benchmark?",
      "choices": [
        "The cost of equity stays fixed, but interest expense increases operating cash flows by exactly the amount needed.",
        "The remaining equity becomes riskier and its required return rises enough to offset the debt’s lower cost.",
        "The firm must use its historical book weights after issuing debt, which prevents WACC from changing."
      ],
      "correct": 1,
      "why": "No-tax Proposition II raises RE with D/E. Weighted required returns still equal the operating asset return, and total firm value is unchanged."
    },
    {
      "id": "e3-mc-21",
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
      "id": "e3-mc-22",
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
      "id": "e3-mc-23",
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
      "id": "e3-mc-24",
      "topic": "risk",
      "diff": "e",
      "kind": "mc",
      "prompt": "Two financing plans have identical weak, expected, and strong EBIT outcomes. One plan uses debt and has a wider range of equity returns. What explains the difference?",
      "choices": [
        "The debt-financed plan must have higher business risk because interest changes the firm’s product demand.",
        "The debt-financed plan has lower financial risk because less equity was initially invested.",
        "The plans have the same business risk, but the debt-financed plan adds financial risk to equity."
      ],
      "correct": 2,
      "why": "Fixed financing obligations magnify changes in earnings available per dollar of equity. They do not themselves change the operating-state EBIT outcomes."
    },
    {
      "id": "e3-mc-25",
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
      "id": "e3-mc-26",
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
      "id": "e3-mc-27",
      "topic": "pecking",
      "diff": "e",
      "kind": "mc",
      "prompt": "A profitable company uses retained cash first, then borrows, and issues new equity only as a last resort. Which theory most directly describes this ranking?",
      "choices": [
        "The static trade-off model’s requirement that every firm maintain exactly 50% debt at all times.",
        "The no-tax M&M claim that shareholders prefer internal funds because retained cash has no opportunity cost.",
        "Pecking-order theory."
      ],
      "correct": 2,
      "why": "Information asymmetry and issuance costs can make internal funds preferable, followed by debt and then equity. Internal funds still have an opportunity cost."
    },
    {
      "id": "e3-mc-28",
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
      "id": "e3-mc-29",
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
      "id": "e3-mc-30",
      "topic": "forms",
      "diff": "e",
      "kind": "mc",
      "prompt": "A regional grocery chain acquires another chain operating competing grocery stores. Which classification fits most directly?",
      "choices": [
        "Vertical, because all transactions require one company to pay another company.",
        "Conglomerate, because the two businesses have different names and shareholders.",
        "Horizontal."
      ],
      "correct": 2,
      "why": "The firms operate at the same stage in the same industry. Vertical transactions connect stages of a value chain; conglomerate transactions involve unrelated businesses."
    },
    {
      "id": "e3-mc-31",
      "topic": "synergy",
      "diff": "m",
      "kind": "mc",
      "prompt": "Which change most directly creates positive operating synergy, holding other cash flows constant?",
      "choices": [
        "Complementary operations increase combined after-tax FCFF beyond what the firms would generate separately.",
        "The target is valuable on its own, even though combined FCFF exactly equals the sum of the separate firms’ FCFF.",
        "The buyer pays a higher premium without changing operations or investment needs."
      ],
      "correct": 0,
      "why": "Synergy is incremental cash flow relative to operating separately. Existing standalone value and a higher purchase price do not by themselves create additional operating cash flow."
    },
    {
      "id": "e3-mc-32",
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
      "id": "e3-mc-33",
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
      "id": "e3-mc-34",
      "topic": "payment",
      "diff": "m",
      "kind": "mc",
      "prompt": "A buyer offers a fixed number of newly issued shares, initially quoted at $100 million. What determines the value ultimately received by the target’s owners in this simplified completed-deal model?",
      "choices": [
        "The fixed number of shares multiplied by their post-deal value per share.",
        "Exactly $100 million regardless of the combined share price, because every stock offer guarantees its initial quoted value.",
        "The buyer’s pre-deal equity value divided only by the number of new shares."
      ],
      "correct": 0,
      "why": "A fixed share count does not fix dollar consideration. New shares participate in the value of the combined firm; use its post-deal share count and equity value."
    },
    {
      "id": "e3-mc-35",
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
      "id": "e3-mc-36",
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
      "id": "e3-mc-37",
      "topic": "goodwill",
      "diff": "m",
      "kind": "mc",
      "prompt": "Under the simplified purchase-price-allocation framework, which amount is subtracted from the purchase price when calculating goodwill?",
      "choices": [
        "The fair value of identifiable assets less liabilities assumed.",
        "The target’s standalone equity value, which makes goodwill identical to the acquisition premium in every deal.",
        "Only the historical book value of the target’s tangible assets, ignoring identifiable intangibles and liabilities."
      ],
      "correct": 0,
      "why": "Goodwill is an accounting residual based on identifiable net assets at fair value. The acquisition premium compares the price with standalone equity value."
    },
    {
      "id": "e3-mc-38",
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
      "id": "e3-mc-39",
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
      "id": "e3-mc-40",
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
  ]
};
