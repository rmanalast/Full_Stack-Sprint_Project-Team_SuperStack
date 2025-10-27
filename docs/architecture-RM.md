# Architecture – RM

- **Hook:** `useFormValidation` → manages form state and validation
- **Service:** `formValidation` → handles input validation logic
- **Repository:** `userAccount` → CRUD operations on user test data
- **Component:** `UserAccountForm` → combines all above to create users

Flow:  
`UserAccountForm` → `useFormValidation` → `formValidation` → `userAccount`