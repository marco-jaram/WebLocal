function loadPayPalScript(callback) {
  const script = document.createElement('script');
  script.src = "https://www.paypal.com/sdk/js?client-id=BAAk9eWfouI0rhhZv684GDVPaibaXvwsZAiQlIiBR9maZ5f03xcaFGUVoEjmfgfW1HfNPWR4RlDTkVK0u4&components=hosted-buttons&disable-funding=venmo&currency=MXN";
  script.async = true;
  script.onload = callback;
  document.head.appendChild(script);
}

function initializePayPalButtons() {
  paypal.HostedButtons({
    hostedButtonId: "FAF8J6J4DLYH8",
  }).render("#paypal-container-FAF8J6J4DLYH8");
}

document.addEventListener("DOMContentLoaded", () => {
  loadPayPalScript(initializePayPalButtons);
});
