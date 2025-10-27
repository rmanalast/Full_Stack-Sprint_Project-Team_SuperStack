# What does this hook/service/repository do?

## useIventory  Hook
    This hook will import from the inventory repository, a function that will fetch all items and return enitre list. 
    This is called on landing component and passed to const then manipulated with "map function" for rendering purposes.
    It handle the logic behind rendering th entire inventory. The code looks alot clearer and easier to understand in landing.tsx 

## useClearCart Hook
This will target our cart section in local storage and delete it. its caled on landing and cart components. The user can now empty their cart instead of removing each one individually.

## inventory repository
This  Manages CRUD for our general inventory. Each function perform either GET ALL, GET by SKU,POST and DELETE. its called by our single search service and our inventory hook. its communicated with our mock data and supports this architecture.

## Search Features

Theres a single search component that accepts accept input as string,checks if null and then passes to our search service.
This service calls our get item by sku and returns if passes validation.Its called on Landing and cart components, you can even shortcut and add it to cart, instead of scrolling.


