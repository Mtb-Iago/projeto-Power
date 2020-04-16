import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
//import * as MailComposer from 'expo-mail-composer'; // exporta tudo de mail composer para variavel Mailcomposer 

import styles from './styles';

import axios from 'axios';
import api from '../services/api';


export default function Dashboards() {
    const navigation = useNavigation();
    const route = useRoute();
    

    const users = api.params.users; //pegando o parametro para mostra as infos
    const message = `Olá ${users.name}, estou entrando em contato pois gostaria de ajudar no caso "${users.name}
            
      `;

    function navigateBack() { //função para voltar
        navigation.goBack();
    }

   /* function sendMail() {
        MailComposer.composeAsync({ //manda para o email
            subject: `Herói do caso: ${users.title}`,
            recipients: [users.email],
            body: message,
        })
    } */

  function sendWhatsaap() {
        Linking.openURL(`whatsapp://send?phone=55${users.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentsProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentsValue}>{incident.name} de {users.city}/{users.uf}</Text>

                <Text style={styles.incidentsProperty}>CASO:</Text>
                <Text style={styles.incidentsValue}>{users.whatsapp}</Text>

                <Text style={styles.incidentsProperty}>DESCRIÇÃO DO CASO:</Text>
                <Text style={styles.incidentsValue}>{users.email}</Text>

                <Text style={styles.incidentsProperty}>VALOR:</Text>
               
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.!</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsaap}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                   
                </View>
            </View>
        </View>
    );
}








import React, { useState } from 'react';

import api from '../../services/api';


import { Link, useHistory } from 'react-router-dom'; //melhor que tag <a> nao carrega a pag td
import { FiLogIn } from 'react-icons/fi';



export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();//enviar usuario pra rota profile 

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('session', { id });

            localStorage.setItem('ongId', id);//enviando pra rota
            localStorage.setItem('ongName', response.data.name);//enviando para rota

            history.push('/profile'); //enviando Ong name,ongID para roda profile

        } catch (error) {
            alert("Falha de login");
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro </Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}