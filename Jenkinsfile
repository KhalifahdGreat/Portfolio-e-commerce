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
        stage('Deploy') {
            steps {
                sh 'sudo mkdir -p /var/www/eCommerce/html'
                sh 'sudo cp -r ./build/* /var/www/eCommerce/html'
                sh 'sudo chown -R www-data:www-data /var/www/eCommerce/html'
                sh 'sudo systemctl restart nginx'
            }
        }

       
    }
}