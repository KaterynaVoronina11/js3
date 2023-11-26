/* Завдання 1 */
function run() {
    const taskDivs = document.querySelectorAll(".first_task div");
    const resultDiv = document.getElementById("truncatedText");
    
    let resultText = "";
    taskDivs.forEach((div) => {
      const text = div.textContent;
      if (text.length > 10) {
        const truncatedText = text.substring(0, 10) + "...";
        resultText += truncatedText + "<br>"; // Add a line break between truncated texts
      } else {
        resultText += text + "<br>"; // Add a line break for texts shorter than 10 characters
      }
    });
  
    // Display the result in the div
    resultDiv.innerHTML = resultText;
  }

/* Завдання 2 */
function calculateSums() {
    const table = document.getElementById("table");
    const rows = table.rows;

    // Add a new row to the table
    const newRow = table.insertRow(rows.length);

    // Iterate over each column and calculate the sum
    const columnSums = [];
    for (let i = 0; i < rows[0].cells.length; i++) {
        let sum = 0;
        for (let j = 0; j < rows.length - 1; j++) {
            const cellValue = parseInt(rows[j].cells[i].textContent, 10) || 0;
            sum += cellValue;
        }

        // Add a new cell to the new row and set its content to the calculated sum
        const newCell = newRow.insertCell(i);
        newCell.textContent = sum;

        columnSums.push(sum);
    }

    // Remove the last row
    table.deleteRow(rows.length - 1);

    // Set the column sums to the cells in the last row
    for (let i = 0; i < columnSums.length; i++) {
        rows[rows.length - 1].cells[i].textContent = columnSums[i];
    }
}