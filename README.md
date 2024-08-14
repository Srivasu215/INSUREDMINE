# INSUREDMINE

generate backend node js and database from Mongoose schema

<h1 align="center" color="#0000FF">INSUREDMINE</h1>

#### **Key Locations** 
- **Backend:** node js
- **Database:** MOngoose
- **Collection Schemas definition location :** root:Models
- **backend :** root:app.js

### <a name="advancedinstallation"></a>## **advancedinstallation** 🚀
- git clone https://github.com/Srivasu215/INSUREDMINE and keep in this location only
- cd INSUREDMINE
- npm i
- node app
  
#### **run the below commands to run them** 
- **server:** ruu node app


### <a name="overview"></a>## **Overview** 🔎
This project focuses on insurance agency data upoloading operations for mongoose database, making it easy to manage and uplading data, such as inserting and reading records.

#### **Technologies Used** 
- **Node.js:** Leveraging the power of JavaScript on the server-side.
- **Express.js:** A minimal and flexible Node.js web application framework for building robust APIs.
- **mongoose:** A lightweight, file-based database for efficient data storage.
- **npm:** The package manager for Node.js used for installing project dependencies.

### <a name="installation"></a>## **Installation** 🚀

1. Create a folder and navigate into it using the command prompt.

2. Clone the repository
   ```
   
   git clone https://github.com/Srivasu215/INSUREDMINE
   
   ```
3. Change Directory to INSUREDMINE or Open the cloned folder, navigate to INSUREDMINE, and open the command prompt.
   ```
   
    cd crudBD
   
   ```
4. Install the nodemodules
   ```
   npm i 
   ```
   This Above Command runs the following in Windows
   ``
 5. For Executing:
   
   ```
   
      node app
   
   ```
### <a name="folder-structure"></a>## **Folder Structure**

```plaintext
├── models/
|   └── Account.js
│   └── agent.js
|   └── carrier.js
│   └── LOB.js
|   └── Massage.js
|   └── POlicy
│   └── User.js
├── restClients/
│   └── getEndPoints/
|       └── 2findPolicy.http
|       └── 3aggregate.http
|       └── carrier.http
|       └── Massage.http
|   └── PostEndPoints/
|       └── schedule.http
|       └── EntryFil.js
├── routes/
│   └── agent.js
|   └── carrier.js
│   └── LOB
|   └── POlicy
│   └── schedule.js
|   └── upload.js
├── uploads/
│   └── (X).csv
├── workers/
│   └── Account
|       └── EntryFil.js
|   └── Carrier
|       └── EntryFil.js
│   └── LOB
|       └── EntryFil.js
|   └── POlicy
|       └── EntryFil.js
│   └── User
|       └── EntryFil.js
├── .gotignore
│   
├── package-lock.json
├── app.sh
├── package.json
├── .env
└── README.md
```

advanced users
follow the below steps also

create .env file
create particular keys in .env 

PORT=8088

MONGO_URL="mongodb+srv://<username>:<password>@cluster0.yruzue2.mongodb.net/Insurance?retryWrites=true&w=majority&ppName=Cluster0"


#### **run the below endpoints to see the output** 

for mock testing the end points:

### <a name="vscodeextensions"></a>## **visual studio code extensions** 🚀

for est client or http calling

https://marketplace.visualstudio.com/items?itemName=humao.rest-client


# Task 1:

###  1. Create an API  to upload the attached XLSX/CSV data into MongoDB. (Please accomplish this using worker threads)
http://localhost:8008/api/upload

###  2. Search API to find policy info with the help of the username.
GET http://localhost:8008/api/policies/search/?username=Torie Buchanan

###  3. API to provide aggregated policy by each user.
GET http://localhost:8008/api/policies/aggregate


# Task 2:

### 1. Track real-time CPU utilization of the node server and on 70% usage restart the server.


### 2. Create a post-service that takes the message, day, and time in body parameters and it inserts that message into DB at that particular day and time.

POST http://localhost:8008/api/particular/schedule

### if any error uploaded x.csv file 

## like 

Schema hasn't been registered for model "lobs".
Use mongoose.model(name, schema)

# test below endpoints once

GET http://localhost:8008/api/carriers
GET http://localhost:8008/api/LOB
GET http://localhost:8008/api/particular



from ::

Sreenivas,
node js developer,
+91 8341177771,
http://wa.me/+918341177771,
http://github.com/Srivasu215,
https://www.linkedin.com/in/sreevasuk,
sri.vasu1155@gmail.com,



