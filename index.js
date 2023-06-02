const container = document.querySelector(".container");
const loading = document.querySelector(".loading");
const btn = document.querySelector(".btn")
btn.addEventListener("click",()=>{
    container.style.background = "url('./te-amo-amor.gif') no-repeat center center/cover"
    btn.style.display ="none"
})
let load = 0;
const blurring = () => {
  load++;
  if (load > 99) {
    clearInterval(int);
    btn.style.display ="block"
    loading.style.display ="none"
  }
  loading.innerText = `${load}%`;
  loading.style.opacity = scale(load, 0, 100, 1, 0);
  container.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};
let int = setInterval(blurring, 100);
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
