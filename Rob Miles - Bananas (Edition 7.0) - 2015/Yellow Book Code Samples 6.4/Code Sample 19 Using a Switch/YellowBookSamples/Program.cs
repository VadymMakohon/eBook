using System;

class SwitchDemo
{
    static string readString(string prompt)
    {
        string result;
        do
        {
            Console.Write(prompt);
            result = Console.ReadLine();
        } while (result == "");
        return result;
    }

    static int readInt(string prompt, int low, int high)
    {
        int result;

        do
        {
            string intString = readString(prompt);
            result = int.Parse(intString);
        } while ((result < low) || (result > high));

        return result;
    }

    static void handleCasement()
    {
        Console.WriteLine("Handle Casement");
    }

    static void handleStandard()
    {
        Console.WriteLine("Handle Standard");
    }

    static void handlePatio()
    {
        Console.WriteLine("Handle patio");
    }

    public static void Main()
    {
        int selection;
        selection = readInt("Window Type : ", 1, 3);

        switch (selection)
        {
            case 1:
                handleCasement();
                break;
            case 2:
                handleStandard();
                break;
            case 3:
                handlePatio();
                break;
            default:
                Console.WriteLine("Invalid number");
                break;
        }

    }
}
