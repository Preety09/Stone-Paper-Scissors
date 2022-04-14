let a=[String.fromCodePoint(0x1F44A),String.fromCodePoint(0x1F590),String.fromCodePoint(0x1F91E)]
let c1 
let c2
let count=0;
let count1=0
let count2=0

function startgame1()
{  
	let randomIndex=Math.floor(Math.random()*3)
	c1=randomIndex
	 let preety=a[randomIndex] 
	let c=document.getElementById("pop")
	c.innerText=preety
}
function startgame2()
{ 

	let randomIndex=Math.floor(Math.random()*3)
	c2=randomIndex
	 let rupali=a[randomIndex] 
	let c=document.getElementById("pop1")
	c.innerText=rupali
	//function win()

       let y=document.getElementById("win1")
       if(c1===0 && c2===1)
	    { 
		    y.innerHTML = String.fromCodePoint(0x1F590)+"player 2 won the game"
		    count2++
		}

      else if(c2===0 && c1===1)
		{ 
			y.innerHTML = String.fromCodePoint(0x1F590)+"player 1 won the game"
			count1++

		}

     else if(c2===2 && c1===1)
		{ 
			y.innerHTML = String.fromCodePoint(0x1F91E)+"player 2 won the game"
			count2++
		}
		else if(c2===1 && c1===2)
		{ 
			y.innerHTML = String.fromCodePoint(0x1F91E)+"player 1 won the game"
			count1++

		}
		else if(c2===2 && c1===0)
		{ 
			y.innerHTML = String.fromCodePoint(0x1F44A)+"player 1 won the game"
			count1++

		}
		else if(c2==0 && c1==2)

 		{ 
			y.innerHTML = String.fromCodePoint(0x1F44A)+"player 2 won the game"
			count2++

		}
		else if(c2===c1)
		{ 
			y.innerHTML = "draw"

		} 
		count++
		if(count==5)
		{
			total()
		}

}


function total()
{ 
	document.getElementById("p1").innerText=" player1="+count1
	document.getElementById("p2").innerText="player2="+count2
	if(count1>count2)
		document.getElementById("p3").innerText=" player 1 won the game"+String.fromCodePoint(0x1F973)
	if(count2>count1)
		document.getElementById("p3").innerText=" player 2 won the game"+String.fromCodePoint(0x1F973)
	else if(count1===count2) 
		document.getElementById("p3").innerText=" draw"+String.fromCodePoint(0x1F641)
	alert("GAME OVER "+String.fromCodePoint(0x1F973))
	count1=0
	count2=0
		



}




