
$(document).ready(function (){
    $('#calculateButton').click(function() {
        
        
        var numBeats = $('#numBeats').val();
        var numMeasures = $('#numMeasures').val();
        var initNote = $('input[name="initial_note"]:checked', '#musicForm').val();
        var initNoteName = $('input[name="initial_note"]:checked', '#musicForm').attr("noteName");
        var finalNoteName = $('input[name="final_note"]:checked', '#musicForm').attr("noteName");
        var finalNote = $('input[name="final_note"]:checked', '#musicForm').val();
        var pickUp = $('select[name="pick_up"] option:selected').val();
        var notesPerMeasure = numBeats * (finalNote/initNote);
        var totalBeats = numBeats * numMeasures + parseInt(pickUp);
        var totalFinalNotes = notesPerMeasure * numMeasures + parseInt(pickUp) *(finalNote/initNote);
       
        
        $('#rNumBeats').text(numBeats);
        $('#rNumMeasures').text(numMeasures);
        $('#rInitNote').text(initNote);
        $('#rFinalNote').text(finalNote);
        $('#rInitNoteName').text(initNoteName);
        $('#rFinalNoteName').text(finalNoteName);
        $('#rFinalNoteName2').text(finalNoteName);
        $('#rNotesPerMeasure').text(notesPerMeasure);
        $('#rTotalBeats').text(totalBeats);
        $('#rTotalFinalNotes').text(totalFinalNotes);
        $('#rPickUp').text(pickUp);
        
        if(numBeats <= 0) {
            alert("The number of beats per measure must be greater than 0");
        }
        else if(numMeasures <= 0) {
            alert("The number of measures must be greater than 0");
        }
        else {
            $(".displayText").css('display', 'inline-block');
        };
    });
});
    
//
////beatNum * (finalNote / initialNote)
//
//$('input[name=radioName]:checked', '#myForm').val();