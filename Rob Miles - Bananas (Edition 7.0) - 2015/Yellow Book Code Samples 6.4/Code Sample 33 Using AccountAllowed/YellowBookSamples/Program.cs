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

    private static decimal minIncome;
    private static int minAge;

    public static bool AccountAllowed(decimal income, int age)
    {
        if ((income >= minIncome) && (age >= minAge))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

}

class Bank
{
    public static void Main()
    {
        if (Account.AccountAllowed(25000, 21))
        {
            Console.WriteLine("Allowed Account");
        }
    }
}
