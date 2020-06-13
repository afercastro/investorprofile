

//I plan to begin withdrawing money from my investments in:
//Less than three years 1
//3-5 years 3
//6-10 years 7
//11 years or more 10

var years1 = prompt("I plan to begin withdrawing money from my investments in 1- Less than 3 years 2- 3-5 years 3- 6-10 years 4- 11 years or more:","");

    if (years1==1){
        points1=1;
    }
    else if(years1==2){
        points1=3;
    }
    else if(years1==3){
        points1=7;
    }else if(years1==4){
        points1=10;
    }


// Once I begin withdrawing funds from my investments, I plan to spend all of the funds in
// Less than 2 years 0
// 2-5 years 1
// 6-10 years 4
// 11 years or more 8

var years2 = prompt("Once I begin withdrawing funds from my investments, I plan to spend all of the funds in 1- Less than 2 years 2- 2-5 years 3- 6-10 years 4- 11 years or more: ","");

if (years2==1){
        points2=0;
    }
    else if(years2==2){
        points2=1;
    }
    else if(years2==3){
        points2=4;
    }else if(years2==4){
        points2=8;
    }

//I would describe my knowledge of investments as
//None 1
//Limited 3
//Good 7
//Extensive 10

var years3 = prompt("I would describe my knowledge of investments as: none, limited, good or extensive 1- None 2-Limited 3-Good 4-Extensive","");

if (years3==1){
        points3=1;
    }
    else if(years3==2){
        points3=3;
    }
    else if(years3==3){
        points3=7;
    }
    else if(years3==4){
        points3=10;
    }



//When I invest my money, I am
// a) Most concerned about my investment losing value 0
// b) Equally concerned about my investment losing or gaining value 4
// c) Most concerned about my investment gaining value 8

var years4 = prompt("When I invest my money, I am: 1-Most concerned about my investment losing value 2-Equally concerned about my investment losing or gaining value 3-Most concerned about my investment gaining value", "");

if (years4==1){
        points4=0;
    }
    else if(years4==2){
        points4=4;
    }
    else if(years4==3){
        points4=8;
    
    }

//Select the investments you currently own: 1-Bonds 2-Stocks 3-International funds

var years5 = prompt("Select the investments you currently own: 1-Bonds 2-Stocks 3-International funds","");

if (years5==1){
    points5=3;
}else if(years5==2){
    points5=6;
}else if(years5==3){
    points5=8;
}


// Consider this scenario:
// Imagine that in the past three months, the overall stock market lost 25% of its value. An individual stock investment you own also lost 25% of its value. What would you do?
// Sell al of my shares 0
// Sell some of my shares 2
// Do nothing 5
// Buy more shares 8

var years6 = prompt("Imagine that in the past three months, the overall stock market lost 25% of its value. An individual stock investment you own also lost 25% of its value. What would you do? 1-Sell al of my shares 2-Sell some of my shares 3-Do nothing 4-Buy more shares","");

if (years6==1){
    points6=0;
}else if(years6==2){
    points6=2;
}else if(years6==3){
    points6=5;
}else if(years6==4){
    points6=8;
}


//Review the chart below
//We've outlined the most likely best-case and worst-case annual returns of five hypothetical investment plans.
//Which range of possible outcomes is most acceptable to you?
// Ver cuadro

var years7 = prompt("We've outlined the most likely best-case and worst-case annual returns of five hypothetical investment plans. Which range of possible outcomes is most acceptable to you? 1-16%-(-5%) 2-25%-(-12%) 3-33%-(-18%) 4-42%-(-24%) 5- 50%-(-28%)","");

if (years7==1){
    points7=0;
}else if(years7==2){
    points7=3;
}else if(years7==3){
    points7=6;
}else if(years7==4){
    points7=8;  
}else if(years7==5){
    points7=10;
    
}


var time_risk = (points1+points2+points3+points4+points5+points6+points7)

if(time_risk<7){
    document.write("<h3>You're a conservative investor: </h3><br> <p>For investors who seek current income and stability and are less concerned about growth.</p>" );
}else if(time_risk<24){
      document.write("<h3>You're a moderately conservative investor: </h3><br> <p>For investors who seek current income and stability, with modest potential for increase in the value of their investments.</p>" );
}else if(time_risk<37){
    document.write("<h3>You're a moderate investor: </h3><br> <p>For long-term investors who don’t need current income and want some growth potential. Likely to entail some fluctuations in value, but presents less volatility than the overall equity market.</p>"); 
}else if(time_risk<42){
    document.write("<h3>You're a moderately aggresive investor: </h3><br> <p>For long-term investors who want good growth potential and don’t need current income. Entails a fair amount of volatility, but not as much as a portfolio invested exclusively in equities.</p>");
}else if(time_risk<70){    
    document.write("<h3>You're an aggresive investor: </h3><br> <p>For long-term investors who want high growth potential and don’t need current income. May entail substantial year-to-year volatility in value in exchange for potentially high long-term returns.</p>");
        
}




 
