# Breakdown:

<APP>
	<RENTAL-PAGE> // This page contains the inventory for the rental department aswell as a form for users to put holds on items. They select the length they want to rent for, enter an email and name for the order to then be used by the staff to process the order in store. 
		<useRental> //HOOK
		<RENTAL-ITEMS> // Passed the hooked array and onclick functionality, it displays available rentals. 
		<RENTAL-FORM> // The main form for users to put in orders. 
			<RENTAL_ITEMS> // Same as above, this time it is given a filtered list that only contains isSelected === true rentals. 


## Rental Hooks: 

useRental: This Hook contains the basic functionality for the rentals. main functions are fetch rentals which is being called in a useEffect on render. and two toggle functions, for isRented (on form submission) and isSelected (on button click). 

## Rental Services: 
	fetch: this service calls the repo layer to fetch data on rentals and returns it. 

	toggleSelected: this service calls the repo layer to toggle the value of the rental's isSelected value. 

	toggleRented: This services acts in the same way as toggleSelected but for the isRented value. 

## Rental repository:
	fetch: calls backend for data via CRUD operations

	toggleSelected: flips the isSelected value of a rental on the frontend 

	toggleRented: flips the isRented value of a rental on the frontend



## Separation of Concerns: 

	> REPO (Data Layer):
		> Handles the Data logic, this includes changing values and fetching from the API. 

		> This layer handles getting our rentals and changing the Boolean values for isRented and isSelected based off the handler the user interacts with. 

	> SERVICES (Business Layer):
		> Defines the business logic such as what to do when the add button is pressed. 

		> This layer handles business logic, so if we want X to happen we call the REPO layer to handle the data logic to meet our business layers needs. 

	> Hooks and Components (Render Level):
		> Renders UI to users and manages component lifecycle, keeping it separate from business and data layer. 

		> Holds the handlers that calls the respective service layer to check business logic and acts accordingly to what is returned to the render layer. 


## Used Where? 

	> The functionality is for the rental inventory, it belongs to the rental page and is only used there. 

		> Rental Hook: used inside the rental page to set state and handlers to pass to the form and populators. 

		> Rental Service: Business Logic for the rental components. It is called in the useRental Hook

		> Rental Populator: The populator for the rental items, it is fed a list and handler, then populates the items into the respective location. Called in the rental page and form
		
		> Rental Repository: Holds the data logic to be called by the rental services.