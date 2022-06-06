<template>
  <div class="about">

  </div>
</template>
<script>
import heic2any from 'heic2any'

export default {
  created () {
    this.getImg()
  },
  methods: {
    getImg () {
      fetch('https://alexcorvi.github.io/heic2any/demo/1.heic')
        .then((res) => res.blob())
        .then((blob) => heic2any({ blob }))
        .then((conversionResult) => {
          console.log(conversionResult)

          // conversionResult is a BLOB
          // of the PNG formatted image
        })
        .catch((e) => {
          // see error handling section
        })
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 30px;
}
.box {
  width: 300px;
  height: 300px;
  background: lightcoral;
}
</style>
