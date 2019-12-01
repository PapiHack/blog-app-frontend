<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link to="/"><a class="navbar-brand">Blog</a></router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link to="/" tag="li" active-class="active" exact><a>Accueil</a></router-link>
        <router-link to="/nouveau-post" tag="li" active-class="active" exact><a>Nouveau Post</a></router-link>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <router-link to="/register" tag="li" active-class="active" exact><a>Inscription</a></router-link>
        <router-link to="/login" tag="li" active-class="active" exact><a>Connexion</a></router-link>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">User <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <!--li role="separator" class="divider"></li-->
            <li><a href="#">Déconnexion</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
    export default {
        
    }
</script>