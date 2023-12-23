function get_image1(){

    url = "https://dog.ceo/api/breed/ovcharka/caucasian/images/random";
  
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      display_image(data.message);
    })
    .catch(function(error){
      console.log("Error: " + error);
    });
  
  
  }

  function get_image2(){

    url = "https://dog.ceo/api/breed/terrier/yorkshire/images/random";
  
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      display_image2(data.message);
    })
    .catch(function(error){
      console.log("Error: " + error);
    });
  
  
  }

  function get_image3(){

    url = "https://dog.ceo/api/breed/husky/images/random";
  
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      display_image3(data.message);
    })
    .catch(function(error){
      console.log("Error: " + error);
    });
  
  
  }
  
  function display_image(image_url){
    document.getElementById("image1").src = image_url;
  }

  function display_image2(image_url){
    document.getElementById("image2").src = image_url;
  }

  function display_image3(image_url){
    document.getElementById("image3").src = image_url;
  }