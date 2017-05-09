function pieChart(values,section,canvasname,colors)
{
var j=0;
var total=0;
var c = document.getElementById(canvasname);
var ctx = c.getContext("2d");
for(j=0;j<section;j++)
{
    total=total+values[j];
}
if(total>360)
    {
        ctx.font="20px Verdana";
        ctx.fillText("Values exceed than 360",0,90);
    }  

else
    {  

    var i;
    var startAngle=0;
    var endAngle;
    var tempStartAngle=0;
    for(i=0;i<section;i++)
        {
        endAngle=values[i]+startAngle;

         if(endAngle>360)
         {
             endAngle=endAngle-(i+1);
         }

        ctx.beginPath();
        ctx.strokeStyle = colors[i];
        ctx.arc(c.width/2,c.height/2,80,startAngle*(Math.PI/180),endAngle*(Math.PI/180),false);
        ctx.lineWidth=80;
        ctx.stroke();

        startAngle=startAngle+values[i];

        
        }
    }
}