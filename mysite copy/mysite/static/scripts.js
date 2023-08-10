$(document).ready(function() {
    
    // Smooth scrolling behavior
    $('nav a').click(function(event){
        event.preventDefault();
        var sectionID = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(sectionID).offset().top
        }, 1000);

        // Ensure the clicked section is expanded when scrolled to
        $(sectionID + " > *:not(h1)").slideDown();
        $(sectionID).removeClass('collapsed');
    });

    // Initially hide all sections except for the titles and add collapsed class
    $(".container section > *:not(h1)").hide();
    $(".container section").addClass('collapsed');

    // Handle the click event on a section title
    $(".container section h1").click(function() {
        var section = $(this).parent();
        var sectionContent = $(this).siblings();
            
        // If this section is already expanded, collapse it
        if (sectionContent.is(":visible")) {
            sectionContent.slideUp();
            section.addClass('collapsed');
        } else {
            // Collapse all other sections
            $(".container section > *:not(h1)").slideUp();
            $(".container section").addClass('collapsed');
            // Expand this section
            sectionContent.slideDown();
            section.removeClass('collapsed');
        }
    });

    // Automatically open the "Wei Wu" section when the page loads
    $("#weiwu-section h1").click();
});
