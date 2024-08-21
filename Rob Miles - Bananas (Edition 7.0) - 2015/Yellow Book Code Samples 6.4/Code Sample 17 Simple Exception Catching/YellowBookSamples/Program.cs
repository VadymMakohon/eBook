using System;
class ExceptionDemo
{

    public static void Main()
    {
        int age;

        Console.Write("Enter your age:");

        string ageString = Console.ReadLine();

        try
        {
            age = int.Parse(ageString);
            Console.WriteLine("Thank you");
        }
        catch
        {
            Console.WriteLine("Invalid age value");
        }
    }
}
