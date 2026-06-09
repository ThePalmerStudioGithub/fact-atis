var atisid = "Z";
var atiscurrent = "16:06z";
var atisrunway = "01";
var atismetarconditions = "IMC";
var atistrl = "085";
var atiswind = "290 @ 04 kts";
var atisvis = "2000m"
var atispreswx = "moderate patches of fog";
var atisclouds = "NO SIG CLOUDS";
var atistemp = "12";
var atisdewpoint = "11";
var atisqnh = "1022 hpa";
var atissig = false;
var atissiginfo = "??";
var lastupdated = "2026/06/09 @ 16:31z";
document.title = "Cape Town International Airport Information " + atisid;
var atiscontainer = document.getElementById("ATIS");
atiscontainer.innerText = document.title + "\n" + "@ " + atiscurrent 
+ "\n" + "Expect vectoring for ILS Approach" + "\n" + "Runway " + atisrunway + " for arrivals and departures" + "\n" +
"Transition Level " + atistrl + "\n" + "Wind " + atiswind + "\n" + "Visibility " + atisvis + "\n" + "Present Weather " + atispreswx + "\n" + atisclouds + "\n" + "Temperature " + atistemp + "\n" + "Dew Point " + atisdewpoint + "\n" + "QNH " + atisqnh + "\n" + "NO SIGNIFICANT CHANGES" + "\n" + "Confirm " + document.title + " on first contact" + "\n" + "Last Updated: " + lastupdated;