using System;
using System.Collections.Generic;

public interface IAccount
{
    bool SetName(string inName);
    string GetName();
    bool SetAddress(string inAddress);
    string GetAddress();
    void PayInFunds(decimal amount);
    bool WithdrawFunds(decimal amount);
    decimal GetBalance();
}

public class Account : IAccount
{

    private string name;

    public bool SetName(string inName)
    {
        if (inName == "")
            return false;

        name = inName;

        return true;
    }

    public string GetName()
    {
        return name;
    }

    private string address;

    public bool SetAddress(string inAddress)
    {
        if (inAddress == "")
            return false;

        address = inAddress;

        return true;
    }

    public string GetAddress()
    {
        return address;
    }

    const decimal MAX_BALANCE = 10000000;
    const decimal MIN_BALANCE = -10000000;
    private decimal balance;

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


class DictionaryBank
{
    Dictionary<string,IAccount> accountDictionary = new Dictionary<string,IAccount>();

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
}

class BankProgram
{

    public static void Main()
    {
        DictionaryBank ourBank = new DictionaryBank();

        Account newAccount = new Account("Rob", "Robs House", 1000000);

        if(ourBank.StoreAccount(newAccount) == true)
            Console.WriteLine("Account added to bank");

        IAccount storedAccount = ourBank.FindAccount("Rob");
        if(storedAccount!=null)
            Console.WriteLine("Account found in bank");

    }
}
