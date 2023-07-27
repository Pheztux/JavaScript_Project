// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the upload icon element
    const uploadIcon = document.querySelector(".upload-icon");
  
    // Get the my-channel-icon element (the icon on the right side of the header)
    const myChannelIcon = document.querySelector(".my-channel-icon");
  
    // Add a click event listener to the upload icon
    uploadIcon.addEventListener("click", function () {
      // Show a simple popup when the upload icon is clicked
      alert("Upload feature is not available in this demo.");
    });
  
    // Add a click event listener to the my-channel-icon
    myChannelIcon.addEventListener("click", function () {
      // Show a simple popup when the my-channel-icon is clicked
      alert("This is your channel.");
    });
  });
  