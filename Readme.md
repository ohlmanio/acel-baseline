# Goals

I want to create a calculator.

All goals:

- Online
- Offline
- Http only
- Privacy mode
- Save the users data
- Basic http post cycle that preserves their data

Calculations:

- Basic math operations
- Functions
- Constants
- Arbitrary Units
- Unit conversions

Components:

- Engine
- Backend (ssr)
- Frontend (optimistic ui)

Testing:

- Unit testing of the Engine
- End to end testing matrix
  - Rows will be features (engine features)
  - Columns will be app environments
    - Engine
    - SSR
    - Optimiistic
    - etc.
- Snapshot testing
- Performance tests
  - Time to first interactive (hot and cold)
  - Round trip time for calcuations (online and offline)
  - Any other interesting metrics

What testing framework to use?

Use different frameworks
- Should implment all the end to end tests
- Also all the performance tests
- And snapshot tests

Watch out for:
- flaky tests
- false positives
- false negatives

What are we starting with?

Implementation framework: Next.js + React

Testing framework: Cypress

Deployment:

- Vercel
- Compare others
