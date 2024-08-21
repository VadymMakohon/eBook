using System;

class UsefulMethod
{
    static double readValue(
       string prompt, // prompt for the user 
       double low,    // lowest allowed value
       double high    // highest allowed value
       )
    {
        double result = 0;
        do
        {
            Console.WriteLine(prompt +
               " between " + low +
                " and " + high);
            string resultString = Console.ReadLine();
            result = double.Parse(resultString);
        } while ((result < low) || (result > high));
        return result;
    }

    const double MAX_WIDTH = 5.0;
    const double MIN_WIDTH = 0.5;

    public static void Main()
    {
        double windowWidth = readValue(
            "Enter width of window: ", MIN_WIDTH, MAX_WIDTH);

        Console.WriteLine("Width: " + windowWidth);

        double age = readValue("Enter your age: ", 0, 70);

        Console.WriteLine("Age: " + age);
    }
}
