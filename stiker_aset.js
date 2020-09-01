function uploadcsv(){
 item = document.getElementById("uploadkki").files[0];
	document.getElementById("tempatstiker").innerHTML ="";
			var fr = new FileReader(); 
			fr.onload = function(){ 
				var teks = fr.result;
				var arr = teks.split("\r\n");
				document.getElementById("banyakdata").innerHTML+= arr.length +" item/barang";
				var sisaa = arr.length % 12;
					var sisa = sisaa -1 ;
				document.getElementById("banyakhalaman").innerHTML+= (arr.length/12).toFixed(0) + " halaman, salah satu halaman isi " + sisa + " stiker." ;
				for(x in arr){
					if( x > 0){
						var perbaris = arr[x];
							perkata = perbaris.split(";");
												
								var divstiker = document.createElement("div");
									divstiker.setAttribute("id","stiker")
									
								var divtempatlogo = document.createElement("div");
									divtempatlogo.setAttribute("id","tempatlogo")
									divtempatlogo.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Lambang_Kota_Depok.png/185px-Lambang_Kota_Depok.png' class='logo'/><br/>INVENTARISASI BMD<br/>2020"
								
								divstiker.appendChild(divtempatlogo);
								var divisidata = document.createElement("div");
									divisidata.setAttribute("class","isidata")
								
								divstiker.appendChild(divisidata);
						//No. Urut		
								var tabel= document.createElement("table")
								var brs = tabel.insertRow(-1);
								var cell = brs.insertCell(-1);
									cell.innerHTML="No. Urut";
								var cell = brs.insertCell(-1);
									cell.innerHTML=":";
								var cell = brs.insertCell(-1);
									cell.innerHTML=perkata[0];
								//ganjil
								var brs = tabel.insertRow(-1)
								var brsg = brs.insertCell(-1);
									brsg.setAttribute("colspan","3")
									brsg.innerHTML ="";
								//bukan ganjil
						//OPD
								var brs = tabel.insertRow(-1);
								var cell = brs.insertCell(-1);
									cell.innerHTML="OPD";
								var cell = brs.insertCell(-1);
									cell.innerHTML=":";
								var cell = brs.insertCell(-1);
									cell.innerHTML=perkata[1];;
								//ganjil
								var brs = tabel.insertRow(-1)
								var brsg = brs.insertCell(-1);
									brsg.setAttribute("colspan","3")
									brsg.innerHTML ="";
								//bukan ganjil
					//Kode Barang			
								var brs = tabel.insertRow(-1);
								var cell = brs.insertCell(-1);
									cell.innerHTML="Kode Barang";
								var cell = brs.insertCell(-1);
									cell.innerHTML=":";
								var cell = brs.insertCell(-1);
									cell.innerHTML=perkata[2];;
								//ganjil
								var brs = tabel.insertRow(-1)
								var brsg = brs.insertCell(-1);
									brsg.setAttribute("colspan","3")
									brsg.innerHTML ="";
								//bukan ganjil
					//Kode No.Register			
								var brs = tabel.insertRow(-1);
								var cell = brs.insertCell(-1);
									cell.innerHTML="No.Register";
								var cell = brs.insertCell(-1);
									cell.innerHTML=":";
								var cell = brs.insertCell(-1);
									cell.innerHTML=perkata[3];;
								//ganjil
								var brs = tabel.insertRow(-1)
								var brsg = brs.insertCell(-1);
									brsg.setAttribute("colspan","3")
									brsg.innerHTML ="";
								//bukan ganjil
					//Kode No.Register			
								var brs = tabel.insertRow(-1);
								var cell = brs.insertCell(-1);
									cell.innerHTML="Tahun Perolehan";
								var cell = brs.insertCell(-1);
									cell.innerHTML=":";
								var cell = brs.insertCell(-1);
									cell.innerHTML=perkata[4];
								
								
								divisidata.appendChild(tabel);
									
								
								document.getElementById("tempatstiker").appendChild(divstiker);
								var p = x % 12; //
								
								if(p == 0){
									var brek = document.createElement("div")
									
										brek.setAttribute("style","break-after:page");
									document.getElementById("tempatstiker").appendChild(brek);
									}
								//document.getElementById("tempatstiker").appendChild(divisidata);
						//var tes = brkline(fr.result);
						}	
					}	
				}
							
			fr.readAsText(item);
}
function printportrait(){

var html = document.getElementById("iframeprint");
var isi = html.contentDocument;
var headnya = isi.head;
while (headnya.hasChildNodes()) {
    headnya.removeChild(headnya.firstChild);
  }
//var bodynya = isi.body;
	//bodynya="";
	
var titlee = document.createElement("title");
var	teksjudul = document.createTextNode("Cetak Stiker Aset")
	titlee.appendChild(teksjudul)
	isi.head.appendChild(titlee);
	
var css = '@page { size: portrait}';
    //head = document.head || document.getElementsByTagName('head')[0],
var style = document.createElement('style');
var cssd = "@media print {#stiker{background-color:#7FFF00 !important}}#stiker{word-wrap;break-word;background-color:#FFFF00 !important;border:1px solid black;border-radius:5px;padding:5px;width:47%;margin:2px 1px;overflow:auto;float:left;} img.logo{width:75px;}.isidata{width:98%;margin:17px 1px;}#tempatlogo{text-align:center;width:27%;float:left;margin:25px 2px 5px 2px;font-size:8px;word-wrap:break-word;overflow:auto;}table{border-collapse:collapse;width:70%}th,td{font-size:10px;}tr:nth-child(odd){background-color:white !important;border:1px solid black;border-radius:5px;}td:nth-child(3){width:68%;text-align:left;background-color:white !important;}@media only screen and(max-width:218px){th,td{font-size:8px}td:nth-child(3){background-color:black !important;text-align:right;}#tempatlogo{font-size:8px;}img.logo{width:10px;}}";
style.type = 'text/css';
style.media = 'print';

if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
  
}

