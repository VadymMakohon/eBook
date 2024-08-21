using System;
using System.Collections.Generic;

public interface IAccount
{
    void PayInFunds(decimal amount);
    bool WithdrawFunds(decimal amount);
    decimal GetBalance();
    string GetName();
}

public class Account : IAccount
{
    public Account(
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
    public void Save(System.IO.TextWriter textOut)
    {
        textOut.WriteLine(name);
        textOut.WriteLine(balance);
    }

    public bool Save(string filename)
    {
        System.IO.TextWriter textOut = null;
        try
        {
            textOut = new System.IO.StreamWriter(filename);
            Save(textOut);
        }
        catch
        {
            return false;
        }
        finally
        {
            if (textOut != null)
            {
                textOut.Close();
            }
        }
        return true;
    }

    public static Account Load(
        System.IO.TextReader textIn)
    {
        Account result = null;

        try
        {
            string name = textIn.ReadLine();
            string balanceText = textIn.ReadLine();
            decimal balance = decimal.Parse(balanceText);
            result = new Account(name, balance);
        }
        catch
        {
            return null;
        }
        return result;
    }

    public static Account Load(string filename)
    {
        System.IO.TextReader textIn = null;
        Account result = null;
        try
        {
            textIn = new System.IO.StreamReader(filename);
            result = Account.Load(textIn);
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

class DictionaryBank
{
    Dictionary<string, IAccount> accountDictionary = new Dictionary<string, IAccount>();

    public IAccount FindAccount(string name)
    {
        if (accountDictionary.ContainsKey(name) == true)
            return accountDictionary[name];
        else
            return null;
    }

    public bool StoreAccount(IAccount account)
    {
        if (accountDictionary.ContainsKey(account.GetName()) == true)
            return false;

        accountDictionary.Add(account.GetName(), account);
        return true;
    }

    public void Save(System.IO.TextWriter textOut)
    {
        textOut.WriteLine(accountDictionary.Count);
        foreach (Account account in accountDictionary.Values)
        {
            account.Save(textOut);
        }
    }

    public bool Save(string filename)
    {
        System.IO.TextWriter textOut = null;
        try
        {
            textOut = new System.IO.StreamWriter(filename);
            Save(textOut);
        }
        catch
        {
            return false;
        }
        finally
        {
            if (textOut != null)
            {
                textOut.Close();
            }
        }
        return true;
    }

    public static DictionaryBank Load(System.IO.TextReader textIn)
    {
        DictionaryBank result = new DictionaryBank();
        string countString = textIn.ReadLine();
        int count = int.Parse(countString);

        for (int i = 0; i < count; i++)
        {
            Account  account = Account.Load(textIn);
            result.accountDictionary.Add(account.GetName(), account);
        }
        return result;
    }

    public static DictionaryBank Load(string filename)
    {
        System.IO.TextReader textIn = null;
        DictionaryBank result = null;
        try
        {
            textIn = new System.IO.StreamReader(filename);
            result = DictionaryBank.Load(textIn);
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

class BankProgram
{
    public static void Main()
    {
        DictionaryBank ourBank = new DictionaryBank();

        Account newAccount = new Account("Rob", 1000000);

        if (ourBank.StoreAccount(newAccount) == true)
            Console.WriteLine("Account added to bank");

        ourBank.Save("Test.txt");

        DictionaryBank loadBank = DictionaryBank.Load("Test.txt");

        IAccount storedAccount = ourBank.FindAccount("Rob");
        if (storedAccount != null)
            Console.WriteLine("Account found in bank");
    }
}

