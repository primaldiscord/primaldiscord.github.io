/* MODAL glossary
--------------
--------------
--------------*/

// Model Open and Close

$(document).ready(function() {

  //Glossary terms

  const terms = [
    ['do', 'the song of universal harmony'],
    ['veil', 'the vague separation between matter as it is now and what it could be'],
    ['octant', 'one of eight Pavement regions within the forest'],
    ['playground', 'a green area that circles the Taproot and is the primary place of gathering and leisure in the Forest'],
    ['pavement', 'an ochre, spongy surface that surrounds the Playground and serves as a residential area'],
    ['spore', 'an individual residential unit'],
    ['stem', 'a large, cylindrical tower that roosts spores above the Pavement floor'],
    ['taproot', "a black obelisk at the middle of the Forest that holds the Institution's spores"],
    ['periderm', 'a wall that separates the Forest from the Range'],
    ['pith', "the Universe's central processing unit/terminal"],
    ['range', "the area immediately outside of the Forest's Periderm"],
    ['breach', 'an area in the deep Range protected by the Protocol'],
    ['wellspring fortress', 'an area beneath the Northern Octant protected by the Protocol'],
    ['calling', 'a randomized, five-year cycle of civil service'],
    ['artisan', "an independent individual with the Forest's"],
    ['praktik', 'an artisan that serves as a Universal engineer within the Institution'],
    ['ethik', 'a member of the Ministry of Ethiks'],
    ['civik', 'a Civil Kommander, an Artisan responsible for overseeing the day-to-day, bureaucratic operations of the Forest'],
    ['mineth', 'short for Ministry of Ethiks, A panel of Ethiks responsible for overseeing Universal regulations'],
    ['minad', 'short for Ministry of Adjudications, Individual Ethiks who serve as magistrates and administer justice as needed'],
    ['forest', 'the general name for the city that is home to the last remnants of humanity following the Scourge'],
    ['institution', 'an organization designed to govern and maintain the Forest'],
    ['logik', 'the highest ranking authority in the Institution'],
    ['eye', "the Logik's head of security"],
    ['ear', "the Logik's chief advisor"],
    ['tongue', "the chief Praktik in charge of the Institution's day-to-day operations"],
    ['maker', 'the human creative spirit, deified by Groveling Alloy'],
    ['followers of god', 'an organization that worships an old Prob deity'],
    ['fog', 'followers of God, An organization that worships an old Prob deity'],
    ['clockwork cultists', 'followers of God, An organization that worships an old Prob deity'],
    ['clockwork gospel', 'the system of belief of the Followers of God'],
    ['dendritic order of non-conformists', 'an organization founded by the Seed, celebrating the earth and the human body'],
    ['order', 'short for the Dendritic Order of Non-conformists, An organization founded by the Seed, celebrating the earth and the human body'],
    ['exprime', 'short for exterterretrial Primate, A basic, low-level member of the Order who has not undertaken a formal initiation. To outsiders, ny member of the Order'],
    ['cult of the maker', "a deification of the human will to create started by Groveling Alloy as a tongue-in-cheek response to the Prob's theocracy"],
    ['cavity of commerce', 'an organization founded by the Preacher, designed to advocate for a return to a Prob form of economics known as Commercialism'],
    ['cavity', 'short for the Cavity of Commerce, An organization founded by the Preacher, designed to advocate for a return to a Prob form of economics known as Commercialism'],
    ['uttering rite', 'an organization founded by Fallen Dendrologist that aims to protect humanity from a perncious form of mind-controlling bacteria'],
    ['speaker of the uttering rite', 'a principle of the Uttering Rite, known for dressing in white and screeching on the Pavement'],
    ['regulation', 'a sequence of code that controls the behavior of the Universe'],
    ['universe', 'a powerful artificial intelligence'],
    ['unik', 'short for Universal communicator, a way to interact with the Universe'],
    ['spore-suit', 'a spore that fits close to the skin and alters the attributes of the body who occupies it without altering the body itself'],
    ['protocol', 'a system designed by Fallen Dendrologist that serves to exempt certain spatial regions from Universal interference and monitoring'],
    ['integration', 'the capacity to communicate with the Universe without the intermediation of a Unik'],
    ['wendigo', 'a distorted human that prowl the Range and prey on those who step outside the Periderm'],
    ['scourge', 'a sequence of violent events that brought the planet to the brink of extinction'],
    ['body', 'an Artisan who participate in an Object'],
    ['brain', 'the leader of an Object'],
    ['object', 'a group of Bodies'],
    ['nest', 'an orphanage where most children in the Forest are raised'],
    ['logos', 'a term of respect for someone of higher rank, diminutive of Logik'],
    ['prob', 'short for Pre-Obsolescence, the period before the Obsolescence'],
    ['scourge', 'the near-destruction of the planet as a result of human race consciousness, sectarianism, and environmental indifference'],
    ['obsolescence', 'the opening of the Forest to incorporate all surviving humanity following the Scourge. What was rendered obsolete is a point of discussion: some say humanity at large, others say information'],
    ['interruption', 'the unexpected disruption of the cyclical Calling'],
    ['reorganization', 'the consolidation of power in the Cavity following Groveling Alloy’s death'],
    ['awakening', 'the rallying of the Order against the Cavity; the recommitment to information gathering'],
    ['consecration', 'the implementation of broad mind-control regulations']
  ]

  //Opens Model on click of "Ask"
  $("#ask").click(function() {
    $(".modal").css('display', 'block');
  });

  //Closes Modal by clicking outside of modal window and not on 'Ask'
  $(document).click(function(event) {
    if (!$(event.target).closest(".modal, #ask").length) {
      $("body").find(".modal").css('display', 'none');
    }
  });

  //Focusing search field in and out
  $('#searchTerm').focus(function() {
    $('#searchTerm').addClass('focused').fadeIn('slow');
  });

  $('#searchTerm').blur(function() {
    $('#searchTerm').removeClass('focused');
    $('#definition').html('').fadeOut('slow');
    $('#searchTerm').val('');
    $('#definition');
  });

  $('#searchTerm').keyup(function() {
    var initialUserInput = $('#searchTerm').val();
    var userInput = initialUserInput.toLowerCase().replace('the ', '');
    for(var i = 0; i < terms.length; i++) {
      if (terms[i][0] == userInput) {
        $('#definition').html(`${initialUserInput} is ${terms[i][1]}`);
        $('#definition').fadeTo('slow');
        break;
      } else {
        $('#definition').html(`That is a mystery to us all`);
        $('#definition').fadeIn('slow');
      }
    }


    // focused.onblur = function() {
    //   focused.setAttribute('class', '');
    //   searchTerm.value = '';
    //   definition.innerHTML = '';
    //   definition.style.display = 'none';
    // }
  });
});
