// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

/*tooltip rules*/
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



/*accordion rules*/
const accordionCollapseElementList = document.querySelectorAll('#myAccordion .collapse')
const accordionCollapseList = [...accordionCollapseElementList].map(accordionCollapseEl => new bootstrap.Collapse(accordionCollapseEl))




function calculateSolar() {

    let power = document.getElementById("panelPower").value;
    let hours = document.getElementById("sunHours").value;
    let rate = document.getElementById("electricRate").value;

    // Convert Watt to kW
    let kW = power / 1000;

    // Daily Energy Production
    let dailyEnergy = kW * hours;

    // Monthly Savings
    let monthlySavings = dailyEnergy * 30 * rate;

    document.getElementById("result").innerHTML =
        "Daily Energy: " + dailyEnergy.toFixed(2) + " kWh <br>" +
        "Estimated Monthly Savings:Tk " + monthlySavings.toFixed(2);
}



