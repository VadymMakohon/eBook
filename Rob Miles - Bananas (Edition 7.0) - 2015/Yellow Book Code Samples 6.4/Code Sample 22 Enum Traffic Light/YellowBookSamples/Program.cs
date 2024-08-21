using System;

enum TrafficLight
{
    Red,
    RedAmber,
    Green,
    Amber
} ;

class EnumDemonstration
{

    public static void Main()
    {
        TrafficLight light;
        light = TrafficLight.Red;
        Console.WriteLine(light);
    }
}
