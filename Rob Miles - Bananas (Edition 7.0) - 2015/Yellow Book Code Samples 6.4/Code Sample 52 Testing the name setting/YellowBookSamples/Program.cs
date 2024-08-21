using System;

class CustomerAccount
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

class NameTest
{
    public static void SoundSiren()
    {
        Console.WriteLine("Insert Loud Noise Here");
    }

    public static void Main()
    {
        int errorCount = 0;
        string reply;
        reply = CustomerAccount.ValidateName(null);
        if (reply != "Name parameter null")
        {
            Console.WriteLine("Null name test failed");
            errorCount++;
        }
        reply = CustomerAccount.ValidateName("");
        if (reply != "No text in the name")
        {
            Console.WriteLine("Empty name test failed");
            errorCount++;
        }
        reply = CustomerAccount.ValidateName("   ");
        if (reply != "No text in the name")
        {
            Console.WriteLine("Blank string name test failed");
            errorCount++;
        }
        CustomerAccount a = new CustomerAccount("Rob", 50);

        if (!a.SetName("Jim"))
        {
            Console.WriteLine("Jim SetName failed");
            errorCount++;
        }
        if (a.GetName() != "Jim")
        {
            Console.WriteLine("Jim GetName failed");
            errorCount++;
        }
        if (!a.SetName("   Pete   "))
        {
            Console.WriteLine("Pete trim SetName failed");
            errorCount++;
        }
        if (a.GetName() != "Pete")
        {
            Console.WriteLine("Pete GetName failed");
            errorCount++;
        }
        if (errorCount > 0)
        {
            SoundSiren();
        }

    }
}