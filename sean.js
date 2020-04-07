var data = ""
function s1(){
  var song = ""
  var Album = ""
  var Artist = ""
  var tracknumber = ""
  var Genre = ""
  var e = document.getElementById("ddlViewBy");
  var strUser = e.options[e.selectedIndex].text;
  if(strUser=="Boulevard of Broken Dreams"){
    document.getElementById("my-audio").setAttribute('src', '04 Boulevard of Broken Dreams.mp3');
    var x = document.getElementById("my-audio");
    x.play();
    song="Boulevard of Broken Dreams"
    Album= "American Idiot"
    Artist = "Green Day"
    tracknumber = "4"
    Genre = "Alternative/Indie"
  }else if(strUser=="American Idiot"){
    document.getElementById("my-audio").setAttribute('src', '01 American Idiot.mp3');
    var x = document.getElementById("my-audio");
    x.play();
    song="American Idiot"
    Album= "American Idiot"
    Artist = "Green Day"
    tracknumber = "1"
    Genre = "Alternative/Indie"
  }
  const headers = new Headers()
    headers.append("Content-Type", "application/json")
    var s34 = document.getElementById("user_countrycode").innerHTML
    var ipadress = document.getElementById("user_ip").innerHTML
    const body = {
      "Song":song,
      "Album":Album,
      "Artist":Artist,
      "Track #":tracknumber,
      "Genre": Genre,
      "Location":{
        "IP Address":ipadress,
        "Country Code":s34
      }
    }
    
    const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(body),
    }
    fetch("https://enqhf8jl70i8e.x.pipedream.net/", options)
  }
  function s2(){
    var request = new XMLHttpRequest();
  request.open('GET', 'https://api.ipdata.co/?api-key=test');
  request.setRequestHeader('Accept', 'application/json');
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
      const headers1 = new Headers()
      const options1 = {
        method: "POST",
        headers1,
        mode: "cors",
        body: this.responseText,
      }
      fetch("https://enqhf8jl70i8e.x.pipedream.net/",options1)
    }
  }
  request.send()
}