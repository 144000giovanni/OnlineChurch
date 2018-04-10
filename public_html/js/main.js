function countWords(){
  
    // Select all the p elements in the page.
    var paragraphs = document.getElementsByTagName("p");
    var headings= document.getElementsByTagName("h1");
    var blockquote = document.getElementsByTagName("blockquote");
  
    // The counter.
    var count = 0;
  
    for(var i = 0; i < paragraphs.length; i++)
    {
        // Split the innerHtml of the current paragraph to count the words.
        count += paragraphs[i].innerHTML.split(' ').length;
    }
    
    for(var i = 0; i < headings.length; i++)
    {
        // Split the innerHtml of the current paragraph to count the words.
        count += headings[i].innerHTML.split(' ').length;
    }
    
    for(var i = 0; i < blockquote.length; i++)
    {
        // Split the innerHtml of the current paragraph to count the words.
        count += blockquote[i].innerHTML.split(' ').length;
    }
    
    document.getElementById("wordcount").innerHTML = "Number of words: " + count; 

}

function getCountWords(){
  
    // Select all the p elements in the page.
    var paragraphs = document.getElementsByTagName("p");
    var headings= document.getElementsByTagName("h1");
    var blockquote = document.getElementsByTagName("blockquote");
  
    // The counter.
    var count = 0;
  
    for(var i = 0; i < paragraphs.length; i++)
    {
        // Split the innerHtml of the current paragraph to count the words.
        count += paragraphs[i].innerHTML.split(' ').length;
    }
    
    for(var i = 0; i < headings.length; i++)
    {
        // Split the innerHtml of the current paragraph to count the words.
        count += headings[i].innerHTML.split(' ').length;
    }
    
    for(var i = 0; i < blockquote.length; i++)
    {
        // Split the innerHtml of the current paragraph to count the words.
        count += blockquote[i].innerHTML.split(' ').length;
    }
    
    return count;

}

function calculateTimeLength(){
  
    // Select all the p elements in the page.
    var totalWords = getCountWords();
    var wordsperminute = 200;
    var time = Math.round(totalWords / wordsperminute);

    document.getElementById("timelength").innerHTML = "Sermon length: " + time + " minutes"; 

}