var stylee = document.createElement("style")
stylee.type = "text/css";
if(stylee.styleSheet){
	stylee.styleSheet.cssText = cssd;
	}else{stylee.appendChild(document.createTextNode(cssd))}
headnya.appendChild(style);
headnya.appendChild(stylee);

	var bodynya = isi.body;
	var teksbody =document.getElementById("tempatstiker").outerHTML;
	bodynya.innerHTML="";
	//bodynya.innerHTML='<style>'+cssd+'</style>';
	bodynya.innerHTML+=teksbody;
	//bodynya.innerHTML+='<br/><br/><br/>'+guruapa+'<br/><br/><br/><b><u>'+namaguruku+'</u></b><br/>NIP. '+nipguruku+'</div>';
	

window.frames["iframeprint"].focus();
window.frames["iframeprint"].print();

}
function PrintDoc() {
 
var toPrint = document.getElementById('tempatstiker');
var popupWin = window.open('');
 
popupWin.document.open();
 
popupWin.document.write('<html><title>::Print Data::</title><link rel="stylesheet" type="text/css" href="print.css" /></head><body onload="window.print()">')
popupWin.document.write(toPrint.outerHTML);
popupWin.document.write('</html>');
popupWin.document.close();
 
}
 
/*--This JavaScript method for Print Preview command--*/
 
function PrintPreview() {
 
var toPrint = document.getElementById('tempatstiker');
 
var popupWin = window.open('');
 
popupWin.document.open();
 
popupWin.document.write('<html><title>::Printpreview Data::</title><link rel="stylesheet" type="text/css" href="print.css" media="screen"/>')
popupWin.document.write('<style>#stiker{word-wrap;break-word;background-color:#7FFF00 !important;border:1px solid black;border-radius:5px;padding:5px;width:47%;margin:2px 1px;overflow:auto;float:left;} img.logo{width:75px;}.isidata{width:98%;margin:17px 1px;}#tempatlogo{text-align:center;width:27%;float:left;margin:25px 2px 5px 2px;font-size:8px;word-wrap:break-word;overflow:auto;}table{border-collapse:collapse;width:70%}th,td{font-size:10px;}tr:nth-child(odd){background-color:white !important;border:1px solid black;border-radius:5px;}td:nth-child(3){width:68%;text-align:left;background-color:white !important;}@media only screen and(max-width:218px){th,td{font-size:8px}td:nth-child(3){background-color:black !important;text-align:right;}#tempatlogo{font-size:8px;}img.logo{width:10px;}}</style></head><body">')
 
popupWin.document.write(toPrint.outerHTML);
 
popupWin.document.write('</html>');
 
popupWin.document.close();
}
