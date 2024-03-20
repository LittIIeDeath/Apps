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
            button1 = new Button();
            button2 = new Button();
            button3 = new Button();
            button4 = new Button();
            button5 = new Button();
            button6 = new Button();
            button7 = new Button();
            button8 = new Button();
            button9 = new Button();
            groupBox1 = new GroupBox();
            label1 = new Label();
            LabelPlayerTurnText = new Label();
            labelVictory = new Label();
            groupBox1.SuspendLayout();
            SuspendLayout();
            // 
            // button1
            // 
            button1.Location = new Point(18, 26);
            button1.Name = "button1";
            button1.Size = new Size(77, 77);
            button1.TabIndex = 0;
            button1.UseVisualStyleBackColor = true;
            button1.Click += button1_Click;
            // 
            // button2
            // 
            button2.Location = new Point(101, 26);
            button2.Name = "button2";
            button2.Size = new Size(77, 77);
            button2.TabIndex = 1;
            button2.UseVisualStyleBackColor = true;
            button2.Click += button2_Click;
            // 
            // button3
            // 
            button3.Location = new Point(184, 26);
            button3.Name = "button3";
            button3.Size = new Size(77, 77);
            button3.TabIndex = 2;
            button3.UseVisualStyleBackColor = true;
            button3.Click += button3_Click;
            // 
            // button4
            // 
            button4.Location = new Point(18, 109);
            button4.Name = "button4";
            button4.Size = new Size(77, 77);
            button4.TabIndex = 3;
            button4.UseVisualStyleBackColor = true;
            button4.Click += button4_Click;
            // 
            // button5
            // 
            button5.Location = new Point(101, 109);
            button5.Name = "button5";
            button5.Size = new Size(77, 77);
            button5.TabIndex = 4;
            button5.UseVisualStyleBackColor = true;
            button5.Click += button5_Click;
            // 
            // button6
            // 
            button6.Location = new Point(184, 109);
            button6.Name = "button6";
            button6.Size = new Size(77, 77);
            button6.TabIndex = 5;
            button6.UseVisualStyleBackColor = true;
            button6.Click += button6_Click;
            // 
            // button7
            // 
            button7.Location = new Point(18, 192);
            button7.Name = "button7";
            button7.Size = new Size(77, 77);
            button7.TabIndex = 6;
            button7.UseVisualStyleBackColor = true;
            button7.Click += button7_Click;
            // 
            // button8
            // 
            button8.Location = new Point(101, 192);
            button8.Name = "button8";
            button8.Size = new Size(77, 77);
            button8.TabIndex = 7;
            button8.UseVisualStyleBackColor = true;
            button8.Click += button8_Click;
            // 
            // button9
            // 
            button9.Location = new Point(184, 192);
            button9.Name = "button9";
            button9.Size = new Size(77, 77);
            button9.TabIndex = 8;
            button9.UseVisualStyleBackColor = true;
            button9.Click += button9_Click;
            // 
            // groupBox1
            // 
            groupBox1.Controls.Add(button1);
            groupBox1.Controls.Add(button9);
            groupBox1.Controls.Add(button2);
            groupBox1.Controls.Add(button8);
            groupBox1.Controls.Add(button3);
            groupBox1.Controls.Add(button7);
            groupBox1.Controls.Add(button4);
            groupBox1.Controls.Add(button6);
            groupBox1.Controls.Add(button5);
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
            groupBox1.ResumeLayout(false);
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button button1;
        private Button button2;
        private Button button3;
        private Button button4;
        private Button button5;
        private Button button6;
        private Button button7;
        private Button button8;
        private Button button9;
        private GroupBox groupBox1;
        private Label label1;
        private Label LabelPlayerTurnText;
        private Label labelVictory;
    }
}
