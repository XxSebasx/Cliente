var temperaturas_medias_ciudad0 = new Array(3) 
temperaturas_medias_ciudad0[0] = 12 
temperaturas_medias_ciudad0[1] = 10 
temperaturas_medias_ciudad0[2] = 11 

var temperaturas_medias_ciudad1 = new Array (3) 
temperaturas_medias_ciudad1[0] = 5 
temperaturas_medias_ciudad1[1] = 0 
temperaturas_medias_ciudad1[2] = 2 

var temperaturas_medias_ciudad2 = new Array (3) 
temperaturas_medias_ciudad2[0] = 10 
temperaturas_medias_ciudad2[1] = 8 
temperaturas_medias_ciudad2[2] = 10


var temperaturas_cuidades = new Array (3) 
temperaturas_cuidades[0] = temperaturas_medias_ciudad0 
temperaturas_cuidades[1] = temperaturas_medias_ciudad1 
temperaturas_cuidades[2] = temperaturas_medias_ciudad2

document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>"); 
for (i=0;i<temperaturas_cuidades.length;i++){ 
   	document.write("<tr>") 
   	document.write("<td><b>Ciudad " + i + "</b></td>") 
   	for (j=0;j<temperaturas_cuidades[i].length;j++){ 
      	document.write("<td>" + temperaturas_cuidades[i][j] + "</td>") 
   	} 
   	document.write("</tr>") 
} 
document.write("</table>")
