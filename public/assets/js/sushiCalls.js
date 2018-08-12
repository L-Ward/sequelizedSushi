// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
    console.log(newDevour);

    var newDevouredState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/sushi/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newSushi = {
      sushi_name: $("#sushi").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/sushi", {
      type: "POST",
      data: newSushi
    }).then(
      function() {
        console.log("created new sushi");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
