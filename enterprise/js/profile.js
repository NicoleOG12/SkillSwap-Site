import { db, doc, getDoc } from '../../auth/js/firebaseConfig.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

const auth = getAuth();

document.addEventListener("DOMContentLoaded", () => {
  // Checa se o usuário está logado
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      alert("Você precisa estar logado para acessar o perfil.");
      window.location.href = "../auth/login.html"; // Redirecionar para a página de login, se não estiver logado.
      return;
    }

    // Carrega as informações da empresa
    loadCompanyProfileData(user.uid);

    // Adiciona funcionalidade ao botão "Editar Perfil"
    const editProfileButton = document.getElementById("editProfileBtn");
    if (editProfileButton) {
      editProfileButton.addEventListener("click", () => {
        window.location.href = `./editProfile.html?userId=${user.uid}`;
      });
    }
  });
});

// Carrega os dados do perfil da empresa
async function loadCompanyProfileData(userId) {
  try {
    // Recupera os dados da empresa
    const companyDoc = await getDoc(doc(db, "Empresa", userId));

    if (companyDoc.exists()) {
      const companyData = companyDoc.data();

      // Atualiza as informações no perfil da empresa
      document.getElementById("profileImage").src = companyData.logo || "../img/perfil.png"; // foto padrão
      document.getElementById("companyName").textContent = companyData.nome || "Nome da Empresa";
      document.getElementById("companyEmail").textContent = companyData.email || "Email não informado";
      document.getElementById("areaAtuacao").textContent = companyData.areaAtuacao || "Área de atuação não definida";
      document.getElementById("localizacao").textContent = companyData.localizacao || "Localização não informada";
    } else {
      alert("Dados da empresa não encontrados.");
    }
  } catch (error) {
    console.error("Erro ao carregar dados do perfil da empresa:", error);
    alert("Erro ao carregar os dados do perfil da empresa. Tente novamente.");
  }
}
