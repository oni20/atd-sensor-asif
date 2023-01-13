# atd-sensor-asif

An anthropomorphic test device (ATD), — commonly known as a crash test dummy — is a high-precision test instrument used to measure human injury potential in vehicle crashes. Each ATD can potentially comprise hundreds of sensors.

# Tech stack
- Back-end: Node Js, Express
- Front-end: React Js, Material UI
- Unit testing: React testing library

# Getting started
- Check if machine has `Node Js` installed otherwise install `v16.15.0`
- Clone git repository `https://github.com/oni20/atd-sensor-asif.git` on your machine.

# How to run the application
Please follow below steps to run both back-end and front-end side

## Back end
- Navigate to `root` folder of the project and run `npm install`
- Then run `npm run start`. Node JS server will start running on port number `3001`

## Front end
- Navigate to `client` folder from the project and run `npm install`
- Then run `npm run start`. UI will start running on port number `3000`. Localhost URL is `http://localhost:3000/`
- Run command `npm run test` to perform unit testing
- To build front-end code (just in case back-end doesn't show fallback UI), run `npm run build`

## How to test
- Navigate to `client` folder from the project and run `npm run test`
- Then type `a` in the terminal to run all test cases.

# Advanced topic
Please find the advance topic discussion below

## Scalable deployment
- Both and client codebase can be hosted in cloud. Scalable and good choice would be Vercel, Netlify. These platforms have their own way of handling load balancing. Architecture wise, micro-service architecture pattern can be considered here to make the modules loosely coupled. As there will be a continuous fetching of data, so there is a possibility of adding WebSocket service or run WebWorker behind the screen so that UI doesn't block.

## Back-end Integration
- Create seperate service for each type of request.
- Seperate GET call which may run continuously after certain time interval or upon receiving Event stream data from the source
- Seperate GET call for fetching historical data. As this application is a dashboard/ Log book, there page will show only latest n number rows, where n will be defined by Business. Page will have Dropdown holding historical date range as an option. Upon selecting the dropdown, page will make an API call with specific range. Back end service will slice the big data array as per range and return it to Client level. Advantage with this approach will be
-- No need to implement Pagination control with Table
-- No Need to perform heavy loaded rendering of big data on client side.
