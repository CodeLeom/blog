## A React Blog on showcasing how microservice works

>After cloning this project, cd into each folder and run `npm install`. The command will install all the dependencies, and then, run `npm start`, to start each service. `cd` into the `client` folder and run `npm start` to run the App UI where you can interact with the project.

### Folder Structure Details

1. Blog is the root folder of the project
2. Client contains the UI and interactable interface of the application
3. Comment contains the comment service
4. Event-bus contains the bridge between all services, it sends all the communication from different services to all.
5. Moderation: this is an added service for comment moderation. To flag a particular comment contain un acceptable words.
6. Posts contain the post service
7. Query service make a request from all the existing service and route it to our application (listens to every actions made on other service and dispath it to the application)

### Ports

> Client runs on Port 3000; -
> Posts runs on Port 4001; -
> Comments runs on Port 4002; -
> Query runs on Port 4003; -
> Moderation runs on Port 4004; -
> Event Bus runs on Port 4005; -


### CommentModerated Properties

> Anytime a comment is moderated from the `moderation service` an event is emmited to the `comment service`, below is the properties included

Name     | Data Type
-------- | ---------
id       | string
content  | string
postId   | string
status   | 'approved' or 'rejected'




