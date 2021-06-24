function getgenderValue() {
  var uigender = document.getElementsByName("uigender");
  for(var i in uigender) {
    if(uigender[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getOccupationValue() {
  var uiOccupation = document.getElementsByName("uiOccupation");
  for(var i in uiOccupation) {
    if(uiOccupation[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getChannal_codeValue() {
  var uiccode = document.getElementsByName("uiccode");
  for(var i in uiccode) {
    if(uiccode[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getcrproductValue() {
  var uicp = document.getElementsByName("uicp");
  for(var i in uicp) {
    if(uicp[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getactiveValue() {
  var uiact = document.getElementsByName("uiact");
  for(var i in uiact) {
    if(uiact[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}


function onClickedEstimatePrice() {
  console.log("Estimate lead button clicked");
  var gender =  getgenderValue();
  var age = document.getElementById("uiage");
  var rcode = document.getElementById("uircode");
  var occu = getOccupationValue();
  var chcode =  getChannal_codeValue();
  var vintage = document.getElementById("uivintage");
  var crprdt = getcrproductValue();
  var acc = document.getElementById("uiacc");
  var active = getactiveValue();
  var estPrice = document.getElementById("uiEstimatedPrice");

  //var url = "http://127.0.0.1:5000/predict_home_price"; //Use this if you are NOT using nginx which is first 7 tutorials
  var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
  $.post(url, {
	  gender: gender,
	  age: parseFloat(age.value),
	  rcode: parseFloat(rcode.value),
	  occu: occu,
	  chcode: chcode,
	  vintage: parseFloat(vintage.value),
	  crprdt:crprdt,
	  acc: parseFloat(acc.value),
	  active: active
  },function(data, status) {
      console.log(data.credit_lead);
      estPrice.innerHTML = "<h2>" + data.credit_lead.toString() + " Lead</h2>";
      console.log(status);
  });
}

window.onload = onPageLoad;
