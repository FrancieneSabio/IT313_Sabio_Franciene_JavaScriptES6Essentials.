#IT313_Sabio_Franciene_JavaScriptES6Essentials.

## Problem
The IT313 registrar provided a raw list of enrollee records (name, prelim, midterm, final scores). This program coputes each enrollee's average and determines eligibility status: PASSING if the average is 75 or above, otherwise PROBATION. It then prints a formatted report including each enrollee's status, the overall class average, and the passing count.

## Approach
- **gradeUtils.js** is a separatae ES module exporting:
  - `computeAverage(prelim, midterm, final)' - named export, arrow function that returns the mean of the three scores.
  - `isPassing(average)` - default export, returns true if average >= 75.
= **main.js** imports both functions and:
  - Declares the enrollee data with `const`.
  -Simulates an async API call via `getEnrollees()`, which returns a Promise that resolves with the enrollee array after a short delay.
  - Uses `async/await` inside a `try/catch` block to safely fetch the data.
  -Uses destructuring to pull `name`, `prelim`, `midterm`, `final` from each record.
  -Uses `.map()` to build `{name, average, status }` objects.
  -Uses `.filter()` to separate passing vs. probation enrollees.
  -Uses `.reduce()` to compute the class average.
  -Uses template literals to print the final formatted report.

  ## How to Run
  1. Make sure  Node.js is installed (`node -v` to check).
  2. Clone this repo and navigate into the project folder.
  3. Run:
    ```bash
    node main.js
