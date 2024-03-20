namespace Tik_Tak_Toe
{
    public partial class Form1 : Form
    {
        string player = "X";
        int playerTurn = 0;
        bool gameOver = false;
        public Form1()
        {
            InitializeComponent();
        }

        public void PlayerTurn()
        {
            if (gameOver == false)
            {
                if (playerTurn == 0)
                {
                    player = "X";
                    playerTurn = 1;
                    LabelPlayerTurnText.Text = "O";
                }
                else if (playerTurn == 1)
                {
                    player = "O";
                    playerTurn = 0;
                    LabelPlayerTurnText.Text = "X";
                }
            }
        }

        public void IfVictory()
        {
            if(button1.Text == "X" & button2.Text == "X" & button3.Text == "X" |
               button1.Text == "O" & button2.Text == "O" & button3.Text == "O")
            {
                labelVictory.Text = $"O jogador ''{player}'' venceu!!!";
                gameOver = true;
            }
            else if (button4.Text == "X" & button5.Text == "X" & button6.Text == "X" |
                     button4.Text == "O" & button5.Text == "O" & button6.Text == "O")
            {
                labelVictory.Text = $"O jogador ''{player}'' venceu!!!";
                gameOver = true;
            }
            else if (button7.Text == "X" & button8.Text == "X" & button9.Text == "X" |
                     button7.Text == "O" & button8.Text == "O" & button9.Text == "O")
            {
                labelVictory.Text = $"O jogador ''{player}'' venceu!!!";
                gameOver = true;
            }
            else if (button1.Text == "X" & button4.Text == "X" & button7.Text == "X" |
                     button1.Text == "O" & button4.Text == "O" & button7.Text == "O")
            {
                labelVictory.Text = $"O jogador ''{player}'' venceu!!!";
                gameOver = true;
            }
            else if (button2.Text == "X" & button5.Text == "X" & button8.Text == "X" |
                     button2.Text == "O" & button5.Text == "O" & button8.Text == "O")
            {
                labelVictory.Text = $"O jogador ''{player}'' venceu!!!";
                gameOver = true;
            }
            else if (button3.Text == "X" & button6.Text == "X" & button9.Text == "X" |
                     button3.Text == "O" & button6.Text == "O" & button9.Text == "O")
            {
                labelVictory.Text = $"O jogador ''{player}'' venceu!!!";
                gameOver = true;
            }
            else if (button1.Text == "X" & button5.Text == "X" & button9.Text == "X" |
                     button1.Text == "O" & button5.Text == "O" & button9.Text == "O")
            {
                labelVictory.Text = $"O jogador ''{player}'' venceu!!!";
                gameOver = true;
            }
            else if (button3.Text == "X" & button5.Text == "X" & button7.Text == "X" |
                     button3.Text == "O" & button5.Text == "O" & button7.Text == "O")
            {
                labelVictory.Text = $"O jogador ''{player}'' venceu!!!";
                gameOver = true;
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (button1.Text == "" & gameOver == false)
            {
                PlayerTurn();
                button1.Text = player;
                IfVictory();
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (button2.Text == "" & gameOver == false)
            {
                PlayerTurn();
                button2.Text = player;
                IfVictory();
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (button3.Text == "" & gameOver == false)
            {
                PlayerTurn();
                button3.Text = player;
                IfVictory();
            }
        }

        private void button4_Click(object sender, EventArgs e)
        {
            if (button4.Text == "" & gameOver == false)
            {
                PlayerTurn();
                button4.Text = player;
                IfVictory();
            }
        }

        private void button5_Click(object sender, EventArgs e)
        {
            if (button5.Text == "" & gameOver == false)
            {
                PlayerTurn();
                button5.Text = player;
                IfVictory();
            }
        }

        private void button6_Click(object sender, EventArgs e)
        {
            if (button6.Text == "" & gameOver == false)
            {
                PlayerTurn();
                button6.Text = player;
                IfVictory();
            }
        }

        private void button7_Click(object sender, EventArgs e)
        {
            if (button7.Text == "" & gameOver == false)
            {
                PlayerTurn();
                button7.Text = player;
                IfVictory();
            }
        }

        private void button8_Click(object sender, EventArgs e)
        {
            if (button8.Text == "" & gameOver == false)
            {
                PlayerTurn();
                button8.Text = player;
                IfVictory();
            }
        }

        private void button9_Click(object sender, EventArgs e)
        {
            if (button9.Text == "" & gameOver == false)
            {
                PlayerTurn();
                button9.Text = player;
                IfVictory();
            }
        }
    }
}
