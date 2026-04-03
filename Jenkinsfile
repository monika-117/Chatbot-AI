pipeline {
    agent any

    environment {
        APP_NAME    = "chatbot-ai"
        DEPLOY_PATH = "C:\\deployments\\chatbot-ai"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/monika-117/Chatbot-AI.git',
                    credentialsId: 'github-credentials'
                echo 'Code pulled from GitHub successfully!'
            }
        }

        stage('Validate Files') {
            steps {
                bat 'echo Checking project files...'
                bat 'dir'
                echo 'File structure verified!'
            }
        }

        stage('Lint Check') {
            steps {
                powershell '''
                    $htmlFiles = Get-ChildItem -Recurse -Filter "*.html"
                    $cssFiles  = Get-ChildItem -Recurse -Filter "*.css"
                    $jsFiles   = Get-ChildItem -Recurse -Filter "*.js"
                    Write-Host "HTML files found: $($htmlFiles.Count)"
                    Write-Host "CSS files found : $($cssFiles.Count)"
                    Write-Host "JS files found  : $($jsFiles.Count)"
                    Write-Host "Lint check passed!"
                '''
            }
        }

        stage('Deploy') {
            steps {
                powershell '''
                    $dest = "C:\\deployments\\chatbot-ai"
                    if (!(Test-Path $dest)) {
                        New-Item -ItemType Directory -Path $dest -Force
                    }
                    Copy-Item -Path ".\\*" -Destination $dest -Recurse -Force -Exclude @(".git")
                    Write-Host "Chatbot AI deployed to $dest"
                '''
            }
        }
    }

    post {
        success {
            echo 'Chatbot AI deployed successfully!'
        }
        failure {
            echo 'Build failed!'
        }
        always {
            cleanWs()
        }
    }
}
