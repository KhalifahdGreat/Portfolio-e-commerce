pipeline {
    agent any

    environment {
        // Define environment variables if needed
        NODEJS_HOME = tool 'eComm' // Make sure you have NodeJS tool configured in Jenkins
        PATH = "$NODEJS_HOME/bin:$PATH"
    }

    stages {
        stage('Checkout') {
            steps {
                // Check out your React app repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build your React app
                sh 'npm run build'
            }
        }

        // Additional stages as needed (e.g., deployment)
    }

    // post {
    //     always {
    //         // Clean up or perform additional actions after the pipeline
    //     }

    //     success {
    //         // Actions to be taken if the pipeline succeeds
    //     }

    //     failure {
    //         // Actions to be taken if the pipeline fails
    //     }
    // }
}