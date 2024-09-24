// Example of a hover effect
document.querySelectorAll('.img-container img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});
// If you want to stop and restart the animation on hover

const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')

const itemWidth = 150
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click',()=>{
  list.scrollLeft += itemWidth + padding
})

