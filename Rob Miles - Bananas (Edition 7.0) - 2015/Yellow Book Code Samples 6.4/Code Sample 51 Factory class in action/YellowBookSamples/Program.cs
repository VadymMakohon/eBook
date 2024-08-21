using System;
using System.Collections.Generic;

public interface IAccount
{
    void PayInFunds(decimal amount);
    bool WithdrawFunds(decimal amount);
    decimal GetBalance();
    string GetName();

    bool Save(string filename);
    void Save(System.IO.TextWriter textOut);
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
    public virtual void Save(System.IO.TextWriter textOut)
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

    public static CustomerAccount Load(
        System.IO.TextReader textIn)
    {
        CustomerAccount result = null;

        try
        {
            string name = textIn.ReadLine();
            string balanceText = textIn.ReadLine();
            decimal balance = decimal.Parse(balanceText);
            result = new CustomerAccount(name, balance);
        }
        catch
        {
            return null;
        }
        return result;
    }

    public static CustomerAccount Load(string filename)
    {
        System.IO.TextReader textIn = null;
        CustomerAccount result = null;
        try
        {
            textIn = new System.IO.StreamReader(filename);
            result = CustomerAccount.Load(textIn);
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

    public CustomerAccount(System.IO.TextReader textIn)
    {
        name = textIn.ReadLine();
        string balanceText = textIn.ReadLine();
        balance = decimal.Parse(balanceText);
    }

}

public class BabyAccount : CustomerAccount
{
    private string parentName;

    public string GetParentName()
    {
        return parentName;
    }

    public override bool WithdrawFunds(decimal amount)
    {
        if (amount > 10)
        {
            return false;
        }
        return base.WithdrawFunds(amount);
    }

    public override void Save(System.IO.TextWriter textOut)
    {
        base.Save(textOut);
        textOut.WriteLine(parentName);
    }

    public BabyAccount(
        string newName,
        decimal initialBalance,
        string inParentName)
        : base(newName, initialBalance)
    {
        parentName = inParentName;
    }
    public BabyAccount(System.IO.TextReader textIn) :
        base(textIn)
    {
        parentName = textIn.ReadLine();
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
        foreach (CustomerAccount account in accountDictionary.Values)
        {
            textOut.WriteLine(account.GetType().Name); 
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
            string className = textIn.ReadLine();
            IAccount account =
                AccountFactory.MakeAccount(className, textIn);
            result.StoreAccount(account);
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

class AccountFactory
{
    public static IAccount MakeAccount(
        string name, System.IO.TextReader textIn)
    {
        switch (name)
        {
            case "CustomerAccount":
                return new CustomerAccount(textIn);
            case "BabyAccount":
                return new BabyAccount(textIn);
            default:
                return null;
        }
    }
}


class BankProgram
{
    public static void Main()
    {
        DictionaryBank ourBank = new DictionaryBank();

        CustomerAccount newAccount = new CustomerAccount("Rob", 1000000);

        if (ourBank.StoreAccount(newAccount))
            Console.WriteLine("CustomerAccount added to bank");

        BabyAccount newBabyAccount = new BabyAccount("David", 100,"Rob");

        if (ourBank.StoreAccount(newBabyAccount))
            Console.WriteLine("BabyAccount added to bank");

        ourBank.Save("Test.txt");

        DictionaryBank loadBank = DictionaryBank.Load("Test.txt");

        IAccount storedAccount = loadBank.FindAccount("Rob");
        if (storedAccount != null)
            Console.WriteLine("CustomerAccount found in bank");
        storedAccount = loadBank.FindAccount("David");
        if (storedAccount != null)
            Console.WriteLine("BabyAccount found in bank");
    }
}

