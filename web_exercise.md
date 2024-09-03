Part 1:
HTTP- Hyper Text Transfer Protocol, set of rules for how web browsers and servers communicate

URL- Uniform Resource Locator, address used to locate a website or resource online

DNS- Domain Name System, system that translates website names into IP addresses.

query string-  A part of a URL that carries extra information for specific actions.

What are two HTTP verbs and how are they different?
    Get- request method used to retrieve data from a server
    Post- request method used to send data to a server, often to submit forms or upload files.

HTTP request - request sent by a client to a server asking for a web page or resource.

HTTP response - response from the server back to the client with the requested web page or resource.

HTTP header- Extra information sent with an HTTP request or response, like the type of content or browser details.
    Request Headers: Host, Cache-control, Accept, Authorization
    Response Headers: Set-cookie, content-type, Location, server 

What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?

    1. DNS Lookup: The browser DNSo translate the domain name into the correct IP address.

    2. TCP Connection: The browser establishes a TCP connection with the server at the IP address on port 80

    3. HTTP Request: browser sends an HTTP GET request asking for the resource located at "/some/page.html."

    4. HTTP Response: The server sends back an HTTP response, which includes the requested HTML page (and possibly other resources like images or stylesheets) along with headers that provide additional information about the response.

    5. Rendering the Page:  Browser makes a DOM from that HTML. It may make additional HTTP requests for resources like CSS, JavaScript, and images as it parses the HTML.
    
    6.Page Display: Once all resources are fetched and processed, the browser displays the fully rendered web page to the user.


Part 2:
    1. Use curl to Make a GET Request
    curl "https://icanhazdadjoke.com/search?term=pirate" -H "Accept: application/json"

    2. Use dig to Find the IP Address
    dig +short icanhazdadjoke.com
