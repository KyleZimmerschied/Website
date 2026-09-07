# FINN 36003 practice site

This self-contained page is designed for the Chapters 1–4 Exam 1 material.

## Student modes

- **Custom practice:** Filter the 80-question bank by topic, type, and difficulty.
- **Workout practice:** Draw one complete 15-point, multi-part workout.
- **Exam 1 simulation:** Draw 10 conceptual multiple-choice questions balanced across Chapters 1–4 (40 points) and four workouts from the five review families (60 points), with a 75-minute timer.

The workout families are cash flow from assets, DuPont analysis, working-capital management, financial planning and growth, and growth capacity. Calculation parts are auto-graded. Interpretation parts reveal a model response and rubric for self-review.

## Install in the Hugo repository

Copy this entire `fin36003` folder into `static/practice/`. Hugo/Netlify will publish it at `/practice/fin36003/`. Keep all HTML, CSS, and JavaScript files together because the page uses relative file paths.

## Add material later

- Add standalone questions to `question-bank-extension.js` using the existing schema.
- Add new multi-part variants to `workout-bank.js`.
- Add later chapters to the topic, formula, and review-alignment data before adding their questions.

All content runs locally in the student's browser. No responses are sent to the instructor.
