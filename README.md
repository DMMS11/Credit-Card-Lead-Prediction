# Credit-Card-Lead-Prediction
# Host Locally as well as on AWS

Predict the lead to cross sell Bnk credit card to it's existing cutomers

Bank is a mid-sized private bank that deals in all kinds of banking products, like Savings accounts, Current accounts, investment products, credit products, among other offerings.

The bank is looking for your help in identifying customers that could show higher intent towards a recommended credit card, given:

* Customer details (gender, age, region etc.)
* Details of his/her relationship with the bank (Channel_Code,Vintage,
'Avg_Asset_Value etc.)


Data dictionary of the given train dataset Variable Definition

* ID :Unique Identifier for a row
* Gender: Gender of the Customer
* Age: Age of the Customer (in Years)
* Region_Code: Code of the Region for the customers
* Occupation: Occupation Type for the customer
* Channel_Code: Acquisition Channel Code for the Customer (Encoded)
* Vintage: Vintage for the Customer (In Months)
* Credit_Product:If the Customer has any active credit product (Home loan,Personal loan, Credit Card etc.)
* Avg_Account_Balance: Average Account Balance for the Customer in last 12 Months
* Is_Active: If the Customer is Active in last 3 Months

* Is_Lead(Target): If the Customer is interested for the Credit Card

# Deploy this app to cloud (AWS EC2)

1. Create EC2 instance using amazon console, also in security group add a rule to allow HTTP, HTTPS, and FTP incoming traffic
2. Now connect to your instance using a command like this, you can find this while Selecting the instance and then click on connect
> ssh -i ....................................................................................
3. Download .pem File. This will be your private Keys
4. Download Git Bash
5. where you put your .pem key, right click on there and click on "Git bash Here".
6. Copy the above command (pt no2) and hit Enter
7. Download Nginx
  > sudo apt-get update
  > sudo apt-get install nginx
8. Check status of nginx using
  > sudo service nginx status
9. commands to start/stop/restart nginx
  * sudo service nginx start
  * sudo service nginx stop
  * sudo service nginx restart
  * Press q to reactivate the bash prompt
10. Create this file /etc/nginx/sites-available/cclp.conf. The file content looks like this,
  ``` 
  server {
    listen 80;
       server_name bhp;
        root /home/ubuntu/Credit_card_Lead_prediction/client;
        index app.html;
        location /api/ {
             rewrite ^/api(.*) $1 break;
             proxy_pass http://127.0.0.1:5000;
        }
   }
   ```
11. Remove symlink for default file in /etc/nginx/sites-enabled directory,
   * sudo unlink default
   * sudo unlink inside 
12. Create symlink for this file in /etc/nginx/sites-enabled by running this command, 
   > sudo ln -v -s /etc/nginx/sites-available/cclp.conf inside /etc/nginx/sites-enabled
13. Restart Nginx and again check the status
14. Now install python packages as we have a blank machine so we needs to install all the packages which we are using in code and then start flask server
   * sudo pip3 install packages-names
   * python3 server.py
   
