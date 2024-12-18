<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Perfil - Skill Swap</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="navbar">
    <div class="logo-container">
      <img src="../img/Logo-SkillSwap.png" alt="Logo" class="logo" />
      <h2 class="name">Skill Swap</h2>
    </div>
    <ul class="nav-links">
      <li><a href="./FeedVagas.html">Feed de Vagas</a></li>
      <li><a href="./Pesquisa.html">Pesquisa</a></li>
      <li><a href="./Notificações.html">Notificações</a></li>
      <li><a href="./Perfil.html">Perfil</a></li>
    </ul>
  </div>

  <div class="profile-container">
    <div class="profile-header">
      <div class="profile-picture">
        <img src="../img/perfil.png" alt="Foto de Perfil" id="profileImage">
      </div>
      <div class="profile-name">
        <h1 id="userName">Nome do Usuário</h1>
      </div>
      <button id="editProfileBtn" class="edit-btn">Editar Perfil</button>
    </div>

    <div class="profile-info">
      <div class="info-row">
        <p><strong>Área de Atuação:</strong> 
            <span id="areaAtuacao">Área de atuação não definida</span></p>
      </div>

      <div class="info-row">
        <p><strong>Contato:</strong> <span id="userEmail">Contato não definido</span></p>
      </div>

      <div class="info-row">
        <p><strong>Localização:</strong> <span id="localizacao">Localização não informada</span></p>
      </div>
    </div>

    <div class="curriculo-btn-container">
      <button class="curriculo-btn">Ver Currículo</button>
    </div>

    <div class="curriculo-content" id="curriculoContent" style="display: none;">
      <h2>Currículo</h2>
      <div id="curriculoInfo">
        
      </div>
    </div>
  </div>

  <script type="module" src="./firebaseConfig.js"></script>
  <script type="module" src="perfil.js"></script>
</body>
</html>
