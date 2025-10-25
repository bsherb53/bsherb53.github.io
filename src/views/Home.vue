<template>
  <div style="display: flex; flex-direction: column; margin: auto; justify-content: center">
    <div>Welcome To Red Hollow</div>
    <div class="wrapper">
    <iframe data-testid="embed-iframe" style="border-radius:12px"
            src="https://open.spotify.com/embed/playlist/0FdQ6y4CoJT68BtjOwIcKl?utm_source=generator&theme=0"
            width="100%" height="100%" frameBorder="0" allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: "GKHome",
}
</script>

<style scoped lang="scss">
.wrapper{
  margin: auto;
  width: 80%;
  height: 75vh;
}
</style>