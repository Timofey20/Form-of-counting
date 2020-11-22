$(document).ready(function () {
  let option = 5;
  $("#select").on("change", function () {
    option = $("#select").val();
  });
  $("#choose .license_item").on("change", function () {
    let ans = $(this).attr("id");
    let plan = $(".radio:checked").attr("value");
    $("#Selected_plan").text(ans);
  });
  $(".button").on("click", function () {
    let plan = $(".radio:checked").attr("value");
    let sum = option * plan;
    $(".sum").text(sum);
  });
});
