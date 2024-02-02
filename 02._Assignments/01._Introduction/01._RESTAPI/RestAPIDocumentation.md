# REST API DESIGN FOR DRINKS

#### Documentation and design for REST API for Drinks.


| HTTP METHOD | ENDPOINT  | REQUEST BODY  | STATUS | RESPONSE BODY | DESCRIPTION |
|-------------|-----------|---------------|--------|---------------|-------------|
| GET         | /api/drinks | | 200 `OK` | Drink[] | Get all drinks. |
| GET         | /api/drinks/{id} | | 200 `OK` <br> 204 `No content` | Drink | Get a specific drink based upon ID. <br> No drink with given ID exist. |
| POST         | /api/drinks | Drink | 200 `OK` | Drink | Create a new drink. |
| PUT         | /api/drinks/{id} | Drink | 200 `OK` | Drink | Update all attributes for a specific drink. |
| PATCH         | /api/drinks/{id} | Drink | 200 `OK` | Drink | Updates some of the attributes for a specific drink. |
| DELETE         | /api/drinks/{id} |  | 204 `No content` | | Deletes a given drink based upon ID. |