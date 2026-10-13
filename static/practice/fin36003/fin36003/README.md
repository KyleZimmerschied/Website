# FINN 36003 Practice Center

This folder is a self-contained, client-side practice site for FINN 36003.

## Student-facing structure

- `/practice/fin36003/` — exam-selection landing page
- `/practice/fin36003/exam-1/` — Exam 1 Study, Chapters 1–4
- `/practice/fin36003/exam-2/` — Exam 2 Study, Chapters 5–11

Exam 1 and Exam 2 use separate browser progress keys, so studying for one exam does not mark questions as seen for the other.

## Exam 2 content

- 80 standalone questions: 40 concise multiple-choice and 40 quantitative
- 16 questions in each of five content blocks
- 39 multi-part workouts across nine families
  - Nonconstant-growth stock valuation
  - Coupon-bond valuation
  - Investment criteria
  - Mutually exclusive projects and crossover rates
  - Expansion-project FCFF
  - Scenario and sensitivity analysis
  - Break-even and operating leverage
  - Replacement-project FCFF
  - Equivalent annual cost
- Formula reference aligned to the Exam 2 formula sheet
- 75-minute simulation with 10 multiple-choice questions and four 15-point workouts

The simulation draws two multiple-choice questions from each content block and one workout from each primary exam family: valuation, investment criteria, expansion-project FCFF, and project analysis. Coupon bonds, crossover rates, scenario and sensitivity analysis, replacement projects, and EAC remain available from the workout-family selector.

## Course-material alignment

The Exam 2 bank was written primarily from the instructor slides, clicker workbook, and Homework 3–4. The textbook practice files were treated as secondary coverage checks rather than the main source of wording or examples.

Core numerical examples retained from class include the Walmart valuation and investment-criteria examples, the SpaceX expansion and replacement projects, the EAC machine comparison, the scenario NPVs, and the Starlink production-cell break-even analysis.

Selected expansion, replacement, and EAC workouts add working-capital releases,
incremental employee training, sales below book value, and terminal resale values
so students practice the same framework under meaningfully different assumptions.

## Deployment

Copy the complete `fin36003` folder into:

`C:\Users\kylez\Dropbox\Misc\Website\Website\static\practice`

The resulting folder should be:

`C:\Users\kylez\Dropbox\Misc\Website\Website\static\practice\fin36003`

Do not copy only the `exam-2` subfolder; the exam pages rely on the shared JavaScript and CSS in `shared`.

No build step or server-side component is required. The site stores seen-question history only in the student's browser using `localStorage`.
