1. To start the api, run the command:
   node src/index.js

_Available endpoints_ <br/>
http://localhost:3000/zoo (post)
http://localhost:3000/url-parser (post)

2. For the zoo endpoint, the request's body must have the next format:
```json
  {
   "animal": "ELEPHANT",
   "words": "I'm a elephant"
  }
```
And the allowed animals are:<br/>
- LION<br/>
- TIGER<br/>
- ELEPHANT<br/>
- MONKEY<br/>

3.For the url-parser endpoint, the request's body must have the next format:
```json
 {
   "urlFormatString": "/:version/api/:collection/:id",
   "urlInstance": "/6/api/listings/3?sort=desc&limit=10"
}
```
