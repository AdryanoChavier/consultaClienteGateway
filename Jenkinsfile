pipeline {
    agent any
    stages {
        stage('Construir Imagem Docker') {
            steps {
                script {
                    def appName = 'apigateway'
                    def imageTag = "${appName}"

                    // Construir a imagem Docker
                   bat "docker build -t ${imageTag} ."
                }
            }
        }

        stage('Fazer Deploy') {
            steps {
                script {
                    def appName = 'apigateway'
                    def imageTag = "${appName}"
                    // Executar o novo container
                    bat "docker run -d --name ${appName} --network arquivos-network  -p 3000:3000 ${imageTag}"
                }
            }
        }
    }
    post {
        success {
            echo 'Deploy realizado com sucesso!'
        }
        failure {
            echo 'Houve um erro durante o deploy.'
        }
    }
}
