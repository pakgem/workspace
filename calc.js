$(document).ready(function () {
  console.log("TEST");
  setTimeout(function () {
    // Get text inside element (i.e. 'GBP' or 'USD')
    var firstSelectedText = $(".el-select-dropdown__item.selected")
      .eq(0)
      .text();
      var current = firstSelectedText;
    var secondSelectedText = $(".el-select-dropdown__item.selected")
      .eq(1)
      .text();
      console.log(firstSelectedText);

    console.log(secondSelectedText);
    // Check if the target text exists inside the element
    if (firstSelectedText) {
      $(".el-input.el-input--suffix").eq(0).addClass(firstSelectedText);
    } 
    if (secondSelectedText) {
      $(".el-input.el-input--suffix").eq(1).addClass(secondSelectedText);
    } 
    

    // Add country text as class to the element
    $(".el-select-dropdown__list li").each(function () {
      var spanText = $(this).find("span").text().trim();
      $(this).addClass(spanText);
    });

    $(".el-select").on("click", function () {
      var selectedElement = $(this).find(".el-input.el-input--suffix");
      var currentTxt = $(".el-select-dropdown__item.selected").eq(0).text();
      console.log(selectedElement);
      selectedElement.addClass(current);
    });

    $(".el-select-dropdown__item").on("click", function () {
      var selectedElement = $(this).find("span").text();
      // Add your desired class to the selected element
      $(".el-input.el-input--suffix").eq(0).addClass(selectedElement);
    });
  }, 0); 


});

$(".el-select-dropdown__item").on("click", function () {
  // Get the background image of the ::before pseudo-element
  var backgroundImage = $(this).css("background-image");
  console.log(backgroundImage);

  // Extract the URL from the background image property
  var imageUrl = backgroundImage.replace(/^url\(['"](.+)['"]\)$/, "$1");

  // Update the image inside .custom-icon with the extracted URL
  $(".custom-icon").attr("src", imageUrl);
});
