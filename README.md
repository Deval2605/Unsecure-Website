Amazon (No copyright intended, justforfun and educational purposes.) - The Intentionally Terrible Shopping Site
What's This About?
Welcome to ShopEasy, the worst-secured e-commerce site on the planet! I built this beauty to show you exactly how NOT to build a website. Think of it as a playground for aspiring hackers (the ethical kind, please) and a nightmare for security engineers.
Fair Warning: If you deploy this in production, I'm not responsible for the angry mob of users whose credit cards get stolen. You've been warned.

The Three Musketeers of Bad Security
I've lovingly crafted three gorgeous security holes for your entertainment. Let's meet them!
Vulnerability #1: The "Your Data is My Data" Problem (IDOR)
The Story:
Remember that friend who always "forgets" their Netflix password and uses yours instead? This vulnerability is like that, except instead of sharing passwords, you're sharing everyone's personal info!
How to Be That Annoying Friend:

Login as john (password: john123 - yeah, really secure, John)
Pop open the browser console (F12 - it's not hacking if you use the developer tools, right?)
Type this magic spell: fetchUserData(2)
Watch Jane's entire life story appear
Try fetchUserData(3) for the admin's secrets

The Loot:
Email addresses, home addresses, credit cards (kindly masked with asterisks, but still), and what everyone bought. Turns out Jane really likes headphones.
How I "Fixed" It (Sort Of):
There's some commented-out code in index.html (lines 86-96) that actually checks if you're supposed to see this data. Uncomment it, and boom - you've discovered basic authorization! Your mom would be so proud.
The REAL Fix (Listen Up):
Look, the commented code is like putting a "Please Don't Rob Me" sign on your door. It helps, but anyone can still walk through. Real security means checking permissions ON THE SERVER, not trusting whatever the browser tells you. The browser is a compulsive liar.

Vulnerability #2: The "Admin for Everyone!" Disaster (Broken Access Control)
The Story:
You know those "Employees Only" doors at stores? Imagine if they just... weren't locked. Ever. That's this admin panel. It's not even trying.
How to Waltz Into Mordor:

Don't log in. Seriously. Don't even open the login page.
Type this in your browser: admin_panel.html
Press Enter
Congratulations, you're now God

The Treasure Chest:
Every user's dirty laundry - names, emails, credit cards, what they ordered, when they ordered it. It's like reading everyone's diary, but worse because there's financial data.
The Band-Aid Fix:
Lines 57-64 in admin_panel.html have some code that's taking a nap (commented out). Wake it up, and it'll at least pretend to check if you're admin. It's like that velvet rope at clubs - looks official, but you can just step over it.
The Actual Solution (For When You Grow Up):
This page shouldn't even EXIST unless the server says "yes, you're admin, here you go." Client-side checks are like asking a thief if they're a thief. The server needs to be the bouncer, not the browser. Use real authentication, real sessions, real cookies (the HTTP-only kind, not chocolate chip).

Vulnerability #3: The "Secret Files Aren't So Secret" Fiasco (Path Traversal)
The Story:
You ask for your receipt, but instead, you can ask for literally any file on the system. It's like ordering fries and walking out with the secret recipe, the safe combination, and the manager's diary.
The Heist:

Login as john (poor john, always getting hacked)
Look at your orders - click "View Receipt" to feel normal
Open the console (F12, our old friend)
Now the fun begins:

javascript   viewReceipt('../config/database')

Holy database credentials, Batman!
Want more? Try:

javascript   viewReceipt('../config/api_keys')
   viewReceipt('../../etc/passwd')
Your Bounty:

Database passwords (hope you like PostgreSQL!)
API keys for Stripe, AWS, SendGrid (cha-ching!)
System files (because why not?)

It's like finding out the restaurant keeps all their passwords taped to the kitchen wall. Except the kitchen wall is the internet.
