
/*cookies are small chunk of data, each consisting of a name and a value, stored by user's web browser. they can be used 
for authenciating, session tracking, remember specific information about the user like his name, password, last visited date

advantages:
1. these are stored on user's computer so no extra burden on server
2. cookies can be configured to end when the session ends (seesion cookies) or exist for a specified time on the clients computer(persistent cookies)
3. cookies are stored on the client's hard disk, so if the server crashes, the cookies are still available

local storage and session storage:
1. allows saving key/values pairs in the browser
2. data can survive a full browser restart(local storage) and for a page refresh(session storage)
3. these are not sent to the server with each request enabling them to store much more data

methods and properties of web storage projects: (these all are written in the website->inspect->console and the syntax is: localStorage.method)
1. setItem(key,value): stores key/value pair
2. getItem(key): get the value by key
3. removeItem(key): remove the key with its value
4. clear(): delete everything
5. key(index): get the key on a given position
6. length: number of stored items

difference between cookies, local storage and session storage in ppt*/