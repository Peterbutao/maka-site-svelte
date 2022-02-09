<script>
    export let data;

    let fmErr = false;
    let fmScs = false;
    $: msg = "";

    let name = null;
    let subject = null;
    $: message = null;
    let email = null;
    let file;
    function formsubmit () {
        if (name === null) {
            logg("enter name field")
        }

        if (message === null) {
            logg("enter message field")
        }
        if ( (name !== null) && (message !== null) ){
            console.log(name)
            Succ("message submitted")            
            
        }
    }
    function logg (str) {
        
        msg =str;
        fmErr = true;
        setTimeout( () => {
            msg=""; 
            fmErr= false
        }, 5000)
    }
    function Succ (str) {
        
        msg =str;
        fmScs = true;
        setTimeout( () => {
            msg=""; 
            fmScs= false;
            message= null;
        }, 5000)
    }

   

</script>

<section id="contact" class="firth-section">
    <div class="firth-sect">

        <div class="title">
            <p>Contact</p>
        </div>
        <div class="form-sect">
            <div class="fm">

                <div class="details">
                    <!--details-->
                   
                    <div class="details p-1 ">
                        <p>Contact Information</p>

                        {#each data.about as detail}

                        <div class="number">
                            <div class="">
                                <span></span><span>Contact Number</span>
                            </div>
                            <div class="">
                                <a href="tel://{detail.phone}">{detail.phone}</a>
                            </div>
                        </div>
                        <div class="number">
                            <div class="">
                                <span></span><span>Email</span>
                            </div>
                            <div class="">
                                <a href="{detail.email}">{detail.email}</a>
                            </div>
                        </div>
                        <div class="number">
                            <div class="">
                                <span></span><span>Location</span>
                            </div>
                            <div class="">
                                <a href="/">{detail.location}</a>
                            </div>
                        </div>

                        {/each}

                    </div>
                    
                </div>
                <div class=" form p-1">
                    <div  class:warning={fmErr}>
                        <p class:success={fmScs}>{msg}</p>
                    </div> 

                    <form on:submit|preventDefault={formsubmit} name="contact"  id="form">

                        <div class="form-group">
                            <input bind:value={name} name="name" type="text" class="name form-control" placeholder="Your Name">
                        </div>

                        <div class="form-group">
                            <input bind:value={email} name="email" type="text" class="email form-control" placeholder="Your Email">
                        </div>

                        <div class="form-group">
                            <input bind:value={subject} name="subject" type="text" class="subjeect form-control" placeholder="Subject">
                        </div>

                        <div class="form-group">
                            <textarea bind:value={message} name="message"  cols="30" rows="7" class="message form-control" placeholder="Message"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit"  class="btn">Send Message</button>
                        </div>

                        <br>
                        <hr>
                        <br>

                        <span class="form-file">
                            <label>Upload file <input bind:value={file} name="file" type="file"  class="form-control" placeholder="upload web design"></label>
                        </span>
                        
                        <br>
                        <hr>
                        <br>



                    </form>
                
            </div>
              


            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @mixin font($cl, $sz, $wt) {
        font-family:Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        color: $cl;
        font-size: $sz;
        font-weight: $wt;
    }
    .warning{
        text-align: center;
        border-left: red solid 1px;
        background: rgba(255, 0, 0, 0.227);
        max-width: 65rem;
        margin: 0px 5px;
        padding: 10px;
        @include font(var(--tc), 1rem, 300);
    }
    .success{
        text-align: center;
        border-left: green solid 1px;
        background:rgba(0, 128, 0, 0.227);
        max-width: 65rem;
        margin: 0px 5px;
        padding: 10px;
        @include font(var(--tc), 1rem, 300);
    }
    

    .firth-section{
        background: var(--bc);
        margin: 0px;
        overflow: hidden;
        min-height: 100%;
        .firth-sect{
            max-width: 65rem;
            margin: 10px auto;
            .title{
                p{
                    @include font(var(--tc), 1rem, 500);
                    padding: 0 10px;
                    margin: 0;
                }
            }
        }


    }
    
        
    form{
        position: relative;
        background: var(--bc);
        padding: 0 8px;

        div{
            input{
                border: none;
                width: 100%;
                height: 45px;
                color: black !important;
                box-shadow: none !important;
                
                    
            }

            textarea{
                @include font(black, 1.1rem, 400);
                padding-top: 5px;
                border: var(--pc) solid 0.9px;
                width: 100%;
                height: 150px;
                border-radius: 4.5px;
                
                resize: none;
                color: black;           

            }
            button{
                @include font(var(--tc), 1rem, 600);
                border: var(--pc) solid 1px;
                background-color: var(--pc);
                padding:3px 15px;
                width: 100%;
                height: 35px;
                font-size: 15px;
                font-weight: bold;

                &:hover{
                    background-color: rgba(255, 255, 255, 0.234);
                    color: var(--pc);
                }

            }
        }
        }

        .form-group{
        padding-top: 3px;
        padding-bottom: 3px;
        input{
            border: solid 0.01px var(--pc);
        }
        }
        .form-file{
        width: 100%;
        padding: 5px;
        height: 40px;


        label{
            @include font(#00000096, 13px, 600);
           
            input[type='file' ]{
                
                @include font(grey, 1rem, 600);               
            }
        }

    }
    .form-details{
    display: flex;
    flex-wrap: wrap;
     }

    .details{
        flex: 1;
        background-color: var(--bc);
        p{
            @include font(var(--tc), 18px,700);
            
            padding: 3px;
            text-align: center;
            
        }
    
        div{
            @include font(var(--tc), 13.5px, 400);
            
            padding: 5px;
            a{
                color: var(--tc);
                text-decoration: none;
            }
            span{
                @include font(var(--pc), 13.5px, 800);
                
        
            }
        }

    }

</style>