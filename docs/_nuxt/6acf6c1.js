(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{196:function(t,e,r){t.exports=r.p+"img/profile.c4f07bf.jpeg"},210:function(t,e,r){"use strict";r.r(e);var c=r(2),n=(r(34),{head:function(){return void 0===this.article.updatedAt?{title:"Blogs",meta:[{hid:"description",name:"description",content:"Blogs list"}]}:{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description}]}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,article,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,e.next=3,r("articles",c.slug).fetch();case 3:return article=e.sent,e.next=6,r("articles").where({published:!0}).only(["title","description","img","slug","author"]).sortBy("createdAt","asc").fetch();case 6:return n=e.sent,e.abrupt("return",{article:article,articles:n});case 8:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),l=r(17),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"section"},[c("div",{staticClass:"container"},[void 0!==t.article.updatedAt?c("article",[c("br"),t._v(" "),c("figure",{staticClass:"image is-4by1"},[c("img",{attrs:{src:"/blog/"+t.article.img,alt:t.article.alt}})]),t._v(" "),c("hr"),t._v(" "),c("p",[t._v("Article last updated: "+t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),c("br"),t._v(" "),c("nuxt-content",{staticClass:"content",attrs:{document:t.article}})],1):c("div",[c("p",{staticClass:"title is-2"},[t._v("Blog Posts")]),t._v(" "),c("hr"),t._v(" "),c("div",{staticClass:"tile is-ancestor"},t._l(t.articles,(function(article){return c("div",{key:article.slug,staticClass:"tile is-parent is-4"},[c("div",{staticClass:"card title is-child"},[c("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[c("div",{staticClass:"card-image"},[c("figure",{staticClass:"image is-4by1"},[c("img",{attrs:{src:article.img}})])]),t._v(" "),c("div",{staticClass:"card-content"},[c("div",{staticClass:"media"},[c("div",{staticClass:"media-left"},[c("figure",{staticClass:"image is-48x48"},[c("img",{attrs:{src:r(196)}})])]),t._v(" "),c("div",{staticClass:"media-content"},[c("p",{staticClass:"title is-4"},[t._v(t._s(article.title))])])]),t._v(" "),c("div",{staticClass:"content"},[c("p",{staticClass:"title is-6"},[t._v(t._s(article.description))])])])])],1)])})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);