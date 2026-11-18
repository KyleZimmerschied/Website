/* Hypothetical multipart practice. Interpretation scores are self-assessed, never AI-graded. */
Object.assign(window.FIN36003_BANK, {
  "workoutFamilies": [
    {
      "id": "wacc_capm",
      "label": "Cost of capital: CAPM and market weights"
    },
    {
      "id": "wacc_dividend_bonds",
      "label": "Cost of capital: dividend growth and bond YTM"
    },
    {
      "id": "ipo",
      "label": "IPO: proceeds, spread, and underpricing"
    },
    {
      "id": "mm_no_tax",
      "label": "M&M Case 1: cash-flow allocation and value"
    },
    {
      "id": "mm_tax",
      "label": "M&M Case 2: taxes, value, RE, and WACC"
    },
    {
      "id": "synergy",
      "label": "Acquisition value: positive or negative synergy"
    },
    {
      "id": "cash_stock",
      "label": "Acquisition payment: cash versus fixed shares"
    },
    {
      "id": "dcf",
      "label": "DCF: forecast cash flows, terminal value, and equity"
    }
  ],
  "workouts": [
    {
      "id": "e3-wacc_capm-1",
      "family": "wacc_capm",
      "title": "Ozark Route Supply: cost of capital",
      "intro": "Hypothetical company. Use current market values. The before-tax cost of debt is provided; no bond-yield calculation is needed.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Shares outstanding</th><td>16 million</td></tr><tr><th scope=\"row\">Share price</th><td>$25.00</td></tr><tr><th scope=\"row\">Equity beta</th><td>1.10</td></tr><tr><th scope=\"row\">Risk-free rate</th><td>3.50%</td></tr><tr><th scope=\"row\">Expected market-risk premium</th><td>6.00%</td></tr><tr><th scope=\"row\">Debt: book value</th><td>$190.00</td></tr><tr><th scope=\"row\">Debt: market value</th><td>$160.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>5.50%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>25%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the cost of equity, RE?",
          "answer": 10.100000000000001,
          "unit": "%",
          "solution": "RE = Rf + βE × market-risk premium = 3.5% + 1.1(6%) = 10.10%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does this beta guarantee the company will earn the CAPM return next year? Explain.",
          "points": 1,
          "solution": "No. Beta measures systematic-risk exposure and CAPM gives a required return, not a guaranteed realized return.",
          "rubric": [
            "1 point: distinguish required return from uncertain realized return."
          ]
        },
        {
          "prompt": "What is the after-tax annual cost of debt?",
          "answer": 4.125,
          "unit": "%",
          "solution": "RD(1 − TC) = 5.5% × (1 − 25%) = 4.12%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the capital-structure weight on equity?",
          "answer": 71.42857142857143,
          "unit": "%",
          "solution": "Market E = 16 million shares × $25 = $400.00 million. wE = 400.00/(400.00 + 160.00) = 71.43%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the capital-structure weight on debt?",
          "answer": 28.57142857142857,
          "unit": "%",
          "solution": "wD = market D/(D + E) = 160.00/560.00 = 28.57%. Book debt is not the WACC weight input.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the company’s WACC?",
          "answer": 8.392857142857144,
          "unit": "%",
          "solution": "WACC = (400.00/560.00)(10.10%) + (160.00/560.00)(5.5%)(1 − 25%) = 8.39%. Carry unrounded weights.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "A new project has substantially higher operating risk and an IRR of 9.39%. Is comparison with this company WACC enough to decide whether to accept it? Explain.",
          "points": 3,
          "solution": "No. Use a hurdle rate appropriate for the project’s operating risk and financing assumptions. Higher operating risk can justify a higher required return; the fact that IRR exceeds company WACC is insufficient. Funding the project with debt or equity alone does not determine its operating risk.",
          "rubric": [
            "1 point: company-WACC comparison alone is insufficient.",
            "1 point: match the hurdle rate to the project’s risk.",
            "1 point: explain why a higher-risk project can require a higher return."
          ]
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
      }
    },
    {
      "id": "e3-wacc_capm-2",
      "family": "wacc_capm",
      "title": "River Valley Packaging: cost of capital",
      "intro": "Hypothetical company. Use current market values. The before-tax cost of debt is provided; no bond-yield calculation is needed.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Shares outstanding</th><td>24 million</td></tr><tr><th scope=\"row\">Share price</th><td>$20.00</td></tr><tr><th scope=\"row\">Equity beta</th><td>0.90</td></tr><tr><th scope=\"row\">Risk-free rate</th><td>4.00%</td></tr><tr><th scope=\"row\">Expected market-risk premium</th><td>5.00%</td></tr><tr><th scope=\"row\">Debt: book value</th><td>$150.00</td></tr><tr><th scope=\"row\">Debt: market value</th><td>$120.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>6.00%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>20%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the cost of equity, RE?",
          "answer": 8.5,
          "unit": "%",
          "solution": "RE = Rf + βE × market-risk premium = 4% + 0.9(5%) = 8.50%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does this beta guarantee the company will earn the CAPM return next year? Explain.",
          "points": 1,
          "solution": "No. Beta measures systematic-risk exposure and CAPM gives a required return, not a guaranteed realized return.",
          "rubric": [
            "1 point: distinguish required return from uncertain realized return."
          ]
        },
        {
          "prompt": "What is the after-tax annual cost of debt?",
          "answer": 4.800000000000001,
          "unit": "%",
          "solution": "RD(1 − TC) = 6% × (1 − 20%) = 4.80%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the capital-structure weight on equity?",
          "answer": 80.0,
          "unit": "%",
          "solution": "Market E = 24 million shares × $20 = $480.00 million. wE = 480.00/(480.00 + 120.00) = 80.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the capital-structure weight on debt?",
          "answer": 20.0,
          "unit": "%",
          "solution": "wD = market D/(D + E) = 120.00/600.00 = 20.00%. Book debt is not the WACC weight input.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the company’s WACC?",
          "answer": 7.760000000000001,
          "unit": "%",
          "solution": "WACC = (480.00/600.00)(8.50%) + (120.00/600.00)(6%)(1 − 20%) = 7.76%. Carry unrounded weights.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "A new project has substantially higher operating risk and an IRR of 8.76%. Is comparison with this company WACC enough to decide whether to accept it? Explain.",
          "points": 3,
          "solution": "No. Use a hurdle rate appropriate for the project’s operating risk and financing assumptions. Higher operating risk can justify a higher required return; the fact that IRR exceeds company WACC is insufficient. Funding the project with debt or equity alone does not determine its operating risk.",
          "rubric": [
            "1 point: company-WACC comparison alone is insufficient.",
            "1 point: match the hurdle rate to the project’s risk.",
            "1 point: explain why a higher-risk project can require a higher return."
          ]
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
        "t": 0.2
      }
    },
    {
      "id": "e3-wacc_capm-3",
      "family": "wacc_capm",
      "title": "Spring Creek Distribution: cost of capital",
      "intro": "Hypothetical company. Use current market values. The before-tax cost of debt is provided; no bond-yield calculation is needed.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Shares outstanding</th><td>18 million</td></tr><tr><th scope=\"row\">Share price</th><td>$30.00</td></tr><tr><th scope=\"row\">Equity beta</th><td>1.20</td></tr><tr><th scope=\"row\">Risk-free rate</th><td>3.00%</td></tr><tr><th scope=\"row\">Expected market-risk premium</th><td>6.50%</td></tr><tr><th scope=\"row\">Debt: book value</th><td>$210.00</td></tr><tr><th scope=\"row\">Debt: market value</th><td>$180.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>5.00%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>30%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the cost of equity, RE?",
          "answer": 10.8,
          "unit": "%",
          "solution": "RE = Rf + βE × market-risk premium = 3% + 1.2(6.5%) = 10.80%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does this beta guarantee the company will earn the CAPM return next year? Explain.",
          "points": 1,
          "solution": "No. Beta measures systematic-risk exposure and CAPM gives a required return, not a guaranteed realized return.",
          "rubric": [
            "1 point: distinguish required return from uncertain realized return."
          ]
        },
        {
          "prompt": "What is the after-tax annual cost of debt?",
          "answer": 3.5,
          "unit": "%",
          "solution": "RD(1 − TC) = 5% × (1 − 30%) = 3.50%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the capital-structure weight on equity?",
          "answer": 75.0,
          "unit": "%",
          "solution": "Market E = 18 million shares × $30 = $540.00 million. wE = 540.00/(540.00 + 180.00) = 75.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the capital-structure weight on debt?",
          "answer": 25.0,
          "unit": "%",
          "solution": "wD = market D/(D + E) = 180.00/720.00 = 25.00%. Book debt is not the WACC weight input.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the company’s WACC?",
          "answer": 8.975000000000001,
          "unit": "%",
          "solution": "WACC = (540.00/720.00)(10.80%) + (180.00/720.00)(5%)(1 − 30%) = 8.98%. Carry unrounded weights.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "A new project has substantially higher operating risk and an IRR of 9.98%. Is comparison with this company WACC enough to decide whether to accept it? Explain.",
          "points": 3,
          "solution": "No. Use a hurdle rate appropriate for the project’s operating risk and financing assumptions. Higher operating risk can justify a higher required return; the fact that IRR exceeds company WACC is insufficient. Funding the project with debt or equity alone does not determine its operating risk.",
          "rubric": [
            "1 point: company-WACC comparison alone is insufficient.",
            "1 point: match the hurdle rate to the project’s risk.",
            "1 point: explain why a higher-risk project can require a higher return."
          ]
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
        "t": 0.3
      }
    },
    {
      "id": "e3-wacc_capm-4",
      "family": "wacc_capm",
      "title": "Prairie Cold Storage: cost of capital",
      "intro": "Hypothetical company. Use current market values. The before-tax cost of debt is provided; no bond-yield calculation is needed.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Shares outstanding</th><td>30 million</td></tr><tr><th scope=\"row\">Share price</th><td>$16.00</td></tr><tr><th scope=\"row\">Equity beta</th><td>0.80</td></tr><tr><th scope=\"row\">Risk-free rate</th><td>4.00%</td></tr><tr><th scope=\"row\">Expected market-risk premium</th><td>6.00%</td></tr><tr><th scope=\"row\">Debt: book value</th><td>$185.00</td></tr><tr><th scope=\"row\">Debt: market value</th><td>$160.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>5.60%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>25%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the cost of equity, RE?",
          "answer": 8.8,
          "unit": "%",
          "solution": "RE = Rf + βE × market-risk premium = 4% + 0.8(6%) = 8.80%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does this beta guarantee the company will earn the CAPM return next year? Explain.",
          "points": 1,
          "solution": "No. Beta measures systematic-risk exposure and CAPM gives a required return, not a guaranteed realized return.",
          "rubric": [
            "1 point: distinguish required return from uncertain realized return."
          ]
        },
        {
          "prompt": "What is the after-tax annual cost of debt?",
          "answer": 4.199999999999999,
          "unit": "%",
          "solution": "RD(1 − TC) = 5.6% × (1 − 25%) = 4.20%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the capital-structure weight on equity?",
          "answer": 75.0,
          "unit": "%",
          "solution": "Market E = 30 million shares × $16 = $480.00 million. wE = 480.00/(480.00 + 160.00) = 75.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the capital-structure weight on debt?",
          "answer": 25.0,
          "unit": "%",
          "solution": "wD = market D/(D + E) = 160.00/640.00 = 25.00%. Book debt is not the WACC weight input.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the company’s WACC?",
          "answer": 7.65,
          "unit": "%",
          "solution": "WACC = (480.00/640.00)(8.80%) + (160.00/640.00)(5.6%)(1 − 25%) = 7.65%. Carry unrounded weights.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "A new project has substantially higher operating risk and an IRR of 8.65%. Is comparison with this company WACC enough to decide whether to accept it? Explain.",
          "points": 3,
          "solution": "No. Use a hurdle rate appropriate for the project’s operating risk and financing assumptions. Higher operating risk can justify a higher required return; the fact that IRR exceeds company WACC is insufficient. Funding the project with debt or equity alone does not determine its operating risk.",
          "rubric": [
            "1 point: company-WACC comparison alone is insufficient.",
            "1 point: match the hurdle rate to the project’s risk.",
            "1 point: explain why a higher-risk project can require a higher return."
          ]
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
        "t": 0.25
      }
    },
    {
      "id": "e3-wacc_capm-5",
      "family": "wacc_capm",
      "title": "Buffalo River Logistics: cost of capital",
      "intro": "Hypothetical company. Use current market values. The before-tax cost of debt is provided; no bond-yield calculation is needed.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Shares outstanding</th><td>12 million</td></tr><tr><th scope=\"row\">Share price</th><td>$40.00</td></tr><tr><th scope=\"row\">Equity beta</th><td>1.30</td></tr><tr><th scope=\"row\">Risk-free rate</th><td>3.50%</td></tr><tr><th scope=\"row\">Expected market-risk premium</th><td>5.00%</td></tr><tr><th scope=\"row\">Debt: book value</th><td>$220.00</td></tr><tr><th scope=\"row\">Debt: market value</th><td>$240.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>6.20%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>20%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the cost of equity, RE?",
          "answer": 10.0,
          "unit": "%",
          "solution": "RE = Rf + βE × market-risk premium = 3.5% + 1.3(5%) = 10.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does this beta guarantee the company will earn the CAPM return next year? Explain.",
          "points": 1,
          "solution": "No. Beta measures systematic-risk exposure and CAPM gives a required return, not a guaranteed realized return.",
          "rubric": [
            "1 point: distinguish required return from uncertain realized return."
          ]
        },
        {
          "prompt": "What is the after-tax annual cost of debt?",
          "answer": 4.960000000000001,
          "unit": "%",
          "solution": "RD(1 − TC) = 6.2% × (1 − 20%) = 4.96%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the capital-structure weight on equity?",
          "answer": 66.66666666666666,
          "unit": "%",
          "solution": "Market E = 12 million shares × $40 = $480.00 million. wE = 480.00/(480.00 + 240.00) = 66.67%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the capital-structure weight on debt?",
          "answer": 33.33333333333333,
          "unit": "%",
          "solution": "wD = market D/(D + E) = 240.00/720.00 = 33.33%. Book debt is not the WACC weight input.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the company’s WACC?",
          "answer": 8.32,
          "unit": "%",
          "solution": "WACC = (480.00/720.00)(10.00%) + (240.00/720.00)(6.2%)(1 − 20%) = 8.32%. Carry unrounded weights.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "A new project has substantially higher operating risk and an IRR of 9.32%. Is comparison with this company WACC enough to decide whether to accept it? Explain.",
          "points": 3,
          "solution": "No. Use a hurdle rate appropriate for the project’s operating risk and financing assumptions. Higher operating risk can justify a higher required return; the fact that IRR exceeds company WACC is insufficient. Funding the project with debt or equity alone does not determine its operating risk.",
          "rubric": [
            "1 point: company-WACC comparison alone is insufficient.",
            "1 point: match the hurdle rate to the project’s risk.",
            "1 point: explain why a higher-risk project can require a higher return."
          ]
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
        "t": 0.2
      }
    },
    {
      "id": "e3-ipo-1",
      "family": "ipo",
      "title": "Trailhead Retail Systems: an initial public offering",
      "intro": "Hypothetical firm-commitment IPO. All stated new shares are sold. Ignore other issuance expenses. First-day trading does not change the company’s IPO proceeds.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">New company shares sold</th><td>3 million</td></tr><tr><th scope=\"row\">Issuer price paid by underwriters</th><td>$17.10 per share</td></tr><tr><th scope=\"row\">Public offer price</th><td>$18.00 per share</td></tr><tr><th scope=\"row\">First-day closing price</th><td>$21.60 per share</td></tr><tr><th scope=\"row\">Founder’s separate existing-share sale</th><td>1 million shares</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "How much does the company receive in net proceeds from its new shares?",
          "answer": 51.300000000000004,
          "unit": "$ million",
          "solution": "Net = 3 million new shares × $17.10 issuer price = $51.30 million. Secondary-sale proceeds go to selling owners.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the total underwriting spread on the new shares?",
          "answer": 2.6999999999999957,
          "unit": "$ million",
          "solution": "Gross = 3 × $18.00 = $54.00 million. Spread = 54.00 − 51.30 = $2.70 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is IPO underpricing as a percentage of the offer price?",
          "answer": 20.000000000000007,
          "unit": "%",
          "solution": "Underpricing = ($21.60 − $18.00)/$18.00 = 20.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the money left on the table on the newly issued shares?",
          "answer": 10.800000000000004,
          "unit": "$ million",
          "solution": "3 million new shares × ($21.60 − $18.00) = $10.80 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Which is a direct issuance cost: the underwriting spread or money left on the table? Explain the distinction.",
          "points": 2,
          "solution": "The spread is a direct issuance cost reducing what the issuer receives relative to the public offer proceeds. Money left on the table is an opportunity cost from selling below the first-day close, not a further cash payment by the issuer.",
          "rubric": [
            "1 point: spread is a direct cost.",
            "1 point: underpricing is an opportunity cost rather than an additional check."
          ]
        },
        {
          "type": "text",
          "prompt": "The founder separately sells existing shares at the offer price without fees. Who receives those proceeds, and why do they not add to the company’s new capital?",
          "points": 2,
          "solution": "The founder receives 1 million × $18.00 = $18.00 million. This is a secondary sale of existing shares, so the company does not issue shares or receive that cash. No calculation is required for full credit.",
          "rubric": [
            "1 point: the founder receives the secondary proceeds.",
            "1 point: distinguish the owner’s sale from primary capital raised by the company."
          ]
        }
      ],
      "inputs": {
        "shares": 3,
        "issuer": 17.1,
        "offer": 18,
        "close": 21.6,
        "secondary": 1
      }
    },
    {
      "id": "e3-ipo-2",
      "family": "ipo",
      "title": "Natural State Analytics: an initial public offering",
      "intro": "Hypothetical firm-commitment IPO. All stated new shares are sold. Ignore other issuance expenses. First-day trading does not change the company’s IPO proceeds.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">New company shares sold</th><td>2.5 million</td></tr><tr><th scope=\"row\">Issuer price paid by underwriters</th><td>$22.80 per share</td></tr><tr><th scope=\"row\">Public offer price</th><td>$24.00 per share</td></tr><tr><th scope=\"row\">First-day closing price</th><td>$27.60 per share</td></tr><tr><th scope=\"row\">Founder’s separate existing-share sale</th><td>0.5 million shares</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "How much does the company receive in net proceeds from its new shares?",
          "answer": 57.0,
          "unit": "$ million",
          "solution": "Net = 2.5 million new shares × $22.80 issuer price = $57.00 million. Secondary-sale proceeds go to selling owners.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the total underwriting spread on the new shares?",
          "answer": 3.0,
          "unit": "$ million",
          "solution": "Gross = 2.5 × $24.00 = $60.00 million. Spread = 60.00 − 57.00 = $3.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is IPO underpricing as a percentage of the offer price?",
          "answer": 15.000000000000005,
          "unit": "%",
          "solution": "Underpricing = ($27.60 − $24.00)/$24.00 = 15.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the money left on the table on the newly issued shares?",
          "answer": 9.000000000000004,
          "unit": "$ million",
          "solution": "2.5 million new shares × ($27.60 − $24.00) = $9.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Which is a direct issuance cost: the underwriting spread or money left on the table? Explain the distinction.",
          "points": 2,
          "solution": "The spread is a direct issuance cost reducing what the issuer receives relative to the public offer proceeds. Money left on the table is an opportunity cost from selling below the first-day close, not a further cash payment by the issuer.",
          "rubric": [
            "1 point: spread is a direct cost.",
            "1 point: underpricing is an opportunity cost rather than an additional check."
          ]
        },
        {
          "type": "text",
          "prompt": "The founder separately sells existing shares at the offer price without fees. Who receives those proceeds, and why do they not add to the company’s new capital?",
          "points": 2,
          "solution": "The founder receives 0.5 million × $24.00 = $12.00 million. This is a secondary sale of existing shares, so the company does not issue shares or receive that cash. No calculation is required for full credit.",
          "rubric": [
            "1 point: the founder receives the secondary proceeds.",
            "1 point: distinguish the owner’s sale from primary capital raised by the company."
          ]
        }
      ],
      "inputs": {
        "shares": 2.5,
        "issuer": 22.8,
        "offer": 24,
        "close": 27.6,
        "secondary": 0.5
      }
    },
    {
      "id": "e3-ipo-3",
      "family": "ipo",
      "title": "Ozark Inventory Software: an initial public offering",
      "intro": "Hypothetical firm-commitment IPO. All stated new shares are sold. Ignore other issuance expenses. First-day trading does not change the company’s IPO proceeds.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">New company shares sold</th><td>4 million</td></tr><tr><th scope=\"row\">Issuer price paid by underwriters</th><td>$14.25 per share</td></tr><tr><th scope=\"row\">Public offer price</th><td>$15.00 per share</td></tr><tr><th scope=\"row\">First-day closing price</th><td>$18.00 per share</td></tr><tr><th scope=\"row\">Founder’s separate existing-share sale</th><td>0.75 million shares</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "How much does the company receive in net proceeds from its new shares?",
          "answer": 57.0,
          "unit": "$ million",
          "solution": "Net = 4 million new shares × $14.25 issuer price = $57.00 million. Secondary-sale proceeds go to selling owners.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the total underwriting spread on the new shares?",
          "answer": 3.0,
          "unit": "$ million",
          "solution": "Gross = 4 × $15.00 = $60.00 million. Spread = 60.00 − 57.00 = $3.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is IPO underpricing as a percentage of the offer price?",
          "answer": 20.0,
          "unit": "%",
          "solution": "Underpricing = ($18.00 − $15.00)/$15.00 = 20.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the money left on the table on the newly issued shares?",
          "answer": 12,
          "unit": "$ million",
          "solution": "4 million new shares × ($18.00 − $15.00) = $12.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Which is a direct issuance cost: the underwriting spread or money left on the table? Explain the distinction.",
          "points": 2,
          "solution": "The spread is a direct issuance cost reducing what the issuer receives relative to the public offer proceeds. Money left on the table is an opportunity cost from selling below the first-day close, not a further cash payment by the issuer.",
          "rubric": [
            "1 point: spread is a direct cost.",
            "1 point: underpricing is an opportunity cost rather than an additional check."
          ]
        },
        {
          "type": "text",
          "prompt": "The founder separately sells existing shares at the offer price without fees. Who receives those proceeds, and why do they not add to the company’s new capital?",
          "points": 2,
          "solution": "The founder receives 0.75 million × $15.00 = $11.25 million. This is a secondary sale of existing shares, so the company does not issue shares or receive that cash. No calculation is required for full credit.",
          "rubric": [
            "1 point: the founder receives the secondary proceeds.",
            "1 point: distinguish the owner’s sale from primary capital raised by the company."
          ]
        }
      ],
      "inputs": {
        "shares": 4,
        "issuer": 14.25,
        "offer": 15,
        "close": 18,
        "secondary": 0.75
      }
    },
    {
      "id": "e3-ipo-4",
      "family": "ipo",
      "title": "Summit Delivery Network: an initial public offering",
      "intro": "Hypothetical firm-commitment IPO. All stated new shares are sold. Ignore other issuance expenses. First-day trading does not change the company’s IPO proceeds.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">New company shares sold</th><td>2 million</td></tr><tr><th scope=\"row\">Issuer price paid by underwriters</th><td>$28.20 per share</td></tr><tr><th scope=\"row\">Public offer price</th><td>$30.00 per share</td></tr><tr><th scope=\"row\">First-day closing price</th><td>$34.50 per share</td></tr><tr><th scope=\"row\">Founder’s separate existing-share sale</th><td>0.6 million shares</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "How much does the company receive in net proceeds from its new shares?",
          "answer": 56.4,
          "unit": "$ million",
          "solution": "Net = 2 million new shares × $28.20 issuer price = $56.40 million. Secondary-sale proceeds go to selling owners.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the total underwriting spread on the new shares?",
          "answer": 3.6000000000000014,
          "unit": "$ million",
          "solution": "Gross = 2 × $30.00 = $60.00 million. Spread = 60.00 − 56.40 = $3.60 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is IPO underpricing as a percentage of the offer price?",
          "answer": 15.0,
          "unit": "%",
          "solution": "Underpricing = ($34.50 − $30.00)/$30.00 = 15.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the money left on the table on the newly issued shares?",
          "answer": 9.0,
          "unit": "$ million",
          "solution": "2 million new shares × ($34.50 − $30.00) = $9.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Which is a direct issuance cost: the underwriting spread or money left on the table? Explain the distinction.",
          "points": 2,
          "solution": "The spread is a direct issuance cost reducing what the issuer receives relative to the public offer proceeds. Money left on the table is an opportunity cost from selling below the first-day close, not a further cash payment by the issuer.",
          "rubric": [
            "1 point: spread is a direct cost.",
            "1 point: underpricing is an opportunity cost rather than an additional check."
          ]
        },
        {
          "type": "text",
          "prompt": "The founder separately sells existing shares at the offer price without fees. Who receives those proceeds, and why do they not add to the company’s new capital?",
          "points": 2,
          "solution": "The founder receives 0.6 million × $30.00 = $18.00 million. This is a secondary sale of existing shares, so the company does not issue shares or receive that cash. No calculation is required for full credit.",
          "rubric": [
            "1 point: the founder receives the secondary proceeds.",
            "1 point: distinguish the owner’s sale from primary capital raised by the company."
          ]
        }
      ],
      "inputs": {
        "shares": 2,
        "issuer": 28.2,
        "offer": 30,
        "close": 34.5,
        "secondary": 0.6
      }
    },
    {
      "id": "e3-ipo-5",
      "family": "ipo",
      "title": "Delta Shelf Technology: an initial public offering",
      "intro": "Hypothetical firm-commitment IPO. All stated new shares are sold. Ignore other issuance expenses. First-day trading does not change the company’s IPO proceeds.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">New company shares sold</th><td>5 million</td></tr><tr><th scope=\"row\">Issuer price paid by underwriters</th><td>$11.28 per share</td></tr><tr><th scope=\"row\">Public offer price</th><td>$12.00 per share</td></tr><tr><th scope=\"row\">First-day closing price</th><td>$13.80 per share</td></tr><tr><th scope=\"row\">Founder’s separate existing-share sale</th><td>1.5 million shares</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "How much does the company receive in net proceeds from its new shares?",
          "answer": 56.4,
          "unit": "$ million",
          "solution": "Net = 5 million new shares × $11.28 issuer price = $56.40 million. Secondary-sale proceeds go to selling owners.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the total underwriting spread on the new shares?",
          "answer": 3.6000000000000014,
          "unit": "$ million",
          "solution": "Gross = 5 × $12.00 = $60.00 million. Spread = 60.00 − 56.40 = $3.60 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is IPO underpricing as a percentage of the offer price?",
          "answer": 15.000000000000005,
          "unit": "%",
          "solution": "Underpricing = ($13.80 − $12.00)/$12.00 = 15.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the money left on the table on the newly issued shares?",
          "answer": 9.000000000000004,
          "unit": "$ million",
          "solution": "5 million new shares × ($13.80 − $12.00) = $9.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Which is a direct issuance cost: the underwriting spread or money left on the table? Explain the distinction.",
          "points": 2,
          "solution": "The spread is a direct issuance cost reducing what the issuer receives relative to the public offer proceeds. Money left on the table is an opportunity cost from selling below the first-day close, not a further cash payment by the issuer.",
          "rubric": [
            "1 point: spread is a direct cost.",
            "1 point: underpricing is an opportunity cost rather than an additional check."
          ]
        },
        {
          "type": "text",
          "prompt": "The founder separately sells existing shares at the offer price without fees. Who receives those proceeds, and why do they not add to the company’s new capital?",
          "points": 2,
          "solution": "The founder receives 1.5 million × $12.00 = $18.00 million. This is a secondary sale of existing shares, so the company does not issue shares or receive that cash. No calculation is required for full credit.",
          "rubric": [
            "1 point: the founder receives the secondary proceeds.",
            "1 point: distinguish the owner’s sale from primary capital raised by the company."
          ]
        }
      ],
      "inputs": {
        "shares": 5,
        "issuer": 11.28,
        "offer": 12,
        "close": 13.8,
        "secondary": 1.5
      }
    },
    {
      "id": "e3-mm_tax-1",
      "family": "mm_tax",
      "title": "Ozark Cold Storage: permanent debt and taxes",
      "intro": "Hypothetical all-equity firm issues permanent debt and pays all proceeds as a special dividend. Expected EBIT is a level perpetuity beginning next year. Depreciation equals capital spending, ΔNWC = 0, and there is no excess cash. Interest deductions are fully usable; discount the level tax shield at RD. Ignore other financing frictions.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Annual expected EBIT</th><td>$20.00</td></tr><tr><th scope=\"row\">Unlevered required return RU</th><td>10.00%</td></tr><tr><th scope=\"row\">Permanent debt issued</th><td>$50.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>4.00%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>30%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the value of the unlevered firm, VU?",
          "answer": 140.0,
          "unit": "$ million",
          "solution": "Unlevered FCFF = EBIT(1 − TC) = 20.00(1 − 30%) = $14.00 million. VU = 14.00/10.00% = $140.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the present value of the interest tax shield?",
          "answer": 15.0,
          "unit": "$ million",
          "solution": "Annual interest = 50.00 × 4.00% = $2.00 million. Annual shield = $0.60 million. PV = annual shield/4.00% = TC × D = $15.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the levered firm value, VL?",
          "answer": 155.0,
          "unit": "$ million",
          "solution": "VL = VU + PV(shield) = 140.00 + 15.00 = $155.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the equity value after the restructuring?",
          "answer": 105.0,
          "unit": "$ million",
          "solution": "E = VL − D = 155.00 − 50.00 = $105.00 million. The debt proceeds have been paid out, so do not add them again as retained cash.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the required return on equity after the restructuring?",
          "answer": 12.0,
          "unit": "%",
          "solution": "D/E = 50.00/105.00 = 0.4762. RE = 10.00% + (10.00% − 4.00%)(0.4762)(1 − 30%) = 12.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is WACC after the restructuring?",
          "answer": 9.032258064516128,
          "unit": "%",
          "solution": "WACC = (105.00/155.00)(12.00%) + (50.00/155.00)(4.00%)(1 − 30%) = 9.03%. Check: unlevered FCFF/WACC = $155.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does adding debt change business risk, financial risk, or both in this example? Explain.",
          "points": 3,
          "solution": "Business risk is unchanged because operating assets and the distribution of EBIT are unchanged. Financial risk for equity rises because debt creates fixed interest obligations and a residual equity claim.",
          "rubric": [
            "1 point: unchanged business risk.",
            "1 point: increased financial risk to equity.",
            "1 point: link the distinction to fixed interest and unchanged operations."
          ]
        },
        {
          "type": "text",
          "prompt": "The tax-only model rewards more debt. Why might the same company choose an intermediate debt level in practice?",
          "points": 3,
          "solution": "More leverage can raise expected financial-distress and debt-related agency costs. An interior static trade-off optimum balances the marginal tax benefit against the marginal expected cost of additional debt. Expected indirect costs can matter before bankruptcy.",
          "rubric": [
            "1 point: identify expected distress or agency costs.",
            "1 point: explain that added leverage can raise those costs.",
            "1 point: compare marginal tax benefits with marginal expected costs."
          ]
        }
      ],
      "inputs": {
        "ebit": 20,
        "ru": 0.1,
        "rd": 0.04,
        "t": 0.3,
        "d": 50
      }
    },
    {
      "id": "e3-mm_tax-2",
      "family": "mm_tax",
      "title": "Cedar Freight Services: permanent debt and taxes",
      "intro": "Hypothetical all-equity firm issues permanent debt and pays all proceeds as a special dividend. Expected EBIT is a level perpetuity beginning next year. Depreciation equals capital spending, ΔNWC = 0, and there is no excess cash. Interest deductions are fully usable; discount the level tax shield at RD. Ignore other financing frictions.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Annual expected EBIT</th><td>$16.00</td></tr><tr><th scope=\"row\">Unlevered required return RU</th><td>12.00%</td></tr><tr><th scope=\"row\">Permanent debt issued</th><td>$40.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>6.00%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>25%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the value of the unlevered firm, VU?",
          "answer": 100.0,
          "unit": "$ million",
          "solution": "Unlevered FCFF = EBIT(1 − TC) = 16.00(1 − 25%) = $12.00 million. VU = 12.00/12.00% = $100.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the present value of the interest tax shield?",
          "answer": 10.0,
          "unit": "$ million",
          "solution": "Annual interest = 40.00 × 6.00% = $2.40 million. Annual shield = $0.60 million. PV = annual shield/6.00% = TC × D = $10.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the levered firm value, VL?",
          "answer": 110.0,
          "unit": "$ million",
          "solution": "VL = VU + PV(shield) = 100.00 + 10.00 = $110.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the equity value after the restructuring?",
          "answer": 70.0,
          "unit": "$ million",
          "solution": "E = VL − D = 110.00 − 40.00 = $70.00 million. The debt proceeds have been paid out, so do not add them again as retained cash.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the required return on equity after the restructuring?",
          "answer": 14.571428571428571,
          "unit": "%",
          "solution": "D/E = 40.00/70.00 = 0.5714. RE = 12.00% + (12.00% − 6.00%)(0.5714)(1 − 25%) = 14.57%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is WACC after the restructuring?",
          "answer": 10.909090909090908,
          "unit": "%",
          "solution": "WACC = (70.00/110.00)(14.57%) + (40.00/110.00)(6.00%)(1 − 25%) = 10.91%. Check: unlevered FCFF/WACC = $110.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does adding debt change business risk, financial risk, or both in this example? Explain.",
          "points": 3,
          "solution": "Business risk is unchanged because operating assets and the distribution of EBIT are unchanged. Financial risk for equity rises because debt creates fixed interest obligations and a residual equity claim.",
          "rubric": [
            "1 point: unchanged business risk.",
            "1 point: increased financial risk to equity.",
            "1 point: link the distinction to fixed interest and unchanged operations."
          ]
        },
        {
          "type": "text",
          "prompt": "The tax-only model rewards more debt. Why might the same company choose an intermediate debt level in practice?",
          "points": 3,
          "solution": "More leverage can raise expected financial-distress and debt-related agency costs. An interior static trade-off optimum balances the marginal tax benefit against the marginal expected cost of additional debt. Expected indirect costs can matter before bankruptcy.",
          "rubric": [
            "1 point: identify expected distress or agency costs.",
            "1 point: explain that added leverage can raise those costs.",
            "1 point: compare marginal tax benefits with marginal expected costs."
          ]
        }
      ],
      "inputs": {
        "ebit": 16,
        "ru": 0.12,
        "rd": 0.06,
        "t": 0.25,
        "d": 40
      }
    },
    {
      "id": "e3-mm_tax-3",
      "family": "mm_tax",
      "title": "Delta Container Supply: permanent debt and taxes",
      "intro": "Hypothetical all-equity firm issues permanent debt and pays all proceeds as a special dividend. Expected EBIT is a level perpetuity beginning next year. Depreciation equals capital spending, ΔNWC = 0, and there is no excess cash. Interest deductions are fully usable; discount the level tax shield at RD. Ignore other financing frictions.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Annual expected EBIT</th><td>$18.00</td></tr><tr><th scope=\"row\">Unlevered required return RU</th><td>10.00%</td></tr><tr><th scope=\"row\">Permanent debt issued</th><td>$60.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>5.00%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>20%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the value of the unlevered firm, VU?",
          "answer": 144.0,
          "unit": "$ million",
          "solution": "Unlevered FCFF = EBIT(1 − TC) = 18.00(1 − 20%) = $14.40 million. VU = 14.40/10.00% = $144.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the present value of the interest tax shield?",
          "answer": 12.0,
          "unit": "$ million",
          "solution": "Annual interest = 60.00 × 5.00% = $3.00 million. Annual shield = $0.60 million. PV = annual shield/5.00% = TC × D = $12.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the levered firm value, VL?",
          "answer": 156.0,
          "unit": "$ million",
          "solution": "VL = VU + PV(shield) = 144.00 + 12.00 = $156.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the equity value after the restructuring?",
          "answer": 96.0,
          "unit": "$ million",
          "solution": "E = VL − D = 156.00 − 60.00 = $96.00 million. The debt proceeds have been paid out, so do not add them again as retained cash.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the required return on equity after the restructuring?",
          "answer": 12.5,
          "unit": "%",
          "solution": "D/E = 60.00/96.00 = 0.6250. RE = 10.00% + (10.00% − 5.00%)(0.6250)(1 − 20%) = 12.50%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is WACC after the restructuring?",
          "answer": 9.230769230769232,
          "unit": "%",
          "solution": "WACC = (96.00/156.00)(12.50%) + (60.00/156.00)(5.00%)(1 − 20%) = 9.23%. Check: unlevered FCFF/WACC = $156.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does adding debt change business risk, financial risk, or both in this example? Explain.",
          "points": 3,
          "solution": "Business risk is unchanged because operating assets and the distribution of EBIT are unchanged. Financial risk for equity rises because debt creates fixed interest obligations and a residual equity claim.",
          "rubric": [
            "1 point: unchanged business risk.",
            "1 point: increased financial risk to equity.",
            "1 point: link the distinction to fixed interest and unchanged operations."
          ]
        },
        {
          "type": "text",
          "prompt": "The tax-only model rewards more debt. Why might the same company choose an intermediate debt level in practice?",
          "points": 3,
          "solution": "More leverage can raise expected financial-distress and debt-related agency costs. An interior static trade-off optimum balances the marginal tax benefit against the marginal expected cost of additional debt. Expected indirect costs can matter before bankruptcy.",
          "rubric": [
            "1 point: identify expected distress or agency costs.",
            "1 point: explain that added leverage can raise those costs.",
            "1 point: compare marginal tax benefits with marginal expected costs."
          ]
        }
      ],
      "inputs": {
        "ebit": 18,
        "ru": 0.1,
        "rd": 0.05,
        "t": 0.2,
        "d": 60
      }
    },
    {
      "id": "e3-mm_tax-4",
      "family": "mm_tax",
      "title": "Prairie Warehouse Partners: permanent debt and taxes",
      "intro": "Hypothetical all-equity firm issues permanent debt and pays all proceeds as a special dividend. Expected EBIT is a level perpetuity beginning next year. Depreciation equals capital spending, ΔNWC = 0, and there is no excess cash. Interest deductions are fully usable; discount the level tax shield at RD. Ignore other financing frictions.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Annual expected EBIT</th><td>$24.00</td></tr><tr><th scope=\"row\">Unlevered required return RU</th><td>12.00%</td></tr><tr><th scope=\"row\">Permanent debt issued</th><td>$50.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>6.00%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>30%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the value of the unlevered firm, VU?",
          "answer": 139.99999999999997,
          "unit": "$ million",
          "solution": "Unlevered FCFF = EBIT(1 − TC) = 24.00(1 − 30%) = $16.80 million. VU = 16.80/12.00% = $140.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the present value of the interest tax shield?",
          "answer": 15.0,
          "unit": "$ million",
          "solution": "Annual interest = 50.00 × 6.00% = $3.00 million. Annual shield = $0.90 million. PV = annual shield/6.00% = TC × D = $15.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the levered firm value, VL?",
          "answer": 154.99999999999997,
          "unit": "$ million",
          "solution": "VL = VU + PV(shield) = 140.00 + 15.00 = $155.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the equity value after the restructuring?",
          "answer": 104.99999999999997,
          "unit": "$ million",
          "solution": "E = VL − D = 155.00 − 50.00 = $105.00 million. The debt proceeds have been paid out, so do not add them again as retained cash.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the required return on equity after the restructuring?",
          "answer": 14.000000000000002,
          "unit": "%",
          "solution": "D/E = 50.00/105.00 = 0.4762. RE = 12.00% + (12.00% − 6.00%)(0.4762)(1 − 30%) = 14.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is WACC after the restructuring?",
          "answer": 10.838709677419356,
          "unit": "%",
          "solution": "WACC = (105.00/155.00)(14.00%) + (50.00/155.00)(6.00%)(1 − 30%) = 10.84%. Check: unlevered FCFF/WACC = $155.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does adding debt change business risk, financial risk, or both in this example? Explain.",
          "points": 3,
          "solution": "Business risk is unchanged because operating assets and the distribution of EBIT are unchanged. Financial risk for equity rises because debt creates fixed interest obligations and a residual equity claim.",
          "rubric": [
            "1 point: unchanged business risk.",
            "1 point: increased financial risk to equity.",
            "1 point: link the distinction to fixed interest and unchanged operations."
          ]
        },
        {
          "type": "text",
          "prompt": "The tax-only model rewards more debt. Why might the same company choose an intermediate debt level in practice?",
          "points": 3,
          "solution": "More leverage can raise expected financial-distress and debt-related agency costs. An interior static trade-off optimum balances the marginal tax benefit against the marginal expected cost of additional debt. Expected indirect costs can matter before bankruptcy.",
          "rubric": [
            "1 point: identify expected distress or agency costs.",
            "1 point: explain that added leverage can raise those costs.",
            "1 point: compare marginal tax benefits with marginal expected costs."
          ]
        }
      ],
      "inputs": {
        "ebit": 24,
        "ru": 0.12,
        "rd": 0.06,
        "t": 0.3,
        "d": 50
      }
    },
    {
      "id": "e3-mm_tax-5",
      "family": "mm_tax",
      "title": "Pine Ridge Packaging: permanent debt and taxes",
      "intro": "Hypothetical all-equity firm issues permanent debt and pays all proceeds as a special dividend. Expected EBIT is a level perpetuity beginning next year. Depreciation equals capital spending, ΔNWC = 0, and there is no excess cash. Interest deductions are fully usable; discount the level tax shield at RD. Ignore other financing frictions.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Annual expected EBIT</th><td>$15.00</td></tr><tr><th scope=\"row\">Unlevered required return RU</th><td>10.00%</td></tr><tr><th scope=\"row\">Permanent debt issued</th><td>$50.00</td></tr><tr><th scope=\"row\">Before-tax annual RD</th><td>4.00%</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>25%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the value of the unlevered firm, VU?",
          "answer": 112.5,
          "unit": "$ million",
          "solution": "Unlevered FCFF = EBIT(1 − TC) = 15.00(1 − 25%) = $11.25 million. VU = 11.25/10.00% = $112.50 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the present value of the interest tax shield?",
          "answer": 12.5,
          "unit": "$ million",
          "solution": "Annual interest = 50.00 × 4.00% = $2.00 million. Annual shield = $0.50 million. PV = annual shield/4.00% = TC × D = $12.50 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the levered firm value, VL?",
          "answer": 125.0,
          "unit": "$ million",
          "solution": "VL = VU + PV(shield) = 112.50 + 12.50 = $125.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the equity value after the restructuring?",
          "answer": 75.0,
          "unit": "$ million",
          "solution": "E = VL − D = 125.00 − 50.00 = $75.00 million. The debt proceeds have been paid out, so do not add them again as retained cash.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the required return on equity after the restructuring?",
          "answer": 13.0,
          "unit": "%",
          "solution": "D/E = 50.00/75.00 = 0.6667. RE = 10.00% + (10.00% − 4.00%)(0.6667)(1 − 25%) = 13.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is WACC after the restructuring?",
          "answer": 9.0,
          "unit": "%",
          "solution": "WACC = (75.00/125.00)(13.00%) + (50.00/125.00)(4.00%)(1 − 25%) = 9.00%. Check: unlevered FCFF/WACC = $125.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Does adding debt change business risk, financial risk, or both in this example? Explain.",
          "points": 3,
          "solution": "Business risk is unchanged because operating assets and the distribution of EBIT are unchanged. Financial risk for equity rises because debt creates fixed interest obligations and a residual equity claim.",
          "rubric": [
            "1 point: unchanged business risk.",
            "1 point: increased financial risk to equity.",
            "1 point: link the distinction to fixed interest and unchanged operations."
          ]
        },
        {
          "type": "text",
          "prompt": "The tax-only model rewards more debt. Why might the same company choose an intermediate debt level in practice?",
          "points": 3,
          "solution": "More leverage can raise expected financial-distress and debt-related agency costs. An interior static trade-off optimum balances the marginal tax benefit against the marginal expected cost of additional debt. Expected indirect costs can matter before bankruptcy.",
          "rubric": [
            "1 point: identify expected distress or agency costs.",
            "1 point: explain that added leverage can raise those costs.",
            "1 point: compare marginal tax benefits with marginal expected costs."
          ]
        }
      ],
      "inputs": {
        "ebit": 15,
        "ru": 0.1,
        "rd": 0.04,
        "t": 0.25,
        "d": 50
      }
    },
    {
      "id": "e3-cash_stock-1",
      "family": "cash_stock",
      "title": "Pinnacle Markets and Cedar Grocers: acquisition payment",
      "intro": "Hypothetical transaction. Both firms operate competing stores in the same retail category. Operating FCFF and incremental synergy FCFF are level perpetuities starting next year, with the same appropriate stated discount rate. Synergy is after taxes and integration/investment needs. The buyer has no debt. Target debt remains outstanding at unchanged market value; target excess cash is retained. Ignore other transaction costs.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Pinnacle Markets: pre-deal equity value</th><td>$800.00</td></tr><tr><th scope=\"row\">Pinnacle Markets: shares outstanding</th><td>20 million</td></tr><tr><th scope=\"row\">Pinnacle Markets: excess cash already in equity</th><td>$200.00</td></tr><tr><th scope=\"row\">Cedar Grocers: annual operating FCFF</th><td>$18.00</td></tr><tr><th scope=\"row\">Cedar Grocers: market debt</th><td>$40.00</td></tr><tr><th scope=\"row\">Cedar Grocers: excess cash</th><td>$10.00</td></tr><tr><th scope=\"row\">Appropriate discount rate</th><td>10.00%</td></tr><tr><th scope=\"row\">Annual incremental synergy FCFF</th><td>$6.00</td></tr><tr><th scope=\"row\">Cash alternative: price for target equity</th><td>$180.00</td></tr><tr><th scope=\"row\">Stock alternative: fixed new buyer shares</th><td>4.5 million; no cash paid</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is Cedar Grocers’s standalone equity value?",
          "answer": 150.0,
          "unit": "$ million",
          "solution": "Cedar Grocers operating enterprise value = 18.00/10.00% = $180.00 million. Equity value = operating EV − debt + excess cash = 180.00 − 40.00 + 10.00 = $150.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the value of Cedar Grocers’s equity to Pinnacle Markets, including synergy?",
          "answer": 210.0,
          "unit": "$ million",
          "solution": "PV(synergy) = 6.00/10.00% = $60.00 million. Target equity value to this buyer = 150.00 + 60.00 = $210.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Under the cash offer, what is the acquisition premium?",
          "answer": 30.0,
          "unit": "$ million",
          "solution": "Premium = price for target equity − standalone target equity value = 180.00 − 150.00 = $30.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Under the cash offer, what is Pinnacle Markets’s acquisition NPV?",
          "answer": 30.0,
          "unit": "$ million",
          "solution": "Buyer NPV = 150.00 + 60.00 − 180.00 = $30.00 million. Check: synergy − premium = 60.00 − 30.00.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is Pinnacle Markets’s value per share after the cash acquisition?",
          "answer": 41.5,
          "unit": "$ per share",
          "solution": "Combined equity = 800.00 + 150.00 + 60.00 − 180.00 = $830.00 million. Divide by 20.00 million unchanged shares: $41.50. Initial buyer equity already includes its cash; subtract payment once.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Alternatively, what is the post-deal value per share under the fixed-share offer?",
          "answer": 41.224489795918366,
          "unit": "$ per share",
          "solution": "No cash is paid: combined equity = 800.00 + 150.00 + 60.00 = $1,010.00 million. Shares = 20.00 + 4.50 = 24.50 million. Price = $41.22. Retained cash is already included.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the actual value of the shares received by the target owners?",
          "answer": 185.51020408163265,
          "unit": "$ million",
          "solution": "Stock consideration = 4.50 million new shares × unrounded post-deal value $41.224490 = $185.51 million. The pre-deal quote is not a guaranteed dollar payment.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Classify the acquisition as horizontal, vertical, or conglomerate, and explain.",
          "points": 2,
          "solution": "Horizontal. Both firms operate competing stores in the same retail category.",
          "rubric": [
            "1 point: horizontal classification.",
            "1 point: connect the classification to the firms’ relationship."
          ]
        },
        {
          "type": "text",
          "prompt": "Which offer gives Pinnacle Markets’s original owners the larger expected gain? Support your answer.",
          "points": 2,
          "solution": "The cash offer. Cash leaves original owners equity worth $830.00 million, a $30.00 million gain. Under stock their 20.00 million shares are worth $824.49 million, a $24.49 million gain. Compare their wealth, not the total equity owned by both groups.",
          "rubric": [
            "1 point: choose the cash offer.",
            "1 point: support with original-owner wealth, share values, gains, or the payment received by sellers."
          ]
        },
        {
          "type": "text",
          "prompt": "If expected synergy becomes less certain before the deal is agreed, which payment exposes target owners to the combined business’s future performance? Explain the risk-sharing difference.",
          "points": 3,
          "solution": "A fixed-share offer exposes the target’s owners to the combined firm’s future gains and losses. A fixed cash price does not depend on the combined company’s later performance. The buyer’s original owners bear the remaining business and integration outcomes in a cash deal.",
          "rubric": [
            "1 point: identify stock as shared exposure.",
            "1 point: sellers become owners of the combined business.",
            "1 point: contrast the fixed cash payout with a value that moves with the combined firm."
          ]
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
      }
    },
    {
      "id": "e3-cash_stock-2",
      "family": "cash_stock",
      "title": "Ozark Home Supply and Valley Hardware: acquisition payment",
      "intro": "Hypothetical transaction. Both firms operate competing stores in the same retail category. Operating FCFF and incremental synergy FCFF are level perpetuities starting next year, with the same appropriate stated discount rate. Synergy is after taxes and integration/investment needs. The buyer has no debt. Target debt remains outstanding at unchanged market value; target excess cash is retained. Ignore other transaction costs.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Ozark Home Supply: pre-deal equity value</th><td>$720.00</td></tr><tr><th scope=\"row\">Ozark Home Supply: shares outstanding</th><td>24 million</td></tr><tr><th scope=\"row\">Ozark Home Supply: excess cash already in equity</th><td>$240.00</td></tr><tr><th scope=\"row\">Valley Hardware: annual operating FCFF</th><td>$21.00</td></tr><tr><th scope=\"row\">Valley Hardware: market debt</th><td>$25.00</td></tr><tr><th scope=\"row\">Valley Hardware: excess cash</th><td>$10.00</td></tr><tr><th scope=\"row\">Appropriate discount rate</th><td>12.00%</td></tr><tr><th scope=\"row\">Annual incremental synergy FCFF</th><td>$5.40</td></tr><tr><th scope=\"row\">Cash alternative: price for target equity</th><td>$195.00</td></tr><tr><th scope=\"row\">Stock alternative: fixed new buyer shares</th><td>6.5 million; no cash paid</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is Valley Hardware’s standalone equity value?",
          "answer": 160.0,
          "unit": "$ million",
          "solution": "Valley Hardware operating enterprise value = 21.00/12.00% = $175.00 million. Equity value = operating EV − debt + excess cash = 175.00 − 25.00 + 10.00 = $160.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the value of Valley Hardware’s equity to Ozark Home Supply, including synergy?",
          "answer": 205.0,
          "unit": "$ million",
          "solution": "PV(synergy) = 5.40/12.00% = $45.00 million. Target equity value to this buyer = 160.00 + 45.00 = $205.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Under the cash offer, what is the acquisition premium?",
          "answer": 35.0,
          "unit": "$ million",
          "solution": "Premium = price for target equity − standalone target equity value = 195.00 − 160.00 = $35.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Under the cash offer, what is Ozark Home Supply’s acquisition NPV?",
          "answer": 10.0,
          "unit": "$ million",
          "solution": "Buyer NPV = 160.00 + 45.00 − 195.00 = $10.00 million. Check: synergy − premium = 45.00 − 35.00.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is Ozark Home Supply’s value per share after the cash acquisition?",
          "answer": 30.416666666666668,
          "unit": "$ per share",
          "solution": "Combined equity = 720.00 + 160.00 + 45.00 − 195.00 = $730.00 million. Divide by 24.00 million unchanged shares: $30.42. Initial buyer equity already includes its cash; subtract payment once.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Alternatively, what is the post-deal value per share under the fixed-share offer?",
          "answer": 30.327868852459016,
          "unit": "$ per share",
          "solution": "No cash is paid: combined equity = 720.00 + 160.00 + 45.00 = $925.00 million. Shares = 24.00 + 6.50 = 30.50 million. Price = $30.33. Retained cash is already included.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the actual value of the shares received by the target owners?",
          "answer": 197.1311475409836,
          "unit": "$ million",
          "solution": "Stock consideration = 6.50 million new shares × unrounded post-deal value $30.327869 = $197.13 million. The pre-deal quote is not a guaranteed dollar payment.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Classify the acquisition as horizontal, vertical, or conglomerate, and explain.",
          "points": 2,
          "solution": "Horizontal. Both firms operate competing stores in the same retail category.",
          "rubric": [
            "1 point: horizontal classification.",
            "1 point: connect the classification to the firms’ relationship."
          ]
        },
        {
          "type": "text",
          "prompt": "Which offer gives Ozark Home Supply’s original owners the larger expected gain? Support your answer.",
          "points": 2,
          "solution": "The cash offer. Cash leaves original owners equity worth $730.00 million, a $10.00 million gain. Under stock their 24.00 million shares are worth $727.87 million, a $7.87 million gain. Compare their wealth, not the total equity owned by both groups.",
          "rubric": [
            "1 point: choose the cash offer.",
            "1 point: support with original-owner wealth, share values, gains, or the payment received by sellers."
          ]
        },
        {
          "type": "text",
          "prompt": "If expected synergy becomes less certain before the deal is agreed, which payment exposes target owners to the combined business’s future performance? Explain the risk-sharing difference.",
          "points": 3,
          "solution": "A fixed-share offer exposes the target’s owners to the combined firm’s future gains and losses. A fixed cash price does not depend on the combined company’s later performance. The buyer’s original owners bear the remaining business and integration outcomes in a cash deal.",
          "rubric": [
            "1 point: identify stock as shared exposure.",
            "1 point: sellers become owners of the combined business.",
            "1 point: contrast the fixed cash payout with a value that moves with the combined firm."
          ]
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
        "newn": 6.5
      }
    },
    {
      "id": "e3-cash_stock-3",
      "family": "cash_stock",
      "title": "Delta Distribution and Riverbend Warehousing: acquisition payment",
      "intro": "Hypothetical transaction. The target supplies a stage of the buyer’s production or distribution process. Operating FCFF and incremental synergy FCFF are level perpetuities starting next year, with the same appropriate stated discount rate. Synergy is after taxes and integration/investment needs. The buyer has no debt. Target debt remains outstanding at unchanged market value; target excess cash is retained. Ignore other transaction costs.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Delta Distribution: pre-deal equity value</th><td>$600.00</td></tr><tr><th scope=\"row\">Delta Distribution: shares outstanding</th><td>20 million</td></tr><tr><th scope=\"row\">Delta Distribution: excess cash already in equity</th><td>$180.00</td></tr><tr><th scope=\"row\">Riverbend Warehousing: annual operating FCFF</th><td>$16.00</td></tr><tr><th scope=\"row\">Riverbend Warehousing: market debt</th><td>$30.00</td></tr><tr><th scope=\"row\">Riverbend Warehousing: excess cash</th><td>$5.00</td></tr><tr><th scope=\"row\">Appropriate discount rate</th><td>10.00%</td></tr><tr><th scope=\"row\">Annual incremental synergy FCFF</th><td>$4.00</td></tr><tr><th scope=\"row\">Cash alternative: price for target equity</th><td>$160.00</td></tr><tr><th scope=\"row\">Stock alternative: fixed new buyer shares</th><td>5.333333 million; no cash paid</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is Riverbend Warehousing’s standalone equity value?",
          "answer": 135.0,
          "unit": "$ million",
          "solution": "Riverbend Warehousing operating enterprise value = 16.00/10.00% = $160.00 million. Equity value = operating EV − debt + excess cash = 160.00 − 30.00 + 5.00 = $135.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the value of Riverbend Warehousing’s equity to Delta Distribution, including synergy?",
          "answer": 175.0,
          "unit": "$ million",
          "solution": "PV(synergy) = 4.00/10.00% = $40.00 million. Target equity value to this buyer = 135.00 + 40.00 = $175.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Under the cash offer, what is the acquisition premium?",
          "answer": 25.0,
          "unit": "$ million",
          "solution": "Premium = price for target equity − standalone target equity value = 160.00 − 135.00 = $25.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Under the cash offer, what is Delta Distribution’s acquisition NPV?",
          "answer": 15.0,
          "unit": "$ million",
          "solution": "Buyer NPV = 135.00 + 40.00 − 160.00 = $15.00 million. Check: synergy − premium = 40.00 − 25.00.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is Delta Distribution’s value per share after the cash acquisition?",
          "answer": 30.75,
          "unit": "$ per share",
          "solution": "Combined equity = 600.00 + 135.00 + 40.00 − 160.00 = $615.00 million. Divide by 20.00 million unchanged shares: $30.75. Initial buyer equity already includes its cash; subtract payment once.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Alternatively, what is the post-deal value per share under the fixed-share offer?",
          "answer": 30.592105263157897,
          "unit": "$ per share",
          "solution": "No cash is paid: combined equity = 600.00 + 135.00 + 40.00 = $775.00 million. Shares = 20.00 + 5.33 = 25.33 million. Price = $30.59. Retained cash is already included.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the actual value of the shares received by the target owners?",
          "answer": 163.1578947368421,
          "unit": "$ million",
          "solution": "Stock consideration = 5.33 million new shares × unrounded post-deal value $30.592105 = $163.16 million. The pre-deal quote is not a guaranteed dollar payment.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Classify the acquisition as horizontal, vertical, or conglomerate, and explain.",
          "points": 2,
          "solution": "Vertical. The target supplies a stage of the buyer’s production or distribution process.",
          "rubric": [
            "1 point: vertical classification.",
            "1 point: connect the classification to the firms’ relationship."
          ]
        },
        {
          "type": "text",
          "prompt": "Which offer gives Delta Distribution’s original owners the larger expected gain? Support your answer.",
          "points": 2,
          "solution": "The cash offer. Cash leaves original owners equity worth $615.00 million, a $15.00 million gain. Under stock their 20.00 million shares are worth $611.84 million, a $11.84 million gain. Compare their wealth, not the total equity owned by both groups.",
          "rubric": [
            "1 point: choose the cash offer.",
            "1 point: support with original-owner wealth, share values, gains, or the payment received by sellers."
          ]
        },
        {
          "type": "text",
          "prompt": "If expected synergy becomes less certain before the deal is agreed, which payment exposes target owners to the combined business’s future performance? Explain the risk-sharing difference.",
          "points": 3,
          "solution": "A fixed-share offer exposes the target’s owners to the combined firm’s future gains and losses. A fixed cash price does not depend on the combined company’s later performance. The buyer’s original owners bear the remaining business and integration outcomes in a cash deal.",
          "rubric": [
            "1 point: identify stock as shared exposure.",
            "1 point: sellers become owners of the combined business.",
            "1 point: contrast the fixed cash payout with a value that moves with the combined firm."
          ]
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
        "newn": 5.333333333333333
      }
    },
    {
      "id": "e3-cash_stock-4",
      "family": "cash_stock",
      "title": "Prairie Foods and Meadow Dairy: acquisition payment",
      "intro": "Hypothetical transaction. The target supplies a stage of the buyer’s production or distribution process. Operating FCFF and incremental synergy FCFF are level perpetuities starting next year, with the same appropriate stated discount rate. Synergy is after taxes and integration/investment needs. The buyer has no debt. Target debt remains outstanding at unchanged market value; target excess cash is retained. Ignore other transaction costs.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Prairie Foods: pre-deal equity value</th><td>$900.00</td></tr><tr><th scope=\"row\">Prairie Foods: shares outstanding</th><td>25 million</td></tr><tr><th scope=\"row\">Prairie Foods: excess cash already in equity</th><td>$280.00</td></tr><tr><th scope=\"row\">Meadow Dairy: annual operating FCFF</th><td>$24.00</td></tr><tr><th scope=\"row\">Meadow Dairy: market debt</th><td>$50.00</td></tr><tr><th scope=\"row\">Meadow Dairy: excess cash</th><td>$10.00</td></tr><tr><th scope=\"row\">Appropriate discount rate</th><td>12.00%</td></tr><tr><th scope=\"row\">Annual incremental synergy FCFF</th><td>$7.20</td></tr><tr><th scope=\"row\">Cash alternative: price for target equity</th><td>$210.00</td></tr><tr><th scope=\"row\">Stock alternative: fixed new buyer shares</th><td>5.833333 million; no cash paid</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is Meadow Dairy’s standalone equity value?",
          "answer": 160.0,
          "unit": "$ million",
          "solution": "Meadow Dairy operating enterprise value = 24.00/12.00% = $200.00 million. Equity value = operating EV − debt + excess cash = 200.00 − 50.00 + 10.00 = $160.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the value of Meadow Dairy’s equity to Prairie Foods, including synergy?",
          "answer": 220.0,
          "unit": "$ million",
          "solution": "PV(synergy) = 7.20/12.00% = $60.00 million. Target equity value to this buyer = 160.00 + 60.00 = $220.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Under the cash offer, what is the acquisition premium?",
          "answer": 50.0,
          "unit": "$ million",
          "solution": "Premium = price for target equity − standalone target equity value = 210.00 − 160.00 = $50.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Under the cash offer, what is Prairie Foods’s acquisition NPV?",
          "answer": 10.0,
          "unit": "$ million",
          "solution": "Buyer NPV = 160.00 + 60.00 − 210.00 = $10.00 million. Check: synergy − premium = 60.00 − 50.00.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is Prairie Foods’s value per share after the cash acquisition?",
          "answer": 36.4,
          "unit": "$ per share",
          "solution": "Combined equity = 900.00 + 160.00 + 60.00 − 210.00 = $910.00 million. Divide by 25.00 million unchanged shares: $36.40. Initial buyer equity already includes its cash; subtract payment once.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Alternatively, what is the post-deal value per share under the fixed-share offer?",
          "answer": 36.32432432432432,
          "unit": "$ per share",
          "solution": "No cash is paid: combined equity = 900.00 + 160.00 + 60.00 = $1,120.00 million. Shares = 25.00 + 5.83 = 30.83 million. Price = $36.32. Retained cash is already included.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the actual value of the shares received by the target owners?",
          "answer": 211.89189189189187,
          "unit": "$ million",
          "solution": "Stock consideration = 5.83 million new shares × unrounded post-deal value $36.324324 = $211.89 million. The pre-deal quote is not a guaranteed dollar payment.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Classify the acquisition as horizontal, vertical, or conglomerate, and explain.",
          "points": 2,
          "solution": "Vertical. The target supplies a stage of the buyer’s production or distribution process.",
          "rubric": [
            "1 point: vertical classification.",
            "1 point: connect the classification to the firms’ relationship."
          ]
        },
        {
          "type": "text",
          "prompt": "Which offer gives Prairie Foods’s original owners the larger expected gain? Support your answer.",
          "points": 2,
          "solution": "The cash offer. Cash leaves original owners equity worth $910.00 million, a $10.00 million gain. Under stock their 25.00 million shares are worth $908.11 million, a $8.11 million gain. Compare their wealth, not the total equity owned by both groups.",
          "rubric": [
            "1 point: choose the cash offer.",
            "1 point: support with original-owner wealth, share values, gains, or the payment received by sellers."
          ]
        },
        {
          "type": "text",
          "prompt": "If expected synergy becomes less certain before the deal is agreed, which payment exposes target owners to the combined business’s future performance? Explain the risk-sharing difference.",
          "points": 3,
          "solution": "A fixed-share offer exposes the target’s owners to the combined firm’s future gains and losses. A fixed cash price does not depend on the combined company’s later performance. The buyer’s original owners bear the remaining business and integration outcomes in a cash deal.",
          "rubric": [
            "1 point: identify stock as shared exposure.",
            "1 point: sellers become owners of the combined business.",
            "1 point: contrast the fixed cash payout with a value that moves with the combined firm."
          ]
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
      }
    },
    {
      "id": "e3-cash_stock-5",
      "family": "cash_stock",
      "title": "Ridgeway Outfitters and Summit Outdoor: acquisition payment",
      "intro": "Hypothetical transaction. Both firms operate competing stores in the same retail category. Operating FCFF and incremental synergy FCFF are level perpetuities starting next year, with the same appropriate stated discount rate. Synergy is after taxes and integration/investment needs. The buyer has no debt. Target debt remains outstanding at unchanged market value; target excess cash is retained. Ignore other transaction costs.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Ridgeway Outfitters: pre-deal equity value</th><td>$640.00</td></tr><tr><th scope=\"row\">Ridgeway Outfitters: shares outstanding</th><td>16 million</td></tr><tr><th scope=\"row\">Ridgeway Outfitters: excess cash already in equity</th><td>$200.00</td></tr><tr><th scope=\"row\">Summit Outdoor: annual operating FCFF</th><td>$18.00</td></tr><tr><th scope=\"row\">Summit Outdoor: market debt</th><td>$20.00</td></tr><tr><th scope=\"row\">Summit Outdoor: excess cash</th><td>$5.00</td></tr><tr><th scope=\"row\">Appropriate discount rate</th><td>12.00%</td></tr><tr><th scope=\"row\">Annual incremental synergy FCFF</th><td>$4.80</td></tr><tr><th scope=\"row\">Cash alternative: price for target equity</th><td>$155.00</td></tr><tr><th scope=\"row\">Stock alternative: fixed new buyer shares</th><td>3.875 million; no cash paid</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is Summit Outdoor’s standalone equity value?",
          "answer": 135.0,
          "unit": "$ million",
          "solution": "Summit Outdoor operating enterprise value = 18.00/12.00% = $150.00 million. Equity value = operating EV − debt + excess cash = 150.00 − 20.00 + 5.00 = $135.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the value of Summit Outdoor’s equity to Ridgeway Outfitters, including synergy?",
          "answer": 175.0,
          "unit": "$ million",
          "solution": "PV(synergy) = 4.80/12.00% = $40.00 million. Target equity value to this buyer = 135.00 + 40.00 = $175.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Under the cash offer, what is the acquisition premium?",
          "answer": 20.0,
          "unit": "$ million",
          "solution": "Premium = price for target equity − standalone target equity value = 155.00 − 135.00 = $20.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Under the cash offer, what is Ridgeway Outfitters’s acquisition NPV?",
          "answer": 20.0,
          "unit": "$ million",
          "solution": "Buyer NPV = 135.00 + 40.00 − 155.00 = $20.00 million. Check: synergy − premium = 40.00 − 20.00.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is Ridgeway Outfitters’s value per share after the cash acquisition?",
          "answer": 41.25,
          "unit": "$ per share",
          "solution": "Combined equity = 640.00 + 135.00 + 40.00 − 155.00 = $660.00 million. Divide by 16.00 million unchanged shares: $41.25. Initial buyer equity already includes its cash; subtract payment once.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "Alternatively, what is the post-deal value per share under the fixed-share offer?",
          "answer": 41.0062893081761,
          "unit": "$ per share",
          "solution": "No cash is paid: combined equity = 640.00 + 135.00 + 40.00 = $815.00 million. Shares = 16.00 + 3.88 = 19.88 million. Price = $41.01. Retained cash is already included.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the actual value of the shares received by the target owners?",
          "answer": 158.8993710691824,
          "unit": "$ million",
          "solution": "Stock consideration = 3.88 million new shares × unrounded post-deal value $41.006289 = $158.90 million. The pre-deal quote is not a guaranteed dollar payment.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Classify the acquisition as horizontal, vertical, or conglomerate, and explain.",
          "points": 2,
          "solution": "Horizontal. Both firms operate competing stores in the same retail category.",
          "rubric": [
            "1 point: horizontal classification.",
            "1 point: connect the classification to the firms’ relationship."
          ]
        },
        {
          "type": "text",
          "prompt": "Which offer gives Ridgeway Outfitters’s original owners the larger expected gain? Support your answer.",
          "points": 2,
          "solution": "The cash offer. Cash leaves original owners equity worth $660.00 million, a $20.00 million gain. Under stock their 16.00 million shares are worth $656.10 million, a $16.10 million gain. Compare their wealth, not the total equity owned by both groups.",
          "rubric": [
            "1 point: choose the cash offer.",
            "1 point: support with original-owner wealth, share values, gains, or the payment received by sellers."
          ]
        },
        {
          "type": "text",
          "prompt": "If expected synergy becomes less certain before the deal is agreed, which payment exposes target owners to the combined business’s future performance? Explain the risk-sharing difference.",
          "points": 3,
          "solution": "A fixed-share offer exposes the target’s owners to the combined firm’s future gains and losses. A fixed cash price does not depend on the combined company’s later performance. The buyer’s original owners bear the remaining business and integration outcomes in a cash deal.",
          "rubric": [
            "1 point: identify stock as shared exposure.",
            "1 point: sellers become owners of the combined business.",
            "1 point: contrast the fixed cash payout with a value that moves with the combined firm."
          ]
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
        "newn": 3.875
      }
    },
    {
      "id": "e3-wacc_dividend_bonds-1",
      "family": "wacc_dividend_bonds",
      "title": "Natural State Distribution: dividends and bond yield",
      "intro": "Hypothetical firm. Bonds pay semiannual coupons. The debt quote is a percentage of face value. Compute annual quoted YTM as twice the semiannual yield. Retain unrounded intermediate values.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Shares outstanding</th><td>20 million</td></tr><tr><th scope=\"row\">Share price</th><td>$20.00</td></tr><tr><th scope=\"row\">Most recent dividend, D0</th><td>$0.80</td></tr><tr><th scope=\"row\">Constant dividend growth</th><td>5.00%</td></tr><tr><th scope=\"row\">Total face value of debt</th><td>$200.00</td></tr><tr><th scope=\"row\">Face value per bond</th><td>$1,000</td></tr><tr><th scope=\"row\">Bond quote</th><td>95.00% of par</td></tr><tr><th scope=\"row\">Annual coupon rate</th><td>6.00%; semiannual payments</td></tr><tr><th scope=\"row\">Remaining maturity</th><td>8 years</td></tr><tr><th scope=\"row\">Corporate tax rate</th><td>25%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the dividend-growth cost of equity?",
          "answer": 9.2,
          "unit": "%",
          "solution": "D1 = $0.80(1 + 5.00%) = $0.8400; RE = D1/$20 + 5.00% = 9.20%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the before-tax annual quoted cost of debt (nominal YTM)?",
          "answer": 6.821310241174072,
          "unit": "%",
          "solution": "Per $1,000 bond: N = 16, PV = −$950.00, PMT = $30.00, FV = $1,000. Periodic I/Y = 3.41%; annual quoted YTM = 2 × periodic yield = 6.82%. Do not report the effective annual yield.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the after-tax annual cost of debt?",
          "answer": 5.115982680880554,
          "unit": "%",
          "solution": "RD(1 − TC) = 6.82%(1 − 25%) = 5.12%. Carry the unrounded YTM.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the market value of debt?",
          "answer": 190.0,
          "unit": "$ million",
          "solution": "D = total face value × quoted price fraction = 200 × 0.9500 = $190.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the equity weight in WACC?",
          "answer": 67.79661016949152,
          "unit": "%",
          "solution": "E = 20 × $20 = $400.00 million. wE = 400.00/(400.00 + 190.00) = 67.80%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is WACC?",
          "answer": 7.884807981978484,
          "unit": "%",
          "solution": "WACC = (400.00/590.00)(9.20%) + (190.00/590.00)(6.82%)(1 − 25%) = 7.88%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Would paying for a new project entirely with retained earnings make its discount rate zero? Explain.",
          "points": 2,
          "solution": "No. Retained earnings have an opportunity cost to shareholders. Use a discount rate matching the operating cash flows’ risk and suitable financing assumptions, rather than a zero rate or the source of funding alone.",
          "rubric": [
            "1 point: retained earnings have a nonzero opportunity cost.",
            "1 point: match the discount rate to risk rather than only funding source."
          ]
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
      }
    },
    {
      "id": "e3-wacc_dividend_bonds-2",
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
          "tol": 0.02
        },
        {
          "prompt": "What is the before-tax annual quoted cost of debt (nominal YTM)?",
          "answer": 6.451001177753368,
          "unit": "%",
          "solution": "Per $1,000 bond: N = 20, PV = −$1040.00, PMT = $35.00, FV = $1,000. Periodic I/Y = 3.23%; annual quoted YTM = 2 × periodic yield = 6.45%. Do not report the effective annual yield.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the after-tax annual cost of debt?",
          "answer": 5.1608009422026955,
          "unit": "%",
          "solution": "RD(1 − TC) = 6.45%(1 − 20%) = 5.16%. Carry the unrounded YTM.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the market value of debt?",
          "answer": 166.4,
          "unit": "$ million",
          "solution": "D = total face value × quoted price fraction = 160 × 1.0400 = $166.40 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the equity weight in WACC?",
          "answer": 74.25742574257426,
          "unit": "%",
          "solution": "E = 15 × $32 = $480.00 million. wE = 480.00/(480.00 + 166.40) = 74.26%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is WACC?",
          "answer": 7.194859648487823,
          "unit": "%",
          "solution": "WACC = (480.00/646.40)(7.90%) + (166.40/646.40)(6.45%)(1 − 20%) = 7.19%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Would paying for a new project entirely with retained earnings make its discount rate zero? Explain.",
          "points": 2,
          "solution": "No. Retained earnings have an opportunity cost to shareholders. Use a discount rate matching the operating cash flows’ risk and suitable financing assumptions, rather than a zero rate or the source of funding alone.",
          "rubric": [
            "1 point: retained earnings have a nonzero opportunity cost.",
            "1 point: match the discount rate to risk rather than only funding source."
          ]
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
        "t": 0.2
      }
    },
    {
      "id": "e3-wacc_dividend_bonds-3",
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
          "tol": 0.02
        },
        {
          "prompt": "What is the before-tax annual quoted cost of debt (nominal YTM)?",
          "answer": 5.394621896282392,
          "unit": "%",
          "solution": "Per $1,000 bond: N = 12, PV = −$980.00, PMT = $25.00, FV = $1,000. Periodic I/Y = 2.70%; annual quoted YTM = 2 × periodic yield = 5.39%. Do not report the effective annual yield.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the after-tax annual cost of debt?",
          "answer": 3.776235327397674,
          "unit": "%",
          "solution": "RD(1 − TC) = 5.39%(1 − 30%) = 3.78%. Carry the unrounded YTM.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the market value of debt?",
          "answer": 147.0,
          "unit": "$ million",
          "solution": "D = total face value × quoted price fraction = 150 × 0.9800 = $147.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the equity weight in WACC?",
          "answer": 75.37688442211056,
          "unit": "%",
          "solution": "E = 25 × $18 = $450.00 million. wE = 450.00/(450.00 + 147.00) = 75.38%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is WACC?",
          "answer": 6.296660960012493,
          "unit": "%",
          "solution": "WACC = (450.00/597.00)(7.12%) + (147.00/597.00)(5.39%)(1 − 30%) = 6.30%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Would paying for a new project entirely with retained earnings make its discount rate zero? Explain.",
          "points": 2,
          "solution": "No. Retained earnings have an opportunity cost to shareholders. Use a discount rate matching the operating cash flows’ risk and suitable financing assumptions, rather than a zero rate or the source of funding alone.",
          "rubric": [
            "1 point: retained earnings have a nonzero opportunity cost.",
            "1 point: match the discount rate to risk rather than only funding source."
          ]
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
        "t": 0.3
      }
    },
    {
      "id": "e3-mm_no_tax-1",
      "family": "mm_no_tax",
      "title": "Delta Packaging: the no-tax benchmark",
      "intro": "Hypothetical firm issues permanent debt to repurchase equity. Assume no taxes, distress costs, reinvestment, or principal repayment. Expected EBIT is a level perpetuity starting next year; operating assets do not change.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Annual expected EBIT</th><td>$18.00</td></tr><tr><th scope=\"row\">Operating asset required return, RA</th><td>12.00%</td></tr><tr><th scope=\"row\">Debt issued for the repurchase</th><td>$60.00</td></tr><tr><th scope=\"row\">Annual cost of debt, RD</th><td>6.00%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the all-equity firm’s value?",
          "answer": 150.0,
          "unit": "$ million",
          "solution": "Expected FCFF = EBIT = $18.00 million. VU = 18.00/12.00% = $150.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "After borrowing, what annual cash flow goes to bondholders through interest?",
          "answer": 3.5999999999999996,
          "unit": "$ million per year",
          "solution": "Interest = 60.00 × 6.00% = $3.60 million. Principal is not repaid in this level-debt model.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "After borrowing, what annual cash flow remains for shareholders?",
          "answer": 14.4,
          "unit": "$ million per year",
          "solution": "With no taxes and no net investment, shareholder cash flow = EBIT − interest = 18.00 − 3.60 = $14.40 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is total annual FCFF, found as shareholder cash flow plus interest to bondholders?",
          "answer": 18,
          "unit": "$ million per year",
          "solution": "FCFF = shareholder cash flow + bondholder interest = 14.40 + 3.60 = $18.00 million, the same operating cash flow as before.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the cost of equity after borrowing?",
          "answer": 15.999999999999998,
          "unit": "%",
          "solution": "VL = VU = $150.00 million. E = 150.00 − 60.00 = $90.00 million. RE = 12.00% + (60.00/90.00)(12.00% − 6.00%) = 16.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is WACC after borrowing?",
          "answer": 12.0,
          "unit": "%",
          "solution": "WACC = (90.00/150.00)(16.00%) + (60.00/150.00)(6.00%) = 12.00%, unchanged.",
          "points": 2,
          "tol": 0.02
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
      }
    },
    {
      "id": "e3-mm_no_tax-2",
      "family": "mm_no_tax",
      "title": "Cedar Warehouse Supply: the no-tax benchmark",
      "intro": "Hypothetical firm issues permanent debt to repurchase equity. Assume no taxes, distress costs, reinvestment, or principal repayment. Expected EBIT is a level perpetuity starting next year; operating assets do not change.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Annual expected EBIT</th><td>$15.00</td></tr><tr><th scope=\"row\">Operating asset required return, RA</th><td>10.00%</td></tr><tr><th scope=\"row\">Debt issued for the repurchase</th><td>$50.00</td></tr><tr><th scope=\"row\">Annual cost of debt, RD</th><td>4.00%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the all-equity firm’s value?",
          "answer": 150.0,
          "unit": "$ million",
          "solution": "Expected FCFF = EBIT = $15.00 million. VU = 15.00/10.00% = $150.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "After borrowing, what annual cash flow goes to bondholders through interest?",
          "answer": 2.0,
          "unit": "$ million per year",
          "solution": "Interest = 50.00 × 4.00% = $2.00 million. Principal is not repaid in this level-debt model.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "After borrowing, what annual cash flow remains for shareholders?",
          "answer": 13.0,
          "unit": "$ million per year",
          "solution": "With no taxes and no net investment, shareholder cash flow = EBIT − interest = 15.00 − 2.00 = $13.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is total annual FCFF, found as shareholder cash flow plus interest to bondholders?",
          "answer": 15,
          "unit": "$ million per year",
          "solution": "FCFF = shareholder cash flow + bondholder interest = 13.00 + 2.00 = $15.00 million, the same operating cash flow as before.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the cost of equity after borrowing?",
          "answer": 13.0,
          "unit": "%",
          "solution": "VL = VU = $150.00 million. E = 150.00 − 50.00 = $100.00 million. RE = 10.00% + (50.00/100.00)(10.00% − 4.00%) = 13.00%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is WACC after borrowing?",
          "answer": 10.0,
          "unit": "%",
          "solution": "WACC = (100.00/150.00)(13.00%) + (50.00/150.00)(4.00%) = 10.00%, unchanged.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Explain why firm value remains unchanged even though the equity required return rises.",
          "points": 3,
          "solution": "Total expected FCFF remains $15.00 million and WACC remains 10.00%. Therefore the same perpetuity has the same value. Interest reallocates cash flows to lenders, while greater financial risk raises the required return on remaining equity.",
          "rubric": [
            "1 point: total FCFF is unchanged.",
            "1 point: WACC is unchanged.",
            "1 point: connect unchanged cash flow and discount rate to unchanged value."
          ]
        }
      ],
      "inputs": {
        "ebit": 15,
        "ru": 0.1,
        "d": 50,
        "rd": 0.04
      }
    },
    {
      "id": "e3-mm_no_tax-3",
      "family": "mm_no_tax",
      "title": "Prairie Equipment Rental: the no-tax benchmark",
      "intro": "Hypothetical firm issues permanent debt to repurchase equity. Assume no taxes, distress costs, reinvestment, or principal repayment. Expected EBIT is a level perpetuity starting next year; operating assets do not change.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Annual expected EBIT</th><td>$24.00</td></tr><tr><th scope=\"row\">Operating asset required return, RA</th><td>12.00%</td></tr><tr><th scope=\"row\">Debt issued for the repurchase</th><td>$80.00</td></tr><tr><th scope=\"row\">Annual cost of debt, RD</th><td>5.00%</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the all-equity firm’s value?",
          "answer": 200.0,
          "unit": "$ million",
          "solution": "Expected FCFF = EBIT = $24.00 million. VU = 24.00/12.00% = $200.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "After borrowing, what annual cash flow goes to bondholders through interest?",
          "answer": 4.0,
          "unit": "$ million per year",
          "solution": "Interest = 80.00 × 5.00% = $4.00 million. Principal is not repaid in this level-debt model.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "After borrowing, what annual cash flow remains for shareholders?",
          "answer": 20.0,
          "unit": "$ million per year",
          "solution": "With no taxes and no net investment, shareholder cash flow = EBIT − interest = 24.00 − 4.00 = $20.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is total annual FCFF, found as shareholder cash flow plus interest to bondholders?",
          "answer": 24,
          "unit": "$ million per year",
          "solution": "FCFF = shareholder cash flow + bondholder interest = 20.00 + 4.00 = $24.00 million, the same operating cash flow as before.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the cost of equity after borrowing?",
          "answer": 16.666666666666664,
          "unit": "%",
          "solution": "VL = VU = $200.00 million. E = 200.00 − 80.00 = $120.00 million. RE = 12.00% + (80.00/120.00)(12.00% − 5.00%) = 16.67%.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is WACC after borrowing?",
          "answer": 12.0,
          "unit": "%",
          "solution": "WACC = (120.00/200.00)(16.67%) + (80.00/200.00)(5.00%) = 12.00%, unchanged.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Explain why firm value remains unchanged even though the equity required return rises.",
          "points": 3,
          "solution": "Total expected FCFF remains $24.00 million and WACC remains 12.00%. Therefore the same perpetuity has the same value. Interest reallocates cash flows to lenders, while greater financial risk raises the required return on remaining equity.",
          "rubric": [
            "1 point: total FCFF is unchanged.",
            "1 point: WACC is unchanged.",
            "1 point: connect unchanged cash flow and discount rate to unchanged value."
          ]
        }
      ],
      "inputs": {
        "ebit": 24,
        "ru": 0.12,
        "d": 80,
        "rd": 0.05
      }
    },
    {
      "id": "e3-synergy-1",
      "family": "synergy",
      "title": "Frontier Foods and PixelPlay Games: is there value to share?",
      "intro": "Hypothetical firms: a food producer and an unrelated video-game studio. Both are all-equity firms with no excess cash. All operating FCFF is after tax, net of integration and investment needs, level forever starting next year, and appropriately discounted at the rate below.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Frontier Foods: standalone annual FCFF</th><td>$32.00</td></tr><tr><th scope=\"row\">PixelPlay Games: standalone annual FCFF</th><td>$16.00</td></tr><tr><th scope=\"row\">Combined annual FCFF</th><td>$44.00</td></tr><tr><th scope=\"row\">Appropriate discount rate</th><td>8.00%</td></tr><tr><th scope=\"row\">Proposed cash price for all target equity</th><td>$180.00</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is Frontier Foods’s standalone enterprise value?",
          "answer": 400.0,
          "unit": "$ million",
          "solution": "Frontier Foods operating EV = 32.00/8.00% = $400.00 million. With no debt or excess cash, this also equals equity value.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is PixelPlay Games’s standalone enterprise value?",
          "answer": 200.0,
          "unit": "$ million",
          "solution": "PixelPlay Games operating EV = 16.00/8.00% = $200.00 million. It also equals equity value here.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is annual incremental synergy FCFF?",
          "answer": -4,
          "unit": "$ million per year",
          "solution": "ΔFCFF = combined − separate = 44.00 − (32.00 + 16.00) = $-4.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the present value of synergy?",
          "answer": -50.0,
          "unit": "$ million",
          "solution": "PV(synergy) = -4.00/8.00% = $-50.00 million. Preserve the sign.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the value of PixelPlay Games to Frontier Foods, including synergy?",
          "answer": 150.0,
          "unit": "$ million",
          "solution": "Target value to buyer = standalone equity value + PV(synergy) = 200.00 + (-50.00) = $150.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the buyer’s NPV at the proposed price?",
          "answer": -30.0,
          "unit": "$ million",
          "solution": "Buyer NPV = 150.00 − 180.00 = $-30.00 million.",
          "points": 2,
          "tol": 0.02
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
      }
    },
    {
      "id": "e3-synergy-2",
      "family": "synergy",
      "title": "Valley Outfitters and Trail Supply Stores: is there value to share?",
      "intro": "Hypothetical firms: two competing outdoor retail chains. Both are all-equity firms with no excess cash. All operating FCFF is after tax, net of integration and investment needs, level forever starting next year, and appropriately discounted at the rate below.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Valley Outfitters: standalone annual FCFF</th><td>$36.00</td></tr><tr><th scope=\"row\">Trail Supply Stores: standalone annual FCFF</th><td>$18.00</td></tr><tr><th scope=\"row\">Combined annual FCFF</th><td>$61.00</td></tr><tr><th scope=\"row\">Appropriate discount rate</th><td>10.00%</td></tr><tr><th scope=\"row\">Proposed cash price for all target equity</th><td>$220.00</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is Valley Outfitters’s standalone enterprise value?",
          "answer": 360.0,
          "unit": "$ million",
          "solution": "Valley Outfitters operating EV = 36.00/10.00% = $360.00 million. With no debt or excess cash, this also equals equity value.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is Trail Supply Stores’s standalone enterprise value?",
          "answer": 180.0,
          "unit": "$ million",
          "solution": "Trail Supply Stores operating EV = 18.00/10.00% = $180.00 million. It also equals equity value here.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is annual incremental synergy FCFF?",
          "answer": 7,
          "unit": "$ million per year",
          "solution": "ΔFCFF = combined − separate = 61.00 − (36.00 + 18.00) = $7.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the present value of synergy?",
          "answer": 70.0,
          "unit": "$ million",
          "solution": "PV(synergy) = 7.00/10.00% = $70.00 million. Preserve the sign.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the value of Trail Supply Stores to Valley Outfitters, including synergy?",
          "answer": 250.0,
          "unit": "$ million",
          "solution": "Target value to buyer = standalone equity value + PV(synergy) = 180.00 + (70.00) = $250.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the buyer’s NPV at the proposed price?",
          "answer": 30.0,
          "unit": "$ million",
          "solution": "Buyer NPV = 250.00 − 220.00 = $30.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Classify this acquisition and explain. Does the classification alone establish whether synergy is positive?",
          "points": 2,
          "solution": "Horizontal: the businesses are two competing outdoor retail chains. Classification describes their business relationship, not the sign of incremental FCFF.",
          "rubric": [
            "1 point: horizontal with an appropriate business explanation.",
            "1 point: classification does not determine the sign of synergy."
          ]
        },
        {
          "type": "text",
          "prompt": "Is there a purchase price that leaves both groups of shareholders at least as well off as remaining separate? Explain.",
          "points": 3,
          "solution": "Yes. The seller needs at least standalone equity value of $180.00 million; the buyer can pay up to $250.00 million without negative NPV. Positive synergy creates a mutually acceptable interval.",
          "rubric": [
            "1 point: identify the seller’s standalone-value floor.",
            "1 point: identify the buyer’s synergy-adjusted ceiling.",
            "1 point: determine whether those limits overlap."
          ]
        }
      ],
      "inputs": {
        "a": 36,
        "b": 18,
        "combined": 61,
        "r": 0.1,
        "price": 220
      }
    },
    {
      "id": "e3-synergy-3",
      "family": "synergy",
      "title": "Ozark Freight and Cedar Warehousing: is there value to share?",
      "intro": "Hypothetical firms: a freight carrier and a warehouse supplier in its distribution chain. Both are all-equity firms with no excess cash. All operating FCFF is after tax, net of integration and investment needs, level forever starting next year, and appropriately discounted at the rate below.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Ozark Freight: standalone annual FCFF</th><td>$28.00</td></tr><tr><th scope=\"row\">Cedar Warehousing: standalone annual FCFF</th><td>$14.00</td></tr><tr><th scope=\"row\">Combined annual FCFF</th><td>$41.00</td></tr><tr><th scope=\"row\">Appropriate discount rate</th><td>10.00%</td></tr><tr><th scope=\"row\">Proposed cash price for all target equity</th><td>$135.00</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is Ozark Freight’s standalone enterprise value?",
          "answer": 280.0,
          "unit": "$ million",
          "solution": "Ozark Freight operating EV = 28.00/10.00% = $280.00 million. With no debt or excess cash, this also equals equity value.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is Cedar Warehousing’s standalone enterprise value?",
          "answer": 140.0,
          "unit": "$ million",
          "solution": "Cedar Warehousing operating EV = 14.00/10.00% = $140.00 million. It also equals equity value here.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is annual incremental synergy FCFF?",
          "answer": -1,
          "unit": "$ million per year",
          "solution": "ΔFCFF = combined − separate = 41.00 − (28.00 + 14.00) = $-1.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the present value of synergy?",
          "answer": -10.0,
          "unit": "$ million",
          "solution": "PV(synergy) = -1.00/10.00% = $-10.00 million. Preserve the sign.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the value of Cedar Warehousing to Ozark Freight, including synergy?",
          "answer": 130.0,
          "unit": "$ million",
          "solution": "Target value to buyer = standalone equity value + PV(synergy) = 140.00 + (-10.00) = $130.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the buyer’s NPV at the proposed price?",
          "answer": -5.0,
          "unit": "$ million",
          "solution": "Buyer NPV = 130.00 − 135.00 = $-5.00 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "type": "text",
          "prompt": "Classify this acquisition and explain. Does the classification alone establish whether synergy is positive?",
          "points": 2,
          "solution": "Vertical: the businesses are a freight carrier and a warehouse supplier in its distribution chain. Classification describes their business relationship, not the sign of incremental FCFF.",
          "rubric": [
            "1 point: vertical with an appropriate business explanation.",
            "1 point: classification does not determine the sign of synergy."
          ]
        },
        {
          "type": "text",
          "prompt": "Is there a purchase price that leaves both groups of shareholders at least as well off as remaining separate? Explain.",
          "points": 3,
          "solution": "No, under these assumptions. Sellers need at least standalone equity value of $140.00 million; the buyer can justify at most $130.00 million. Negative synergy leaves no overlap. A transfer in price reallocates losses rather than removing them.",
          "rubric": [
            "1 point: identify the seller’s standalone-value floor.",
            "1 point: identify the buyer’s synergy-adjusted ceiling.",
            "1 point: determine whether those limits overlap."
          ]
        }
      ],
      "inputs": {
        "a": 28,
        "b": 14,
        "combined": 41,
        "r": 0.1,
        "price": 135
      }
    },
    {
      "id": "e3-dcf-1",
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
          "tol": 0.02
        },
        {
          "prompt": "What is the present value of terminal value at time 0?",
          "answer": 176.88097026939997,
          "unit": "$ million",
          "solution": "PV(TV3) = 235.43/(1 + 10.00%)^3 = $176.88 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the present value of the explicit year 1–3 FCFF?",
          "answer": 34.50037565740044,
          "unit": "$ million",
          "solution": "PV(explicit FCFF) = 12/(1 + 10.00%) + 14/(1 + 10.00%)^2 + 16/(1 + 10.00%)^3 = $34.50 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is operating enterprise value?",
          "answer": 211.3813459268004,
          "unit": "$ million",
          "solution": "Operating EV = PV(explicit FCFF) + PV(TV3) = 34.50 + 176.88 = $211.38 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is implied equity value?",
          "answer": 179.3813459268004,
          "unit": "$ million",
          "solution": "Equity = operating EV − market debt + excess cash = 211.38 − 40.00 + 8.00 = $179.38 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is implied value per share?",
          "answer": 17.93813459268004,
          "unit": "$ per share",
          "solution": "Equity per share = 179.38/10.00 = $17.94. Carry unrounded DCF values.",
          "points": 2,
          "tol": 0.02
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
        },
        {
          "type": "text",
          "prompt": "Holding cash-flow forecasts and growth fixed, what happens to value if the appropriate WACC rises? Explain.",
          "points": 2,
          "solution": "Value falls for these positive cash flows: the explicit cash flows are discounted more heavily and terminal value falls as WACC − g increases. Riskier cash flows can justify a higher discount rate.",
          "rubric": [
            "1 point: value falls.",
            "1 point: link to discounting or the terminal-value denominator."
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
      }
    },
    {
      "id": "e3-dcf-2",
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
          "tol": 0.02
        },
        {
          "prompt": "What is the present value of terminal value at time 0?",
          "answer": 203.56915087463554,
          "unit": "$ million",
          "solution": "PV(TV3) = 286.00/(1 + 12.00%)^3 = $203.57 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the present value of the explicit year 1–3 FCFF?",
          "answer": 47.67447157434401,
          "unit": "$ million",
          "solution": "PV(explicit FCFF) = 18/(1 + 12.00%) + 20/(1 + 12.00%)^2 + 22/(1 + 12.00%)^3 = $47.67 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is operating enterprise value?",
          "answer": 251.24362244897955,
          "unit": "$ million",
          "solution": "Operating EV = PV(explicit FCFF) + PV(TV3) = 47.67 + 203.57 = $251.24 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is implied equity value?",
          "answer": 206.24362244897955,
          "unit": "$ million",
          "solution": "Equity = operating EV − market debt + excess cash = 251.24 − 55.00 + 10.00 = $206.24 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is implied value per share?",
          "answer": 13.74957482993197,
          "unit": "$ per share",
          "solution": "Equity per share = 206.24/15.00 = $13.75. Carry unrounded DCF values.",
          "points": 2,
          "tol": 0.02
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
        },
        {
          "type": "text",
          "prompt": "Holding cash-flow forecasts and growth fixed, what happens to value if the appropriate WACC rises? Explain.",
          "points": 2,
          "solution": "Value falls for these positive cash flows: the explicit cash flows are discounted more heavily and terminal value falls as WACC − g increases. Riskier cash flows can justify a higher discount rate.",
          "rubric": [
            "1 point: value falls.",
            "1 point: link to discounting or the terminal-value denominator."
          ]
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
        "n": 15
      }
    },
    {
      "id": "e3-dcf-3",
      "family": "dcf",
      "title": "Prairie Retail Services: operating value to equity",
      "intro": "Hypothetical year-end FCFF forecasts. Year 4 FCFF grows from year 3 at the stated perpetual growth rate; that rate continues thereafter. Excess cash is not included in operating FCFF. There are no other claims or assets.",
      "exhibit": "<div class=\"exhibit-wrap\"><table class=\"exhibit\"><caption>All dollar amounts are in millions unless indicated.</caption><thead><tr><th scope=\"col\">Input</th><th scope=\"col\">Value</th></tr></thead><tbody><tr><th scope=\"row\">Year 1 operating FCFF</th><td>$15.00</td></tr><tr><th scope=\"row\">Year 2 operating FCFF</th><td>$17.00</td></tr><tr><th scope=\"row\">Year 3 operating FCFF</th><td>$19.00</td></tr><tr><th scope=\"row\">WACC</th><td>11.00%</td></tr><tr><th scope=\"row\">Growth after year 3</th><td>3.00%</td></tr><tr><th scope=\"row\">Market value of debt</th><td>$45.00</td></tr><tr><th scope=\"row\">Nonoperating excess cash</th><td>$6.00</td></tr><tr><th scope=\"row\">Shares outstanding</th><td>12 million</td></tr></tbody></table></div>",
      "parts": [
        {
          "prompt": "What is the terminal value at the end of year 3?",
          "answer": 244.625,
          "unit": "$ million",
          "solution": "FCFF4 = 19(1 + 3.00%) = $19.57 million. TV3 = FCFF4/(11.00% − 3.00%) = $244.62 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the present value of terminal value at time 0?",
          "answer": 178.86769165074494,
          "unit": "$ million",
          "solution": "PV(TV3) = 244.62/(1 + 11.00%)^3 = $178.87 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is the present value of the explicit year 1–3 FCFF?",
          "answer": 41.2037311233805,
          "unit": "$ million",
          "solution": "PV(explicit FCFF) = 15/(1 + 11.00%) + 17/(1 + 11.00%)^2 + 19/(1 + 11.00%)^3 = $41.20 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is operating enterprise value?",
          "answer": 220.07142277412544,
          "unit": "$ million",
          "solution": "Operating EV = PV(explicit FCFF) + PV(TV3) = 41.20 + 178.87 = $220.07 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is implied equity value?",
          "answer": 181.07142277412544,
          "unit": "$ million",
          "solution": "Equity = operating EV − market debt + excess cash = 220.07 − 45.00 + 6.00 = $181.07 million.",
          "points": 2,
          "tol": 0.02
        },
        {
          "prompt": "What is implied value per share?",
          "answer": 15.08928523117712,
          "unit": "$ per share",
          "solution": "Equity per share = 181.07/12.00 = $15.09. Carry unrounded DCF values.",
          "points": 2,
          "tol": 0.02
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
        },
        {
          "type": "text",
          "prompt": "Holding cash-flow forecasts and growth fixed, what happens to value if the appropriate WACC rises? Explain.",
          "points": 2,
          "solution": "Value falls for these positive cash flows: the explicit cash flows are discounted more heavily and terminal value falls as WACC − g increases. Riskier cash flows can justify a higher discount rate.",
          "rubric": [
            "1 point: value falls.",
            "1 point: link to discounting or the terminal-value denominator."
          ]
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
      }
    }
  ]
});
