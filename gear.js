<!-- Nessa pequena obra foram utilizados dois desenhos, sendo estes as rodas dentadas,
feitos por mim atraves do editor Method online. Utilizei tamben o conceito da fisica
elementar que envolve o periodo de rotacao das rodas sob uma corrente, com a equacao
freq1.raio1 = freq2.raio2.

Copyright (c) 2021 - Ivan Cilento aka Zanoth -->


<!DOCTYPE html>
<html>
    <head>
        <title>Gear</title>
        <script>
            var i = 0;
var j = 0;var k=0;var l=0;var atmcnt=0;var m=0;var n=6;var flgn = true;
function rotatebig() {
var atm = document.getElementById('atom');
var elem = document.getElementById('gear1');
var elem2 = document.getElementById('gear2');
var elem3 = document.getElementById('small');


              function rotatm() {
       atm.setAttribute('transform', 'rotate('+m+' 275,275)');
                     
                     atmcnt++;m++;
                     if(atmcnt==5){                  
                     atmcnt=0;}
                     else {setTimeout(rotatm, 1); }
                     }rotatm();
                     
                     var rstn = n*0.1;       
        if(flgn) {
                if(n<10) {n++;} 
                else {
                n--; flgn=false;}
        }
        else {
                if(n>5) {n--;}
                else {n++; flgn=true;}
           }                              
       elem.setAttribute('transform', 'rotate('+j+' 366.8005981445312,244.01850891113284)  matrix(0.6868583746979462,0.396557867527008,-0.396557867527008,0.6868583746979462,130.6643985820248,-102.689628618341)');
              elem2.setAttribute('transform', 'rotate('+i+' 167.72853088378923,240.8459320068359) matrix(0.7660909717249123,0.2052734572024643,-0.2052734572024643,0.7660909717249123,44.35913553144913,-1.9079058858106208)');
              function rotsml() {
                     elem3.setAttribute('transform', 'rotate('+l+' 245.38374328613276,378.5364685058594) matrix(0.6868583746979462,0.396557867527008,-0.396557867527008,0.6868583746979462,181.65663736449739,-23.959205299512206)');
                     
                     k++;l++;
                     if(k==2){                  
                     k=0;}
                     else {setTimeout(rotsml, 1); }
                     }
                     
                     rotsml();
                     
       j++;i--;
       
       setTimeout(rotatebig, 50);
}
</script>
    </head>
    <body>                  
