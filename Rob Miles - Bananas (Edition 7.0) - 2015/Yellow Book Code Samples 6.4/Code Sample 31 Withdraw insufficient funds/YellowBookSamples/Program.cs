using System;

class Account
{
    private decimal balance = 0;

    public bool WithdrawFunds(decimal amount)
    {
        if (balance < amount)
        {
            return false;
        }
        balance = balance - amount;
        return true;
    }
} ;

class Bank
{
    public static void Main()
    {
        Account RobsAccount;
        RobsAccount = new Account();
        if (RobsAccount.WithdrawFunds(5))
        {
            Console.WriteLine("Cash Withdrawn");
        }
        else
        {
            Console.WriteLine("Insufficient Funds");
        }
    }
}
