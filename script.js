"use strict";
$(() => {
  let currentTable = null;
  $(".guest-details").hide();

  for (let i = 0; i < 9; i++) {
    $("#table").append(`<div>${(i+1)}</div>`);
  }

  $("#table div").attr("class","tabledivs available");

  $("body").on("click", "#table div.available", (e) => {
    $("#seatform").fadeIn(700);
    $("#seatform #seatforminfo form p").text(`Table Number: ${$(e.target).text()}`);
    currentTable = $(e.target);
  });

  $("body").on("click", "#seatforminfo img:first, #seatforminfo button:first", (e) => {
    $("#seatform").fadeOut(700);
    if (e.target.tagName === "BUTTON") {
      currentTable
        .removeClass("available")
        .addClass("reserved")
        .data("guest-name", $("input").eq(0).val())
        .data("guest-phone", $("input").eq(1).val())
        .data("guest-size", $("input").eq(2).val());
    }
  });

  $("body").on("mouseenter mouseleave", "#table div.reserved", (e) => {
    $(e.target).css("cursor", "not-allowed");
  });

  $("body").on("mouseenter", "#table div.reserved", (e) => {
    $(e.target).append("<section class='guest-details'><p class='guest-name'></p><p class='guest-phone'></p><p class='guest-size'></p></section>");
    $(".guest-details p").eq(0).text(`Name: ${$(e.target).data("guest-name")}`);
    $(".guest-details p").eq(1).text(`Phone: ${$(e.target).data("guest-phone")}`);
    $(".guest-details p").eq(2).text(`Party Size: ${$(e.target).data("guest-size")}`);
    $(".guest-details").show();
  })

  $("body").on("mouseleave", "#table div.reserved", (e) => {
    $(".guest-details").hide();
    $(".guest-details").remove("section.guest-details");
  })

});