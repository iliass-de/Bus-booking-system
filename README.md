# Bus booking system
## Idea

## Backend
Build a rest full API 
### tools
* Nodejs
* Mongodb
* Express  
### Setup  
* Clone the app   
`git clone https://github.com/iliassh1/Bus-booking-system`  
`cd Bus-booking-system/server`  
* import data from csv  
`mongoimport -d data -c trip --type csv --file db/data.csv --headerline`  
* Install dependencies  
`npm install`  
* Run the server  
`npm start`  

## Frontend

Build a user interface application to consume the API
### tools
* Vuejs
* Axios
### Setup
[Build Setup](https://github.com/iliassh1/Bus-booking-system/blob/master/client/README.md)

### Screenshots
* Home page  
![alt text](https://github.com/iliassh1/Bus-booking-system/blob/master/client/public/img/gifsceenshot.gif)  
* Booking page  
![alt text](https://github.com/iliassh1/Bus-booking-system/blob/master/client/public/img/Screenshot2.png)  
