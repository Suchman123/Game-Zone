validateForm=()=>{
    const gamerTag=document.getElementById('gamerTag');
    const email=document.getElementById('email');
    const game=document.getElementById('game');

    let isValid=true;
    
    if(gamerTag.value.trim()===''){
        gamerTag.classList.add('is-invalid');
        gamerTag.classList.remove('is-valid');
        isValid=false;
    }

    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email.value.trim())){
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        isValid=false;
    }

    if(game.value===''){
        game.classList.add('is-invalid');
        game.classList.remove('is-valid');
        isValid=false;
    }

    if(isValid){
        const htmlModal=document.getElementById('successfulRegistration');
        const bootstrapModal=new bootstrap.Modal(successfulRegistration);
        bootstrapModal.show();
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const from=document.getElementById('form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        validateForm();
    })

    if(gamerTag){
        gamerTag.addEventListener('input',function(){
            gamerTag.classList.remove('is-invalid');
        })
    }
    if(email){
        email.addEventListener('input',function(){
            email.classList.remove('is-invalid');
        })
    }
    if(game){
        game.addEventListener('input',function(){
            game.classList.remove('is-invalid');
        })
    }
})