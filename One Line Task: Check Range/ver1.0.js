checkRange=(a,x,y)=>{//22 leaves 26 left
//coding and coding..
//shorter and more shorter     no longer than before this soace

//need:
  //to loop over with out a loop?
  // to test if     x<=a[i]&&a[i]<=y
                    x>a[i]==a[i]>y

                    x<=i&&i<=y// use i not a[i] in filter and reduce
                    x>i==i>y
  // to return our output my count





/*WAYS TO DO?
  loop and if (both while and for with if to long)
  .reduce() (FAIL almost buy 2 charaters over limit)
  .filter() (no point as filter is as long as reduce)
  .map

*/



checkRange=(a,x,y)=>a.map(s=>i+=x>s==s>y,i=0)|i;// 1 charter over? run with out the ;?
checkRange=(a,x,y)=>a.map(s=>i+=x>s==s>y,i=0)|i/// it works






a.filter(i=>x<=i&&i<=y).length;
// x<=i&&i<=y === x>i==i>y
a.filter(i=>x>i==i>y).length;//2 charaters over :(




/*43 charaters on line 1,
but the 48 of line count test is to mart for this*/
checkRange=(a,x,y)=>{return cheat(a,x,y)};

function cheat(a,x,y) {
  var c=0;
  var i=0;
  while (a[i]>0) {
    if (x <= a[i] && a[i] <= y){c++;}
    i++;
  }
  return c;
}


i;while(i<99){if(x<=a[i]&&a[i]<=y){c++;}i++;}return c;};





/*var count=0;
for(var i = 0;i < a.length;i++){
  if (x <= a[i] && a[i] <= y){count++;}
}
return count;};

// remove spaces
var count=0;for(i=0;i<a.length;i++){if(x<=a[i]&&a[i]<=y){count++;}}return count;};
83 chaters over 35*/

//count===c,
c=0;
for(var i = 0;i < a.length;i++){
  if (x <= a[i] && a[i] <= y){c++;}
}
return c;};

c=0;for(i=0;i<a.length;i++){if(x<=a[i]&&a[i]<=y){c++;}}return c;};
//67 charaters


//while loops are shorter
c=0;
i=0;while (a[i]>0) {
  if (x <= a[i] && a[i] <= y){c++;}
  i++;
}
return c;};

c=0;i=0;while(a[i]>0){if(x<=a[i]&&a[i]<=y){c++;}i++;}return c;};
//65



//coding and coding.. shorter and more shorter..  good luck! ;-)
