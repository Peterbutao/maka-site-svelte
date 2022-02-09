<script context="module">
    export async function load({fetch}) {
            const res = await fetch("/api");
            const datadb = await res.json();
            return{
                props: {datadb}
            }
       
    }
</script>

<script>

    export let datadb;
         
    import SectionOne from '$lib/components/SectionOne.svelte';
    import SectionTwo from '$lib/components/SectionTwo.svelte';
    import SectionThree from '$lib/components/SectionThree.svelte';
    import SectionFour from '$lib/components/SectionFour.svelte';
    import SectionFive from '$lib/components/SectionFive.svelte';
</script>


    
<section class="index-layout">
    


    <!--fisrt page-->
    <SectionOne /> 
    <!--second page-->
    <SectionTwo />
    <!--third page-->
    <SectionThree data={datadb} />
    <!--fourth page-->
    <SectionFour data={datadb} />
    <!--firth page-->
    <SectionFive data={datadb}/>


</section>


