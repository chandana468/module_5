// Self-invoking function to avoid polluting global namespace
(function () {
  document.addEventListener("DOMContentLoaded", function (event) {
    // Attach click event to Specials button
    document.querySelector("#specialsBtn").addEventListener("click", function () {
      // Array of available menu categories
      const categories = ["Lunch", "Dinner", "Sushi"];
      
      // Randomly pick one category
      const randomIndex = Math.floor(Math.random() * categories.length);
      const selectedCategory = categories[randomIndex];

      // Construct the URL for the selected category page
      const categoryUrl = "categories/" + selectedCategory.toLowerCase() + "-menu.html";

      // Redirect to the selected category page
      window.location.href = categoryUrl;
    });
  });
})();