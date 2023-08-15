
m=0;


var y;
var z;

function start()
{
   y= setInterval(run, 100);
   z= setInterval(run, 400);
   

    function run()
    {
        if(m==1200  )
        {
            clearInterval(y);

            if( m1==1200)
{
    clearInterval(z);
}            
      
        }
        
        
            

            
    
        else{
        m+=10;
       
        var x=document.getElementById("img");
        var x1=document.getElementById("img1");
        x.style.marginLeft=m +"px";
        x1.style.marginLeft=m +"px";
        }
    }

}
function stop()
{
    clearInterval(y);
    clearInterval(z);
    

}
