<template>
  <div id="div5">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    <div class="bar4"></div>
    <div class="bar5"></div>
    <div class="bar6"></div>
    <div class="bar7"></div>
    <div class="bar8"></div>
  </div>
</template>

<script>
export default {
  name: "LoadAnimation"
}

//加载动画旋转
let count = 0;

function rotate() {
  let elem5 = document.getElementById('div5');
  elem5.style.transform = 'scale(0.5) rotate(' + count + 'deg)';
  if (count === 360) {
    count = 0
  }
  count += 45;
  window.setTimeout(rotate, 100);
}

window.setTimeout(rotate, 100);
</script>

<style scoped>
body {
  width: 8%;
  text-align: center;
}

.bar1 {
  transform: rotate(0deg) translate(0, -40px);
  opacity: 0.12;
}

.bar2 {
  transform: rotate(45deg) translate(0, -40px);
  opacity: 0.25;
}

.bar3 {
  transform: rotate(90deg) translate(0, -40px);
  opacity: 0.37;
}

.bar4 {
  transform: rotate(135deg) translate(0, -40px);
  opacity: 0.50;
}

.bar5 {
  transform: rotate(180deg) translate(0, -40px);
  opacity: 0.62;
}

.bar6 {
  transform: rotate(225deg) translate(0, -40px);
  opacity: 0.75;
}

.bar7 {
  transform: rotate(270deg) translate(0, -40px);
  opacity: 0.87;
}

.bar8 {
  transform: rotate(315deg) translate(0, -40px);
  opacity: 1;
}


#div5 {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 25px;
  border-radius: 100px;
  float: left;
  transform: scale(0.5);

  animation-name: rotateThis;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

#div5 div {
  width: 20px;
  height: 20px;
  background: #000;
  border-radius: 40px;
  position: absolute;
  left: 40px;
  top: 40px;
}


/* increase the balls in size */
#div5 .bar1 {
  transform: rotate(0deg) translate(0, -40px) scale(0.1);
  opacity: 0.12;
}

#div5 .bar2 {
  transform: rotate(45deg) translate(0, -40px) scale(0.2);
  opacity: 0.25;
}

#div5 .bar3 {
  transform: rotate(90deg) translate(0, -40px) scale(0.4);
  opacity: 0.37;
}

#div5 .bar4 {
  transform: rotate(135deg) translate(0, -40px) scale(0.6);
  opacity: 0.50;
}

#div5 .bar5 {
  transform: rotate(180deg) translate(0, -40px) scale(0.8);
  opacity: 0.62;
}

#div5 .bar6 {
  transform: rotate(225deg) translate(0, -40px) scale(1);
  opacity: 0.75;
}

#div5 .bar7 {
  transform: rotate(270deg) translate(0, -40px) scale(1.2);
  opacity: 0.87;
}

#div5 .bar8 {
  transform: rotate(315deg) translate(0, -40px) scale(1.4);
  opacity: 1;
}

</style>



