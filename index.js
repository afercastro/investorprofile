


//I plan to begin withdrawing money from my investments in:
//Less than three years 1
//3-5 years 3
//6-10 years 7
//11 years or more 10

var years1 = prompt("I plan to begin withdrawing money from my investments in 1- Less than 3 years 2- 3-5 years 3- 6-10 years 4- 11 years or more:","");

    if (years1<3){
        points1=1;
    }
    else if(3<years1<5){
        points1=3;
    }
    else if(6<years1<10){
        points1=7;
    }else{
        points1=10;
    }


// Once I begin withdrawing funds from my investments, I plan to spend all of the funds in
// Less than 2 years 0
// 2-5 years 1
// 6-10 years 4
// 11 years or more 8

var years2 = prompt("Once I begin withdrawing funds from my investments, I plan to spend all of the funds in 1- Less than 2 years 2- 2-5 years 3- 6-10 years 4- 11 years or more: ","");

if (years2<2){
        points2=0;
    }
    else if(2<years2<5){
        points2=1;
    }
    else if(6<years2<10){
        points2=4;
    }else{
        points2=8;
    }

//I would describe my knowledge of investments as
//None 1
//Limited 3
//Good 7
//Extensive 10

var years2 = prompt("I would describe my knowledge of investments as: none, limited, good or extensive 1- None 2-Limited 3-Good 4-Extensive","");

if (1){
        points3=1;
    }
    else if(2){
        points3=3;
    }
    else if(3){
        points3=7;
    }
    else if(4){
        points3=10;
    }else{
        points3=0;
    }



//When I invest my money, I am
// a) Most concerned about my investment losing value 0
// b) Equally concerned about my investment losing or gaining value 4
// c) Most concerned about my investment gaining value 8

var years3 = prompt("When I invest my money, I am: 1-Most concerned about my investment losing value 2-Equally concerned about my investment losing or gaining value 3-Most concerned about my investment gaining value", "");

if (1){
        points4=0;
    }
    else if(2){
        points4=4;
    }
    else if(3){
        points4=8;
    
    }else{
        points4=0;
    }

//Select the investments you currently own: 1-Bonds 2-Stocks 3-International funds

var years4 = prompt("Select the investments you currently own: 1-Bonds 2-Stocks 3-International funds","");

if (1){
    points5=3;
}else if(2){
    points5=6;
}else if(3){
    points5=8;
}else{
    points5=0;
}


// Consider this scenario:
// Imagine that in the past three months, the overall stock market lost 25% of its value. An individual stock investment you own also lost 25% of its value. What would you do?
// Sell al of my shares 0
// Sell some of my shares 2
// Do nothing 5
// Buy more shares 8

var years5 = prompt("Imagine that in the past three months, the overall stock market lost 25% of its value. An individual stock investment you own also lost 25% of its value. What would you do? 1-Sell al of my shares 2-Sell some of my shares 3-Do nothing 4-Buy more shares","");

if (1){
    points6=0;
}else if(2){
    points6=2;
}else if(3){
    points6=5;
}else if(4){
    points6=8;
}else{
    
}


//Review the chart below
//We've outlined the most likely best-case and worst-case annual returns of five hypothetical investment plans.
//Which range of possible outcomes is most acceptable to you?
// Ver cuadro

var years6 = prompt("We've outlined the most likely best-case and worst-case annual returns of five hypothetical investment plans. Which range of possible outcomes is most acceptable to you? 1-16%-(-5%) 2-25%-(-12%) 3-33%-(-18%) 4-42%-(-24%) 5- 50%-(-28%)","");

if (1){
    points7=0;
}else if(2){
    points7=3;
}else if(3){
    points7=6;
}else if(4){
    points7=8;  
}else if(5){
    points7=10;
    
}



var time_risk = (points1+points2+points3+points4+points5+points6+points7)

if(time_risk<4){
    document.write("<h3>You're a conservative investor: </h3><br> <p>For investors who seek current income and stability and are less concerned about growth.</p>" );
}else if(5<time_risk && time_risk<9){
    document.write("<h3>You're a moderately conservative investor: </h3><br> <p>For investors who seek current income and stability, with modest potential for increase in the value of their investments.</p>" );
}else if(10<time_risk && time_risk<14){
    document.write("<h3>You're a moderate investor: </h3><br> <p>For long-term investors who don’t need current income and want some growth potential. Likely to entail some fluctuations in value, but presents less volatility than the overall equity market.</p>"); 
}else if(15<time_risk && time_risk<19){
    document.write("<h3>You're a moderately aggresive investor: </h3><br> <p>For long-term investors who want good growth potential and don’t need current income. Entails a fair amount of volatility, but not as much as a portfolio invested exclusively in equities.</p>");
}else if(time_risk>20){
        document.write("<h3>You're an aggresive investor: </h3><br> <p>For long-term investors who want high growth potential and don’t need current income. May entail substantial year-to-year volatility in value in exchange for potentially high long-term returns.</p>");    
}else{

}



