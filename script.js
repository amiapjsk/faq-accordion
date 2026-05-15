const containers = document.querySelectorAll(".qna-container");

containers.forEach((container, index) => {
    const plus = document.querySelector(`#plus-icon-${index + 1}`);
    const minus = document.querySelector(`#minus-icon-${index + 1}`);
    const anwser = document.querySelector(`#p${index + 1}`);
    

    plus.addEventListener('click', ()=> {

        containers.forEach((c, index) => {
        c.querySelector(`#plus-icon-${index + 1}`).style.display = 'block';
        c.querySelector(`#minus-icon-${index + 1}`).style.display = 'none';
        c.querySelector(`#p${index + 1}`).style.display = 'none';
        });


        anwser.style.display = 'block';
        plus.style.display = 'none';
        minus.style.display = 'block';

    })

    minus.addEventListener('click', ()=> {
        anwser.style.display = 'none';
        plus.style.display = 'block';
        minus.style.display = 'none';

    })
});