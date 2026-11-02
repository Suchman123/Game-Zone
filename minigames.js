$(document).ready(function(){
    const choices=['rock','paper','scissors'];
    $('.rps-btn').on('click',function(e){
        const pc=$(this).attr('data-choice');

        const ac=choices[Math.floor(Math.random()*choices.length)];
        let message='';

        if(pc===ac){
            message=`<span class="text-warning">It's a tie! Both chose ${ac}.</span>`;
        }
        else if(pc==='rock'&&ac==='scissors'||pc==='paper'&&ac==='rock'||pc==='scissors'&&ac==='paper'){
            message=`<span class="text-success">You Win</span>`;
        }
        else{
            message=`<span class="text-danger">You Lose</span>`;
        }

        $('#result').html(`<p>You chose ${pc} || AI chose ${ac}</p> <h4>${message}</h4>`);
    });
});