const faqs={
    "about uvce en":`first college in karnataka and what not , sports obviously`,
    "how  students at  class classes acadmics is uvce":`Awesome Many students dream of Not to have much classes Not to get attendance shortage To get much free time in a day to enjoy To get unexpected good results To have good placements To have four fests in one year (cultural and technical ) But the main thing is you should have self studying ability for joining UVCE.`,
    "how old is uvce":"more than you",
    "how are studies at uvce":"as expected",
    "How is the campus life at UVCE":`Campus life will be great at its so much green inside the campus and a chill place to hangout`,
    "peer peers at uvce how group":"you can find every kind of peer group in uvce, it depends on you to choose the right one ",


    
}
console.table(faqs);
function getinput(){
    
    console.log("triggered");
    
    let similar=1;
    let question=document.getElementById("input").value;
    let questionarray=question.split(" ");
    
    if(Object.values(questionarray).length==1){
        document.getElementById("out").innerHTML="i cant here you saying can you express in more words";
        return;

    }
    let answer="";
    for(let quest in faqs){
    let newsimilar=0;
    for(let i of questionarray){
        if(quest.includes(i)){
            newsimilar++;
        }
    }
    console.log(newsimilar);
    if(newsimilar>similar){
        answer=faqs[quest];
        similar=newsimilar;
    }
    
}
if(similar==0||answer==''){
    document.getElementById("out").innerHTML="i dont think this question was seen before by my creators";
    return;
}else{
document.getElementById("out").innerHTML=answer;}
return;


}


function openForm() {
    document.getElementById("out").innerHTML="working";
}

    
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
