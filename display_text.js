      
function displaytxt(parameter1, parameter2) {
               //variables
               var linesop = 0;
               var indexofWord = 0;
               var Char = 0;
               var jj = 0;
               var ddy = 0; 
               
               //setting intro
               var txtid = "txt"+linesop;
               var txt = document.getElementById(txtid);
               var txt_y_axis = txt.y;
               txt.setAttribute('fill', 'rgb(200,200,200)');
               txt.setAttribute('x', '2');
               txt.innerHTML = "An introdution..."; Alterar o valor da variavel
               var svg = document.getElementById('svg');
               svg.setAttribute('height', '22');
               var dyy = svg.getBBox().height;
     
               var lin = document.getElementById('linalt');
               lin.setAttribute('x1', '0');
               lin.setAttribute('x2', '0');
               lin.setAttribute('y1', '0');
               lin.setAttribute('y2', '15');
               var flg = true;               
               var ii=0;              
               function breakline() {                      
                       ii++;
                       if(flg) {
                               lin.setAttribute('stroke-width', '0');flg = false;
                       }
                       
                       else {                               
                               lin.setAttribute('stroke-width', '5'); flg = true;
                       }
                       if(ii<3) {       
                               setTimeout(lnalt, 500); } 
                       
                       else {
                               ii=0;
                               lin.setAttribute('stroke-width', '0');
                       }
               }
               breakline();

               var arr = [7, 23, 49, 59, 67, 73];
               var rand = Math.abs(Math.floor((Math.random()*10) - 6));
               var num = arr[rand];
               
               //Alterar o valor da variavel, o argumento deve estar coeso.
               var txtinput = "Front-End. Ese script oferece um display de texto animado que pode ser"+
               " implementado para fins diversos, de acordo com o client. Uma funcao com dois parametros,"+ 
               " que devem ser strings. O argumento deve estar coeso."; 
                              
               var arrayofStrings = txtinput.split(" "); 
               var numofWords = arrayofStrings.length;                        
                //fxd
                var yy=15;
                
                function txtinp() {
                        txtid = "txt"+linesop;
                        txt = document.getElementById(txtid);
                        var Nodes = svg.childNodes;
                        var numof = Nodes.length;
                        var index;
                        for(var ooo=0;ooo<numof;ooo++) {
                                if(txt==Nodes[ooo]) {
                                        index = ooo;
                                }
                                else {
                                        continue;
                                }
                        }                      
                        var xx = Nodes[index].getBBox().width;//excuseme?
                    
                            //getting the length of current word
                            var temp = document.createElementNS('http://www.w3.org/2000/svg', 'text');//thumb                             
                                temp.setAttribute('xml:space', 'preserve');
                                temp.setAttribute('font-size', '15');
                                temp.setAttribute('font-family', 'sans-serif');
                                temp.setAttribute('y', '9999');
                                temp.setAttribute('x', '9999');
                                temp.setAttribute('text-anchor', 'start');
                                temp.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");                                                        
                                if(Char==0) {
                                        var txtnod = document.createTextNode(arrayofStrings[indexofWord]);
                                        temp.appendChild(txtnod);
                                }
                                else {
                                        temp.innerHTML = "";
                                }
                                svg.append(temp);
                                var currentword_len = temp.getBBox().width;
                                document.getElementById('dbg3').innerHTML =currentword_len;
                                txt.setAttribute('fill', '#000');
                                               
                        if(txtinput.length!=jj-1) {
                                if(jj==0){
                                        txt.innerHTML = "";
                                };
                                jj++;
                        }
                                                                               
                        if(xx+currentword_len>=svg.width.animVal.value) {                               
                                linesop++;
                                if(linesop==1){
                                        ddy=dyy*2;
                                }
                                else {
                                        ddy+=dyy;
                                }                                   
                                
                                yy+=15;
                                svg.setAttribute('height', ddy);
                                
                                txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                                txt.setAttribute('id', 'txt'+linesop);                                
                                txt.setAttribute('xml:space', 'preserve');
                                txt.setAttribute('font-size', '15');
                                txt.setAttribute('font-family', 'sans-serif');
                                txt.setAttribute('y', yy);
                                txt.setAttribute('x', '0');
                                txt.setAttribute('text-anchor', 'start');
                                txt.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
                                
                                var txtnode = document.createTextNode(arrayofStrings[indexofWord].charAt(Char));                                      
                                svg.append(txt);     
                      
                                if(arrayofStrings[indexofWord].length-1!=Char){                                             
                                             var txtnode = document.createTextNode(arrayofStrings[indexofWord].charAt(Char));
                                             txt.appendChild(txtnode);
                                             Char++;        
                                }
                                else{
                                             var txtnode = document.createTextNode(arrayofStrings[indexofWord].charAt(Char)+" ");
                                             txt.appendChild(txtnode);
                                             Char=0;
                                             indexofWord++;
                                }
                                svg.append(txt);    

                                lin.setAttribute('y1', yy-13);
                                lin.setAttribute('y2', yy+2);
                                setTimeout(txtinp, 30);

                        }
                        
                        else{                                
                                     if(arrayofStrings[indexofWord].length-1!=Char){
                                             txt.innerHTML += arrayofStrings[indexofWord].charAt(Char);
                                             Char++;        
                                     }
                                     else{
                                             txt.innerHTML += arrayofStrings[indexofWord].charAt(Char)+" ";
                                             Char=0;
                                             if(jj!=1){
                                                  jj++;
                                             }
                                             indexofWord++;
                                     }                                
                                  
                                if(jj%num==0&&jj!=0&&txtinput.length!=jj-1) {
                                        lin.setAttribute('x1', xx+10);
                                        lin.setAttribute('x2', xx+10);
                                        lnalt();setTimeout(txtinp, 1500);                                        
                                 }
                             
                                 else{
                                         if(txtinput.length==jj-1) {
                                                 jj=0; 
                                                 lin.setAttribute('x1', xx+10);
                                                 lin.setAttribute('x2', xx+10);
                                                 breakline();
                                                 var pp; 
                                                 var qq;
                                                 function cgncl() { 
                                                        for(qq=0;qq=linesop;qq++) {
                                                                var txt1 = document.getElementById('txt'+qq);
                                                                var xxx = txt1.getBBox().width;
                                                                var backg = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                                                                
                                                                backg.setAttribute('id', 'backg'+qq);
                                                                backg.setAttribute('stroke-width', '15');
                                                                backg.setAttribute('stroke', '#000');

                                                                var axis = txt1.y-7;
                                                                backg.setAttribute('y1', axis);
                                                                backg.setAttribute('x1', '0');
                                                                backg.setAttribute('y2', axis);
                                                                
                                                                backg.setAttribute('x2', txt1.getBBox().width);
                                                                backg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
                                                                var Nodes = svg.childNodes;
                                                                var numof = Nodes.length;var index;
                                                                for(var ooo=0;ooo<numof;ooo++) {
                                                                        if(txt1==Nodes[ooo]) {
                                                                                index = ooo;
                                                                        }
                                                                        else {
                                                                                continue;
                                                                        }
                                                                }

                                                                svg.insertBefore(backg, Nodes[index]);
                                                                txt1.setAttribute('fill', 'white');
                                                        }
                                                      
                                                  }
                                                  function rmelm() {
                                                          if(linesop==0){
                                                                  txt.innerHTML = "";
                                                          }
                                                          else{
                                                              for(pp=0;pp=linesop;pp++) {
                                                                   document.getElementById('backg'+pp).remove();
                                                                   document.getElementById('txt'+pp).remove();
                                                              }
                                                          }
                                                  }
                                              setTimeout(cgncl, 1500);
                                              setTimeout(rmelm, 2200);
                                              setTimeout(displaytxt, 2200);
                                           }
                                         
                                         else {
                                               var fingers = Math.random()*100;
                                               setTimeout(txtinp, fingers);
                                         }
                               }
                             }}
         setTimeout(txtinp, 1500);        
 } 
               
