# json-rest-api
Fake json rest API with node

**WIP - Work in progress ( but in workable conditions ) **

## Usage

**Clone the repo**
```
git clone https://github.com/danielmocan/json-rest-api.git
```
**Run project**
```
npm start
```
server will listen for requests on port 3000


### Routes

```
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
DELETE /posts/1
```
### Adding Data

You will find the in dataInteractions.js
a variable called db ( its on my todo to move it to a separate file )

**To Do:**
  * make code cleaner to read
  * move data to a separate file
  * make data to persist
