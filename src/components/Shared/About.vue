<template>
    <div class="col-lg-12">
        <div class="jumbotron">
            <h1>A propos</h1>
            <p>Petite application de type blog créée dans le cadre notre présentation sur les
                microservices.
                <br>
                <br>
                Stack de technologies : <br>
                &nbsp;&nbsp;&nbsp;&nbsp; FrontEnd => <code>Vue.js, Bootstrap</code> <br>
                &nbsp;&nbsp;&nbsp;&nbsp; Backend => <code>Django (Python), SpringBoot (Java)</code>
            </p>
            <br>
                <p style="margin-left: 55%; text-decoration: underline">Réalisée par : <br></p>
            <p class="text-right">
                &nbsp;&nbsp;&nbsp;&nbsp; Meïssa Birima Couly MBAYE <br>
                &nbsp;&nbsp;&nbsp;&nbsp; Alioune Arouna KANOUTE <br>
                &nbsp;&nbsp;&nbsp;&nbsp; Mouhamed Diop WADE
            </p>
            <br>
            <p class="text-center">Copyright &copy; {{ date }} &middot; UCAD\ESP\DGI\M2GLSI  </p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: new Date().getFullYear()
            }
        }
    }
</script>