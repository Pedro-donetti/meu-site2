
        var stars = document.querySelectorAll('.star-icon');
                  
                  document.addEventListener('click', function(e){
                    var classStar = e.target.classList;
                    if(!classStar.contains('ativo')){
                      stars.forEach(function(star){
                        star.classList.remove('ativo');
                      });
                      classStar.add('ativo');
                      console.log(e.target.getAttribute('data-avaliacao'));
                    }
                  });


                  $_(document).ready( function() {
                    $('.page').scroll( function (){
                      if ($(this).scrollTop() > 70) {
                        $('.nav').css("background-color","rgba(243,191,2,0.98)");
                        $('.nav').css("border-bottom","1px solid #f3bf02");
                      } else {
                        $('.nav').css("background-color","transparent");
                        $('.nav').css("border-bottom","none");
                      }
                      if ($(this).scrollTop() > 340) {
                        $('.button-nav-cta').css("display","block");
                        $(".button-nav-cta").removeClass("anim_fadeInLeft");
                        $(".button-nav-cta").addClass("anim_fadeInRight");
                      } else {
                        $('.button-nav-cta').css("display","none");
                        $(".button-nav-cta").removeClass("anim_fadeInLeft");
                        $(".button-nav-cta").addClass("anim_slideInLeft");
                      }
                    });
                    
                    $('#scrollup').on('click', function () {
                      $('.page').animate({ scrollTop: 0 }, 1000);
                    });
                    
                    $('.page').animate({ scrollTop: 2200 }, 0).animate({ scrollTop: 0 }, 4000);
                  });
                  
                  function jump(h){
                    var container = $('.page'), scrollTo = $('#'+h);
                    container.animate({ scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop() - 70 }, 800);
                  }



                  function addComment(text) {
                    // Recupere o nome de usuário do localStorage
                    const username = localStorage.getItem('usuario');
                
                    // Verifique se o usuário está autenticado e tem um nome de usuário válido
                    if (username && text.trim() !== '') {
                        // Simule a adição do comentário ao sistema
                        const newComment = {
                            username,
                            text,
                        };
                
                        // Adicione o novo comentário à interface de usuário
                        displayComment(newComment);
                    } else {
                        alert('Faça login para comentar ou insira um comentário válido.');
                    }
                }