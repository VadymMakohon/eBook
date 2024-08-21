using System;

struct AccountStruct
{
    public string Name;
} ;

class StructsAndObjectsDemo
{
    public static void Main()
    {
        AccountStruct RobsAccountStruct;
        RobsAccountStruct.Name = "Rob";
        Console.WriteLine(RobsAccountStruct.Name);
    }
}
