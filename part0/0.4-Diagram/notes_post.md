Author: Daniel Cherney
Last Revision: 2023-12-27
```mermaid
sequenceDiagram
    User->>+Server: POST to /new_note with message
    Server->>+User: 302 Found - Refresh
    User->>+Server: GET /notes
    User->>+Server: GET main.css
    User->>+Server: GET main.js
    User->>+Server: GET data.json
    User->>+Server: GET favicon.ico
```