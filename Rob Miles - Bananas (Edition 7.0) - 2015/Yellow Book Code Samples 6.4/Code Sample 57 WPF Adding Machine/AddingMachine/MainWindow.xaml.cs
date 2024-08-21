using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace AddingMachine
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    /// 
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
        private void calculateResult()
        {
            try
            {
                float v1 = float.Parse(firstNumberTextBox.Text);
                float v2 = float.Parse(secondNumberTextBox.Text);

                float result = v1 + v2;
                resultTextBlock.Text = result.ToString();
            }
            catch
            {
                MessageBox.Show("Invalid number", "Adding machine");
            }

        }
        private void equalsButton_Click(object sender, RoutedEventArgs e)
        {
            calculateResult();
        }
    }
}
