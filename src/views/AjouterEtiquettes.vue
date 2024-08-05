<template>
    <div class="page-ajouter-etiquettes">
        <Navigation />

        <main class="main-content">
            <div class="creer-etiquette" v-if="isLogedIn">
                <h2>Créer un Nouvel Étiquette</h2>
                <h3>{{ evenementAModifier.nom }}</h3>
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="nom">Nom de l'étiquette :</label>
                        <input type="text" id="nom" v-model="etiquette.nom_etiquette" required />
                    </div>
                    <button type="submit" class="cta-button">Créer</button>
                </form>
            </div>

            <div v-else>
                <LoginWarning />
            </div>

        </main>

        <Footer />
    </div>
</template>

<script setup>
import { evenementAModifier } from '../services/modifierEvenementManager';
import { ref } from 'vue';
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';
import { isLogedIn, token } from '../services/loginManager';
import LoginWarning from '../components/LoginWarning.vue';
import { HOST } from '../services/sessionData';

const etiquette = ref({
    nom_etiquette: '',
    evenement_id: evenementAModifier.id
});

async function submitForm() {
    try {
        let response = await fetch(`${HOST}api/v1/etiquettes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Eventlit',
                'Authorization': 'Bearer ' + token.value
            },
            body: JSON.stringify(etiquette.value)
        });

        if (response.ok) {
            // let data = await response.json(); // Nous ne nous servons pas des données, donc pas besoin de les récupérer

            alert('Étiquette créé avec succès');

            // Vider le formulaire
            etiquette.value = {
                nom_etiquette: '',
                evenement_id: evenementAModifier.id
            };

        } else {
            alert('Erreur lors de la création de l étiquette');
        }
    } catch (error) {
        alert('Erreur lors de la création de l étiquette');
        console.error('Erreur lors de la création de l étiquette', error);
    }
}
</script>

<style scoped>
.page-ajouter-etiquettes {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
}

.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
}

.creer-etiquette {
    width: 100%;
    max-width: 500px;
    padding: 30px;
    padding-right: 50px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    animation: fadeIn 1s ease-in-out;
}

.creer-evenement h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
    text-align: left;
}

.form-group label {
    display: block;
    font-size: 1rem;
    color: #666;
    margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: darkred;
    box-shadow: 0 0 5px rgba(220, 20, 60, 0.5);
}

.cta-button {
    display: inline-block;
    padding: 15px 40px;
    font-size: 1.2rem;
    text-decoration: none;
    color: #fff;
    background-color: darkred;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    cursor: pointer;
}

.cta-button:hover {
    background-color: #e73c7e;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
