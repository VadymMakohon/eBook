using System;

class Account
{
    // private member data
    private string name;
    private string address;
    private decimal balance;

    public bool SetName(string inName)
    {
        if (inName == "")
            return false;

        name = inName;

        return true;
    }

    public bool SetAddress(string inAddress)
    {
        if (inAddress == "")
            return false;

        address = inAddress;

        return true;
    }

    const decimal MAX_BALANCE = 10000000;
    const decimal MIN_BALANCE = -10000000;

    public bool SetBalance( decimal inBalance)
    {
        if (inBalance < MIN_BALANCE ||
            inBalance > MAX_BALANCE)
            return false;

        balance = inBalance;
        return true;
    }

    // constructors
    public Account(string inName, string inAddress,
      decimal inBalance)
    {
        string errorMessage = "";

        if (SetBalance(inBalance)==false)
            errorMessage = errorMessage + "Bad Balance: " + inBalance;

        if (SetName(inName) == false)
        {
            errorMessage = errorMessage + "Bad name: " + inName;
        }

        if (SetAddress(inAddress) == false)
        {
            errorMessage = errorMessage + " Bad addr: " + inAddress;
        }

        if (errorMessage != "")
        {
            throw new Exception("Account construction failed " 
                + errorMessage);
        }
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
        Accounts[0] = new Account("Rob", "", 1000000);
    }
}
