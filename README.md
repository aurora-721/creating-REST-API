## Technologies
 - node js
 - MongoDB with Mongoose
 - TypeScript
 - Express.js & Express.js middleware
 - Zod validation

change
Following example tutorial:
https://www.youtube.com/watch?v=BWUi6BS9T5Y&ab_channel=TomDoesTech

Build out post CRUD operations:
 
 - HTTP endpoint
 - middleware
 - controller
 - service
 - database

## HTTP status codes

409 Conflict
Indicates that the request could not be processed because of conflict in the current state of the resource, such as an edit conflict between multiple simultaneous updates.


## explanation
```ts
    app.post('/api/users', validateResource(createUserSchema), createUserHandler)
```

validateResource handles the middleware and checks if the user schema is valid, then if data is valid createUserHandler is called (located in controller dir), 