## fuber - Cab Service

Run **npm start** inside the project folder to start the server.

## Book a cab
http://localhost:3000/book?lattitude={lattitude}&longitude={longitude}&color={color}

type: **GET**

parameters: lattitude - lattitude of the user,
            longitude - longitude of the user,
            color - color of the cab required

## Complete a Ride
http://localhost:3000/complete?id={id}&lattitude={lattitude}&longitude={longitude}

type: **GET**

parameters: lattitude - lattitude of the destination,
            longitude - longitude of the destination,
            id - Cab ID