<svg width="550" height="550" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
 <g>
  <title>Gear</title>
  <ellipse ry="250" rx="250" id="grad" cy="274.99999" cx="275.00001" stroke-width="0" stroke="#000" fill="url(#grad)"/>
  <g stroke="null" id="small" transform="rotate(60 245.38374328613276,378.5364685058594) matrix(0.6868583746979462,0.396557867527008,-0.396557867527008,0.6868583746979462,181.65663736449739,-23.959205299512206) ">
   <g stroke="null" id="svg_55">
    <path stroke="#000000" fill="none" stroke-width="1.5" stroke-opacity="null" fill-opacity="null" opacity="0.5" d="m384.44461,364.01819" id="svg_29"/>
    <path stroke="#000000" fill="none" stroke-width="1.5" d="m357.78704,378.83973c8.95321,17.86119 23.87017,-0.80456 32.12466,2.15638c3.87584,1.2417 4.34799,6.87504 3.81514,18.90986c0.05528,0 0.29185,12.71162 -2.76461,17.58285c-4.01161,6.20844 -24.08126,-17.01686 -32.73284,1.99051" id="svg_28"/>
    <path stroke="#000000" fill="none" stroke-width="1.5" d="m332.00845,424.32542c8.95321,17.86119 23.87017,-0.80456 32.12466,2.15638c3.87584,1.2417 4.34799,6.87504 3.81514,18.90986c0.05528,0 0.29185,12.71162 -2.76461,17.58285c-4.01161,6.20844 -24.08126,-17.01686 -32.73284,1.99051" id="svg_50" transform="rotate(60 350.06863403320307,444.64523315429693) "/>
    <path stroke="#000000" fill="none" stroke-width="1.5" d="m279.31173,424.75534c8.95321,17.86119 23.87017,-0.80456 32.12466,2.15638c3.87584,1.2417 4.34799,6.87504 3.81514,18.90986c0.05528,0 0.29185,12.71162 -2.76461,17.58285c-4.01161,6.20844 -24.08126,-17.01686 -32.73284,1.99051" id="svg_51" transform="rotate(120 297.3719177246094,445.0751342773438) "/>
    <path stroke="#000000" fill="none" stroke-width="1.5" d="m252.75015,379.41296c8.95321,17.86119 23.87017,-0.80456 32.12466,2.15638c3.87584,1.2417 4.34799,6.87504 3.81514,18.90986c0.05528,0 0.29185,12.71162 -2.76461,17.58285c-4.01161,6.20844 -24.08126,-17.01686 -32.73284,1.99051" id="svg_52" transform="rotate(180 270.8103332519531,399.7327880859375) "/>
    <path stroke="#000000" fill="none" stroke-width="1.5" d="m331.11884,333.24743c8.95321,17.86119 23.87017,-0.80456 32.12466,2.15638c3.87584,1.2417 4.34799,6.87504 3.81514,18.90986c0.05528,0 0.29185,12.71162 -2.76461,17.58285c-4.01161,6.20844 -24.08126,-17.01686 -32.73284,1.99051" id="svg_53" transform="rotate(-60 349.1790466308593,353.56726074218756) "/>
    <path stroke="#000000" fill="none" stroke-width="1.5" d="m278.77519,333.64066c8.95321,17.86119 23.87017,-0.80456 32.12466,2.15638c3.87584,1.2417 4.34799,6.87504 3.81514,18.90986c0.05528,0 0.29185,12.71162 -2.76461,17.58285c-4.01161,6.20844 -24.08126,-17.01686 -32.73284,1.99051" id="svg_54" transform="rotate(-120 296.8353576660156,353.96051025390625) "/>
   </g>
   <ellipse stroke="#000000" fill="none" stroke-width="1.5" fill-opacity="null" cx="323.32875" cy="399.32125" id="svg_56" rx="20" ry="20"/>
  </g>
  <g stroke="null" id="gear1" transform="rotate(30 366.8005981445312,244.01850891113284) matrix(0.6868583746979462,0.396557867527008,-0.396557867527008,0.6868583746979462,130.6643985820248,-102.689628618341) ">
   <g stroke="null" id="svg_49">
    <g stroke="null" id="svg_36">
     <path stroke="#000" id="svg_33" d="m339.68293,264.6085c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(30 369.9688720703126,166.3056488037109) " id="svg_34" d="m357.1324,203.01162c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(60 415.7753601074219,121.65672302246097) " id="svg_35" d="m402.93888,158.3627c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
    </g>
    <g stroke="null" transform="rotate(90 528.1269531250001,150.01518249511724) " id="svg_40">
     <path stroke="#000" id="svg_37" d="m471.15228,236.52868c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(30 501.438201904297,138.22584533691406) " id="svg_38" d="m488.60176,174.9318c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(60 547.2447509765625,93.57689666748048) " id="svg_39" d="m534.40824,130.28289c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
    </g>
    <g stroke="null" transform="rotate(180 556.2130126953125,281.33337402343756) " id="svg_44">
     <path stroke="#000" id="svg_41" d="m499.2383,367.84686c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(30 529.5242919921876,269.54406738281256) " id="svg_42" d="m516.68778,306.24998c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(60 575.3308105468749,224.89511108398443) " id="svg_43" d="m562.49426,261.60107c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
    </g>
    <g stroke="null" transform="rotate(-90 424.70751953125006,309.38092041015625) " id="svg_48">
     <path stroke="#000" id="svg_45" d="m367.73278,395.89443c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(30 398.0187683105471,297.5916137695312) " id="svg_46" d="m385.18226,334.29755c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(60 443.8252563476562,252.94268798828128) " id="svg_47" d="m430.98874,289.64864c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
    </g>
   </g>
   <ellipse stroke="#000000" ry="100" rx="100" id="svg_59" cy="229.71414" cx="476.41717" fill-opacity="null" stroke-width="1.5" fill="none"/>
   <ellipse stroke="#000000" ry="50" rx="50" id="svg_60" cy="229.71414" cx="476.41717" fill-opacity="null" stroke-width="1.5" fill="none"/>
  </g>
  <g stroke="null" id="gear2" transform="rotate(30 167.72853088378923,240.8459320068359) matrix(0.7660909717249123,0.2052734572024643,-0.2052734572024643,0.7660909717249123,44.35913553144913,-1.9079058858106208) ">
   <g stroke="null" id="svg_79">
    <g stroke="null" id="svg_66">
     <path stroke="#000" id="svg_63" d="m92.73415,290.28193c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(30 123.02005767822277,191.97909545898435) " id="svg_64" d="m110.18362,228.68505c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(60 168.82662963867188,147.33013916015625) " id="svg_65" d="m155.9901,184.03613c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
    </g>
    <g stroke="null" transform="rotate(90 281.17810058593756,175.68859863281253) " id="svg_70">
     <path stroke="#000" id="svg_67" d="m224.2035,262.20211c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(30 254.4894409179688,163.8992767333984) " id="svg_68" d="m241.65298,200.60523c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(60 300.29592895507807,119.2503356933594) " id="svg_69" d="m287.45946,155.95632c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
    </g>
    <g stroke="null" transform="rotate(180 309.2642517089844,307.0067138671875) " id="svg_74">
     <path stroke="#000" id="svg_71" d="m252.28952,393.52029c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(30 282.575439453125,295.2174072265625) " id="svg_72" d="m269.739,331.92341c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(60 328.3819580078125,250.5685272216797) " id="svg_73" d="m315.54548,287.2745c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
    </g>
    <g stroke="null" transform="rotate(-90 177.75872802734378,335.0543212890625) " id="svg_78">
     <path stroke="#000" id="svg_75" d="m120.784,421.56786c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(30 151.07000732421884,323.2650146484375) " id="svg_76" d="m138.23348,359.97098c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
     <path stroke="#000" transform="rotate(60 196.87649536132818,278.6161193847656) " id="svg_77" d="m184.03996,315.32207c-3.78094,-18.27217 8.88308,-20.98488 11.42712,-21.0411c2.54404,-0.05622 17.28829,12.94513 14.54746,-3.03599l0.253,-26.56492c1.72884,-13.36681 -12.56562,-2.48784 -14.84261,-2.61434c-2.27699,-0.1265 -14.67396,-1.771 -10.45732,-20.1556" fill-opacity="null" stroke-opacity="null" stroke-width="1.5" fill="none"/>
    </g>
   </g>
   <ellipse stroke="#000000" ry="100" rx="100" id="svg_80" cy="255.38757" cx="229.46839" fill-opacity="null" stroke-width="1.5" fill="none"/>
   <ellipse stroke="#000000" ry="50" rx="50" id="svg_81" cy="255.38757" cx="229.46839" fill-opacity="null" stroke-width="1.5" fill="none"/>
  </g>
<ellipse id='atom' y="8" rx="8" cy="489.10417" cx="401.83499" 
  stroke-opacity="null" stroke-width="1.5" fill="#666666"/>
 </g>
</svg><script>rotatebig();</script>
    </body>
</html>
