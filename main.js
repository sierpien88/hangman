$(document).ready(function() {
   $('#playground').hide();
   let start_test =  $('#start').click(function(){
/* ------ preparation playground ------*/
   
    $('#playground').show();
    $('#start').hide();
    let counter = 0;
     
/* ------ random word/sentence creation ------*/
    
    const objects = [sentence_1, sentence_2, sentence_3, sentence_4, sentence_5];
    let objects_length = parseInt(objects.length);
    let random_number = Math.floor((Math.random() * objects_length));
    
    let objects_random = objects[random_number];
    objects_random.class_letter();
    
    const letters_array = $('.single_letter');
   
    letters_array.css('background','#fff');
   
    for(let i=0;i<letters_array.length; i++){
   
    $(letters_array[i]).click(function(){
     
      
    let letter_val = $(letters_array[i]).text();
      
     let flag_letter = objects_random.show_letter(letter_val);
    
     let stringword = $("#sentence").html();
      if (!(stringword.includes("-"))){
       
          $('#message_win').show();
          $(letters_array).attr("disabled", true);
          after_game();
      }
      
      
      if(flag_letter == true){
       $(letters_array[i]).attr('disabled',true);
       $(letters_array[i]).css('background','green');
      
      } else{
        $(letters_array[i]).attr("disabled", true);
        $(letters_array[i]).css('background','red');
       
        counter++;
        let display = $('.display');
        
        for(let i=1;i<=counter;i++){
          $(display[i]).show();
          $(display[i-1]).hide();
          $('.first').hide();
        //  $('#counter').html(counter);
        }
        if(counter ==8){
          $(display[8]).show();
          $('#message').show();
          $(letters_array).attr("disabled", true);
          after_game();
          counter = 0;
        }
      }     
    })  
  }         
  })
/* ------ function when you win/lost game ------ */
 function after_game() {
   $('#yes2').click(function() {
    history.go(0);
});
     
    $("#no2").click(function() {
    $('#playground').hide();
    $('#end').show();         
});
   
   $('#yes').click(function() {
    history.go(0);
});
   
    $( "#no" ).click(function() {
    $('#playground').hide();
    $('#end').show();         
});
         
  }
/*------ constructor for sentence   ------*/
  function Sentence(sentence_letter){
    this.sentence_letter = sentence_letter;
    
    this.show_letter = function(letter){
    
      for(let i=0; i< sentence_letter.length;i++){
      let flag = true;
      let div_letter = '.' + this.sentence_letter[i];
      if((letter === this.sentence_letter[i]) && $(div_letter).text('')){
       $(div_letter).append(this.sentence_letter[i]);
        return flag;
      } 
      }
      
     };
/* ------ div's for sentence ------*/
    this.class_letter = function() {
      for(let i = 0; i < sentence_letter.length; i++) {
       $('#sentence').append('<div class="' + this.sentence_letter[i] + '">'+'-'+'</div>');
      };
    };
  }
/* ------ Buttons with letter create ------*/
  for(let i=65;i<=90;i++){
    
    let char = String.fromCharCode(i);
    $("#letters").append('<button class="single_letter">' + char + '</button>');
  }
  
/* ------ Create Words ------*/

 const sent1_array = ['K','A','J','A','K']; 
  const sentence_1 = new Sentence(sent1_array);
  
  const sent2_array = ['M','O','T','Y','L','E','K'];
  const sentence_2 = new Sentence(sent2_array);
  
  const sent3_array = ['A','U','S','T','R','A','L','I','A'];
  const sentence_3 = new Sentence(sent3_array);
  
  const sent4_array = ['K','A','K','T','U','S'];
  const sentence_4 = new Sentence(sent4_array);
  
  const sent5_array = ['M','U','C','H','A'];
  const sentence_5 = new Sentence(sent5_array);

});