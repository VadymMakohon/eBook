using System;

public delegate decimal CalculateFee(decimal balance);

public class DelegateDemo
{
    public static decimal RipoffFee(decimal balance)
    {
        Console.WriteLine("Calling the Ripoff Method");
        if (balance < 0)
        {
            return 100;
        }
        else
        {
            return 1;
        }
    }

    public static decimal FriendlyFee(decimal balance)
    {
        Console.WriteLine("Calling the Friendly Method");
        if (balance < 0)
        {
            return 10;
        }
        else
        {
            return 1;
        }
    }

    public static void Main()
    {
        CalculateFee calc;

        calc = new CalculateFee(RipoffFee);
        calc(-1); // this will call the Ripoff method
        calc = new CalculateFee(FriendlyFee);
        calc(-1); // this will call the Friendly method
    }
}

