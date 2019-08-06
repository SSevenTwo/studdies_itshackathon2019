$(document).ready(function() {

  jQuery('#search_input').keyup(function(e) {
    // do something
if(e.keyCode == 32){
  console.log("sds");

  var dInput = this.value.replace(/\s+$/, '');
  $('#resultappend').empty();
 //console.log(dInput);

  jQuery.ajax({
              url: "https://graph.facebook.com/v3.3/101803417830557?fields=posts%2Cvisitor_posts&access_token=EAAF2FJJTOroBAHY8G7n0MqOzaVn3aZC1xk4lxUjZCKp2Ph49aZAFZCqKn1ZAyHJENL7F4uvssBllmm11ZBznqVxj5aJK8RhxUAkeyZAY9c5kiS6kPTjZAC0xchnH18MilQBItqZCVVF82ZCRn4x1ZCfrZAxff6KVew1akZAcTy8xhrMZAloQZDZD",
              type: "GET",

              contentType: 'application/json; charset=utf-8',
              success: function(resultData) {
                  //here is your json.
                    // process it
                    //console.log(resultData)
                    //  var resultedData = '<a href="">  <li class="list-group-item"></li></a>'

                      // loop through results
                      //var this = resultData.posts.data ;
                      var appenddata = "";
                      var allDatafromFB = {};
                      //var dataarr = ["posts", "visitor_posts"];


                      for(var i=0; i < resultData.posts.data.length; i++){

                         //console.log(resultData.posts.data[i].message);
                         if(resultData.posts.data.length > 0){
                           //allDatafromFB.push(resultData.posts.data[i].id);
                           //allDatafromFB.push(resultData.posts.data[i].message);
                           if(typeof resultData.posts.data[i].message != 'undefined'){
                             allDatafromFB[resultData.posts.data[i].id] = resultData.posts.data[i].message;
                           }


                         }


                         // appenddata += '<a href="http://facebook.com/'+resultData.posts.data[i].id+'"><li class="list-group-item">'+resultData.posts.data[i].message+'</li></a>';


                      }

                      for(var i=0; i < resultData.visitor_posts.data.length; i++){

                         //console.log(resultData.visitor_posts.data[i].message);
                         if(resultData.visitor_posts.data.length > 0){
                          // allDatafromFB.push(resultData.visitor_posts.data[i].id);
                          // allDatafromFB.push(resultData.visitor_posts.data[i].message);
                           if(typeof resultData.visitor_posts.data[i].message != 'undefined'){
                            allDatafromFB[resultData.visitor_posts.data[i].id] = resultData.visitor_posts.data[i].message;
                        }

                       }
                         // appenddata += '<a href="http://facebook.com/'+resultData.visitor_posts.data[i].id+'"><li class="list-group-item">'+resultData.visitor_posts.data[i].message+'</li></a>';


                      }

                        //var keyword = "java".toLowerCase();
                        console.log(allDatafromFB);
                        //     for (var i = 1; i < allDatafromFB.length; i++) {
                        //         if (allDatafromFB[i].toLowerCase().includes(dInput)) {
                        //             console.log(allDatafromFB[i]);
                        //
                        //             appenddata += '<a href="http://facebook.com/'+resultData.posts.data[i-1].id+'"><li class="list-group-item">'+ allDatafromFB[i] +'</li></a>';
                        //         }
                        // }

                        Object.keys(allDatafromFB).forEach(function(key) {
                          console.log(allDatafromFB[key] +"---"+ key);
                          if (allDatafromFB[key].toLowerCase().includes(dInput)) {
                            //console.log("inn -- "+allDatafromFB[key]);
                              appenddata += '<a href="http://facebook.com/'+key+'" target="_blank"><li class="list-group-item"><i class="fa fa-facebook-f"></i> '+ allDatafromFB[key] +'</li></a>';
                          }

                          });
                            if(appenddata == ""){
                              appenddata += '<li class="list-group-item">No Post found <a href="https://www.facebook.com/Study-101803417830557/" target="_blank"><button class="btn btn-default">Upload New</button></a></li>';
                            }
                      jQuery("#resultappend").append(appenddata);

                      //console.log(allDatafromFB);

              },
              error : function(jqXHR, textStatus, errorThrown) {
              },

              timeout: 120000,
          });
}

            });
});
