using System;

public interface IAccount 
{
   void PayInFunds ( decimal amount );
   bool WithdrawFunds ( decimal amount );
   decimal GetBalance ();
   string RudeLetterString();
}
public abstract class Account : IAccount
{
   private decimal balance = 0;

   public abstract string RudeLetterString();

   public virtual bool WithdrawFunds ( decimal amount ) 
   {
      if ( balance < amount ) 
      {
         return false ;
      }
      balance = balance - amount ;
      return true;
   }

   public decimal GetBalance ()
   {
      return balance;
   }

   public void PayInFunds ( decimal amount ) 
   {
      balance = balance + amount ;
   }
}

public class CustomerAccount : Account
{
   public override string RudeLetterString()
   {
      return "You are overdrawn" ;
   }
}

public class BabyAccount : Account 
{
   public override bool WithdrawFunds ( decimal amount ) 
   {
      if (amount > 10) 
      {
         return false ;
      }
      return base.WithdrawFunds(amount);
   }
   public override string RudeLetterString()
   {
      return "Tell daddy you are overdrawn";
   }
}

class Bank
{
    const int MAX_CUST = 100;

    public static void Main()
    {
        IAccount[] accounts = new IAccount[MAX_CUST];

        accounts[0] = new CustomerAccount();
        Console.WriteLine("Account: " + accounts[0].RudeLetterString());

        accounts[1] = new BabyAccount();
        Console.WriteLine("Baby Account: " + accounts[1].RudeLetterString());
    }
}
