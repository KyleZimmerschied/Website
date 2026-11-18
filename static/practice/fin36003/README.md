# FINN 36003 practice center

Static study platform for Corporate Finance at the University of Arkansas.

## Update an already installed Exam 3

Copy the six files inside this package's `fin36003/exam-3/` into your existing
`static/practice/fin36003/exam-3/`, replacing the matching files. Keep the folder
itself and all other exam/shared folders. This is sufficient for the practice
revision; the homepage still correctly lists 80 questions and 32 workouts.

Start a fresh local preview, review the changes, and publish normally. After
deployment, reload the Exam 3 page with Ctrl+F5. Revised script URLs include a
version query to reduce old/new bank mismatches from cached assets.

## Full installation or recovery

This package contains a complete `fin36003` folder, including Exams 1 and 2 and
all five shared assets. Copy its contents into the existing project directory:

`static/practice/fin36003/`

Merge existing folders and replace matching files. Avoid creating a nested
`fin36003/fin36003` directory. Preview through the normal website workflow,
then commit and publish. Open `/practice/fin36003/` for the exam picker.

For local use without a web server, open `exam-3/index.html`. The questions and
styles are local; Google fonts are optional.

## Exam 3 mixed review practice

The bank contains 80 standalone questions (40 MC and 40 quantitative), plus
32 multipart cases across eight workout families. The reference tab and the
worked solutions use the notation introduced in class.

The 75-minute simulation uses 10 MC questions and four workouts. MC selection
covers all four chapters. Workouts are sampled without repeated families,
cover at least three chapters, and include no more than two cases from any
chapter. All eight families can appear; combinations and workout order vary.
Choices are shuffled for each practice attempt. Case tasks vary within each
family rather than repeating one calculation ladder with new numbers.

Practice point totals vary by selected case. Results show earned points out of
available points, and a practice percentage. They are learning feedback rather
than a forecast of an exam score or question arrangement.

Numeric and MC responses are checked in the browser. Interpretation points and
one-point method credit require honest self-review using the model responses.
No prose is AI-graded and no responses are sent to the instructor.

The Exam 3 revision uses the browser key `finn36003-exam3-seen-v2` so revised
questions and cases start with fresh seen-question history. Exam 1/2 history is
separate. Answers are not retained after a reload.

## Files

- `exam-3/question-bank.js`: MC questions, metadata, topics, and formulas.
- `exam-3/question-bank-extension.js`: standalone calculations.
- `exam-3/workout-bank.js`: varied cases, solutions, and self-review rubrics.
- `exam-3/app.js`: practice selection, checking, timer, and feedback.
- `exam-3/exam3.css`: layout additions.
- `shared/`: shared assets required by the study pages.

No instructor-only alignment report, exam source, or private answer key is
included in this website package.
