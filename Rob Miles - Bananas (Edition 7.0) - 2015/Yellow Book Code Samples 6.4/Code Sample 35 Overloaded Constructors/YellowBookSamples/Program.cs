using System;

class Account
{
    // private member data
    private string name;
    private string address;
    private decimal balance;

    // constructors
    public Account(string inName, string inAddress,
      decimal inBalance)
    {
        name = inName;
        address = inAddress;
        balance = inBalance;
    }
    public Account(string inName, string inAddress) :
        this(inName, inAddress, 0)
    {
    }

    public Account(string inName) :
        this(inName, "Not Supplied", 0)
    {
    }
}

class Bank
{
    public static void Main()
    {
        const int MAX_CUST = 100;
        Account[] Accounts = new Account[MAX_CUST];
        Accounts[0] = new Account("Rob", "Robs House", 1000000);
        Accounts[1] = new Account("Jim", "Jims House");
        Accounts[2] = new Account("Fred");
    }
}
