 function calculateSalary() {
      let basic = parseFloat(document.getElementById('basic').value) || 0;
      let allowances = parseFloat(document.getElementById('allowances').value) || 0;
      let deductions = parseFloat(document.getElementById('deductions').value) || 0;
      let taxRate = parseFloat(document.getElementById('tax').value) || 0;
      let otHours = parseFloat(document.getElementById('otHours').value) || 0;
      let otRate = parseFloat(document.getElementById('otRate').value) || 0;

      if (basic <= 0) {
        alert("Please enter a valid Basic Salary");
        return;
      }

      let gross = basic + allowances;
      let tax = (gross * taxRate) / 100;
      let totalDeductions = deductions + tax;
      let net = gross - totalDeductions;
      let overtime = otHours * otRate;
      let finalSalary = net + overtime;

      let resultHTML = `
        <p><b>Gross Salary:</b> ₹${gross}</p>
        <p><b>Total Deductions:</b> ₹${totalDeductions}</p>
        <p><b>Net Salary:</b> ₹${net}</p>
        <p><b>Overtime Earnings:</b> ₹${overtime}</p>
        <p><b>Final Salary:</b> ₹${finalSalary}</p>
      `;
      document.getElementById('resultBox').innerHTML = resultHTML;
      document.getElementById('resultBox').style.display = 'block';
    }

    function resetForm() {
      document.querySelectorAll('input').forEach(input => input.value = '');
      document.getElementById('resultBox').style.display = 'none';
    }