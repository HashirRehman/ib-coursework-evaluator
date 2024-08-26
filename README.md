# IB Coursework Evaluator

This is a web application built for evaluating International Baccalaureate (IB) coursework. The application is developed using Next.js 14, TailwindCSS, Zustand for state management.

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/HashirRehman/ib-coursework-evaluator
   cd ib-coursework-evaluator

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```

## Assumptions and Design Decisions

- Local Storage for Persistence:
  All uploaded coursework files, metadata, and evaluation results are stored locally in the browser's local storage. This ensures data   persistence across page reloads without a backend.

- Mock Data for Evaluation Display:
  Since no real evaluation logic is implemented, mock data is used to display scores and criteria breakdown.

## Challenges Faced
- TypeScript Type Errors:

  Challenge: Encountered a type error when managing coursework data.
  Solution: Defined a Coursework type to explicitly describe the shape of the data, ensuring proper type-checking and avoiding never type issues.
- Next.js Link Component:

  Challenge: Faced an error related to the usage of the <Link> component with an <a> tag.
  Solution: Removed the anchor tag.
