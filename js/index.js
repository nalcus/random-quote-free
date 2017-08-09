var quoteData={
  quoteText:"",
  quoteAuthor:''
};

$(document).ready(function() {
  getQuote();
  $("#meow").on("click", getQuote);
  $("#tweet").on("click", tweetQuote);
  
});

function getQuote() {
  $.getJSON({
    url:
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
  })
    .done(function(q) {
    quoteData["quoteText"]=q["quoteText"];    quoteData["quoteAuthor"]="-"+q["quoteAuthor"];
      $("#quoteText").text(quoteData["quoteText"]);
    $("#quoteAuthor").text(quoteData["quoteAuthor"]);
    })
    .fail(function(jqxhr, textStatus, err) {
      alert("error: " + textStatus);
    });
};

function tweetQuote() {
  var url='https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quoteData.quoteText + '" ' + quoteData.quoteAuthor);
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}