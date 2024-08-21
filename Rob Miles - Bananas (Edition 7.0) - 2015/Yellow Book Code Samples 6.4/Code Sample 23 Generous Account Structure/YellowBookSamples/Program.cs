using System;

enum AccountState
{
    New,
    Active,
    UnderAudit,
    Frozen,
    Closed
} ;

struct Account
{
    public AccountState State;
    public string Name;
    public string Address;
    public int AccountNumber;
    public int Balance;
    public int Overdraft;
} ;

class BankProgram
{

    public static void Main()
    {
        Account RobsAccount;
        RobsAccount.State = AccountState.Active;
        RobsAccount.Balance = 1000000;
    }
}
