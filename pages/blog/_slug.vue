<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return { article, articles }
    },


    methods: {
	    formatDate(date) {
	      const options = { year: 'numeric', month: 'long', day: 'numeric' }
	      return new Date(date).toLocaleDateString('en', options)
	    }
	 }
  }
</script>

<template>
	<section class="section">
		<div class="container">
  			
  			<article v-if="typeof article.updatedAt !== 'undefined'">
  				<br>
	  			
			    <figure class="image is-4by1">
				  	<img :src="article.img" :alt="article.alt" />
				</figure>
				<br>
				<br>
			    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>

			    
			    <br>
	    		<nuxt-content :document="article" />
  			</article>

  			<div v-else>
  				
  				<p class="title is-2">Blog Posts</p>
				    
				     <br>
				     <br>
				     <br>

				    
  				<div class="tile is-ancestor">
				   
				    <div v-for="article of articles" :key="article.slug" class="tile is-parent is-4">
				    <div class="card title is-child">
				    	<NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
							<div class="card-image">
								<figure class="image is-4by1">
								  	<img :src="article.img" />
								</figure>
							</div>
							<div class="card-content">
								<div class="media">
									<div class="media-left">
										<figure class="image is-48x48">
											<img src="~/assets/profile.jpeg" />
										</figure>
									</div>
									<div class="media-content">
										<p class="title is-4">{{ article.title }}</p>
									</div>
								</div>

								<div class="content">
									<p class="title is-6">{{ article.description }}</p>
								</div>
							</div>
						</NuxtLink>
					</div>
					</div>
			  	</div>
  			</div>
  		</div>
  	</section>
</template>