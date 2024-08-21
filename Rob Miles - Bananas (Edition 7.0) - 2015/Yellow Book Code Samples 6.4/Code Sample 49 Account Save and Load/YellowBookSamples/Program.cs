using System;

public interface IAccount
{
    void PayInFunds(decimal amount);
    bool WithdrawFunds(decimal amount);
    decimal GetBalance();
    string GetName();
}

public class CustomerAccount : IAccount
{
    public CustomerAccount(
        string newName,
        decimal initialBalance)
    {
        name = newName;
        balance = initialBalance;
    }

    private decimal balance = 0;
    private string name;

    public virtual bool WithdrawFunds(decimal amount)
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

    public string GetName()
    {
        return name;
    }
    public bool Save(string filename)
    {
        try
        {
            System.IO.TextWriter textOut =
                new System.IO.StreamWriter(filename);
            textOut.WriteLine(name);
            textOut.WriteLine(balance);
            textOut.Close();
        }
        catch
        {
            return false;
        }
        return true;
    }
    public static CustomerAccount Load(string filename)
    {
        CustomerAccount result = null;
        System.IO.TextReader textIn = null;

        try
        {
            textIn = new System.IO.StreamReader(filename);
            string nameText = textIn.ReadLine();
            string balanceText = textIn.ReadLine();
            decimal balance = decimal.Parse(balanceText);
            result = new CustomerAccount(nameText, balance);
        }
        catch
        {
            return null;
        }
        finally
        {
            if (textIn != null) textIn.Close();
        }
        return result;
    }
}

class SaveDemo
{
    public static void Main()
    {
        CustomerAccount test = new CustomerAccount("Rob", 1000000);
        test.Save("Test.txt");

        CustomerAccount loaded = CustomerAccount.Load("Test.txt");
        Console.WriteLine(loaded.GetName());
    }
}
