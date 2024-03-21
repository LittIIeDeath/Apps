namespace Tik_Tak_Toe
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            groupBox1 = new GroupBox();
            label1 = new Label();
            LabelPlayerTurnText = new Label();
            labelVictory = new Label();
            SuspendLayout();
            // 
            // groupBox1
            // 
            groupBox1.Location = new Point(12, 12);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(280, 289);
            groupBox1.TabIndex = 9;
            groupBox1.TabStop = false;
            groupBox1.Text = "Tik Tak Toe";
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(30, 348);
            label1.Name = "label1";
            label1.Size = new Size(85, 20);
            label1.TabIndex = 10;
            label1.Text = "Player Turn:";
            // 
            // LabelPlayerTurnText
            // 
            LabelPlayerTurnText.AutoSize = true;
            LabelPlayerTurnText.Location = new Point(149, 348);
            LabelPlayerTurnText.Name = "LabelPlayerTurnText";
            LabelPlayerTurnText.Size = new Size(18, 20);
            LabelPlayerTurnText.TabIndex = 11;
            LabelPlayerTurnText.Text = "X";
            // 
            // labelVictory
            // 
            labelVictory.AutoSize = true;
            labelVictory.Location = new Point(167, 415);
            labelVictory.Name = "labelVictory";
            labelVictory.Size = new Size(0, 20);
            labelVictory.TabIndex = 12;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(554, 475);
            Controls.Add(labelVictory);
            Controls.Add(LabelPlayerTurnText);
            Controls.Add(label1);
            Controls.Add(groupBox1);
            Name = "Form1";
            Text = "Form1";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion
        private GroupBox groupBox1;
        private Label label1;
        private Label LabelPlayerTurnText;
        private Label labelVictory;
    }
}
