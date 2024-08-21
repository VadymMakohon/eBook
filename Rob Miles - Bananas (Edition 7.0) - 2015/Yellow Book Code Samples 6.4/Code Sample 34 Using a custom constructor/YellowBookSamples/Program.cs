using System;

class Account
{
    // private member data
    private string name;
    private string address;
    private decimal balance;

    // constructor
    public Account(string inName, string inAddress,
      decimal inBalance)
    {
        name = inName;
        address = inAddress;
        balance = inBalance;
    }
}

class Bank
{
    public static void Main()
    {
        Account robsAccount;
        robsAccount = new Account("Rob", "Robs House", 1000000);
    }
}
