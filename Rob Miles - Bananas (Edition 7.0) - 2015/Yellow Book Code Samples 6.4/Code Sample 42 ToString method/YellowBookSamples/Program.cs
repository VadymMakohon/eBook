using System;

class Account
{
    private string name;
    private decimal balance;

    public override string ToString()
    {
        return "Name: " + name + " balance: " + balance;
    }

    public Account(string inName, decimal inBalance)
    {
        name = inName;
        balance = inBalance;
    }
}

class Bank
{
    public static void Main()
    {
        Account a = new Account("Rob", 25);
        Console.WriteLine(a);
    }
}