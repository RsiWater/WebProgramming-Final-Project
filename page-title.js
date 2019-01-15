

const imageContainer = document.querySelector(".console");


window.addEventListener('scroll',function()
{
    console.log(window.pageYOffset);
    if(window.pageYOffset > 300)
    {
        imageContainer.classList.remove('hidden');
        imageContainer.style.animation = "fadein 0.8s";
    }
    else
    {
        imageContainer.classList.add('hidden');
        imageContainer.style.animation = "none";
    }
})


imageContainer.addEventListener('mouseenter',function()
{
    setTimeout(function()
    {
        imageContainer.style.transform = 'scaleX(1.2) scaleY(1.2)';
        imageContainer.style.animation = 'none';
    },400)
    imageContainer.style.animation = 'zoomin 0.5s';
})
imageContainer.addEventListener('mouseleave',function()
{
    setTimeout(function()
    {
        imageContainer.style.transform = 'scaleX(1) scaleY(1)';
        imageContainer.style.animation = 'none';
    },400)
    imageContainer.style.animation = 'zoomout 0.5s';
})