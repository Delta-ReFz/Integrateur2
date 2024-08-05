<template>
    <div class="page-feedback">
        <Navigation />

        <main class="main-content">
            <div class="message-feedback" v-if="isLogedIn">
                <h2>{{ evenementAModifier.nom }}</h2>
                <div v-if="feedbackMessages.length" class="feedback-analysis">
                    <div v-for="message in feedbackMessages" :key="message.id" class="feedback-analysis-item">
                        <h3>{{ message.titre }}</h3>
                        <p>{{ message.message }}</p>
                        <button @click="deleteMessageFeedback(message.id)" class="cta-button">Effacer</button>
                    </div>
                </div>
                <div v-else>
                    <p>Aucun message de feedback trouvé. <router-link to="/analyse-donnees"
                            class="cta-button">Retour</router-link></p>
                </div>
            </div>

            <div v-else>
                <LoginWarning />
            </div>

        </main>

        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';
import { isLogedIn, token } from '../services/loginManager';
import LoginWarning from '../components/LoginWarning.vue';
import { evenementAModifier } from '../services/modifierEvenementManager';
import { HOST } from '../services/sessionData';

const feedbackMessages = ref([]);

if (isLogedIn.value) {
    getMessagesFeedback();
}

async function getMessagesFeedback() {

    try {
        let response = await fetch(`${HOST}api/v1/feedback/for/${evenementAModifier.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Eventlit',
                'Authorization': 'Bearer ' + token.value
            }
        });

        if (response.ok) {
            let data = await response.json();
            feedbackMessages.value = data;
        } else {
            console.log('uh oh error at response not ok!');
            alert('Erreur lors de la récupération des messages de feedback');
            console.error('Erreur lors de la récupération des messages de feedback:', response.statusText);
        }
    } catch (error) {
        console.log('uh oh error at catch');
        alert('Erreur lors de la récupération des messages de feedback');
        console.error('Erreur lors de la récupération des messages de feedback:', error);
    }
}

async function deleteMessageFeedback(messageId) {
    if (!confirm('Voulez-vous vraiment effacer ce message de feedback?')) {
        return;
    }

    try {
        let response = await fetch(`${HOST}api/v1/feedback/${messageId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Eventlit',
                'Authorization': 'Bearer ' + token.value
            }
        });

        if (response.ok) {
            alert('Message de feedback effacé avec succès');
            getMessagesFeedback(); // Recharger les messages de feedback
        } else {
            alert('Erreur lors de l\'effacement du message de feedback');
            console.error('Erreur lors de l\'effacement du message de feedback:', response.statusText);
        }
    } catch (error) {
        alert('Erreur lors de l\'effacement du message de feedback');
        console.error('Erreur lors de l\'effacement du message de feedback:', error);
    }

}

</script>

<style scoped>
.page-feedback {
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

.message-feedback {
    width: 100%;
    max-width: 800px;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    animation: fadeIn 1s ease-in-out;
}

.analyse-donnees h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
}

.feedback-analysis {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.feedback-analysis-item {
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: left;
}

.event-analysis-item h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 10px;
}

.event-details {
    margin-top: 20px;
}

.cta-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
    background-color: darkred;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    margin-right: 10px;
}

.cta-button:hover {
    background-color: #c82333;
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