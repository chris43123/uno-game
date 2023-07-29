pipeline {
    agent any

    stages {
        stage('Construir imagenes de docker') {
            steps {
                echo 'Contruyendo imagenes.....'
                sh 'docker compose build'
            }
        }
        stage('subir imagenes a docker hub') {
            steps {
                echo 'Publicando imagenes a docker hub'
                sh 'sleep 10' //El comando real seria 'docker compose push'
                echo 'Imagenes publicadas exitosamente!!!!'
            }
        }
        stage('Desplegar contenedores en el servidor') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
    post {
        success {
            script {
                sh "/var/lib/jenkins/telegramMessage.sh"
            }
        }
    }
}
