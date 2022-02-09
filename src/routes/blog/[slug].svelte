<script context="module">
    export async function load(ctx) {
        const res = await ctx.fetch("/api");
        const datadb = await res.json();
            
        let slug = ctx.page.params.slug
        console.log(ctx);
        
        return { props: {slug,  datadb}}
    }
</script>
<script>
    export let datadb;  
    export let slug;  
    

    $:  posts = datadb.post.filter( (item) => {
        
        return item.title == slug;
    });
    $:  links = datadb.post.filter( (item) => {
        return item.title !== slug;
    })
    console.log(posts)
    
</script>
<div class="blog-page">
    {#each posts as post}
    <div class="card">
        <div class="card-img">
            <img src={post.img} width="300px" alt="none">
        </div>
        <div class="card-text">

            <p class="cdt-title">{post.title}</p>

            <p class="cdt-date">{post.date}</p>
            <p class="cdt-text">
                {post.text}
            </p>
        </div>

        
        <div class="card-foot">
            {#each links as link}    
            <a href="/blog/{link.title}">#{link.title}</a>
            {/each}
        </div>
    


    </div>

    {/each}  

</div>


<style lang="scss">
    @mixin font($cl, $sz, $wt) {
    font-family:Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    color: $cl;
    font-size: $sz;
    font-weight: $wt;
    }
    .blog-page{
        padding-top: 15vh;
        background: var(--bc);
    }
    .card{

    background: var(--bc);
    margin: 0 auto;
    max-width: 65rem;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.248);
    text-align:start;
    transition: .4s ease;
    cursor: pointer;

   
    .card-text{
        padding: 2px 10px;
        .cdt-date{
            @include font(var(--pc), 1rem, 500);
            }
        .cdt-title{
            @include font(var(--tc), 1.1rem, 600);
            }
        .cdt-text{
            @include font(var(--tc), 0.9rem, 500 );
            opacity: 89%;
        }

    }
    .card-foot{
        text-align: start;
        display: flex;
        flex-direction: column;

        a{
            text-decoration: none;
            @include font(var(--pc), 0.9rem, 500);
            padding-right: 10px;
            border-left: 1px solid var(--pc);
            padding: 10px 5px;
            
            
            

        }
    }
    .card-img{

        img{
            width: 100%;
            height: 100%;
        }
    }
}

@media screen and (min-width: 800px) {
    .card-img{
        height: 400px;
        padding: 0px 60px;
        background: var(--pc);
        
    }
}


</style>




