# Fizzbuzz proyect

Refactoring de una app legada en JS.
___
Modularización de clases y metodos con CommonJS y pruebas de unidad con jest.

## Requisitos

Nececitas tener`node` y`npm`. 
Revisar la [pagina de node](https://nodejs.org/es/download/) para ver el procedimiento dependiendo de tu SO.

___

## Diagramas

Funcionamiento del proyecto.

```mermaid
          graph TD
    A[Reader]-->B(ExplorerService)
    B --> C[ExplorerController]
    I[FizzbuzzService] --> C[ExplorerController]
    C --> D[Server]
    D --> |Port 3000|E[Endpoint]
    E --> F[Request 1]
    E --> G[Request 2]
    E --> H[Request 3]
 
```

## Diseño de las clases
Estructura de las clases en el proyecto.
```mermaid
 classDiagram      
      class ExplorerController{
        +getExplorerByMission(mission)$
        +getExplorersUsernameByMission(mission)$
        +getAmountOfExplorersByMission(mission)$
        +fizzBuzzNumber(number)$
      }
       class FizzbuzzService{
          +applyValidationInExplorer(explorer)$
          +applyValidationInNumber(number)$
      }
      class ExplorerService{
          +filterByMission(explorers,mission)$
          +getAmountOfExplorersByMission(explorers,mission)$
          +getExplorersUsernameByMission(explorers,mission)$
      }
      class Reader{
          +readJsonFile(path)$
      }
      Reader-->ExplorerService
      ExplorerService-->ExplorerController
      FizzbuzzService-->ExplorerController
      ExplorerController-->Server
```

## Endpoints

| Endpoint | Request |
|---|---|
| `localhost:3000/v1/explorers/:mission/` | `localhost:3000/v1/explorers/node` | 
| `localhost:3000/v1/explorers/amount/:mission` | `localhost:3000/v1/explorers/amount/node` | 
| `localhost:3000/v1/explorers/usernames/:mission` | `localhost:3000/v1/explorers/usernames/node` | 
| `localhost:3000/v1/explorers/fizzbuzz/:score` | `localhost:3000/v1/explorers/fizzbuzz/3` | 


## Response




## Tecnologías

* JavaScript
* Jest
* Github Actions
* ESLint
* Express
* Postman
