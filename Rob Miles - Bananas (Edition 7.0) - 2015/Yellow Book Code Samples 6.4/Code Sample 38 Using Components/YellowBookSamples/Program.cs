using System;

public interface IAccount
{
    void PayInFunds(decimal amount);
    bool WithdrawFunds(decimal amount);
    decimal GetBalance();
}

public class CustomerAccount : IAccount
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

public class BabyAccount : IAccount
{
    private decimal balance = 0;
    public bool WithdrawFunds(decimal amount)
    {
        if (amount > 10)
        {
            return false;
        }
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
    const int MAX_CUST = 100;

    public static void Main()
    {
        IAccount [] accounts = new IAccount[MAX_CUST];

        accounts[0] = new CustomerAccount();
        accounts[0].PayInFunds(50);
        Console.WriteLine("Balance: " + accounts[0].GetBalance());

        accounts[1] = new BabyAccount();
        accounts[1].PayInFunds(20);
        Console.WriteLine("Balance: " + accounts[1].GetBalance());

        if (accounts[0].WithdrawFunds(20))
        {
            Console.WriteLine("Withdraw OK");
        }

        if (accounts[1].WithdrawFunds(20))
        {
            Console.WriteLine("Withdraw OK");
        }
    }
}
