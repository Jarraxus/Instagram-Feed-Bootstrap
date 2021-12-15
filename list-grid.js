window.addEventListener("DOMContentLoaded", function(){
    document.getElementById("sList").addEventListener("click", function(){
      document.getElementById("lgDemo").classList.remove("grid");
    });
    document.getElementById("sGrid").addEventListener("click", function(){
      document.getElementById("lgDemo").classList.add("grid");
    });
  });
