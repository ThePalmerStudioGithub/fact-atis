var atisid = "V";
var atiscurrent = "15:29z";
var atisrunway = "19";
var atismetarconditions = "IMC";
var atistrl = "085";
var atiswind = "150 @ 06 kts";
var atisvis = "2500m"
var atispreswx = "moderate mist";
var atisclouds = "overcast @ 300ft";
var atistemp = "12";
var atisdewpoint = "12";
var atisqnh = "1015 hpa";
var atissig = false;
var atissiginfo = "??";
var lastupdated = "2026/06/09 @ 15:37z";
document.title = "Cape Town International Airport Information " + atisid;
var atiscontainer = document.getElementById("ATIS");
atiscontainer.innerText = document.title + "\n" + "@ " + atiscurrent 
+ "\n" + "Expect vectoring for ILS Approach" + "\n" + "Runway " + atisrunway + " for arrivals and departures" + "\n" +
"Transition Level " + atistrl + "\n" + "Wind " + atiswind + "\n" + "Visibility " + atisvis + "\n" + "Present Weather " + atispreswx + "\n" + "Clouds " + atisclouds + "\n" + "Temperature " + atistemp + "\n" + "Dew Point " + atisdewpoint + "\n" + "QNH " + atisqnh + "\n" + "NO SIGNIFICANT CHANGES" + "\n" + "Confirm " + document.title + " on first contact" + "\n" + "Last Updated: " + lastupdated;