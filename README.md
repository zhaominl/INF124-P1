# INF124-P1
This is the repository for INF124 project one, a simple shopping web for chocolate

In our group, there are three group members : Zhaomin Li, Sunjun Ahn, and Siyun Ji. 

To run the program: 

1. Since the direction is using relative path, and javascript is imported into html with type 'module'. User needs to run the code on localhost. The easiest way is to run `python -m SimpleHTTPServer` or `python -m http.server` in the terminal and open localhost with port 8000.

2.  Memeber names are list at the bottom of each page.

3.  The index.html redirects users to the home.html.

4.  On the home page, user clicks the Shop Now button to enter the shop.html, which presents all the goods to users.

5.  On the shop page, user can select the item image to purchase. It will enter the item page, with the item number as the parameter passed to the next page.

6.  On the item page, user needs to input all the information based on instructions. If any blank is empty or improperly filled, then the client side browser will pop an alert to indicate which part is missing or improperly filled so that user can fix with correct information.

7.  If all the blanks are properly filled, then the web directs the user to send a confirmation email. The page is redircted to the shop page.


Also the website is deployed under URL: 
