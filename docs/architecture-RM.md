# Architecture – RM

Breakdown:
<APP>  
    <USER-ACCOUNT-PAGE> // This page allows admins or users to create new accounts. Users fill in first name, last name, username, email, and password. Upon submission, the account is added to the test data repository.   
    <useFormValidation> // HOOK   
    <USER-ACCOUNT-FORM> // The main form component for account creation. Uses the hook for form state and validation.

User Account Services:
formValidation: This service defines the business logic for validating user inputs. Main functions:
- validateField → checks a single field based on name and value
- Field-specific validation functions like validateUsername, validateEmail, validatePassword
- The service ensures consistent validation rules and keeps the hook/component focused on UI logic.

User Account Repository:
userAccount: Handles CRUD operations for user accounts in the frontend test data. Main functions:
- createUserAccount → creates and adds a new user to the array
- getAllUsersAccounts → retrieves all users
- updateUserAccount → updates an existing user
- removeUserAccount → removes a user by ID

This layer is strictly responsible for data management and mimics backend behavior with test data.

Separation of Concerns:
- Repository (Data Layer): Handles creation, retrieval, updating, and deletion of user accounts. Focused solely on managing the data.
- Services (Business Layer): Encapsulates validation and any other business rules, keeping logic separate from UI and data layers.
- Hooks and Components (Render Layer): Renders the form UI and uses the hook/service to manage state and validation. Form submission calls the repository to persist data.

Used Where?
- useFormValidation Hook: Used inside UserAccountForm to handle form inputs and validation.
- formValidation Service: Called by the hook to apply validation rules for each field.
- userAccount Repository: Called in the form submission handler to add new users to the test data.
- UserAccountForm Component: Provides the form UI, connects the hook for state/validation, and interacts with the repository to persist new accounts