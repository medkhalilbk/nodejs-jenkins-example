pipeline {
    agent any
    
    tools {
        nodejs "NodeJS" // Adjust tool name according to your Jenkins configuration
    }
    
    stages {
        
        stage('Git Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                script {
                    try {
                        echo 'Installing dependencies...'
                        sh 'npm install'
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        error "Failed to install dependencies: ${e.message}"
                    }
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    try {
                        echo 'Running tests...'
                        sh 'npm test'
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        error "Test execution failed: ${e.message}"
                    }
                }
            }
        }
        
        stage('Deploy') {
            when {
                expression { currentBuild.resultIsBetterOrEqualTo('SUCCESS') }
            }
            steps {
                echo 'Deploying to production...'
                script {
                    // Install PM2 globally if not installed
                    sh 'pm2 restart index.js' 
                    sh 'pm2 save' 
                }
            }
        }
        
        stage('Cleanup') {
            steps {
                echo 'Cleaning up...'
                // Add cleanup steps here (e.g., removing temporary files)
            }
        }
    }
    
    post {
        success {
            echo 'Build succeeded! Sending notifications...'
            // Add notifications for successful build (e.g., Slack, email)
        }
        failure {
            echo 'Build failed! Sending notifications...'
            // Add notifications for failed build (e.g., Slack, email)
        }
    }
}
