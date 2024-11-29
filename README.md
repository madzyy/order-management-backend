# Order Management System Backend

This is the backend of a simple management system that manages orders placed.

To run this system to your local machine, first of all install node js.

Then clone this repository to your local machine.

After that extract it and open the folder.

Open the terminal in that directory by pressing shift + right click then pressing open terminal, command prompt or powershell.

Now type in the terminal 
```shell
npm install
```
to install all the dependencies required.

You can also install nodemon if you have not yet which is good when developing by 
```shell 
npm i -g nodemon
``` 
You then do the database part of the code then end with this 
```shell
nodemon
```
to start the backend development server.

Also make sure you have XAMPP or MYSQL workbench installed since we will use it for our MYSQL database server.

You can add mysql to your environment variables when using XAMPP by going to the XAMPP folder with mysql which is usually located in 
```path
C:\xampp\mysql\bin
```

Copy this to the clipboard and search environment variables.

Look for path and click on it then click on the new button and paste the path there and click ok to save.

Make sure you start MYSQL in the XAMPP control panel.

Now search open a new terminal and write 
```shell
mysql -u root
```
To open mysql as a root user which by default does not require a password in XAMPP.

Now copy this MYSQL code and paste it on the terminal to create the database which we will name product_db

```sql
CREATE DATABASE product_id;
use product_db;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL
);

INSERT INTO products (name, price, quantity) VALUES 
('Product A', 250.00, 10),
('Product B', 100.00, 20),
('Product C', 300.00, 5);
```

This creates our database.

