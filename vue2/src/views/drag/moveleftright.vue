<template>
<div>
  <ul class="box" ref="box">
    <li class="left" ref="left">西瓜</li>
    <li class="resize" ref="resize"></li>

     <li class="right" ref="right">test</li>
  </ul>
  <ul class="box" ref="box">
    <li class="left" ref="left">芒果</li>
    <li class="resize" ref="resize"></li>

    <li class="right" ref="right">test</li>
  </ul>
</div>
</template>
<script>
export default {
  mounted () {
    this.dragControllerDiv()
  },
  methods: {
    dragControllerDiv: function () {
      var resize = document.getElementsByClassName('resize')
      var left = document.getElementsByClassName('left')
      var box = document.getElementsByClassName('box')
      for (let i = 0; i < resize.length; i++) {
        resize[i].onmousedown = function (e) {
          var startX = e.clientX
          resize[i].left = resize[i].offsetLeft
          document.onmousemove = function (e) {
            var endX = e.clientX
            var moveLen = resize[i].left + (endX - startX)
            var maxT = box[i].clientWidth - resize[i].offsetWidth
            if (moveLen < 200) moveLen = 200
            if (moveLen > maxT - 200) moveLen = maxT - 200
            console.log(moveLen < 200, moveLen > maxT - 200, maxT, moveLen)

            resize[i].style.left = moveLen

            for (let j = 0; j < left.length; j++) {
              left[j].style.width = moveLen + 'px'
            }
          }
          document.onmouseup = function (evt) {
            document.onmousemove = null
            document.onmouseup = null
            resize[i].releaseCapture && resize[i].releaseCapture()
          }
          resize[i].setCapture && resize[i].setCapture()
          return false
        }
      }
    }
  }
}
</script>
<style scoped>
ul,li{
  list-style: none;
  display: block;
  margin:0;
  padding:0;
}
.box{
  display: flex;
  width:1000px;
  height:32px;
  overflow:hidden;
}
.left{
  width:50%;
  height:100%;
  background:skyblue;
  float:left;
}

.resize{
  width:5px;
  height:100%;
  cursor: w-resize;
  float:left;
}

.right{
  width:50%;
  height:100%;
  background:tomato;
}

</style>
