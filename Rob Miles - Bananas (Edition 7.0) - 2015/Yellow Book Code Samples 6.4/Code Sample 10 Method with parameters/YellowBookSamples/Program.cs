using System;

class MethodDemo
{
    static void silly(int i)
    {
        Console.WriteLine("i is : " + i);
    }

    public static void Main()
    {
        silly(101);
        silly(500);
    }
}
