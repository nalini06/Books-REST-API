# Books Rest API

An app to store bopks's information like name, description. A user can create, edit or delete a book.


## Configuration and Setup

### Install

The project needs nodejs(created with v14.16) and npm installed in the system to run locally. Clone this repository and install dependencies as follow
be in root folder.

```
npm install
```

### Setup

Add .env file in root directory and add mongo db url.
```

url=(test database connection string )


```

### Run

```
npm server.js (to start the server at port 3000)

```

### API End Points

Get All Books 
```
http://localhost:3000/api/v1/books/

```
Get book by ID:
```
http://localhost:3000/api/v1/books/650aab02dbba54e77d38cd77
```

Create Book (POST)
```
http://localhost:3000/api/v1/books/
```

Update Book by ID (PATCH)
```
http://localhost:3000/api/v1/books/650aab02dbba54e77d38cd77

```

Delete Book By ID (Delete)

```
http://localhost:3000/api/v1/books/650aab02dbba54e77d38cd77

```

Example Body
```
{
 "name" : "Sherlock Holmes",
  "description: "Detective book"
}

```






