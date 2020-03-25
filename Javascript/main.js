// ---------- ---------- Btn ---------- ---------->

const btn = document.querySelector('.btn');
const sectionProject = document.querySelector('.section__project-Box');

const toProject = () => {

    sectionProject.scrollIntoView();
}
btn.addEventListener('click', toProject);

// ---------- ---------- Arrow Up ---------- ---------->

const arrwUp = document.querySelector('.arrow__up-Icon');
const desctopViewport = window.matchMedia("screen and (min-width: 990px)");


window.addEventListener('scroll', function () {

    if (scrollY >= 380 && desctopViewport.matches) {
        arrwUp.style.display = 'block';
    } else if (scrollY <= 370) {
        arrwUp.style.display = 'none';
    }
});

const upSite = () => {
    scrollTo(0, 0);
}
arrwUp.addEventListener('click', upSite);

// ---------- Slider Scroll ---------->

const siteProjectImg = document.querySelector('.section__project-galeryFlexy');
const mainTxt = document.querySelector('.main__bgctxt-Medium');
const projectIcon = document.querySelector('.section__project-tech-IconBox');
const teamUser = document.querySelector('.section__team-flexy');

window.addEventListener('scroll', function () {
    if (scrollY >= 900 && desctopViewport.matches) {
        siteProjectImg.classList.add('animated', 'fadeInLeft');
    }
})

window.addEventListener('scroll', function () {
    if (scrollY >= 250 && desctopViewport.matches) {
        mainTxt.classList.add('animated', 'slideInUp');
    }
})

window.addEventListener('scroll', function () {
    if (scrollY >= 1600 && desctopViewport.matches) {
        projectIcon.classList.add('animated', 'fadeInUp');
    }
})

window.addEventListener('scroll', function () {
    if (scrollY >= 1900 && desctopViewport.matches) {
        teamUser.classList.add('animated', 'fadeInUp');
    }
})

// ---------- ---------- Galery Project ---------- ---------->

const galeryImg = document.querySelector('.section__project-img1');

const imgGrow = () => {
    galeryImg.classList.toggle('imgLarge');
}
galeryImg.addEventListener('click', imgGrow);

// ---------- ---------- Form ---------- ---------->

$(document).ready(function () {
    $("html").on("submit", "#contact_form", function (e) {
        e.preventDefault();
        $("#send_form_status").html('').hide();
        var data = $("#contact_form").serialize();
        $.post("/send_form.php", data, function (res) {
            $("#send_form_status").html(res.msg).show();
            if (res.status == 1) {
                $("#contact_form")[0].reset();
            }
        });
    });
});