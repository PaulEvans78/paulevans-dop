// Showcase 1 TITLE

$(document).ready(function(){
var resolution = $(window).width();
  if (resolution >= 960) {

$("#playbutton1").hide();
       $("#film1_card").mouseover(function(){
               $("#playbutton1").show();
             });
             $('#film1_card').mouseover(function () {
                $('#title1').hide();
            });
            

            $("#film1_card").mouseout(function(){
                if ($('#film1_card').is(':hover')) {
                  $('#playbutton1').show();
                  ($('#film1_card').is(':hover')) 
                    $('#playbutton1').hide();
                
              } else {
                  $('#title1').show();
                  $('#playbutton1').hide();
              }
              });
          
          $('#playbutton1').mouseout(function () {
                $('#playbutton1').hide();
          });
          $("#playbutton1").mouseout(function(){
                $("#title1").show();
          });
    
   } else {
    $("#playbutton1").hide();
  }
});

// Showcase 1 DESCRIPTION

  $(document).ready(function(){
    var resolution = $(window).width();
    if (resolution >= 960) {
  
  $("#playbutton1").hide();
            $("#film1_card").mouseover(function(){
                    $("#playbutton1").show();
                  });
                  $('#film1_card').mouseover(function () {
                     $('#description1').hide();
                 });
                 
     
                 $("#film1_card").mouseout(function(){
                     if ($('#film1_card').is(':hover')) {
                       $('#playbutton1').show();
                       ($('#film1_card').is(':hover')) 
                         $('#playbutton1').hide();
                     
                   } else {
                       $('#description1').show();
                       $('#playbutton1').hide();
                   }
                   });
               
               $('#playbutton1').mouseout(function () {
                     $('#playbutton1').hide();
               });
               $("#playbutton1").mouseout(function(){
                     $("#title1").show();
               });
  
  } else {
      $("#playbutton1").hide();
      $("#description1").show();
      $("#title1").show();
    }
  });
  


        // Showcase 2 TITLE

        $(document).ready(function(){
          var resolution = $(window).width();
          if (resolution >= 960) {

            $("#playbutton2").hide();
            $("#film2_card").mouseover(function(){
                    $("#playbutton2").show();
                  });
                  $('#film2_card').mouseover(function () {
                     $('#title2').hide();
                 });
     
                 $("#film2_card").mouseout(function(){
                     if ($('#film2_card').is(':hover')) {
                       $('#playbutton2').show();
                       ($('#film2_card').is(':hover')) 
                         $('#playbutton2').hide();
                     
                   } else {
                       $('#title2').show();
                       $('#playbutton2').hide();
                   }
                   });
               
               $('#playbutton2').mouseout(function () {
                     $('#playbutton2').hide();
               });
               $("#playbutton2").mouseout(function(){
                     $("#title2").show();
               });
             
              } else {
                $("#playbutton2").hide();
              }
            });

             // Showcase 2 DESCRIPTION

             $(document).ready(function(){
              var resolution = $(window).width();
              if (resolution >= 960) {

              $("#playbutton2").hide();
              $("#film2_card").mouseover(function(){
                      $("#playbutton2").show();
                    });
                    $('#film2_card').mouseover(function () {
                       $('#description2').hide();
                   });
       
                   $("#film2_card").mouseout(function(){
                       if ($('#film2_card').is(':hover')) {
                         $('#playbutton2').show();
                         ($('#film2_card').is(':hover')) 
                           $('#playbutton2').hide();
                       
                     } else {
                         $('#description2').show();
                         $('#playbutton2').hide();
                     }
                     });
                 
                 $('#playbutton2').mouseout(function () {
                       $('#playbutton2').hide();
                 });
                 $("#playbutton2").mouseout(function(){
                       $("#title2").show();
                 });
               
                } else {
                  $("#playbutton2").hide();
                  $("#description2").show();
                  $("#title2").show();
                }
              });


        // Showcase 3 TITLE

        $(document).ready(function(){
          var resolution = $(window).width();
          if (resolution >= 960) {

            $("#playbutton3").hide();
            $("#film3_card").mouseover(function(){
                    $("#playbutton3").show();
                  });
                  $('#film3_card').mouseover(function () {
                     $('#title3').hide();
                 });
     
                 $("#film3_card").mouseout(function(){
                     if ($('#film3_card').is(':hover')) {
                       $('#playbutton3').show();
                       ($('#film3_card').is(':hover')) 
                         $('#playbutton3').hide();
                     
                   } else {
                       $('#title3').show();
                       $('#playbutton3').hide();
                   }
                   });
               
               $('#playbutton3').mouseout(function () {
                     $('#playbutton3').hide();
               });
               $("#playbutton3").mouseout(function(){
                     $("#title3").show();
               });
             
              } else {
                $("#playbutton3").hide();
              }
            });

             // Showcase 3 DESCRIPTION

             $(document).ready(function(){
              var resolution = $(window).width();
              if (resolution >= 960) {

              $("#playbutton3").hide();
              $("#film3_card").mouseover(function(){
                      $("#playbutton3").show();
                    });
                    $('#film3_card').mouseover(function () {
                       $('#description3').hide();
                   });
       
                   $("#film3_card").mouseout(function(){
                       if ($('#film3_card').is(':hover')) {
                         $('#playbutton3').show();
                         ($('#film3_card').is(':hover')) 
                           $('#playbutton3').hide();
                       
                     } else {
                         $('#description3').show();
                         $('#playbutton3').hide();
                     }
                     });
                 
                 $('#playbutton3').mouseout(function () {
                       $('#playbutton3').hide();
                 });
                 $("#playbutton3").mouseout(function(){
                       $("#title3").show();
                 });
               
                } else {
                  $("#playbutton3").hide();
                  $("#description3").show();
                  $("#title3").show();
                }
              });

        // Showcase 4 TITLE

        $(document).ready(function(){
          var resolution = $(window).width();
          if (resolution >= 960) {
            $("#playbutton4").hide();
            $("#film4_card").mouseover(function(){
                    $("#playbutton4").show();
                  });
                  $('#film4_card').mouseover(function () {
                     $('#title4').hide();
                 });
     
                 $("#film4_card").mouseout(function(){
                     if ($('#film4_card').is(':hover')) {
                       $('#playbutton4').show();
                       ($('#film4_card').is(':hover')) 
                         $('#playbutton4').hide();
                     
                   } else {
                       $('#title4').show();
                       $('#playbutton4').hide();
                   }
                   });
               
               $('#playbutton4').mouseout(function () {
                     $('#playbutton4').hide();
               });
               $("#playbutton4").mouseout(function(){
                     $("#title4").show();
               });
             
              } else {
                $("#playbutton4").hide();
              }
            });

             // Showcase 4 DESCRIPTION

             $(document).ready(function(){
              var resolution = $(window).width();
              if (resolution >= 960) {

              $("#playbutton4").hide();
              $("#film4_card").mouseover(function(){
                      $("#playbutton4").show();
                    });
                    $('#film4_card').mouseover(function () {
                       $('#description4').hide();
                   });
       
                   $("#film4_card").mouseout(function(){
                       if ($('#film4_card').is(':hover')) {
                         $('#playbutton4').show();
                         ($('#film4_card').is(':hover')) 
                           $('#playbutton4').hide();
                       
                     } else {
                         $('#description4').show();
                         $('#playbutton4').hide();
                     }
                     });
                 
                 $('#playbutton4').mouseout(function () {
                       $('#playbutton4').hide();
                 });
                 $("#playbutton4").mouseout(function(){
                       $("#title4").show();
                 });
               
                } else {
                  $("#playbutton4").hide();
                  $("#description4").show();
                  $("#title4").show();
                }
              });

        // Showcase 5 TITLE

        $(document).ready(function(){
          var resolution = $(window).width();
          if (resolution >= 960) {

            $("#playbutton5").hide();
            $("#film5_card").mouseover(function(){
                    $("#playbutton5").show();
                  });
                  $('#film5_card').mouseover(function () {
                     $('#title5').hide();
                 });
     
                 $("#film5_card").mouseout(function(){
                     if ($('#film5_card').is(':hover')) {
                       $('#playbutton5').show();
                       ($('#film5_card').is(':hover')) 
                         $('#playbutton5').hide();
                     
                   } else {
                       $('#title5').show();
                       $('#playbutton5').hide();
                   }
                   });
               
               $('#playbutton5').mouseout(function () {
                     $('#playbutton5').hide();
               });
               $("#playbutton5").mouseout(function(){
                     $("#title5").show();
               });
             
              } else {
                $("#playbutton5").hide();
              }
            });

             // Showcase 5 DESCRIPTION

             $(document).ready(function(){
              var resolution = $(window).width();
              if (resolution >= 960) {

              $("#playbutton5").hide();
              $("#film5_card").mouseover(function(){
                      $("#playbutton5").show();
                    });
                    $('#film5_card').mouseover(function () {
                       $('#description5').hide();
                   });
       
                   $("#film5_card").mouseout(function(){
                       if ($('#film5_card').is(':hover')) {
                         $('#playbutton5').show();
                         ($('#film5_card').is(':hover')) 
                           $('#playbutton5').hide();
                       
                     } else {
                         $('#description5').show();
                         $('#playbutton5').hide();
                     }
                     });
                 
                 $('#playbutton5').mouseout(function () {
                       $('#playbutton5').hide();
                 });
                 $("#playbutton5").mouseout(function(){
                       $("#title5").show();
                 });
               
                } else {
                  $("#playbutton5").hide();
                  $("#description5").show();
                  $("#title5").show();
                }
              });
  


        // Showcase 6 TITLE

        $(document).ready(function(){
          var resolution = $(window).width();
              if (resolution >= 960) {

            $("#playbutton6").hide();
            $("#film6_card").mouseover(function(){
                    $("#playbutton6").show();
                  });
                  $('#film6_card').mouseover(function () {
                     $('#title6').hide();
                 });
     
                 $("#film6_card").mouseout(function(){
                     if ($('#film6_card').is(':hover')) {
                       $('#playbutton6').show();
                       ($('#film6_card').is(':hover')) 
                         $('#playbutton6').hide();
                     
                   } else {
                       $('#title6').show();
                       $('#playbutton6').hide();
                   }
                   });
               
               $('#playbutton6').mouseout(function () {
                     $('#playbutton6').hide();
               });
               $("#playbutton6").mouseout(function(){
                     $("#title6").show();
               });
             
              } else {
                $("#playbutton6").hide();
              }
            });

             // Showcase 6 DESCRIPTION

             $(document).ready(function(){
              var resolution = $(window).width();
              if (resolution >= 960) {

              $("#playbutton6").hide();
              $("#film6_card").mouseover(function(){
                      $("#playbutton6").show();
                    });
                    $('#film6_card').mouseover(function () {
                       $('#description6').hide();
                   });
       
                   $("#film6_card").mouseout(function(){
                       if ($('#film6_card').is(':hover')) {
                         $('#playbutton6').show();
                         ($('#film6_card').is(':hover')) 
                           $('#playbutton6').hide();
                       
                     } else {
                         $('#description6').show();
                         $('#playbutton6').hide();
                     }
                     });
                 
                 $('#playbutton6').mouseout(function () {
                       $('#playbutton6').hide();
                 });
                 $("#playbutton6").mouseout(function(){
                       $("#title6").show();
                 });
                
                } else {
                  $("#playbutton6").hide();
                  $("#description6").show();
                  $("#title6").show();
                }
              });

              // downArrow hide on hover

  $(document).ready(function(){
    var resolution = $(window).width();
    if (resolution >= 960) {
  
  $("#playbutton1").hide();
            $("#film1_card").mouseover(function(){
                    $("#playbutton1").show();
                  });
                  $('#film1_card').mouseover(function () {
                     $('#downArrow').hide();
                 });
                 
     
                 $("#film1_card").mouseout(function(){
                     if ($('#film1_card').is(':hover')) {
                       $('#playbutton1').show();
                       ($('#film1_card').is(':hover')) 
                         $('#playbutton1').hide();
                     
                   } else {
                       $('#downArrow').show();
                       $('#playbutton1').hide();
                   }
                   });
               
               $('#playbutton1').mouseout(function () {
                     $('#playbutton1').hide();
               });
               $("#playbutton1").mouseout(function(){
                     $("#title1").show();
               });
  
  } else {
      $("#playbutton1").hide();
      $("#description1").show();
      $("#title1").show();
    }
  });