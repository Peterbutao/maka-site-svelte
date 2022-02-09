<script context="module">
    export function load({error, status}) {
        return {
            props: {
                errMsg: error.message,
                errSts: status
            }
        }
    }
</script>

<script>
    export let errMsg;
    export let errSts;
</script>

<section class="error">
    <div class="err">

        <!--title-->
        <div class="title">
            <h1>Error !</h1>
        </div>

        <div class="err-details">

            <div class="err-box">
                <div class="erbx">

                    <div class="status">
                        <h1>{errSts}</h1>
                    </div>
                    <div class="message">
                        <p>
                            <span>page : </span>
                            <span>{errMsg}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="err-info">
                <p>looks like, theres a {errSts} error. if the error persist contact our dev team <a href="/">BUTAO</a> to let us know. Or raise an issue on <a href="/">Github</a>.</p>
            </div>
        </div>

        
    </div>
</section>

<style lang="scss">
    @mixin font($cl,$sz,$wt) {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: $sz;
        font-weight: $wt;
        color: $cl;
    }
    @media screen and (max-width: 600px) {
        .err{

            padding-left: var(--sp);
            padding-right: var(--sp);
        }

    }
    .error{
        background: var(--bc);
        min-height: 100vh;
        .err{
            padding-top: 10vh;
            max-width: 65rem;
            margin: 0 auto;

            .title{
                h1{
                    @include font(var(--tc), 2rem, 500);
                }
            }
            .err-details{
                .err-info{
                    p{
                        @include font(var(--tc), 1rem, 500);
                    }
                    a{
                        text-decoration: none;
                        @include font(var(--pc), 1rem, 400);
                    }
                }

                .err-box{
                    border-left: red solid 1px;
                    background: rgba(255, 0, 0, 0.159);
                    .erbx{
                        padding: 20px;
                        text-align: center;

                        .status{
                            h1{
                                @include font(var(--tc), 2rem, 500);
                            }
                        }
                        .message{
                            p{
                                @include font(var(--tc), 0.9rem, 600);
                            }
                        }
                    }
                }

            }
        }
    }
</style>