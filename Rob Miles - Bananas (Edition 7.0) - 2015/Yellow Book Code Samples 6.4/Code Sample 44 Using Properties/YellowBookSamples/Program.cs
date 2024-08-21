using System;

public class StaffMember
{
    private int ageValue;

    public int Age
    {
        set
        {
            if ((value > 0) && (value < 120))
            {
                this.ageValue = value;
            }
        }
        get
        {
            return this.ageValue;
        }
    }
}

public class StaffDemo
{
    public static void Main()
    {
        StaffMember s = new StaffMember();
        s.Age = 21;
        Console.WriteLine("Age is : " + s.Age);
    }
}

