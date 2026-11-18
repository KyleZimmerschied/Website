# FINN 36003 practice center

This is a static browser-based practice platform for Kyle Zimmerschied’s Corporate Finance course at the University of Arkansas.

## Install the update

The archive contains one `fin36003/` folder. Copy its **contents** into the existing repository folder:

`Website/static/practice/fin36003/`

Avoid nesting a second `fin36003` inside that directory. Review and commit the changes through your normal GitHub workflow. This archive has not been published to the live website.

The resulting paths are:

- `/practice/fin36003/` — exam picker
- `/practice/fin36003/exam-1/` — existing Exam 1 practice
- `/practice/fin36003/exam-2/` — existing Exam 2 practice
- `/practice/fin36003/exam-3/` — new Exam 3 practice

No npm install, build step, server API, or account is needed. Existing Exam 1/2 banks and the shared application are unchanged. Their headers now link to Exam 3, and the course landing page includes a third exam card. Exam 3 has its own application file so its scoring changes do not affect earlier exams.

## Try it locally

Open `exam-3/index.html` in a browser. All question data, styles, and logic load from local files. Google fonts are optional; the site works with fallback fonts offline.

For a local HTTP preview, run `python3 -m http.server 8000` from inside this folder and visit `http://localhost:8000/exam-3/`.

## New Exam 3 bank

- 80 standalone questions: 40 multiple choice (three options each) and 40 quantitative.
- 32 multipart workouts across eight families, with multiple numerical variants in every family.
- Chapters 14–16 and 26: WACC/CAPM/dividend growth/bond yields; IPOs and capital raising; M&M Cases 1 and 2, distress costs, and pecking order; synergy, premiums, cash/stock payment, goodwill, and takeover resistance.
- Public review topics and hypothetical parallel cases. No actual exam document, private exam solution, or student data is included.
- Coverage is practice guidance, not a guarantee of questions or weights on the real exam.

Workout families: CAPM WACC (5); dividend growth and bond YTM (3); IPO (5); no-tax M&M (3); tax-adjusted M&M (5); synergy including negative cases (3); cash versus fixed-share payment (5); explicit DCF (3).

## Practice and scoring

Custom sets use one point per standalone question. The 75-minute simulation draws ten MC questions (four points each) and one workout from each of CAPM WACC (14 points), IPO (12), tax M&M (18), and cash/stock M&A (21). This makes 105 available practice points reported out of 100.

MC and numerical results are checked locally. Interpretation answers require student self-review against the displayed model response and rubric. A numerical answer worth two points can receive one self-assessed method point after an incorrect attempt if the student’s written setup supports it. Provisional scores identify pending interpretation reviews. No prose is AI-graded and no result is sent to the instructor.

Enter percentages as percentage points (8.50 means 8.50%) and amounts in the units shown. Solutions display two decimals; numerical answers retain unrounded precision. Default tolerance is 0.02 in the displayed unit. Calculations should carry intermediate precision.

Exam 3 uses a separate `finn36003-exam3-seen-v1` browser-storage key for seen IDs, including workout variants. Responses are held only while the page remains open; they reset on reload. Practice continues if browser storage is unavailable or corrupted.

## Edit content

- `exam-3/question-bank.js`: metadata, chapters/topics, MC questions, formulas, and review coverage.
- `exam-3/question-bank-extension.js`: standalone quantitative questions.
- `exam-3/workout-bank.js`: all multipart cases, numeric solutions, model responses, and rubrics.
- `exam-3/app.js`: Exam 3 filtering, selection, scoring, timer, feedback, and self-review.
- `exam-3/exam3.css`: Exam 3 layout/accessibility additions to the existing shared visual styles.

The formula tab is a study reference using class notation, not a promise that every reminder will appear on the printed exam formula sheet. Goodwill uses fair value of identifiable **net assets** (identifiable assets minus liabilities assumed). Operating enterprise value is bridged to equity by subtracting debt and adding excess cash exactly once. Capital-spending notation follows the course definition.
