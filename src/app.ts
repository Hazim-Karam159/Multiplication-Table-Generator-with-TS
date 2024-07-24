document.addEventListener('DOMContentLoaded', () => {
  const inputElement = document.getElementById('numberInput') as HTMLInputElement;
  const buttonElement = document.getElementById('generateButton') as HTMLButtonElement;
  const tableContainer = document.getElementById('tableContainer') as HTMLDivElement;

  const generateTable = () => {
      const number = parseInt(inputElement.value);
      if (isNaN(number)) {
          tableContainer.innerHTML = '<p>Please enter a valid number.</p>';
          return;
      }

      const table = document.createElement('table');
      const headerRow = table.insertRow();
      const headerCell = document.createElement('th');
      headerCell.colSpan = 2;
      headerCell.textContent = `Multiplication Table for ${number}`;
      headerRow.appendChild(headerCell);

      for (let i = 1; i <= 10; i++) {
          const row = table.insertRow();
          row.innerHTML = `<td>${number} x ${i}</td><td>${number * i}</td>`;
      }

      tableContainer.innerHTML = '';
      tableContainer.appendChild(table);
  };

  buttonElement.addEventListener('click', generateTable);
});
