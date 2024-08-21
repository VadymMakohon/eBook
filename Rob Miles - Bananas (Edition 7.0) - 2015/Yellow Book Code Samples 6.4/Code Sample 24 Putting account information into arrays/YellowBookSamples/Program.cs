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
        const int MAX_CUST = 100;
        Account[] Bank = new Account[MAX_CUST];
        Bank[0].Name = "Rob";
        Bank[0].State = AccountState.Active;
        Bank[0].Balance = 1000000;
        Bank[1].Name = "Jim";
        Bank[1].State = AccountState.Frozen;
        Bank[1].Balance = 0;
    }
}
