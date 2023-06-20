## A React Blog on showcasing how microservice works

>After cloning this project, cd into each folder and run `npm install`. The command will install all the dependencies, and then, run `npm start`, to start each service. `cd` into the `client` folder and run `npm start` to run the App UI where you can interact with the project.

### Folder Structure Details

1. Blog is the root folder of the project
2. Client contains the UI and interactable interface
3. Comment contains the comment service
4. Event-bus contains the bridge between all services, it sends all the communication from different services to all.
5. Moderation
6. Posts contain the post service
7. Query

### Ports

> Client runs on Port 3000
> Posts runs on Port 4001
> Comments runs on Port 4002
> Query runs on Port 4003
> Event Bus runs on Port 4005 