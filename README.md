
# Interview Creation Portal




## Website Link:

https://interview-creation-portal-1.herokuapp.com/

Go to the project directory and run the terminal command as follows:

```bash
  npm install
  npm start
```
## Database Schema

```bash
    CREATE TABLE users (
    name VARCHAR(100) NOT NULL,
    email_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (email_id));
    
    INSERT INTO users (name, email_id) VALUES ('Love', 'love@gmail.com');
    INSERT INTO users (name, email_id) VALUES ('Ankit', 'ankit@gmail.com');
    INSERT INTO users (name, email_id) VALUES ('Sahil', 'sahil@gmail.com');
    INSERT INTO users (name, email_id) VALUES ('Apurv', 'apurv@gmail.com');
    INSERT INTO users (name, email_id) VALUES ('Mohit', 'mohit@gmail.com');


    CREATE TABLE interviews (
    id INT NOT NULL AUTO_INCREMENT,
    email1 VARCHAR(100) NOT NULL,
    email2 VARCHAR(100) NOT NULL,
    startTime DATETIME NOT NULL,
    endTime DATETIME NOT NULL,
    PRIMARY KEY (id));
```

