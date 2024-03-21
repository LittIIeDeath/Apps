namespace Tik_Tak_Toe
{
    public partial class Form1 : Form
    {
        string player = "X";
        int playerTurn = 0;
        bool gameOver = false;
        Button[,] buttons = new Button[3, 3]; 

        public Form1()
        {
            InitializeButtons();
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

        public void InitializeButtons()
        {
            int buttonSize = 77;
            int startX = 18;
            int startY = 26;

            for(int row = 0; row < 3; row++)
            {
                for(int col = 0; col < 3; col++ ) 
                {
                    buttons[row, col] = new Button();
                    buttons[row, col].Width = buttonSize;
                    buttons[row, col].Height = buttonSize;
                    buttons[row, col].Left = startX + col * buttonSize;
                    buttons[row, col].Top = startY + row * buttonSize;
                    buttons[row, col].Click += new EventHandler(Button_Click);
                    Controls.Add(buttons[row, col]);
                }
            }
        }

        private void Button_Click(object sender, EventArgs e)
        {
            Button clickedButton = sender as Button;
            if (clickedButton.Text == "" & gameOver == false)
            {
                PlayerTurn();
                clickedButton.Text = player;

                if (CheckDraw())
                {
                    labelVictory.Text = $"O Jogo terminou em empate";
                    gameOver = true;
                }

                if (CheckWinner())
                {
                    labelVictory.Text = $"O Jogador ''{player}'' ganhou!!!";
                    gameOver = true;
                }
            }
        }

        public bool CheckWinner()
        {
            // Verifica as linhas
            for (int i = 0; i < 3; i++) 
            {
                if (CheckCells(buttons[i, 0], buttons[i, 1], buttons[i, 2]))
                    return true;
            }

            // Verifica as colunas
            for (int i = 0; i < 3; i++)
            {
                if (CheckCells(buttons[0, i], buttons[1, i], buttons[2, i]))
                    return true;
            }

            // Verifica as diagonais
            if (CheckCells(buttons[0, 0], buttons[1, 1], buttons[2, 2]) ||
                CheckCells(buttons[0, 2], buttons[1, 1], buttons[2, 0]))
            {
                return true;
            }

            return false;
        }
        public bool CheckDraw()
        {
            int totalButtons = buttons.GetLength(0) * buttons.GetLength(1);
            int filledButtons = 0;

            foreach(Button button in buttons)
            {
                if (!string.IsNullOrEmpty(button.Text))
                {
                    filledButtons++;
                }
            }

            return filledButtons == totalButtons & !CheckWinner();
        }

        public bool CheckCells(Button cell1, Button cell2, Button cell3)
        {
            return cell1.Text == player && cell2.Text == player && cell3.Text == player;
        }
    }
}
