# fuber - Cab Service

You are the proprietor of füber, an on call taxi service.

·  You have a fleet of cabs at your disposal, and each cab has a location, determined by it’s latitude and longitude.

·  A customer can call one of your taxis by providing their location, and you must assign the nearest taxi to the customer.

·  Some customers are particular that they only ride around in pink cars, for hipster reasons. You must support this ability.

·  When the cab is assigned to the customer, it can no longer pick up any other customers

·  If there are no taxis available, you reject the customers request.

·  The customer ends the ride at some location. The cab waits around outside the customer’s house, and is available to be assigned to another customer.

### Setup
1. Clone the repository.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to run the project.

### Book a cab
http://localhost:3000/book?lattitude={lattitude}&longitude={longitude}&color={color}

type: **GET**

parameters: lattitude - lattitude of the user,
            longitude - longitude of the user,
            color - color of the cab required

### Complete a Ride
http://localhost:3000/complete?id={id}&lattitude={lattitude}&longitude={longitude}

type: **GET**

parameters: lattitude - lattitude of the destination,
            longitude - longitude of the destination,
            id - Cab ID
