/*This is a function to return a random color to apply for a button*/
function get_random_color()
{
  var color;
  var x =Math.floor((Math.random())*6);//This is to get a random number between 0-5
  if(x==0)
  {
    color="red";
  }
  else if(x==1)
  {
    color="Blue";
  }
  else if(x==2)
  {
    color="Green";
  } 
  else if(x==3)
  {
    color="#cc00ff";
  }
  else if (x==4)
  {
    color="Orange";
  }
  else if(x==5)
  {
    color="Yellow";
  }
return color;
}
//This is to generate random from 1 to 25 without repeating numbers to assign the color to the 5*5 grid 
var numbers= ['01','02','03','04','05','06','07','08','09',10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
function shufflenumbers(array) // Generate random number
{
  for (var i = numbers.length - 1; i > 0; i--) 
  {  
    var j = Math.floor(Math.random() * (i + 1));             
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
numbers=shufflenumbers(numbers)

function get_random_number()
{
  var a=numbers.pop();
  return(a);
}
var score,moves=0,high_score=0;
//This is a function to check whether all the 9 cubes have the color of the given 3*3 cube
function check_for_finish()
{
  p="";
  var flag=0;
  var v;
  for (var u=0;u<24;u++)
  {
    k=z[u];
    var q=k[0]+k[1]+k[2];
    if(q=="b07")
    {
      v=u;
    }
  }
  if(z[v]==undefined)
  {
    p="";
  }
  else
  {
  p=z[v];
  }
  q="";
  console.log(p);
  n=p.length;
  for (u=3;u<n;u++)
  {
    q+=p[u];
  }
  if(q==a)//Checking whether the color is of the first cube of 3*3 cube is same as the respective cube 
  {
  flag++;//If the color of both is same then increament the value of flag by 1 
  }
  
  for (u=0;u<24;u++)
  {
    k=z[u];
    q=k[0]+k[1]+k[2];
    if(q=="b08")
    {
      v=u;
    }
  }
  p=z[v];
  q="";
  console.log(p);
  n=p.length;
  for (u=3;u<n;u++)
  {
    q+=p[u];
  }
  if(q==b)
  {
  flag++;
  }

  for (u=0;u<24;u++)
  {
    k=z[u];
    q=k[0]+k[1]+k[2];
    if(q=="b09")
    {
      v=u;
    }
  }
  p=z[v];
  q="";
  n=p.length;
  for (u=3;u<n;u++)
  {
    q+=p[u];
  }
  if(q==c)
  {
  flag++;
  }

  for (u=0;u<24;u++)
  {
    k=z[u];
    q=k[0]+k[1]+k[2];
    if(q=="b12")
    {
      v=u;
    }
  }
  p=z[v];
  q="";
  n=p.length;
  for (u=3;u<n;u++)
  {
    q+=p[u];
  }
  if(q==d)
  {
  flag++;
  }

  for (u=0;u<24;u++)
  {
    k=z[u];
    q=k[0]+k[1]+k[2];
    if(q=="b13")
    {
      v=u;
    }
  }
  p=z[v];
  q="";
  n=p.length;
  for (u=3;u<n;u++)
  {
    q+=p[u];
  }
  if(q==e)
  {
  flag++;
  }

  for (u=0;u<24;u++)
  {
    k=z[u];
    q=k[0]+k[1]+k[2];
    if(q=="b14")
    {
      v=u;
    }
  }
  p=z[v];
  q="";
  n=p.length;
  for (u=3;u<n;u++)
  {
    q+=p[u];
  }
  if(q==f)
  {
  flag++;
  }

  for (u=0;u<24;u++)
  {
    k=z[u];
    q=k[0]+k[1]+k[2];
    if(q=="b17")
    {
      v=u;
    }
  }
  p=z[v];
  q="";
  n=p.length;
  for (u=3;u<n;u++)
  {
    q+=p[u];
  }
  if(q==g)
  {
  flag++;
  }

  for (u=0;u<24;u++)
  {
    k=z[u];
    q=k[0]+k[1]+k[2];
    if(q=="b18")
    {
      v=u;
    }
  }
  p=z[v];
  q="";
  n=p.length;
  for (u=3;u<n;u++)
  {
    q+=p[u];
  }
  if(q==h)
  {
  flag++;
  }

  for (u=0;u<24;u++)
  {
    k=z[u];
    q=k[0]+k[1]+k[2];
    if(q=="b19")
    {
      v=u;
    }
  }
  p=z[v];
  q="";
  n=p.length;
  for (u=3;u<n;u++)
  {
    q+=p[u];
  }
  if(q==i)
  {
  flag++;
  }
console.log(flag);
if (flag==9)//initially flag value is 0. And the value of flag is increamented by 1 for every cube having same value. So the value of flag will be 9 so if it is 9 then the game is completed  
{
  setTimeout(1000);
  var today2= new Date();//This is to get the time when the game is completed
  hour_time2=today2.getHours();
  min_time2=today2.getMinutes();
  sec_time2=today2.getSeconds();
  sec1=hour_time1*3600+min_time1*60+sec_time1;//convert the time to seconds
  sec2=hour_time2*3600+min_time2*60+sec_time2;//convert the time to seconds
  time=sec2-sec1;//This to get the time difference between the time of end and time of start
  score=10000000/(moves*time);//Score calculation
  score=Math.round(score);//To round off the score 
  localStorage.setItem("score",score);//Store the score to the local storage
  if(score>localStorage.getItem("high_score") )//check whether the recent score is greater than the locally stored high score
  {
    localStorage.setItem("high_score",score);//If its greater then store the score as the high score locally 
  }

  window.location.href = "Result-Win.html"; //To inform the user he is win yyou call a new page to announce that
}
}
var m;
//This is a function to open the page again
function open_file()
{
  window.location.href="index.html";
}
var hour_time1,hour_time2,min_time1,min_time2,sec_time1,sec_time2,h_time1,m_time1,s_time1,hour,min,sec,time,sec1,sec2;
//This function is called when you click on a button 
//This will change the color of the clicked button to transparent and the empty box is filled with the color of the clicked box
function change(m)
{
  if(moves==0)//This is to start the timer when the first move is started
  {
    var today1=new Date();
    hour_time1=today1.getHours();
    min_time1=today1.getMinutes();
    sec_time1=today1.getSeconds();
  }
  var q=Number(m[1]+m[2]);
  var p=Number(empty[1]+empty[2]);
//Conditions are applied to check whether the box is next to the empty box
  if((p%5==1)&&(q==p-1))
  {
    alert("Click the proper box");
  }
  else if((p%5==0)&&(q==p+1))
  {
    alert("click the proper box");
  }
  if((p==(q+1))||(p==(q-1))||(p==(q+5))||(p==(q-5)))
  {
    for (var u=0;u<24;u++)
    {
      var o;
      k=z[u];
      var q=k[0]+k[1]+k[2];
      if(q==m)
      {
        o=u;
      }
    }
    var p=z[o];
    q="";
    n=p.length;
    for (u=3;u<n;u++)
    {
      q+=p[u];
    }
    document.getElementById(empty).style.backgroundColor=q;
    document.getElementById(m).style.backgroundColor="transparent";
    z[o]=empty+q;
    empty=m;
    moves++;
    //After a box is moved you should check whether the condition is completed or not so call the function to check for the complete
    check_for_finish();
  }
  else
  {
    alert("Click the proper box");
  }  
}

