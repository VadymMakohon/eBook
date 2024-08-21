using System.Threading;
class ThreadDemo
{
    static private void busyLoop()
    {
        long count;
        for (count = 0; count < 1000000000000L; count = count + 1)
        {
        }
    }

    static void Main()
    {
        for (int i = 0; i < 100; i = i + 1)
        {
            Thread t1 = new Thread(busyLoop);
            t1.Start();
        }
    }
}
