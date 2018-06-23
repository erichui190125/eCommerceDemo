$(document).ready(function() {
  var product01Price = 28;
  var product02Price = 18;
  var product03Price = 18;
  var product04Price = 18;
  var product05Price = 18;
  var product06Price = 18;
  var product07Price = 18;
  var product08Price = 18;
  var product09Price = 18;
  var product10Price = 18;

  var product01Field = $(".product01-field");
  var product02Field = $(".product02-field");
  var product03Field = $(".product03-field");
  var product04Field = $(".product04-field");
  var product05Field = $(".product05-field");
  var product06Field = $(".product06-field");
  var product07Field = $(".product07-field");
  var product08Field = $(".product08-field");
  var product09Field = $(".product09-field");
  var product10Field = $(".product10-field");

  var product01Total = $(".product01-total");
  var product02Total = $(".product02-total");
  var product03Total = $(".product03-total");
  var product04Total = $(".product04-total");
  var product05Total = $(".product05-total");
  var product06Total = $(".product06-total");
  var product07Total = $(".product07-total");
  var product08Total = $(".product08-total");
  var product09Total = $(".product09-total");
  var product10Total = $(".product10-total");

  var allTotal = $(".all-total");

  product01Field.on("input", function() {
    var total = product01Field.val() * product01Price;
    product01Total.html(total);
    calculateTotal();
  });

  product02Field.on("input", function() {
    var total = product02Field.val() * product02Price;
    product02Total.html(total);
    calculateTotal();
  });

  product03Field.on("input", function() {
    var total = product03Field.val() * product03Price;
    product03Total.html(total);
    calculateTotal();
  });

  product04Field.on("input", function() {
    var total = product04Field.val() * product04Price;
    product04Total.html(total);
    calculateTotal();
  });

  product05Field.on("input", function() {
    var total = product05Field.val() * product05Price;
    product05Total.html(total);
    calculateTotal();
  });

  product06Field.on("input", function() {
    var total = product06Field.val() * product06Price;
    product06Total.html(total);
    calculateTotal();
  });

  product07Field.on("input", function() {
    var total = product07Field.val() * product07Price;
    product07Total.html(total);
    calculateTotal();
  });

  product08Field.on("input", function() {
    var total = product08Field.val() * product08Price;
    product08Total.html(total);
    calculateTotal();
  });

  product09Field.on("input", function() {
    var total = product09Field.val() * product09Price;
    product09Total.html(total);
    calculateTotal();
  });

  product10Field.on("input", function() {
    var total = product10Field.val() * product10Price;
    product10Total.html(total);
    calculateTotal();
  });

  function calculateTotal() {
    var total =
      product01Field.val() * product01Price +
      product02Field.val() * product02Price +
      product03Field.val() * product03Price +
      product04Field.val() * product04Price +
      product05Field.val() * product05Price +
      product06Field.val() * product06Price +
      product07Field.val() * product07Price +
      product08Field.val() * product08Price +
      product09Field.val() * product09Price +
      product10Field.val() * product10Price;
    allTotal.html(total);
  }

  calculateTotal();
});
