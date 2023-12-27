Author: Daniel Cherney
Last Revision: 2023-12-27
```mermaid
sequenceDiagram
    User->>+Server: GET /spa
    User->>+Server: GET main.css
    User->>+Server: GET spa.js
    User->>+Server: GET data.json
    User->>+Server: GET favicon.ico
    User->>+Server: POST /new_note_spa
    Server->>+User: 201 Created
```