Simple ATM Project
------------------
Overview
This is a simple ATM project implemented using HTML, CSS, and JavaScript. The project simulates basic ATM functionalities such as depositing money, withdrawing money, changing PIN, and checking the account balance.

Features
--------

Deposit Money: Add funds to your account.

Withdraw Money: Remove funds from your account.

Change PIN: Update your ATM PIN securely.

Balance Enquiry: Check the current balance in your account.


Project Structure
-----------------

HTML: Provides the structure of the ATM interface.

CSS: Styles the ATM interface, ensuring a visually appealing and user-friendly design.

JavaScript: Implements the core functionalities and logic of the ATM operations.


How to Use

Deposit Money:
--------------
Enter the amount you wish to deposit in the provided fields and confirm it.
If the values match, the amount will be added to your account balance.

Withdraw Money:
---------------
Enter the amount you wish to withdraw and your PIN.
If the PIN is correct and you have sufficient balance, the amount will be deducted from your account.

Change PIN:
------------
Enter your current PIN, followed by the new PIN and confirm the new PIN.
If the old PIN matches the stored PIN and the new PIN values match, your PIN will be updated.

Balance Enquiry:
----------------
Enter your PIN to view the current balance in your account.

Technical Details
----------------
Local Storage: Used to store balance and PIN persistently in the browser.
Event Listeners: Attached to buttons for deposit, withdraw, and change PIN functionalities.
Audio Feedback: Provides success and failure sounds based on the operation outcome.
