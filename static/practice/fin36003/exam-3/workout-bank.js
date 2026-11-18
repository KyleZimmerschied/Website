/* Varied review cases; model responses support student self-review. */
Object.assign(window.FIN36003_BANK, {
  "workoutFamilies": [
    {
      "id": "wacc_capm",
      "label": "Cost of capital: CAPM and market weights",
      "chapter": "ch14"
    },
    {
      "id": "wacc_dividend_bonds",
      "label": "Cost of capital: dividend growth and bond YTM",
      "chapter": "ch14"
    },
    {
      "id": "ipo",
      "label": "IPO: proceeds, spread, and underpricing",
      "chapter": "ch15"
    },
    {
      "id": "mm_no_tax",
      "label": "M&M Case 1: cash-flow allocation and value",
      "chapter": "ch16"
    },
    {
      "id": "mm_tax",
      "label": "M&M Case 2: taxes, value, RE, and WACC",
      "chapter": "ch16"
    },
    {
      "id": "synergy",
      "label": "Acquisition value: positive or negative synergy",
      "chapter": "ch26"
    },
    {
      "id": "cash_stock",
      "label": "Acquisition payment: cash versus fixed shares",
      "chapter": "ch26"
    },
    {
      "id": "dcf",
      "label": "DCF: forecast cash flows, terminal value, and equity",
      "chapter": "ch14"
    }
  ],
  "workouts": [
    {
      "id": "e3r2-wacc_capm-1",
      "family": "wacc_capm",
      "title": "Ozark Route Supply: cost of capital",
      "intro": "Hypothetical company. Use current market values. The before-tax cost of debt is provided; no bond-yield calculation is needed.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Shares outstanding</th><td>16 million</td></tr><tr><th scope=\"row\">Share price</th><td>$25.00</td></tr><tr><th scope=\"row\">Equity beta</th><td>1.10</td></tr><tr><th scope=\"row\">Risk-free rate</th><td>3.50%</td></tr><tr><th scope=\"row\">Expected market-risk premium</th><td>6.00%</td></tr><tr><th scope=\"row\">Debt: book value</th><td>$190.00</td></tr><tr><th scope=\"row\">Debt: market value</th><td>$160.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>5.50%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>25%</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "e",
          "prompt": "What is the market value of equity?",
          "answer": 400,
          "unit": "$ million",
          "solution": "E = 16 million shares × $25 = $400.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "we",
          "prompt": "What fraction of total market financing is equity?",
          "answer": 71.42857142857143,
          "unit": "%",
          "solution": "wE = 400.00/(400.00 + 160.00) = 71.43%. Book debt is not the weight input.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "re",
          "prompt": "What required equity return follows from the CAPM inputs?",
          "answer": 10.100000000000001,
          "unit": "%",
          "solution": "RE = 3.5% + 1.1(6%) = 10.10%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "wacc",
          "prompt": "What is the overall WACC?",
          "answer": 8.392857142857144,
          "unit": "%",
          "solution": "Use market weights: (400.00/560.00)(10.10%) + (160.00/560.00)(4.12%) = 8.39%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "A classmate substitutes book debt for market debt. Explain the conceptual problem, without assuming the direction of the resulting WACC error.",
          "solution": "Weights should reflect current market values of investor claims. Using book debt can overweight or underweight debt; the direction depends on the actual values and component returns.",
          "rubric": [
            "1 point: identify current market values as the relevant basis.",
            "1 point: explain that historical book values need not equal those values."
          ],
          "points": 2
        },
        {
          "type": "text",
          "prompt": "A safer replacement project has a 7.00% IRR and a separately estimated 6.00% hurdle rate. What is the decision, and why can it differ from using the company WACC?",
          "solution": "Accept under the conventional-cash-flow assumptions: 7.00% exceeds the project’s 6.00% required return. The safer project need not use a company-wide hurdle rate that reflects other business risks.",
          "rubric": [
            "1 point: accept.",
            "1 point: compare the project IRR with its risk-matched hurdle rate."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "n": 16,
        "p": 25,
        "beta": 1.1,
        "rf": 3.5,
        "mrp": 6,
        "d": 160,
        "rd": 5.5,
        "t": 0.25
      },
      "templateId": "capm-market-values"
    },
    {
      "id": "e3r2-wacc_capm-2",
      "family": "wacc_capm",
      "title": "River Valley Packaging: cost of capital",
      "intro": "Hypothetical company. Use current market values. The before-tax cost of debt is provided; no bond-yield calculation is needed.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Shares outstanding</th><td>24 million</td></tr><tr><th scope=\"row\">Share price</th><td>$20.00</td></tr><tr><th scope=\"row\">Equity beta</th><td>0.90</td></tr><tr><th scope=\"row\">Risk-free rate</th><td>4.00%</td></tr><tr><th scope=\"row\">Expected market-risk premium</th><td>5.00%</td></tr><tr><th scope=\"row\">Debt: book value</th><td>$150.00</td></tr><tr><th scope=\"row\">Debt: market value</th><td>$120.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>6.00%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>20%</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "re",
          "prompt": "What required equity return follows from the CAPM inputs?",
          "answer": 8.5,
          "unit": "%",
          "solution": "RE = 4% + 0.9(5%) = 8.50%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "wacc",
          "prompt": "What is the overall WACC?",
          "answer": 7.760000000000001,
          "unit": "%",
          "solution": "Use market weights: (480.00/600.00)(8.50%) + (120.00/600.00)(4.80%) = 7.76%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "re_new",
          "prompt": "If the market-risk premium rises by 1 percentage point, what is the new RE? Hold beta and Rf fixed.",
          "answer": 9.4,
          "unit": "%",
          "solution": "RE rises by β × 1 percentage point = 0.90 percentage points, to 9.40%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "wacc_new",
          "prompt": "With component debt cost and market weights fixed, what is the new WACC?",
          "answer": 8.48,
          "unit": "%",
          "solution": "Only the equity component changes: new WACC = 7.76% + (0.800000)(0.90 percentage points) = 8.48%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does the revised required return imply that the firm’s operating forecast has increased?",
          "solution": "No. This scenario changes investors’ required compensation for systematic risk, not the operating cash-flow forecast. Discounting an unchanged positive forecast at a higher rate lowers its present value.",
          "rubric": [
            "1 point: distinguish the discount-rate change from a cash-flow change.",
            "1 point: higher discounting lowers value for unchanged positive cash flows."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "n": 24,
        "p": 20,
        "beta": 0.9,
        "rf": 4,
        "mrp": 5,
        "d": 120,
        "rd": 6,
        "t": 0.2,
        "mrp_increase": 1
      },
      "templateId": "capm-market-premium-sensitivity"
    },
    {
      "id": "e3r2-wacc_capm-3",
      "family": "wacc_capm",
      "title": "Spring Creek Distribution: cost of capital",
      "intro": "Hypothetical company. Use current market values. The before-tax cost of debt is provided; no bond-yield calculation is needed.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Shares outstanding</th><td>18 million</td></tr><tr><th scope=\"row\">Share price</th><td>$30.00</td></tr><tr><th scope=\"row\">Equity beta</th><td>1.20</td></tr><tr><th scope=\"row\">Risk-free rate</th><td>3.00%</td></tr><tr><th scope=\"row\">Expected market-risk premium</th><td>6.50%</td></tr><tr><th scope=\"row\">Debt: book value</th><td>$210.00</td></tr><tr><th scope=\"row\">Debt: market value</th><td>$180.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>5.00%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>30%</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "ad",
          "prompt": "What after-tax debt rate belongs in WACC?",
          "answer": 3.5,
          "unit": "%",
          "solution": "RD(1 − TC) = 5%(1 − 30%) = 3.50%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "re",
          "prompt": "What required equity return follows from the CAPM inputs?",
          "answer": 10.8,
          "unit": "%",
          "solution": "RE = 3% + 1.2(6.5%) = 10.80%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "wacc_target",
          "prompt": "A comparable-risk project uses 60% equity and 40% debt at the stated required returns. What is its WACC?",
          "answer": 7.880000000000001,
          "unit": "%",
          "solution": "Given the suitable assumed component returns: 0.60(10.80%) + 0.40(3.50%) = 7.88%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Can you assume that the company could move to any leverage ratio while both component required returns remain fixed?",
          "solution": "No. Those returns are assumptions for this comparison, not a universal response to leverage. Changing leverage can change the financial risk and required returns of equity and debt.",
          "rubric": [
            "1 point: reject holding component returns fixed at arbitrary leverage.",
            "1 point: connect changed leverage to investor risk and required returns."
          ],
          "points": 2
        },
        {
          "type": "text",
          "prompt": "Why could public comparables help estimate this project’s hurdle rate even if the project is operated by a private subsidiary?",
          "solution": "Similar public businesses provide evidence about operating risk and investor required returns. Private ownership does not make the equity opportunity cost zero; the financing assumptions must also fit.",
          "rubric": [
            "1 point: comparables inform risk and required returns.",
            "1 point: private capital still has an opportunity cost."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "n": 18,
        "p": 30,
        "beta": 1.2,
        "rf": 3,
        "mrp": 6.5,
        "d": 180,
        "rd": 5,
        "t": 0.3,
        "target_we": 0.6
      },
      "templateId": "capm-comparable-financing"
    },
    {
      "id": "e3r2-wacc_capm-4",
      "family": "wacc_capm",
      "title": "Prairie Cold Storage: cost of capital",
      "intro": "Hypothetical company. Use current market values. The before-tax cost of debt is provided; no bond-yield calculation is needed.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Shares outstanding</th><td>30 million</td></tr><tr><th scope=\"row\">Share price</th><td>$16.00</td></tr><tr><th scope=\"row\">Equity beta</th><td>0.80</td></tr><tr><th scope=\"row\">Risk-free rate</th><td>4.00%</td></tr><tr><th scope=\"row\">Expected market-risk premium</th><td>6.00%</td></tr><tr><th scope=\"row\">Debt: book value</th><td>$185.00</td></tr><tr><th scope=\"row\">Debt: market value</th><td>$160.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>5.60%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>25%</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "we",
          "prompt": "What fraction of total market financing is equity?",
          "answer": 75.0,
          "unit": "%",
          "solution": "wE = 480.00/(480.00 + 160.00) = 75.00%. Book debt is not the weight input.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "wacc",
          "prompt": "What is the overall WACC?",
          "answer": 7.65,
          "unit": "%",
          "solution": "Use market weights: (480.00/640.00)(8.80%) + (160.00/640.00)(4.20%) = 7.65%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "A spreadsheet reports WACC of 7.52% using book debt of $185 million. Is that the correct market-weight estimate? Identify the error.",
          "solution": "No. Market debt is $160.00 million, not $185 million. The relevant market-weight WACC is 7.65%. Using book debt changes the financing weights.",
          "rubric": [
            "1 point: use market debt.",
            "1 point: explain the effect on weights or identify the correct market-weight estimate."
          ],
          "points": 2
        },
        {
          "type": "text",
          "prompt": "Suppose this is a grocery distributor considering a highly uncertain entertainment venture. What additional evidence is needed before applying its WACC?",
          "solution": "Evidence about the new venture’s systematic operating risk and suitable financing assumptions is needed. An unrelated venture may require a different hurdle rate, informed by risk-matched comparables.",
          "rubric": [
            "1 point: identify the venture’s operating risk.",
            "1 point: propose risk-matched evidence rather than automatically copying company WACC."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "n": 30,
        "p": 16,
        "beta": 0.8,
        "rf": 4,
        "mrp": 6,
        "d": 160,
        "rd": 5.6,
        "t": 0.25,
        "book_debt": 185
      },
      "templateId": "capm-spreadsheet-error-diagnosis"
    },
    {
      "id": "e3r2-wacc_capm-5",
      "family": "wacc_capm",
      "title": "Buffalo River Logistics: cost of capital",
      "intro": "Hypothetical company. Use current market values. The before-tax cost of debt is provided; no bond-yield calculation is needed.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Shares outstanding</th><td>12 million</td></tr><tr><th scope=\"row\">Share price</th><td>$40.00</td></tr><tr><th scope=\"row\">Equity beta</th><td>1.30</td></tr><tr><th scope=\"row\">Risk-free rate</th><td>3.50%</td></tr><tr><th scope=\"row\">Expected market-risk premium</th><td>5.00%</td></tr><tr><th scope=\"row\">Debt: book value</th><td>$220.00</td></tr><tr><th scope=\"row\">Debt: market value</th><td>$240.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>6.20%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>20%</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "wacc",
          "prompt": "What is the overall WACC?",
          "answer": 8.32,
          "unit": "%",
          "solution": "Use market weights: (480.00/720.00)(10.00%) + (240.00/720.00)(4.96%) = 8.32%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "A separate high-risk project has IRR 9.07% and a risk-matched hurdle rate of 10.32%. Should it be accepted?",
          "solution": "Reject under the conventional-cash-flow assumptions: its IRR is below its own risk-appropriate required return, even though IRR exceeds the company WACC.",
          "rubric": [
            "1 point: reject.",
            "1 point: compare IRR with the project’s hurdle rate."
          ],
          "points": 2
        },
        {
          "calcKey": "e",
          "prompt": "What is the market value of equity?",
          "answer": 480,
          "unit": "$ million",
          "solution": "E = 12 million shares × $40 = $480.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "re",
          "prompt": "What required equity return follows from the CAPM inputs?",
          "answer": 10.0,
          "unit": "%",
          "solution": "RE = 3.5% + 1.3(5%) = 10.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "The project would be paid for from retained cash. Does that remove its opportunity cost?",
          "solution": "No. Retained cash belongs to investors and has an opportunity cost. The funding source alone does not remove operating risk or justify a zero hurdle rate.",
          "rubric": [
            "1 point: retained cash has an opportunity cost.",
            "1 point: the funding source does not set the project’s operating risk."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "n": 12,
        "p": 40,
        "beta": 1.3,
        "rf": 3.5,
        "mrp": 5,
        "d": 240,
        "rd": 6.2,
        "t": 0.2,
        "project_irr": 9.07,
        "project_hurdle": 10.32
      },
      "templateId": "capm-separate-investment-decision"
    },
    {
      "id": "e3r2-ipo-1",
      "family": "ipo",
      "title": "Trailhead Retail Systems: who receives the cash?",
      "intro": "Hypothetical firm-commitment offering. Dollar proceeds are in millions. Ignore issuance expenses other than the stated underwriting spread. Primary shares raise cash for the company; existing-owner sales pay those owners.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">New company shares</th><td>3 million</td></tr><tr><th scope=\"row\">Public offer price</th><td>$18.00</td></tr><tr><th scope=\"row\">Issuer price</th><td>$17.10</td></tr><tr><th scope=\"row\">Operating plan needs</th><td>$48.30</td></tr><tr><th scope=\"row\">Founder separately sells existing shares</th><td>1 million at the offer price</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "gross",
          "prompt": "What gross public offer proceeds come from the company’s newly issued shares?",
          "answer": 54,
          "unit": "$ million",
          "solution": "3 × $18.00 = $54.00 million. The founder’s separate sale is excluded.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "net",
          "prompt": "How much cash actually enters the company?",
          "answer": 51.300000000000004,
          "unit": "$ million",
          "solution": "3 × $17.10 = $51.30 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "funding_surplus",
          "prompt": "How much company cash is left after funding the operating plan?",
          "answer": 3.0,
          "unit": "$ million",
          "solution": "Company net proceeds − funding need = 51.30 − 48.30 = $3.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "secondary",
          "prompt": "What cash goes directly to the founder from the separate sale?",
          "answer": 18,
          "unit": "$ million",
          "solution": "1 million existing shares × $18.00 = $18.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Why would adding the founder’s sale proceeds to the company’s financing budget be a mistake?",
          "solution": "The secondary-sale cash belongs to the selling founder. It changes ownership but does not fund the company’s operating plan.",
          "rubric": [
            "1 point: identify the founder as recipient.",
            "1 point: separate an ownership transfer from new company funding."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "shares": 3,
        "issuer": 17.1,
        "offer": 18,
        "close": 21.6,
        "secondary": 1,
        "funding_need": 48.300000000000004
      },
      "templateId": "ipo-financing-budget"
    },
    {
      "id": "e3r2-ipo-2",
      "family": "ipo",
      "title": "Natural State Analytics: an initial public offering",
      "intro": "Hypothetical firm-commitment offering. Dollar proceeds are in millions. Ignore issuance expenses other than the stated underwriting spread. Primary shares raise cash for the company; existing-owner sales pay those owners.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Target net cash for the company</th><td>$57.00</td></tr><tr><th scope=\"row\">Issuer price per new share</th><td>$22.80</td></tr><tr><th scope=\"row\">Public offer price</th><td>$24.00</td></tr><tr><th scope=\"row\">First-day closing price</th><td>$27.60</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "shares_needed",
          "prompt": "How many new shares are needed to meet the net-cash target?",
          "answer": 2.5,
          "unit": "million shares",
          "solution": "New shares = target net cash / issuer price = 57.00/22.80 = 2.50 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "spread",
          "prompt": "What total spread does that offering imply?",
          "answer": 2.9999999999999982,
          "unit": "$ million",
          "solution": "2.50 million × ($24.00 − $22.80) = $3.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "under_dollar",
          "prompt": "How much does an IPO purchaser gain per share by the first-day close, before fees?",
          "answer": 3.6000000000000014,
          "unit": "$ per share",
          "solution": "First-day mark-to-market gain = $27.60 − $24.00 = $3.60 per share.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "If the first-day closing price changes after the shares are sold, does the company’s already-agreed net cash automatically change?",
          "solution": "No. The firm receives the agreed issuer price for its new shares. Later trading changes investor wealth, not the contractual proceeds already received by the issuer.",
          "rubric": [
            "1 point: company net cash does not automatically change.",
            "1 point: distinguish the issuer’s transaction from later trading."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "shares": 2.5,
        "issuer": 22.8,
        "offer": 24,
        "close": 27.6,
        "secondary": 0.5,
        "net_target": 57.0
      },
      "templateId": "ipo-solve-required-issue-size"
    },
    {
      "id": "e3r2-ipo-3",
      "family": "ipo",
      "title": "Ozark Inventory Software: an initial public offering",
      "intro": "Hypothetical firm-commitment offering. Dollar proceeds are in millions. Ignore issuance expenses other than the stated underwriting spread. Primary shares raise cash for the company; existing-owner sales pay those owners.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">New company shares</th><td>4 million</td></tr><tr><th scope=\"row\">Public offer price in either proposal</th><td>$15.00</td></tr><tr><th scope=\"row\">Proposal A issuer price</th><td>$14.25</td></tr><tr><th scope=\"row\">Proposal B issuer price</th><td>$14.40</td></tr><tr><th scope=\"row\">Assumed first-day close under either proposal</th><td>$18.00</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "extra_net",
          "prompt": "How much more net cash does Proposal B provide than Proposal A?",
          "answer": 0.6,
          "unit": "$ million",
          "solution": "The issuer receives $0.15 more on each of 4 million shares: $0.60 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "alt_spread",
          "prompt": "What is Proposal B’s total underwriting spread?",
          "answer": 2.3999999999999986,
          "unit": "$ million",
          "solution": "4 × ($15.00 − $14.40) = $2.40 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "under_pct",
          "prompt": "What is underpricing as a percentage of the public offer price?",
          "answer": 19.999999999999996,
          "unit": "%",
          "solution": "($18.00 − $15.00)/$15.00 = 20.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does negotiating a smaller spread necessarily eliminate money left on the table in this comparison?",
          "solution": "No. The spread depends on the offer-minus-issuer price gap; underpricing depends on the first-day-close-minus-offer price gap. With offer and close held fixed, reducing the spread leaves underpricing unchanged.",
          "rubric": [
            "1 point: distinguish the two price gaps.",
            "1 point: explain why underpricing stays unchanged under the stated comparison."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "shares": 4,
        "issuer": 14.25,
        "offer": 15,
        "close": 18,
        "secondary": 0.75,
        "alt_issuer": 14.4
      },
      "templateId": "ipo-compare-underwriting-proposals"
    },
    {
      "id": "e3r2-ipo-4",
      "family": "ipo",
      "title": "Summit Delivery Network: an initial public offering",
      "intro": "Hypothetical firm-commitment offering. Dollar proceeds are in millions. Ignore issuance expenses other than the stated underwriting spread. Primary shares raise cash for the company; existing-owner sales pay those owners.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">New company shares</th><td>2 million</td></tr><tr><th scope=\"row\">Issuer price</th><td>$28.20</td></tr><tr><th scope=\"row\">Public offer price</th><td>$30.00</td></tr><tr><th scope=\"row\">First-day closing price</th><td>$28.20</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "net",
          "prompt": "What are net proceeds received by the company?",
          "answer": 56.4,
          "unit": "$ million",
          "solution": "2 × $28.20 = $56.40 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "under_pct",
          "prompt": "What is (first-day close − offer price) / offer price? Keep the sign.",
          "answer": -6.000000000000005,
          "unit": "%",
          "solution": "($28.20 − $30.00)/$30.00 = -6.00%. This is a negative first-day return, rather than positive underpricing.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "spread",
          "prompt": "What is the total contractual underwriting spread?",
          "answer": 3.6000000000000014,
          "unit": "$ million",
          "solution": "2 × ($30.00 − $28.20) = $3.60 million. The spread is distinct from the aftermarket price change.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does a firm-commitment offering guarantee an IPO investor a first-day profit? Use this example.",
          "solution": "No. The company/underwriter sale terms do not guarantee a profitable aftermarket price for IPO investors. Here an investor who buys at the offer price has a negative mark-to-market first-day return.",
          "rubric": [
            "1 point: no guaranteed first-day profit.",
            "1 point: support with the below-offer closing price."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "shares": 2,
        "issuer": 28.2,
        "offer": 30,
        "close": 28.2,
        "secondary": 0.6
      },
      "templateId": "ipo-negative-first-day-return"
    },
    {
      "id": "e3r2-ipo-5",
      "family": "ipo",
      "title": "Delta Shelf Technology: an initial public offering",
      "intro": "Hypothetical firm-commitment offering. Dollar proceeds are in millions. Ignore issuance expenses other than the stated underwriting spread. Primary shares raise cash for the company; existing-owner sales pay those owners.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Existing shares before offering</th><td>20 million</td></tr><tr><th scope=\"row\">New company shares issued</th><td>5 million</td></tr><tr><th scope=\"row\">Issuer price</th><td>$11.28</td></tr><tr><th scope=\"row\">Public offer price</th><td>$12.00</td></tr><tr><th scope=\"row\">Founder sells existing shares</th><td>1.5 million at offer price</td></tr><tr><th scope=\"row\">First-day closing price</th><td>$13.80</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "post_shares",
          "prompt": "How many shares are outstanding after both transactions?",
          "answer": 25,
          "unit": "million shares",
          "solution": "Only the new issue adds shares: 20 + 5 = 25.00 million. Reselling founder shares does not create additional shares.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "net",
          "prompt": "How much new cash enters the company?",
          "answer": 56.4,
          "unit": "$ million",
          "solution": "5 million primary shares × $11.28 = $56.40 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "left",
          "prompt": "What is money left on the table on the newly issued shares only?",
          "answer": 9.000000000000004,
          "unit": "$ million",
          "solution": "5 × ($13.80 − $12.00) = $9.00 million. Do not include the founder’s secondary shares in issuer money left on the table.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does a smaller ownership percentage after a primary issue alone prove that existing owners lost dollar wealth?",
          "solution": "No. A new issue adds both shares and company cash. Evaluate the value of what owners retain and what the company receives, not only the percentage ownership.",
          "rubric": [
            "1 point: percentage dilution alone is insufficient.",
            "1 point: account for the cash raised or retained ownership value."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "shares": 5,
        "issuer": 11.28,
        "offer": 12,
        "close": 13.8,
        "secondary": 1.5,
        "pre_shares": 20
      },
      "templateId": "ipo-primary-secondary-share-count"
    },
    {
      "id": "e3r2-mm_tax-1",
      "family": "mm_tax",
      "title": "Ozark Cold Storage: permanent debt and taxes",
      "intro": "Hypothetical all-equity firm issues permanent debt and pays all proceeds as a special dividend. Expected EBIT is a level perpetuity beginning next year. Depreciation equals capital spending, ΔNWC = 0, and there is no excess cash. Interest deductions are fully usable; discount the level tax shield at RD. Ignore other financing frictions.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Annual expected EBIT</th><td>$20.00</td></tr><tr><th scope=\"row\">Unlevered required return RU</th><td>10.00%</td></tr><tr><th scope=\"row\">Permanent debt issued</th><td>$50.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>4.00%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>30%</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "fcff",
          "prompt": "What annual operating FCFF is generated before financing tax benefits?",
          "answer": 14.0,
          "unit": "$ million per year",
          "solution": "With zero net investment: FCFF = 20(1 − 30%) = $14.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "annual_shield",
          "prompt": "What annual corporate tax saving follows from the interest deduction?",
          "answer": 0.6,
          "unit": "$ million per year",
          "solution": "Annual interest = 50(4.00%); shield = interest × 30% = $0.60 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "vl",
          "prompt": "What is total levered firm value?",
          "answer": 155.0,
          "unit": "$ million",
          "solution": "VU = 14.00/10.00% = 140.00; PV(shield) = 0.60/4.00% = 15.00. VL = $155.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "owners_wealth",
          "prompt": "Immediately after the special dividend, what is the original owners’ total wealth, counting both the payout and retained equity?",
          "answer": 155.0,
          "unit": "$ million",
          "solution": "Remaining equity = VL − D = $105.00 million; cash payout = $50.00 million. Total = $155.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Why can the value of the shares remaining in the company fall while the owners’ total wealth rises?",
          "solution": "The share value excludes cash already paid out. Add the special dividend to the remaining equity; the tax shield adds value to the investors as a group under the benchmark assumptions.",
          "rubric": [
            "1 point: include the cash distribution.",
            "1 point: distinguish remaining-share value from total owner wealth."
          ],
          "points": 2
        },
        {
          "calcKey": "wacc",
          "prompt": "What WACC is consistent with the levered value and operating FCFF?",
          "answer": 9.032258064516128,
          "unit": "%",
          "solution": "For this level perpetuity, operating FCFF/VL = 14.00/155.00 = 9.03%. The ordinary market-weight WACC gives the same result.",
          "points": 2,
          "tol": 0.02
        }
      ],
      "inputs": {
        "ebit": 20,
        "ru": 0.1,
        "rd": 0.04,
        "t": 0.3,
        "d": 50
      },
      "templateId": "tax-dividend-wealth-reconciliation"
    },
    {
      "id": "e3r2-mm_tax-2",
      "family": "mm_tax",
      "title": "Cedar Freight Services: permanent debt and taxes",
      "intro": "Hypothetical tax-only comparison. The company’s existing operating assets do not change. The additional debt proceeds are paid immediately as a special dividend; they are not retained as cash. Assume fully usable perpetual deductions and debt-risk tax-shield discounting.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Current levered firm value</th><td>$110.00</td></tr><tr><th scope=\"row\">Current permanent debt</th><td>$40.00</td></tr><tr><th scope=\"row\">Additional permanent debt to be paid out</th><td>$10.00</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>25%</td></tr><tr><th scope=\"row\">Unlevered required return</th><td>12.00%</td></tr><tr><th scope=\"row\">Before-tax debt rate</th><td>6.00%</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "vu",
          "prompt": "What unlevered firm value is implied by current VL and current debt?",
          "answer": 100.0,
          "unit": "$ million",
          "solution": "VU = VL − TC × D = 110.00 − 25%(40.00) = $100.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "extra_shield",
          "prompt": "How much value does the additional debt add through its tax shield?",
          "answer": 2.5,
          "unit": "$ million",
          "solution": "Incremental perpetual shield value = TC × extra D = 25% × $10 = $2.50 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "vl_new",
          "prompt": "What is firm value after the additional debt?",
          "answer": 112.5,
          "unit": "$ million",
          "solution": "New VL = current VL + added shield value = 110.00 + 2.50 = $112.50 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "e_new",
          "prompt": "After the additional payout, what equity value remains inside the company?",
          "answer": 62.5,
          "unit": "$ million",
          "solution": "Total debt becomes $50.00 million. New E = 112.50 − 50.00 = $62.50 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "The extra borrowing is used for a payout, not a new factory. Which part of the additional value is a financing benefit rather than an operating improvement?",
          "solution": "The added value is the present value of additional tax savings. Expected operating assets and operating FCFF are held fixed; the debt proceeds distributed are not new operating revenue.",
          "rubric": [
            "1 point: identify tax savings as the value source.",
            "1 point: explain unchanged operating cash flows/assets."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "ebit": 16,
        "ru": 0.12,
        "rd": 0.06,
        "t": 0.25,
        "d": 40,
        "extra_debt": 10
      },
      "templateId": "tax-incremental-borrowing"
    },
    {
      "id": "e3r2-mm_tax-3",
      "family": "mm_tax",
      "title": "Delta Container Supply: permanent debt and taxes",
      "intro": "Hypothetical all-equity firm issues permanent debt and pays all proceeds as a special dividend. Expected EBIT is a level perpetuity beginning next year. Depreciation equals capital spending, ΔNWC = 0, and there is no excess cash. Interest deductions are fully usable; discount the level tax shield at RD. Ignore other financing frictions.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Expected annual operating FCFF</th><td>$14.40</td></tr><tr><th scope=\"row\">Unlevered firm value</th><td>$144.00</td></tr><tr><th scope=\"row\">Permanent market debt</th><td>$60.00</td></tr><tr><th scope=\"row\">Before-tax debt rate</th><td>5.00%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>20%</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "ru",
          "prompt": "What unlevered required return is implied by the FCFF perpetuity and unlevered value?",
          "answer": 10.0,
          "unit": "%",
          "solution": "RU = FCFF/VU = 14.40/144.00 = 10.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "e",
          "prompt": "What levered equity value is implied by the permanent-debt tax model?",
          "answer": 96.0,
          "unit": "$ million",
          "solution": "VL = VU + TC × D = 144.00 + 12.00 = 156.00. E = VL − D = $96.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "re",
          "prompt": "What required return applies to this equity?",
          "answer": 12.5,
          "unit": "%",
          "solution": "RE = 10.00% + (10.00% − 5.00%)(60.00/96.00)(1 − 20%) = 12.50%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "wacc",
          "prompt": "What is the market-value WACC?",
          "answer": 9.230769230769232,
          "unit": "%",
          "solution": "Use E/(D + E) and D/(D + E), applying the after-tax debt rate. WACC = 9.23%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Would the shortcut TC × D remain exact if the whole debt balance were repaid next year and never replaced?",
          "solution": "No. The shortcut values a perpetual debt-supported shield. Debt ending next year generates a finite tax-savings stream, which must be valued over its actual life.",
          "rubric": [
            "1 point: the permanent-debt assumption no longer holds.",
            "1 point: value the finite tax-savings stream instead."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "ebit": 18,
        "ru": 0.1,
        "rd": 0.05,
        "t": 0.2,
        "d": 60
      },
      "templateId": "tax-infer-unlevered-return"
    },
    {
      "id": "e3r2-mm_tax-4",
      "family": "mm_tax",
      "title": "Prairie Warehouse Partners: permanent debt and taxes",
      "intro": "Hypothetical all-equity firm issues permanent debt and pays all proceeds as a special dividend. Expected EBIT is a level perpetuity beginning next year. Depreciation equals capital spending, ΔNWC = 0, and there is no excess cash. Interest deductions are fully usable; discount the level tax shield at RD. Ignore other financing frictions.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Annual expected EBIT</th><td>$24.00</td></tr><tr><th scope=\"row\">Unlevered required return</th><td>12.00%</td></tr><tr><th scope=\"row\">Permanent debt</th><td>$50.00</td></tr><tr><th scope=\"row\">Current corporate tax rate</th><td>30%</td></tr><tr><th scope=\"row\">Alternative corporate tax rate</th><td>20%</td></tr><tr><th scope=\"row\">Before-tax debt rate</th><td>6.00%</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "shield_new",
          "prompt": "At the lower corporate tax rate, what is PV of the interest tax shield?",
          "answer": 10.0,
          "unit": "$ million",
          "solution": "Alternative PV(shield) = 20% × 50.00 = $10.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "vu_new",
          "prompt": "At the lower corporate tax rate, what is unlevered firm value?",
          "answer": 160.00000000000003,
          "unit": "$ million",
          "solution": "VU = EBIT(1 − new TC)/RU = 24(1 − 20%)/12.00% = $160.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "vl_new",
          "prompt": "At the lower rate, what is total levered firm value?",
          "answer": 170.00000000000003,
          "unit": "$ million",
          "solution": "VL = alternative VU + alternative shield = 160.00 + 10.00 = $170.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "A student says a smaller tax shield must mean lower total firm value after the tax cut. What did the student omit?",
          "solution": "The student omitted the increase in after-tax operating FCFF and unlevered value. A tax-rate change affects the operating-tax burden as well as the financing tax benefit; compare both effects.",
          "rubric": [
            "1 point: identify increased after-tax operating cash flow.",
            "1 point: combine the operating and financing effects."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "ebit": 24,
        "ru": 0.12,
        "rd": 0.06,
        "t": 0.3,
        "d": 50,
        "tax_new": 0.2
      },
      "templateId": "tax-rate-two-sided-comparison"
    },
    {
      "id": "e3r2-mm_tax-5",
      "family": "mm_tax",
      "title": "Pine Ridge Packaging: permanent debt and taxes",
      "intro": "Hypothetical all-equity firm issues permanent debt and pays all proceeds as a special dividend. Expected EBIT is a level perpetuity beginning next year. Depreciation equals capital spending, ΔNWC = 0, and there is no excess cash. Interest deductions are fully usable; discount the level tax shield at RD. Ignore other financing frictions.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Required PV of financing tax savings</th><td>$6.00</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>25%</td></tr><tr><th scope=\"row\">Before-tax cost of debt</th><td>4.00%</td></tr><tr><th scope=\"row\">Unlevered firm value</th><td>$112.50</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "debt_needed",
          "prompt": "What permanent debt amount would produce the stated tax-shield value under the tax-only assumptions?",
          "answer": 24.0,
          "unit": "$ million",
          "solution": "D = target PV(shield)/TC = 6/25% = $24.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "interest_needed",
          "prompt": "What annual interest would that debt require?",
          "answer": 0.96,
          "unit": "$ million per year",
          "solution": "Annual interest = 24.00 × 4.00% = $0.96 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "annual_needed",
          "prompt": "What annual tax saving would the interest generate?",
          "answer": 0.24,
          "unit": "$ million per year",
          "solution": "Interest × TC = 0.96(25%) = $0.24 million per year; its debt-discounted perpetuity is the stated target.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does a computed tax benefit alone establish that the borrowing plan is attractive after including $7 million of expected distress costs?",
          "solution": "No. The proposed $6 million financing tax benefit is less than $7 million of expected distress costs, so the net value effect relative to no debt is negative under those supplied assumptions.",
          "rubric": [
            "1 point: include the expected costs.",
            "1 point: compare the given total benefits and costs, rather than treating tax savings as a complete decision rule."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "ebit": 15,
        "ru": 0.1,
        "rd": 0.04,
        "t": 0.25,
        "d": 50,
        "shield_target": 6
      },
      "templateId": "tax-solve-debt-from-shield-target"
    },
    {
      "id": "e3r2-cash_stock-1",
      "family": "cash_stock",
      "title": "Pinnacle Markets and Cedar Grocers: acquisition payment",
      "intro": "Hypothetical transaction. Both firms operate competing stores in the same retail category. Operating FCFF and incremental synergy FCFF are level perpetuities starting next year, with the same appropriate stated discount rate. Synergy is after taxes and integration/investment needs. The buyer has no debt. Target debt remains outstanding at unchanged market value; target excess cash is retained. Ignore other transaction costs.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Pinnacle Markets: pre-deal equity value</th><td>$800.00</td></tr><tr><th scope=\"row\">Pinnacle Markets: shares outstanding</th><td>20 million</td></tr><tr><th scope=\"row\">Pinnacle Markets: excess cash already in equity</th><td>$200.00</td></tr><tr><th scope=\"row\">Cedar Grocers: annual operating FCFF</th><td>$18.00</td></tr><tr><th scope=\"row\">Cedar Grocers: market debt</th><td>$40.00</td></tr><tr><th scope=\"row\">Cedar Grocers: excess cash</th><td>$10.00</td></tr><tr><th scope=\"row\">Appropriate discount rate</th><td>10.00%</td></tr><tr><th scope=\"row\">Annual incremental synergy FCFF</th><td>$6.00</td></tr><tr><th scope=\"row\">Cash alternative: price for target equity</th><td>$180.00</td></tr><tr><th scope=\"row\">Stock alternative: fixed new buyer shares</th><td>4.5 million; no cash paid</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "target_equity",
          "prompt": "Bridge Cedar Grocers’s operating enterprise value to standalone equity value.",
          "answer": 150.0,
          "unit": "$ million",
          "solution": "Operating EV = 18/10.00% = $180.00 million. E = 180.00 − 40.00 + 10.00 = $150.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "seller_fraction",
          "prompt": "What fraction of the combined shares would the fixed-share offer give target owners?",
          "answer": 18.367346938775512,
          "unit": "%",
          "solution": "Target owners hold 4.50/(20.00 + 4.50) = 18.37%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "stock_payment",
          "prompt": "What dollar value does that ownership interest receive at the forecast combined value?",
          "answer": 185.51020408163265,
          "unit": "$ million",
          "solution": "Combined equity = 800.00 + 150.00 + 60.00 = $1,010.00 million. Seller wealth = (0.18367347)(1,010.00) = $185.51 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "cash_gain",
          "prompt": "What dollar gain do original buyer owners receive under the cash alternative?",
          "answer": 30.0,
          "unit": "$ million",
          "solution": "Buyer gain = standalone target equity + PV(synergy) − cash equity price = 150.00 + 60.00 − 180.00 = $30.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "stock_gain",
          "prompt": "What dollar gain do original buyer owners receive under the stock alternative?",
          "answer": 24.48979591836735,
          "unit": "$ million",
          "solution": "Original owners retain 81.63% of combined equity: retained value − initial buyer equity = $24.49 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Why is comparing only total combined equity misleading when judging the two alternatives for original buyer owners?",
          "solution": "The stock alternative keeps cash inside the company but gives target owners part of its equity. Compare the original owners’ retained wealth, rather than equity belonging to both groups together.",
          "rubric": [
            "1 point: account for retained cash.",
            "1 point: account for shares transferred to target owners."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "eb": 800,
        "n": 20,
        "cash": 200,
        "fcff": 18,
        "r": 0.1,
        "sfcf": 6,
        "td": 40,
        "tc": 10,
        "price": 180,
        "newn": 4.5
      },
      "templateId": "payment-ownership-before-share-price"
    },
    {
      "id": "e3r2-cash_stock-2",
      "family": "cash_stock",
      "title": "Ozark Home Supply and Valley Hardware: acquisition payment",
      "intro": "Hypothetical transaction. Both firms operate competing stores in the same retail category. Operating FCFF and incremental synergy FCFF are level perpetuities starting next year, with the same appropriate stated discount rate. Synergy is after taxes and integration/investment needs. The buyer has no debt. Target debt remains outstanding at unchanged market value; target excess cash is retained. Ignore other transaction costs.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Ozark Home Supply: pre-deal equity value</th><td>$720.00</td></tr><tr><th scope=\"row\">Ozark Home Supply: shares outstanding</th><td>24 million</td></tr><tr><th scope=\"row\">Ozark Home Supply: excess cash already in equity</th><td>$240.00</td></tr><tr><th scope=\"row\">Valley Hardware: annual operating FCFF</th><td>$21.00</td></tr><tr><th scope=\"row\">Valley Hardware: market debt</th><td>$25.00</td></tr><tr><th scope=\"row\">Valley Hardware: excess cash</th><td>$10.00</td></tr><tr><th scope=\"row\">Appropriate discount rate</th><td>12.00%</td></tr><tr><th scope=\"row\">Annual incremental synergy FCFF</th><td>$5.40</td></tr><tr><th scope=\"row\">Cash alternative: price for target equity</th><td>$195.00</td></tr><tr><th scope=\"row\">Stock alternative: fixed new buyer shares</th><td>6.5 million; no cash paid</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "synergy_pv",
          "prompt": "What is the present value of the forecast incremental FCFF?",
          "answer": 45.00000000000001,
          "unit": "$ million",
          "solution": "PV(synergy) = 5.4/12.00% = $45.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "target_equity",
          "prompt": "What is standalone target equity value?",
          "answer": 160.0,
          "unit": "$ million",
          "solution": "Target EV = 21/12.00% = 175.00; equity = EV − debt + excess cash = $160.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "max_price_gain",
          "prompt": "What is the largest cash equity price that leaves the buyer at least a $15 million NPV?",
          "answer": 190.0,
          "unit": "$ million",
          "solution": "Price limit = target equity + PV(synergy) − required buyer gain = 160.00 + 45.00 − 15 = $190.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "min_synergy_annual",
          "prompt": "At the stated cash price, how much annual incremental FCFF is needed just to reach buyer NPV of zero?",
          "answer": 4.2,
          "unit": "$ million per year",
          "solution": "Required PV(synergy) = price − standalone equity = 35.00. The level annual amount is that PV × 12.00% = $4.20 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "A seller proposes increasing the price without changing the operating forecast. Does that create additional value to divide?",
          "solution": "No. It shifts value from the buyer to the seller. The operating synergy forecast is unchanged, so a larger price reduces buyer NPV dollar for dollar.",
          "rubric": [
            "1 point: unchanged synergy/combined value.",
            "1 point: explain the transfer from buyer to seller."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "eb": 720,
        "n": 24,
        "cash": 240,
        "fcff": 21,
        "r": 0.12,
        "sfcf": 5.4,
        "td": 25,
        "tc": 10,
        "price": 195,
        "newn": 6.5,
        "desired_buyer_gain": 15
      },
      "templateId": "payment-reservation-price-and-hurdle-synergy"
    },
    {
      "id": "e3r2-cash_stock-3",
      "family": "cash_stock",
      "title": "Delta Distribution and Riverbend Warehousing: acquisition payment",
      "intro": "Hypothetical vertical combination of a freight carrier and warehouse supplier. The target equity value is already net of debt and includes its excess cash; do not subtract debt a second time. The buyer’s original equity includes any cash it would use. Consider the two stated alternatives separately.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Buyer pre-deal equity, including purchase cash</th><td>$600.00</td></tr><tr><th scope=\"row\">Buyer existing shares</th><td>20 million</td></tr><tr><th scope=\"row\">Target standalone equity value</th><td>$135.00</td></tr><tr><th scope=\"row\">PV of synergy</th><td>$40.00</td></tr><tr><th scope=\"row\">Fixed new buyer shares offered</th><td>4.5 million</td></tr><tr><th scope=\"row\">Cash alternative for target equity</th><td>$160.00</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "stock_price",
          "prompt": "What is value per share under the fixed-share offer?",
          "answer": 31.632653061224488,
          "unit": "$ per share",
          "solution": "Combined equity = 775.00; combined shares = 20 + 4.5 = 24.50. Price = $31.63.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "stock_payment",
          "prompt": "What do target owners receive in stock value?",
          "answer": 142.34693877551018,
          "unit": "$ million",
          "solution": "4.5 million shares × unrounded post-deal price = $142.35 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "stock_gain",
          "prompt": "What is the dollar gain for the buyer’s original shareholders under stock?",
          "answer": 32.65306122448976,
          "unit": "$ million",
          "solution": "Original 20 million shares × unrounded post-deal price − initial equity 600 = $32.65 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "cash_gain",
          "prompt": "What is the buyer’s NPV under cash?",
          "answer": 15.0,
          "unit": "$ million",
          "solution": "Cash buyer gain = 135.00 + 40.00 − 160.00 = $15.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Which payment gives original buyer owners the greater forecast gain here? Is that a universal ranking of stock and cash?",
          "solution": "This fixed-share offer gives the buyer the larger gain because the stock consideration is less valuable than the cash price. The ranking depends on the actual offer terms; stock is not always better or always worse.",
          "rubric": [
            "1 point: identify stock as better for the buyer under these terms.",
            "1 point: explain why the ranking depends on the amount paid, not a universal rule."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "eb": 600,
        "n": 20,
        "cash": 180,
        "fcff": 16,
        "r": 0.1,
        "sfcf": 4,
        "td": 30,
        "tc": 5,
        "price": 160,
        "newn": 4.5
      },
      "templateId": "payment-stock-can-be-cheaper"
    },
    {
      "id": "e3r2-cash_stock-4",
      "family": "cash_stock",
      "title": "Prairie Foods and Meadow Dairy: acquisition payment",
      "intro": "Hypothetical vertical acquisition. Values below are equity values; all debt/cash adjustments have already been made. No cash is paid and no financing frictions are added. Work from ownership and the original buyer share value.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Buyer standalone equity</th><td>$900.00</td></tr><tr><th scope=\"row\">Buyer existing shares</th><td>25 million</td></tr><tr><th scope=\"row\">Target standalone equity</th><td>$160.00</td></tr><tr><th scope=\"row\">PV of synergy</th><td>$60.00</td></tr><tr><th scope=\"row\">Proposed fixed new buyer shares</th><td>5.833333 million</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "seller_fraction",
          "prompt": "Under the proposed offer, what percentage of the combined firm goes to target owners?",
          "answer": 18.91891891891892,
          "unit": "%",
          "solution": "New target-owned shares / all post-deal shares = 5.833333/(25 + 5.833333) = 18.92%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "stock_gain",
          "prompt": "What is the original buyer owners’ dollar gain?",
          "answer": 8.108108108108013,
          "unit": "$ million",
          "solution": "Combined equity = 1,120.00; original owners retain 25/(25 + 5.833333). Their retained value less $900 million = $8.11 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "max_new_shares",
          "prompt": "What is the largest number of new shares the buyer could offer without reducing its original owners’ wealth? Start by keeping their value per share at its pre-deal level.",
          "answer": 6.111111111111111,
          "unit": "million shares",
          "solution": "Pre-deal share value = 900/25 = $36.00. For no loss, total shares cannot exceed combined equity / pre-deal share value. Maximum new shares = 1,120.00/36.00 − 25 = 6.11 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Why would an offer above that share-count limit destroy value for original buyer owners even with positive operating synergy?",
          "solution": "It transfers too much ownership to sellers. Positive synergy can exist while an overly generous payment leaves the buyer’s original owners with less wealth than before.",
          "rubric": [
            "1 point: recognize the excessive ownership transfer.",
            "1 point: distinguish positive synergy from positive buyer NPV."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "eb": 900,
        "n": 25,
        "cash": 280,
        "fcff": 24,
        "r": 0.12,
        "sfcf": 7.2,
        "td": 50,
        "tc": 10,
        "price": 210,
        "newn": 5.833333333333333
      },
      "templateId": "payment-share-count-price-ceiling"
    },
    {
      "id": "e3r2-cash_stock-5",
      "family": "cash_stock",
      "title": "Ridgeway Outfitters and Summit Outdoor: acquisition payment",
      "intro": "Hypothetical horizontal retail acquisition. Incremental FCFF is after taxes and all integration/investment needs, level forever starting next year. Target standalone equity is unchanged. The cash price is paid from cash already included in the buyer’s initial equity.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Target standalone equity</th><td>$135.00</td></tr><tr><th scope=\"row\">Original annual synergy FCFF</th><td>$4.80</td></tr><tr><th scope=\"row\">Revised annual synergy FCFF</th><td>$1.80</td></tr><tr><th scope=\"row\">Appropriate perpetuity discount rate</th><td>12.00%</td></tr><tr><th scope=\"row\">Cash price for target equity</th><td>$155.00</td></tr><tr><th scope=\"row\">Buyer pre-deal equity, including cash</th><td>$640.00</td></tr><tr><th scope=\"row\">Buyer shares outstanding</th><td>16 million</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "revised_synergy_pv",
          "prompt": "What is the revised present value of synergy?",
          "answer": 15.000000000000002,
          "unit": "$ million",
          "solution": "PV(revised synergy) = 1.80/12.00% = $15.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "revised_buyer_gain",
          "prompt": "What is buyer NPV at the unchanged cash price?",
          "answer": -5.0,
          "unit": "$ million",
          "solution": "NPV = 135.00 + 15.00 − 155.00 = $-5.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "revised_cash_price",
          "prompt": "What is the buyer’s revised post-deal value per share?",
          "answer": 39.6875,
          "unit": "$ per share",
          "solution": "Buyer equity after = initial equity + NPV = 640.00 + (-5.00). Divide by 16 million shares: $39.69.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does the revised forecast eliminate operating synergy? Does it still justify the agreed price for the buyer?",
          "solution": "The revised annual increment is still positive, so operating synergy remains. But its PV is too small to cover the premium at the stated price, leaving the buyer with negative NPV.",
          "rubric": [
            "1 point: distinguish positive operating synergy from zero synergy.",
            "1 point: recognize that a positive synergy forecast can be insufficient to cover the price."
          ],
          "points": 2
        },
        {
          "type": "text",
          "prompt": "Could a lower price restore a nonnegative buyer NPV without changing the operating forecast?",
          "solution": "Yes. The buyer’s equity price ceiling is standalone target equity plus the revised synergy PV. A lower payment can change the buyer’s allocation of value without creating additional operating cash flow.",
          "rubric": [
            "1 point: identify the lower price as a possible remedy.",
            "1 point: connect it to the buyer’s value ceiling rather than new synergy."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "eb": 640,
        "n": 16,
        "cash": 200,
        "fcff": 18,
        "r": 0.12,
        "sfcf": 4.8,
        "td": 20,
        "tc": 5,
        "price": 155,
        "newn": 3.875,
        "revised_synergy_annual": 1.8
      },
      "templateId": "payment-positive-synergy-insufficient-for-price"
    },
    {
      "id": "e3r2-wacc_dividend_bonds-1",
      "family": "wacc_dividend_bonds",
      "title": "Natural State Distribution: dividends and bond yield",
      "intro": "Hypothetical firm. Bonds pay semiannual coupons. The debt quote is a percentage of face value. Compute annual quoted YTM as twice the semiannual yield. Retain unrounded intermediate values.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Shares outstanding</th><td>20 million</td></tr><tr><th scope=\"row\">Share price</th><td>$20.00</td></tr><tr><th scope=\"row\">Most recent dividend, D0</th><td>$0.80</td></tr><tr><th scope=\"row\">Constant dividend growth</th><td>5.00%</td></tr><tr><th scope=\"row\">Total face value of debt</th><td>$200.00</td></tr><tr><th scope=\"row\">Face value per bond</th><td>$1,000</td></tr><tr><th scope=\"row\">Bond quote</th><td>95.00% of par</td></tr><tr><th scope=\"row\">Annual coupon rate</th><td>6.00%; semiannual payments</td></tr><tr><th scope=\"row\">Remaining maturity</th><td>8 years</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>25%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the before-tax annual quoted cost of debt (nominal YTM)?",
          "answer": 6.821310241174072,
          "unit": "%",
          "solution": "Per $1,000 bond: N = 16, PV = −$950.00, PMT = $30.00, FV = $1,000. Periodic I/Y = 3.41%; annual quoted YTM = 2 × periodic yield = 6.82%. Do not report the effective annual yield.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "rd"
        },
        {
          "prompt": "What is the market value of debt?",
          "answer": 190,
          "unit": "$ million",
          "solution": "D = total face value × quoted price fraction = 200 × 0.9500 = $190.00 million.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "market_d"
        },
        {
          "prompt": "What is the dividend-growth cost of equity?",
          "answer": 9.2,
          "unit": "%",
          "solution": "D1 = $0.80(1 + 5.00%) = $0.8400; RE = D1/$20 + 5.00% = 9.20%.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "re"
        },
        {
          "prompt": "What is WACC?",
          "answer": 7.884807981978484,
          "unit": "%",
          "solution": "WACC = (400.00/590.00)(9.20%) + (190.00/590.00)(6.82%)(1 − 25%) = 7.88%.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "wacc"
        },
        {
          "type": "text",
          "prompt": "Why does the discount bond’s current debt yield exceed its coupon rate, and why does this matter when valuing operating cash flows?",
          "solution": "At a price below par, the buyer receives both coupons and recovery toward face value, so YTM exceeds the coupon rate. Using the lower coupon as the debt required return understates WACC and can overstate the PV of positive cash flows.",
          "rubric": [
            "1 point: identify the price/coupon/YTM relationship.",
            "1 point: connect an understated discount rate to overstated value."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "n": 20,
        "p": 20,
        "d0": 0.8,
        "g": 0.05,
        "face": 200,
        "quote": 95,
        "coupon": 0.06,
        "years": 8,
        "t": 0.25
      },
      "templateId": "ddm-bond-discount-review-case"
    },
    {
      "id": "e3r2-wacc_dividend_bonds-2",
      "family": "wacc_dividend_bonds",
      "title": "Cedar Valley Transport: dividends and bond yield",
      "intro": "Hypothetical firm. Bonds pay semiannual coupons. The debt quote is a percentage of face value. Compute annual quoted YTM as twice the semiannual yield. Retain unrounded intermediate values.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Shares outstanding</th><td>15 million</td></tr><tr><th scope=\"row\">Share price</th><td>$32.00</td></tr><tr><th scope=\"row\">Most recent dividend, D0</th><td>$1.20</td></tr><tr><th scope=\"row\">Constant dividend growth</th><td>4.00%</td></tr><tr><th scope=\"row\">Total face value of debt</th><td>$160.00</td></tr><tr><th scope=\"row\">Face value per bond</th><td>$1,000</td></tr><tr><th scope=\"row\">Bond quote</th><td>104.00% of par</td></tr><tr><th scope=\"row\">Annual coupon rate</th><td>7.00%; semiannual payments</td></tr><tr><th scope=\"row\">Remaining maturity</th><td>10 years</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>20%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the dividend-growth cost of equity?",
          "answer": 7.9,
          "unit": "%",
          "solution": "D1 = $1.20(1 + 4.00%) = $1.2480; RE = D1/$32 + 4.00% = 7.90%.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "re"
        },
        {
          "prompt": "What is the before-tax annual quoted cost of debt (nominal YTM)?",
          "answer": 6.451001177753368,
          "unit": "%",
          "solution": "Per $1,000 bond: N = 20, PV = −$1040.00, PMT = $35.00, FV = $1,000. Periodic I/Y = 3.23%; annual quoted YTM = 2 × periodic yield = 6.45%. Do not report the effective annual yield.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "rd"
        },
        {
          "type": "text",
          "prompt": "The bond trades above par. Is the coupon rate an overestimate or underestimate of its current before-tax required yield? Explain.",
          "solution": "The coupon rate is above current YTM for this premium bond. Paying above face value reduces the investor’s yield relative to the coupon rate as the bond approaches redemption at par.",
          "rubric": [
            "1 point: coupon overstates current yield.",
            "1 point: explain the effect of paying above par."
          ],
          "points": 2
        },
        {
          "prompt": "What is WACC?",
          "answer": 7.194859648487823,
          "unit": "%",
          "solution": "WACC = (480.00/646.40)(7.90%) + (166.40/646.40)(6.45%)(1 − 20%) = 7.19%.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "wacc"
        },
        {
          "type": "text",
          "prompt": "Would multiplying the semiannual yield by two give the same number as the effective annual yield? Which rate is requested here?",
          "solution": "They differ when the periodic yield is nonzero. Twice the semiannual yield is the quoted nominal annual YTM requested in this exercise; the effective annual yield compounds the periodic return.",
          "rubric": [
            "1 point: distinguish nominal annualization from compounding.",
            "1 point: identify the requested nominal annual YTM."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "n": 15,
        "p": 32,
        "d0": 1.2,
        "g": 0.04,
        "face": 160,
        "quote": 104,
        "coupon": 0.07,
        "years": 10,
        "t": 0.2,
        "required_net_equity_rate": null
      },
      "templateId": "ddm-premium-bond-rate-interpretation"
    },
    {
      "id": "e3r2-wacc_dividend_bonds-3",
      "family": "wacc_dividend_bonds",
      "title": "Maple Packaging: dividends and bond yield",
      "intro": "Hypothetical firm. Bonds pay semiannual coupons. The debt quote is a percentage of face value. Compute annual quoted YTM as twice the semiannual yield. Retain unrounded intermediate values.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Shares outstanding</th><td>25 million</td></tr><tr><th scope=\"row\">Share price</th><td>$18.00</td></tr><tr><th scope=\"row\">Most recent dividend, D0</th><td>$0.72</td></tr><tr><th scope=\"row\">Constant dividend growth</th><td>3.00%</td></tr><tr><th scope=\"row\">Total face value of debt</th><td>$150.00</td></tr><tr><th scope=\"row\">Face value per bond</th><td>$1,000</td></tr><tr><th scope=\"row\">Bond quote</th><td>98.00% of par</td></tr><tr><th scope=\"row\">Annual coupon rate</th><td>5.00%; semiannual payments</td></tr><tr><th scope=\"row\">Remaining maturity</th><td>6 years</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>30%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the dividend-growth cost of equity?",
          "answer": 7.12,
          "unit": "%",
          "solution": "D1 = $0.72(1 + 3.00%) = $0.7416; RE = D1/$18 + 3.00% = 7.12%.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "re"
        },
        {
          "calcKey": "re_new",
          "prompt": "Holding the current share price and last dividend fixed, what DDM cost-of-equity estimate follows if the assumed growth rate rises by 1 percentage point?",
          "answer": 8.16,
          "unit": "%",
          "solution": "New D1 = 0.72(1 + 4.00%); RE = new D1/18 + 4.00% = 8.16%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Why does a higher estimated RE in that calculation not prove that the company’s underlying risk actually increased?",
          "solution": "The exercise changes an input to a valuation-based estimate while holding price fixed. It shows model sensitivity, not independent evidence that systematic risk changed.",
          "rubric": [
            "1 point: identify a changed estimation assumption.",
            "1 point: distinguish model sensitivity from evidence about risk."
          ],
          "points": 2
        },
        {
          "prompt": "What is the market value of debt?",
          "answer": 147,
          "unit": "$ million",
          "solution": "D = total face value × quoted price fraction = 150 × 0.9800 = $147.00 million.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "market_d"
        },
        {
          "prompt": "What is WACC?",
          "answer": 6.296660960012493,
          "unit": "%",
          "solution": "WACC = (450.00/597.00)(7.12%) + (147.00/597.00)(5.39%)(1 − 30%) = 6.30%.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "wacc"
        }
      ],
      "inputs": {
        "n": 25,
        "p": 18,
        "d0": 0.72,
        "g": 0.03,
        "face": 150,
        "quote": 98,
        "coupon": 0.05,
        "years": 6,
        "t": 0.3,
        "new_g": 0.04
      },
      "templateId": "ddm-growth-assumption-sensitivity"
    },
    {
      "id": "e3r2-mm_no_tax-1",
      "family": "mm_no_tax",
      "title": "Delta Packaging: the no-tax benchmark",
      "intro": "Hypothetical firm issues permanent debt to repurchase equity. Assume no taxes, distress costs, reinvestment, or principal repayment. Expected EBIT is a level perpetuity starting next year; operating assets do not change.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Annual expected EBIT</th><td>$18.00</td></tr><tr><th scope=\"row\">Operating asset required return, RA</th><td>12.00%</td></tr><tr><th scope=\"row\">Debt issued for the repurchase</th><td>$60.00</td></tr><tr><th scope=\"row\">Annual cost of debt, RD</th><td>6.00%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the all-equity firm’s value?",
          "answer": 150,
          "unit": "$ million",
          "solution": "Expected FCFF = EBIT = $18.00 million. VU = 18.00/12.00% = $150.00 million.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "vu"
        },
        {
          "prompt": "After borrowing, what annual cash flow remains for shareholders?",
          "answer": 14.4,
          "unit": "$ million per year",
          "solution": "With no taxes and no net investment, shareholder cash flow = EBIT − interest = 18.00 − 3.60 = $14.40 million.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "equity_cf"
        },
        {
          "prompt": "What is total annual FCFF, found as shareholder cash flow plus interest to bondholders?",
          "answer": 18,
          "unit": "$ million per year",
          "solution": "FCFF = shareholder cash flow + bondholder interest = 14.40 + 3.60 = $18.00 million, the same operating cash flow as before.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "fcff"
        },
        {
          "prompt": "What is the cost of equity after borrowing?",
          "answer": 15.999999999999998,
          "unit": "%",
          "solution": "VL = VU = $150.00 million. E = 150.00 − 60.00 = $90.00 million. RE = 12.00% + (60.00/90.00)(12.00% − 6.00%) = 16.00%.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "re"
        },
        {
          "type": "text",
          "prompt": "Explain why firm value remains unchanged even though the equity required return rises.",
          "points": 3,
          "solution": "Total expected FCFF remains $18.00 million and WACC remains 12.00%. Therefore the same perpetuity has the same value. Interest reallocates cash flows to lenders, while greater financial risk raises the required return on remaining equity.",
          "rubric": [
            "1 point: total FCFF is unchanged.",
            "1 point: WACC is unchanged.",
            "1 point: connect unchanged cash flow and discount rate to unchanged value."
          ]
        }
      ],
      "inputs": {
        "ebit": 18,
        "ru": 0.12,
        "d": 60,
        "rd": 0.06
      },
      "templateId": "no-tax-public-review-reconciliation"
    },
    {
      "id": "e3r2-mm_no_tax-2",
      "family": "mm_no_tax",
      "title": "Cedar Warehouse Supply: the no-tax benchmark",
      "intro": "Hypothetical no-tax M&M comparison. The company issues equity at fair value and uses every dollar to repay debt. Operating assets stay fixed and the stated debt rate remains appropriate. Ignore transaction costs.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Operating asset value before transaction</th><td>$150.00</td></tr><tr><th scope=\"row\">Current market debt</th><td>$50.00</td></tr><tr><th scope=\"row\">Operating required return</th><td>10.00%</td></tr><tr><th scope=\"row\">Debt required return</th><td>4.00%</td></tr><tr><th scope=\"row\">New equity issued to repay debt</th><td>$20.00</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>0.00%</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "debt_new",
          "prompt": "What debt balance remains after the equity-financed repayment?",
          "answer": 30,
          "unit": "$ million",
          "solution": "New debt = 50.00 − 20 = $30.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "equity_new",
          "prompt": "What is equity value after the debt repayment?",
          "answer": 120.0,
          "unit": "$ million",
          "solution": "No-tax M&M keeps total value at $150.00 million. E = 150.00 − 30.00 = $120.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "re_new",
          "prompt": "What required equity return follows after deleveraging?",
          "answer": 11.5,
          "unit": "%",
          "solution": "RE = 10.00% + (30.00/120.00)(10.00% − 4.00%) = 11.50%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does paying off debt remove the uncertainty in customer demand or operating margins?",
          "solution": "No. It reduces the fixed financing claim and financial risk, but the operating business still faces its existing business risks.",
          "rubric": [
            "1 point: distinguish financing from operating uncertainty.",
            "1 point: explain why business risk persists."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "ebit": 15,
        "ru": 0.1,
        "d": 50,
        "rd": 0.04,
        "debt_repaid": 20
      },
      "templateId": "no-tax-equity-funded-deleveraging"
    },
    {
      "id": "e3r2-mm_no_tax-3",
      "family": "mm_no_tax",
      "title": "Prairie Equipment Rental: the no-tax benchmark",
      "intro": "Hypothetical no-tax firm with level expected FCFF starting next year. A financing memo claims that equity can keep the all-equity required return even after permanent debt is introduced. Operating assets and debt rate remain unchanged. Evaluate the memo rather than accepting that claim.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Annual expected operating FCFF</th><td>$24.00</td></tr><tr><th scope=\"row\">Operating required return</th><td>12.00%</td></tr><tr><th scope=\"row\">Permanent debt</th><td>$80.00</td></tr><tr><th scope=\"row\">Debt required return</th><td>5.00%</td></tr><tr><th scope=\"row\">Proposed constant equity rate after borrowing</th><td>12.00%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>0.00%</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "false_wacc",
          "prompt": "What WACC would the proposed constant-equity-rate assumption produce? Compute the claim before evaluating it.",
          "answer": 9.2,
          "unit": "%",
          "solution": "V = 24/12.00% = 200.00; E = V − D = 120.00. Claimed WACC = (120.00/200.00)(12.00%) + (80.00/200.00)(5.00%) = 9.20%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "re",
          "prompt": "What RE does no-tax Proposition II actually require?",
          "answer": 16.666666666666664,
          "unit": "%",
          "solution": "RE = 12.00% + (80.00/120.00)(12.00% − 5.00%) = 16.67%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "correct_wacc",
          "prompt": "Using that equity return, what is the corrected WACC?",
          "answer": 12.0,
          "unit": "%",
          "solution": "The corrected weighted return is 12.00%; the increase in required equity return offsets the lower-cost debt.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "What economic effect was missing from the constant-equity-rate proposal?",
          "solution": "It ignored the additional financial risk borne by equity after introducing the fixed debt claim. Holding operations fixed does not hold the remaining equity’s risk fixed.",
          "rubric": [
            "1 point: identify additional financial risk.",
            "1 point: explain why unchanged operations do not imply unchanged equity risk."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "ebit": 24,
        "ru": 0.12,
        "d": 80,
        "rd": 0.05
      },
      "templateId": "no-tax-critique-cheap-debt-claim"
    },
    {
      "id": "e3r2-synergy-1",
      "family": "synergy",
      "title": "Frontier Foods and PixelPlay Games: is there value to share?",
      "intro": "Hypothetical firms: a food producer and an unrelated video-game studio. Both are all-equity firms with no excess cash. All operating FCFF is after tax, net of integration and investment needs, level forever starting next year, and appropriately discounted at the rate below.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Frontier Foods: standalone annual FCFF</th><td>$32.00</td></tr><tr><th scope=\"row\">PixelPlay Games: standalone annual FCFF</th><td>$16.00</td></tr><tr><th scope=\"row\">Combined annual FCFF</th><td>$44.00</td></tr><tr><th scope=\"row\">Appropriate discount rate</th><td>8.00%</td></tr><tr><th scope=\"row\">Proposed cash price for all target equity</th><td>$180.00</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is annual incremental synergy FCFF?",
          "answer": -4,
          "unit": "$ million per year",
          "solution": "ΔFCFF = combined − separate = 44.00 − (32.00 + 16.00) = $-4.00 million.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "annual_synergy"
        },
        {
          "prompt": "What is the present value of synergy?",
          "answer": -50,
          "unit": "$ million",
          "solution": "PV(synergy) = -4.00/8.00% = $-50.00 million. Preserve the sign.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "synergy_pv"
        },
        {
          "prompt": "What is the buyer’s NPV at the proposed price?",
          "answer": -30,
          "unit": "$ million",
          "solution": "Buyer NPV = 150.00 − 180.00 = $-30.00 million.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "buyer_npv"
        },
        {
          "type": "text",
          "prompt": "Classify this acquisition and explain. Does the classification alone establish whether synergy is positive?",
          "points": 2,
          "solution": "Conglomerate: the businesses are a food producer and an unrelated video-game studio. Classification describes their business relationship, not the sign of incremental FCFF.",
          "rubric": [
            "1 point: conglomerate with an appropriate business explanation.",
            "1 point: classification does not determine the sign of synergy."
          ]
        },
        {
          "type": "text",
          "prompt": "Is there a purchase price that leaves both groups of shareholders at least as well off as remaining separate? Explain.",
          "points": 3,
          "solution": "No, under these assumptions. Sellers need at least standalone equity value of $200.00 million; the buyer can justify at most $150.00 million. Negative synergy leaves no overlap. A transfer in price reallocates losses rather than removing them.",
          "rubric": [
            "1 point: identify the seller’s standalone-value floor.",
            "1 point: identify the buyer’s synergy-adjusted ceiling.",
            "1 point: determine whether those limits overlap."
          ]
        }
      ],
      "inputs": {
        "a": 32,
        "b": 16,
        "combined": 44,
        "r": 0.08,
        "price": 180
      },
      "templateId": "synergy-negative-public-review"
    },
    {
      "id": "e3r2-synergy-2",
      "family": "synergy",
      "title": "Valley Outfitters and Trail Supply Stores: is there value to share?",
      "intro": "Hypothetical horizontal retail combination. Both firms have no debt or excess cash. All recurring FCFF begins next year and is level in perpetuity. The integration outlay shown separately has not been included in annual FCFF; subtract it once at time 0.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Annual FCFF of the buyer alone</th><td>$36.00</td></tr><tr><th scope=\"row\">Annual FCFF of target alone</th><td>$18.00</td></tr><tr><th scope=\"row\">Annual combined FCFF before one-time integration outlay</th><td>$61.00</td></tr><tr><th scope=\"row\">Appropriate perpetuity discount rate</th><td>10.00%</td></tr><tr><th scope=\"row\">One-time after-tax integration cash outlay at time 0</th><td>$15.00</td></tr><tr><th scope=\"row\">Cash equity price</th><td>$220.00</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "annual_synergy",
          "prompt": "What recurring annual incremental FCFF results from combining the businesses?",
          "answer": 7,
          "unit": "$ million per year",
          "solution": "61 − (36 + 18) = $7.00 million per year.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "net_synergy",
          "prompt": "After the separate time-0 integration outlay, what is net synergy value?",
          "answer": 55.0,
          "unit": "$ million",
          "solution": "PV(recurring increment) − initial integration cost = 7.00/10.00% − 15 = $55.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "buyer_npv_net",
          "prompt": "What is the buyer’s NPV after paying the equity price and integration outlay?",
          "answer": 15.0,
          "unit": "$ million",
          "solution": "Target standalone equity = 18/10.00% = 180.00. Buyer NPV = 180.00 + 55.00 − 220.00 = $15.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Why should the one-time outlay not be subtracted from every year of FCFF?",
          "solution": "It occurs once at time 0. Treating it as an annual perpetuity would repeatedly charge the same initial investment. Alternatively, one could use an explicitly timed full incremental cash-flow schedule.",
          "rubric": [
            "1 point: identify the outlay’s one-time timing.",
            "1 point: explain the double/repeated-counting problem."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "a": 36,
        "b": 18,
        "combined": 61,
        "r": 0.1,
        "price": 220,
        "integration_now": 15
      },
      "templateId": "synergy-separate-integration-timing"
    },
    {
      "id": "e3r2-synergy-3",
      "family": "synergy",
      "title": "Ozark Freight and Cedar Warehousing: is there value to share?",
      "intro": "Hypothetical firms: a freight carrier and a warehouse supplier in its distribution chain. Both are all-equity firms with no excess cash. All operating FCFF is after tax, net of integration and investment needs, level forever starting next year, and appropriately discounted at the rate below.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Ozark Freight: standalone annual FCFF</th><td>$28.00</td></tr><tr><th scope=\"row\">Cedar Warehousing: standalone annual FCFF</th><td>$14.00</td></tr><tr><th scope=\"row\">Combined annual FCFF</th><td>$41.00</td></tr><tr><th scope=\"row\">Appropriate discount rate</th><td>10.00%</td></tr><tr><th scope=\"row\">Proposed cash price for all target equity</th><td>$135.00</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "annual_synergy",
          "prompt": "What annual synergy follows from the original combined forecast?",
          "answer": -1,
          "unit": "$ million per year",
          "solution": "41 − (28 + 14) = $-1.00 million per year.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "original_target_value",
          "prompt": "What is the target’s equity value to this buyer under that original forecast?",
          "answer": 130.0,
          "unit": "$ million",
          "solution": "Standalone equity 140.00 plus PV(synergy) -10.00 gives $130.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "alternative_npv",
          "prompt": "An alternative integration plan would make combined annual FCFF $45.00 million with no extra initial cost. What is buyer NPV at the unchanged price?",
          "answer": 35.0,
          "unit": "$ million",
          "solution": "The alternative increment is $45 − ($28 + $14) = $3 million; PV = 3/10.00%. Buyer NPV = 140.00 + 30.00 − 135.00 = $35.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Did changing the integration plan change the transaction’s vertical classification?",
          "solution": "No. Classification describes the firms’ positions in the value chain. The operating plan can change the sign and value of synergy without changing that relationship.",
          "rubric": [
            "1 point: classification is unchanged.",
            "1 point: distinguish business relationship from the cash-flow forecast."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "a": 28,
        "b": 14,
        "combined": 41,
        "r": 0.1,
        "price": 135,
        "combined_alternative": 45
      },
      "templateId": "synergy-change-operating-plan"
    },
    {
      "id": "e3r2-dcf-1",
      "family": "dcf",
      "title": "Ridgeway Distribution: operating value to equity",
      "intro": "Hypothetical year-end FCFF forecasts. Year 4 FCFF grows from year 3 at the stated perpetual growth rate; that rate continues thereafter. Excess cash is not included in operating FCFF. There are no other claims or assets.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Year 1 operating FCFF</th><td>$12.00</td></tr><tr><th scope=\"row\">Year 2 operating FCFF</th><td>$14.00</td></tr><tr><th scope=\"row\">Year 3 operating FCFF</th><td>$16.00</td></tr><tr><th scope=\"row\">WACC</th><td>10.00%</td></tr><tr><th scope=\"row\">Growth after year 3</th><td>3.00%</td></tr><tr><th scope=\"row\">Market value of debt</th><td>$40.00</td></tr><tr><th scope=\"row\">Nonoperating excess cash</th><td>$8.00</td></tr><tr><th scope=\"row\">Shares outstanding</th><td>10 million</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the terminal value at the end of year 3?",
          "answer": 235.42857142857142,
          "unit": "$ million",
          "solution": "FCFF4 = 16(1 + 3.00%) = $16.48 million. TV3 = FCFF4/(10.00% − 3.00%) = $235.43 million.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "tv"
        },
        {
          "prompt": "What is the present value of the explicit year 1–3 FCFF?",
          "answer": 34.50037565740044,
          "unit": "$ million",
          "solution": "PV(explicit FCFF) = 12/(1 + 10.00%) + 14/(1 + 10.00%)^2 + 16/(1 + 10.00%)^3 = $34.50 million.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "explicit_pv"
        },
        {
          "prompt": "What is operating enterprise value?",
          "answer": 211.3813459268004,
          "unit": "$ million",
          "solution": "Operating EV = PV(explicit FCFF) + PV(TV3) = 34.50 + 176.88 = $211.38 million.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "ev"
        },
        {
          "prompt": "What is implied value per share?",
          "answer": 17.93813459268004,
          "unit": "$ per share",
          "solution": "Equity per share = 179.38/10.00 = $17.94. Carry unrounded DCF values.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "share_price"
        },
        {
          "type": "text",
          "prompt": "Why is terminal value discounted three periods, rather than four? Which cash flow belongs in its numerator?",
          "points": 2,
          "solution": "TV3 is a value measured at the end of year 3, immediately before the year 4 cash flow. Its numerator is FCFF4, and its time-0 value is discounted three periods.",
          "rubric": [
            "1 point: TV is dated at year 3 and discounted three periods.",
            "1 point: use FCFF4 in its numerator."
          ]
        }
      ],
      "inputs": {
        "c1": 12,
        "c2": 14,
        "c3": 16,
        "r": 0.1,
        "g": 0.03,
        "d": 40,
        "cash": 8,
        "n": 10
      },
      "templateId": "dcf-forward-valuation"
    },
    {
      "id": "e3r2-dcf-2",
      "family": "dcf",
      "title": "Cedar Consumer Products: operating value to equity",
      "intro": "Hypothetical year-end FCFF forecasts. Year 4 FCFF grows from year 3 at the stated perpetual growth rate; that rate continues thereafter. Excess cash is not included in operating FCFF. There are no other claims or assets.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Year 1 operating FCFF</th><td>$18.00</td></tr><tr><th scope=\"row\">Year 2 operating FCFF</th><td>$20.00</td></tr><tr><th scope=\"row\">Year 3 operating FCFF</th><td>$22.00</td></tr><tr><th scope=\"row\">WACC</th><td>12.00%</td></tr><tr><th scope=\"row\">Growth after year 3</th><td>4.00%</td></tr><tr><th scope=\"row\">Market value of debt</th><td>$55.00</td></tr><tr><th scope=\"row\">Nonoperating excess cash</th><td>$10.00</td></tr><tr><th scope=\"row\">Shares outstanding</th><td>15 million</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the terminal value at the end of year 3?",
          "answer": 286.00000000000006,
          "unit": "$ million",
          "solution": "FCFF4 = 22(1 + 4.00%) = $22.88 million. TV3 = FCFF4/(12.00% − 4.00%) = $286.00 million.",
          "points": 2,
          "tol": 0.02,
          "calcKey": "tv"
        },
        {
          "calcKey": "tv_lower",
          "prompt": "If perpetual growth is 1 percentage point lower, with years 1–3 unchanged, what is the new year-3 terminal value?",
          "answer": 251.7777777777778,
          "unit": "$ million",
          "solution": "New FCFF4 = 22(1 + 3.00%). TV3 = new FCFF4/(12.00% − 3.00%) = $251.78 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "ev_change",
          "prompt": "What is the change in time-0 operating enterprise value from the lower terminal growth assumption?",
          "answer": -24.358701814058975,
          "unit": "$ million",
          "solution": "Only terminal value changes: (251.78 − 286.00)/(1 + 12.00%)^3 = $-24.36 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Why does a change in distant growth assumptions affect today’s value even though the first three FCFF forecasts are unchanged?",
          "solution": "Today’s value includes the discounted cash flows beyond the explicit forecast horizon. Terminal value summarizes that continuation, so changing it changes current PV.",
          "rubric": [
            "1 point: identify post-horizon cash flows.",
            "1 point: connect their changed terminal value to discounted present value."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "c1": 18,
        "c2": 20,
        "c3": 22,
        "r": 0.12,
        "g": 0.04,
        "d": 55,
        "cash": 10,
        "n": 15,
        "lower_g": 0.03
      },
      "templateId": "dcf-terminal-growth-sensitivity"
    },
    {
      "id": "e3r2-dcf-3",
      "family": "dcf",
      "title": "Prairie Retail Services: operating value to equity",
      "intro": "Hypothetical DCF interpretation exercise. The operating DCF has already been completed; it excludes nonoperating cash. Assume no claims or assets other than the debt and cash listed. The comparison adds cash without changing operations or the discount rate.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>Dollar amounts and share counts are in millions unless another unit is stated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Operating enterprise value from the DCF</th><td>$220.071423</td></tr><tr><th scope=\"row\">Market debt</th><td>$45.00</td></tr><tr><th scope=\"row\">Nonoperating excess cash</th><td>$6.00</td></tr><tr><th scope=\"row\">Shares outstanding</th><td>12 million</td></tr><tr><th scope=\"row\">Additional excess cash in a comparison</th><td>$4.00</td></tr></tbody></table></div>",
      "parts": [
        {
          "calcKey": "equity",
          "prompt": "What equity value follows from the DCF enterprise value?",
          "answer": 181.07142277412544,
          "unit": "$ million",
          "solution": "Equity = 220.07 − 45 + 6 = $181.07 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "share_price",
          "prompt": "What is implied value per share?",
          "answer": 15.08928523117712,
          "unit": "$ per share",
          "solution": "Equity / shares = 181.07/12 = $15.09 per share.",
          "points": 2,
          "tol": 0.02
        },
        {
          "calcKey": "share_change_cash",
          "prompt": "If excess cash alone is $4 million greater, what is the increase in equity value per share?",
          "answer": 0.3333333333333333,
          "unit": "$ per share",
          "solution": "Additional excess cash belongs in equity once. Value per share rises by $4 million/12 million = $0.33.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does adding this excess cash to the equity bridge require increasing the operating FCFF forecasts as well?",
          "solution": "No. The operating enterprise value is unchanged by the stated comparison. Adding the same nonoperating cash to operating FCFF and the bridge would count it twice.",
          "rubric": [
            "1 point: leave the operating forecasts/EV unchanged.",
            "1 point: identify the risk of counting excess cash twice."
          ],
          "points": 2
        }
      ],
      "inputs": {
        "c1": 15,
        "c2": 17,
        "c3": 19,
        "r": 0.11,
        "g": 0.03,
        "d": 45,
        "cash": 6,
        "n": 12
      },
      "templateId": "dcf-equity-bridge-cash-comparison"
    }
  ]
});
