document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.querySelector('form');

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const expenseDate = document.getElementById('expenseDate').value;
        const expenseAmount = document.getElementById('expenseAmount').value;
        const expenseDescription = document.getElementById('expenseDescription').value;
        const expenseCategory = document.getElementById('expenseCategory').value;
        const expenseReceipt = document.getElementById('expenseReceipt').files[0];

        // You can handle the form submission here, for example:
        // You can send this data to a server using fetch or XMLHttpRequest.
        // For simplicity, let's just log the data to the console for now.
        console.log('Date:', expenseDate);
        console.log('Amount:', expenseAmount);
        console.log('Description:', expenseDescription);
        console.log('Category:', expenseCategory);
        console.log('Receipt:', expenseReceipt);
        
        // Clear form fields after submission
        expenseForm.reset();
    });
});
