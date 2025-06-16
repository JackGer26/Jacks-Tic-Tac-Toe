# Jacks Tic-Tac-Toe

My code and group work rendition of the classic Tic-Tac-Toe board game.

![Tic-Tac-Toe Image](https://i.imgur.com/2Vk0qeG.png)

**Link to project:** https://jackstictactoe.netlify.app/

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This code uses classes to keep track of the game board, the current player, and whether the game has finished.

Each cell in the 3x3 grid has an event listener attached. When a player clicks a cell, the code checks if the cell is empty and if the game is still active.

When a valid move is made, the code updates the board array and the UI to show the player symbol in the cell.

After each move is made, the code checks if the current player has won by comparing the board state to all possible winning combinations. If all cells are filled and there is no winner, it declares a draw. If the game is not over, the code switches the turn to the other player.

A reset button has also been added to clear the board and allow a new game to start.

## Optimizations

Firstly, if I had additional time to work on this project, I would have encapsulated the game logic in a class to improve the code's organization, reusability, and maintainability.

Secondly, in the code's current state, we check all win conditions after every move. However, later I will change this code to only check relevant rows, columns, and diagonals based on the last move, which would make the code more efficient and allow for larger boards if I wished to create that concept in the future.

Finally, a simple change that I would make if I came back to this project would be to define the player symbols of 'X' and 'O' to avoid magic strings which occurred every so often, overall making the code easier to update.

## Lessons Learned:

Planning for Scalability and Reusability - Even for simple games, structuring code with scalability in mind (by using classes, constants, and efficient event handling) makes it easier to add new features, fix bugs, and reuse components for future projects.

User Experience - Before this project had a clear message on who won and a responsive layout it was incredibly difficult to make sure the inputs were in the right square as well as who had won. Improving these small details improved the usability of the application greatly. I now know to consider how users will interact with every project.

Separating concerns - Keeping the game logic separate from the UI code made the project easier to maintain, test, and extend. For example, handling board state and win conditions in dedicated functions or classes, while UI updates are managed elsewhere, overall leading to cleaner and more modular code.
