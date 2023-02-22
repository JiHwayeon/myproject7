
	function checkOnlyOne(element) {
  
    const checkboxes 
        = document.getElementsByName("age");
    
    checkboxes.forEach((cb) => {
      cb.checked = false;
    })
    
    element.checked = true;
  };

