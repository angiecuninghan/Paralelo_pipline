pipeline {
    agent any

    tools {
        nodejs "Node"
    }

    stages {
        stage('Initialize') {
            steps {
                git url: 'https://github.com/angiecuninghan/Paralelo_pipline.git'
                bat 'npm install'
                bat 'npm update'
            }
        }

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        bat 'npx cypress run --record --key feae20e1-1dd1-4e74-8263-4131adda5742 --parallel'
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        bat 'npx cypress run --record --key feae20e1-1dd1-4e74-8263-4131adda5742 --parallel'
                    }
                }
            }
        }
    }
}
