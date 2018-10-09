function change_pub_visibility(visible) {
  document.getElementById("show_all_pubs").style.display = (visible ? "none" : "block");
  document.getElementById("hide_all_pubs").style.display = (visible ? "block" : "none");

  var elems = document.getElementsByClassName("hidden_pub");
  for(e = 0; e < elems.length; e++) {
    elems[e].style.display = (visible ? "block" : "none");
  }
}

/*
function change_abstract_visibility(name) {
  if(document.getElementById(name + "_show").style.display != "none") {
    document.getElementById(name + "_show").style.display = "none";
    document.getElementById(name).style.display = "block";
  }
  else {
    document.getElementById(name + "_show").style.display = "";
    document.getElementById(name).style.display = "none";
  }
}
*/