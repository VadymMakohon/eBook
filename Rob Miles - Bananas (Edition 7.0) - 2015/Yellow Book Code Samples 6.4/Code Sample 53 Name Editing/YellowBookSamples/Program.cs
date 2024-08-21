using System;

public interface IAccount
{
    string GetName();
    bool SetName(string newName);
}

public class CustomerAccount : IAccount
{
    private string name;

    public string GetName()
    {
        return this.name;
    }

    public static string ValidateName(string name)
    {
        if (name == null)
        {
            return "Name parameter null";
        }
        string trimmedName = name.Trim();
        if (trimmedName.Length == 0)
        {
            return "No text in the name";
        }
        return "";
    }

    public bool SetName(string inName)
    {
        string reply;
        reply = ValidateName(inName);
        if (reply.Length > 0)
        {
            return false;
        }

        this.name = inName.Trim();
        return true;
    }

    private decimal balance;

    public CustomerAccount(string inName, decimal inBalance)
    {
        string reply = "";

        string validate = ValidateName(inName);
        if(validate != "")
            reply = reply + validate;

        // Should really perform validation of the balance here
        balance = inBalance;

        // Fail if there are any error messages
        if (reply != "")
            throw new Exception(reply);
    }
}

public class AccountEditTextUI
{
    private IAccount account;

    public AccountEditTextUI(IAccount inAccount)
    {
        this.account = inAccount;
    }

    public void EditName()
    {
        string newName;
        Console.WriteLine("Name Edit");
        while (true)
        {
            Console.Write("Enter new name : ");
            newName = Console.ReadLine();
            string reply;
            reply = CustomerAccount.ValidateName(newName);

            if (reply.Length == 0)
            {
                break;
            }
            Console.WriteLine("Invalid name : " + reply);
        }
        this.account.SetName(newName);
    }
}


class NameEdit
{
    public static void SoundSiren()
    {
        Console.WriteLine("Insert Loud Noise Here");
    }

    public static void Main()
    {
        CustomerAccount a = new CustomerAccount("Rob", 50);
        AccountEditTextUI edit = new AccountEditTextUI(a);
        edit.EditName();
    }
}