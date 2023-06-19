var imageUrls1 = [
    "imges/image-1.jpg",
    "imges/image-2.jpg",
    "imges/image-3.jpg",
    "imges/image-4.jpg",
    "imges/image-5.jpg",
    "imges/image-1.jpg",
    "imges/image-2.jpg",
    "imges/image-3.jpg",
    "imges/image-4.jpg",
    "imges/image-5.jpg",
  ];
var imagesPerPage1 = 3; 
var currentPage1 = 0; 

function displayImages1(images, startIndex, endIndex) {
  var container = document.getElementById("imageContainer1");
  container.innerHTML = "";

  for (var i = startIndex; i <= endIndex; i++) {
    if (images[i]) {
      var image = document.createElement("img");
      image.src = images[i];
      container.appendChild(image);
    }
  }
}

function showPrevSet1() {
  if (currentPage1 >0) {
    currentPage1--;
    var startIndex = currentPage1 * imagesPerPage1;
    var endIndex = startIndex + imagesPerPage1 - 1;
    displayImages1(imageUrls1, startIndex, endIndex);
  }
  else{
    currentPage1=totalPages1;
  }

}

var totalPages1 = Math.ceil(imageUrls1.length / imagesPerPage1);
function showNextSet1() {
  var totalPages1 = Math.ceil(imageUrls1.length / imagesPerPage1);
  if (currentPage1 < totalPages1 -1) {
    currentPage1++;
    var startIndex = currentPage1 * imagesPerPage1;
    var endIndex = startIndex + imagesPerPage1 - 1;
    displayImages1(imageUrls1, startIndex, endIndex);
  }
  else{
    currentPage1=0;
    displayImages1(imageUrls1, 0, imagesPerPage1 - 1);


  }
}
displayImages1(imageUrls1, 0, imagesPerPage1 - 1);


  // .................................................................................................
  var imageUrls = [
    "imges/image-1.jpg",
    "imges/image-2.jpg",
    "imges/image-3.jpg",
    "imges/image-4.jpg",
    "imges/image-5.jpg",
    "imges/image-1.jpg",
    "imges/image-2.jpg",
    "imges/image-3.jpg",
    "imges/image-4.jpg",
    "imges/image-5.jpg",
  ];

  
  var imagesPerPage = 2;
  var currentPage = 0;
  
  function displayImages(images, startIndex, endIndex) {
    var container = document.getElementById("imageContainer");
    container.innerHTML = "";
    for (var i = startIndex; i <= endIndex; i++) {
      if (images[i]) {
        var image = document.createElement("img");
        image.src = images[i];
        container.appendChild(image);
      }
    }
  }
  
  function showNextSet() {
    var totalPages = Math.ceil(imageUrls.length / imagesPerPage);
    if (currentPage < totalPages - 1) {
      currentPage++;
      var startIndex = currentPage * imagesPerPage;
      var endIndex = startIndex + imagesPerPage - 1;
      displayImages(imageUrls, startIndex, endIndex);
    } else {
      currentPage = 0; 
      var startIndex = 0;
      var endIndex = imagesPerPage - 1;
      displayImages(imageUrls, startIndex, endIndex);
    }
    
    setTimeout(showNextSet, 2000); 
  }
displayImages(imageUrls, 0, imagesPerPage - 1)
setTimeout(showNextSet, 2000); 
  
  

  