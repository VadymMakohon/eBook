using System;

public class Account
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

    public void PayInFunds(decimal amount)
    {
        balance = balance + amount;
    }

    public decimal GetBalance()
    {
        return balance;
    }
}

class Bank
{
    public static void Main()
    {
        Account test = new Account();
        test.PayInFunds(50);
        if (test.GetBalance() != 50)
        {
            Console.WriteLine("Pay In test failed");
        }
        else
        {
            Console.WriteLine("Pay In test succeeded");
        }
    }
}
