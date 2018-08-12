// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // Click listener for devoured btn to change devoured state
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
    console.log(newDevour);

    var newDevouredState = {
      devoured: newDevour
    };

    // PUT request to change devoured state
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

  // Click listener to add new sushi
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newSushi = {
      sushi_name: $("#sushi").val().trim()
    };

    // POST request to add sushi
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
